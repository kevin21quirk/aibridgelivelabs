// Central event + checkout configuration.
//
// Tickets are sold through a Stripe Payment Link (no-code hosted checkout),
// so the site does NOT need a database, API keys, or webhooks to take payments.
//
// The "tickets remaining" figure below is a MARKETING DISPLAY ONLY — it is not
// connected to real sales. Update it by hand as tickets sell, then redeploy.

/** Your Stripe Payment Link. Replace if you regenerate the link in Stripe. */
export const PAYMENT_LINK_URL = 'https://buy.stripe.com/fZu9ATbJXcOp8rp4ou7Re02';

/** Total seats available for the event. */
export const MAX_TICKETS = 100;

/** Tickets still available (display only — edit this as sales progress). */
export const TICKETS_REMAINING = 100;

/** Ticket price in GBP. */
export const TICKET_PRICE_GBP = 10;
