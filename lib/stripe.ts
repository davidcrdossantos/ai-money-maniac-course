import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20' as any,
  typescript: true,
});

export const COURSE_PRICE = 999; // $9.99 in cents
export const COURSE_NAME = 'AI Money Maniac Course';
export const COURSE_DESCRIPTION = 'Complete 6-module course on making money with AI tools';
