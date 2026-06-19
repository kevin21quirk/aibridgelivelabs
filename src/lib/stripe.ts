import Stripe from 'stripe';

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10',
});

export const TICKET_PRICE_PENCE = 1000; // £10.00
export const TICKET_PRICE_GBP = 10;
export const MAX_TICKETS = Number(process.env.NEXT_PUBLIC_MAX_TICKETS ?? 100);
