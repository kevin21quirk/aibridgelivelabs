import Stripe from 'stripe';

export const TICKET_PRICE_PENCE = 1000; // £10.00
export const TICKET_PRICE_GBP = 10;
export const MAX_TICKETS = Number(process.env.NEXT_PUBLIC_MAX_TICKETS ?? 100);

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error('STRIPE_SECRET_KEY is not set');
    }
    _stripe = new Stripe(key, {
      apiVersion: '2024-04-10',
    });
  }
  return _stripe;
}
