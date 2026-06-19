# AI Bridge Live Labs

Event website for **AI Bridge Live Labs** — 2nd September 2026.  
Built with Next.js 14, Stripe payments, and Neon Postgres.

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Create `.env.local`

Copy the example and fill in your Stripe keys:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your real Stripe keys:

```
DATABASE_URL=postgresql://neondb_owner:npg_A0tZQsg7LSwc@ep-divine-rain-abjuyrpw-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET
NEXT_PUBLIC_EVENT_DATE=2026-09-02
NEXT_PUBLIC_MAX_TICKETS=100
NEXT_PUBLIC_TICKET_PRICE_GBP=10
```

### 3. Run database migration

```bash
npm run db:migrate
```

### 4. Start development server

```bash
npm run dev
```

### 5. Set up Stripe webhook (for local development)

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add all environment variables from `.env.example` to Vercel project settings
4. Set the Stripe webhook endpoint to `https://your-domain.vercel.app/api/webhook`
5. Deploy!

## Tech Stack

- **Next.js 14** (App Router)
- **Stripe** (Payment processing)
- **Neon Postgres** (Serverless database)
- **Vercel** (Hosting)
