// Central event + checkout configuration.
//
// Tickets are sold through a Stripe Payment Link (no-code hosted checkout),
// so the site does NOT need a database, API keys, or webhooks to take payments.

/** Your Stripe Payment Link. Replace if you regenerate the link in Stripe. */
export const PAYMENT_LINK_URL = 'https://buy.stripe.com/fZu9ATbJXcOp8rp4ou7Re02';

/** Ticket price in GBP. */
export const TICKET_PRICE_GBP = 10;
