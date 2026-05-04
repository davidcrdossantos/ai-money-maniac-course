import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/db';
import Stripe from 'stripe';

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
    // If webhook secret is configured, verify the signature
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      // For development without webhook secret
      event = JSON.parse(body) as Stripe.Event;
    }
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      
      if (session.payment_status === 'paid') {
        const userId = session.metadata?.userId;
        
        if (userId) {
          try {
            // Update purchase record
            await prisma.purchase.updateMany({
              where: { stripeSessionId: session.id },
              data: {
                status: 'completed',
                stripePaymentId: session.payment_intent as string,
              },
            });

            // Update user's purchase status
            await prisma.user.update({
              where: { id: userId },
              data: { hasPurchased: true },
            });

            console.log(`Payment completed for user ${userId}`);
          } catch (error) {
            console.error('Error updating purchase status:', error);
          }
        }
      }
      break;
    }
    
    case 'checkout.session.expired': {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Update purchase record to expired
      await prisma.purchase.updateMany({
        where: { stripeSessionId: session.id },
        data: { status: 'expired' },
      });
      break;
    }

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
