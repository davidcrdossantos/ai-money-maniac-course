import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { stripe, COURSE_PRICE, COURSE_NAME, COURSE_DESCRIPTION } from '@/lib/stripe';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'You must be logged in to purchase' },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    if (user.hasPurchased) {
      return NextResponse.json(
        { error: 'You have already purchased this course' },
        { status: 400 }
      );
    }

    const origin = request.headers.get('origin') || '';

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: COURSE_NAME,
              description: COURSE_DESCRIPTION,
            },
            unit_amount: COURSE_PRICE,
          },
          quantity: 1,
        },
      ],
      customer_email: session.user.email,
      success_url: `${origin}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
      metadata: {
        userId: user.id,
        userEmail: session.user.email,
      },
    });

    // Create a pending purchase record
    await prisma.purchase.create({
      data: {
        userId: user.id,
        stripeSessionId: checkoutSession.id,
        amount: COURSE_PRICE,
        currency: 'usd',
        status: 'pending',
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
