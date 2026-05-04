import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth-options';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/db';

async function sendPurchaseNotification(customerEmail: string, customerName: string) {
  try {
    const appUrl = process.env.NEXTAUTH_URL || '';
    const appName = appUrl ? new URL(appUrl).hostname.split('.')[0] : 'AI Money Maniac';

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
          💰 New Course Purchase!
        </h2>
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0; font-size: 18px;"><strong>A new student has purchased the AI Money Maniac Course!</strong></p>
          <p style="margin: 10px 0;"><strong>Customer Name:</strong> ${customerName || 'Not provided'}</p>
          <p style="margin: 10px 0;"><strong>Customer Email:</strong> <a href="mailto:${customerEmail}">${customerEmail}</a></p>
          <p style="margin: 10px 0;"><strong>Amount:</strong> $97.00 USD</p>
        </div>
        <p style="color: #666; font-size: 12px;">
          Purchase completed at: ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deployment_token: process.env.ABACUSAI_API_KEY,
        app_id: process.env.WEB_APP_ID,
        notification_id: process.env.NOTIF_ID_COURSE_PURCHASE,
        subject: `💰 New Course Purchase from ${customerName || customerEmail}`,
        body: htmlBody,
        is_html: true,
        recipient_email: 'aimoneymachine93@gmail.com',
        sender_email: appUrl ? `noreply@${new URL(appUrl).hostname}` : undefined,
        sender_alias: 'AI Money Maniac',
      }),
    });
  } catch (error) {
    console.error('Failed to send purchase notification:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'You must be logged in' },
        { status: 401 }
      );
    }

    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Retrieve the checkout session from Stripe
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);

    if (checkoutSession.payment_status !== 'paid') {
      return NextResponse.json(
        { success: false, error: 'Payment not completed' },
        { status: 400 }
      );
    }

    const userId = checkoutSession.metadata?.userId;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID not found in session metadata' },
        { status: 400 }
      );
    }

    // Check if already processed
    const existingPurchase = await prisma.purchase.findFirst({
      where: { stripeSessionId: sessionId, status: 'completed' },
    });

    if (existingPurchase) {
      return NextResponse.json({ 
        success: true,
        message: 'Payment already verified'
      });
    }

    // Update purchase record
    await prisma.purchase.updateMany({
      where: { stripeSessionId: sessionId },
      data: {
        status: 'completed',
        stripePaymentId: checkoutSession.payment_intent as string,
      },
    });

    // Update user's purchase status
    await prisma.user.update({
      where: { id: userId },
      data: { hasPurchased: true },
    });

    // Send email notification to admin
    await sendPurchaseNotification(
      session.user.email,
      session.user.name || ''
    );

    return NextResponse.json({ 
      success: true,
      message: 'Payment verified and course access granted'
    });
  } catch (error: any) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
