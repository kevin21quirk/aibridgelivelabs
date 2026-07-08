// Run with: npm run db:migrate
// Requires DATABASE_URL in .env.local or as an environment variable.
require('dotenv').config({ path: '.env.local' });
require('dotenv').config(); // fallback to .env

const { neon } = require('@neondatabase/serverless');

async function migrate() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set.');
  }
  const sql = neon(process.env.DATABASE_URL);

  console.log('Running migrations...');

  await sql`
    CREATE TABLE IF NOT EXISTS events (
      id         SERIAL PRIMARY KEY,
      name       TEXT NOT NULL,
      date       DATE NOT NULL,
      location   TEXT,
      description TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`
    CREATE SEQUENCE IF NOT EXISTS ticket_number_seq START 1
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS tickets (
      id                        SERIAL PRIMARY KEY,
      ticket_code               TEXT UNIQUE NOT NULL,
      secure_token              TEXT UNIQUE NOT NULL,
      event_id                  INTEGER REFERENCES events(id),
      buyer_name                TEXT NOT NULL,
      buyer_email               TEXT NOT NULL,
      stripe_session_id         TEXT UNIQUE NOT NULL,
      stripe_payment_intent_id  TEXT,
      amount_paid               INTEGER NOT NULL,
      currency                  TEXT NOT NULL DEFAULT 'gbp',
      status                    TEXT NOT NULL DEFAULT 'valid'
                                CHECK (status IN ('valid','cancelled','refunded')),
      checked_in_at             TIMESTAMPTZ,
      checked_in_by             TEXT,
      created_at                TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at                TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`CREATE INDEX IF NOT EXISTS idx_tickets_token ON tickets(secure_token)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_tickets_session ON tickets(stripe_session_id)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_tickets_pi ON tickets(stripe_payment_intent_id)`;

  await sql`
    CREATE TABLE IF NOT EXISTS stripe_events (
      id              SERIAL PRIMARY KEY,
      stripe_event_id TEXT UNIQUE NOT NULL,
      type            TEXT NOT NULL,
      processed_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  // Seed the event record (idempotent)
  await sql`
    INSERT INTO events (id, name, date, location, description)
    VALUES (
      1,
      'AI Bridge Live Labs',
      '2026-09-02',
      'TBC',
      'An exclusive event for business leaders — Introduction to AI, PR in the Age of AI, and a Live App Build.'
    )
    ON CONFLICT (id) DO NOTHING
  `;

  console.log('Migrations complete.');
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
