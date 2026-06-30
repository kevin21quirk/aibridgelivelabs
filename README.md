# AI Bridge Live Labs

Event website for **AI Bridge Live Labs** — 2nd September 2026.  
Built with Next.js 14. Ticket payments are handled by a **Stripe Payment Link**
(no-code hosted checkout), so the site needs no secret keys, database, or webhooks.

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

That's it — open http://localhost:3000.

## Configuring tickets

All ticket settings live in **`src/lib/event.ts`**:

- `PAYMENT_LINK_URL` — your Stripe Payment Link (buyers are sent here to pay).
- `TICKETS_REMAINING` — marketing display only; update by hand as tickets sell
  (set to `0` to show "Sold out"). Redeploy after changing.
- `MAX_TICKETS` / `TICKET_PRICE_GBP` — total seats and price shown on the site.

To create or edit the Payment Link, use the Stripe Dashboard. Payment methods
(card, Apple Pay, Google Pay, etc.) and any ticket/quantity caps are configured
there too.

## Deployment (Vercel)

1. Push to GitHub
2. Import the project in Vercel
3. Deploy — no environment variables are required.

## Tech Stack

- **Next.js 14** (App Router)
- **Stripe Payment Link** (hosted checkout)
- **Vercel** (Hosting)
