import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/db';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET is not set');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.payment_status === 'paid') {
        try {
          // Try metadata userId first, fall back to email lookup
          let userId = session.metadata?.userId;

          if (!userId && session.customer_email) {
            const user = await prisma.user.findUnique({
              where: { email: session.customer_email },
            });
            userId = user?.id;
          }

          if (!userId) {
            console.error('Could not find user for session:', session.id);
            break;
          }

          // Update existing purchase record
          await prisma.purchase.updateMany({
            where: { stripeSessionId: session.id },
            data: {
              status: 'completed',
              stripePaymentId: session.payment_intent as string,
            },
          });

          // Create purchase record if it doesn't exist (edge case)
          const existingPurchase = await prisma.purchase.findFirst({
            where: { stripeSessionId: session.id },
          });

          if (!existingPurchase) {
            await prisma.purchase.create({
              data: {
                userId,
                stripeSessionId: session.id,
                stripePaymentId: session.payment_intent as string,
                amount: session.amount_total ?? 999,
                currency: session.currency ?? 'usd',
                status: 'completed',
              },
            });
          }

          // Unlock course access
          await prisma.user.update({
            where: { id: userId },
            data: { hasPurchased: true },
          });

          console.log(`✅ Course unlocked for user ${userId}`);
        } catch (error) {
          console.error('Error processing completed checkout:', error);
        }
      }
      break;
    }

    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session;
      await prisma.purchase.updateMany({
        where: { stripeSessionId: session.id },
        data: { status: 'expired' },
      });
      break;
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`Payment failed for intent: ${paymentIntent.id}`);
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
