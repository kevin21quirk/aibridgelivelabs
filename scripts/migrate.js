const { neon } = require('@neondatabase/serverless');

async function migrate() {
  const DATABASE_URL = process.env.DATABASE_URL;

  if (!DATABASE_URL) {
    console.error('DATABASE_URL environment variable is not set.');
    console.error('Set it in .env.local or pass it inline:');
    console.error('  DATABASE_URL="postgresql://..." node scripts/migrate.js');
    process.exit(1);
  }

  const sql = neon(DATABASE_URL);

  console.log('Running migrations...');

  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      stripe_session_id VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      tickets INTEGER NOT NULL DEFAULT 1,
      stripe_payment_status VARCHAR(50) NOT NULL DEFAULT 'pending',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  console.log('✓ bookings table created (or already exists)');

  await sql`
    CREATE INDEX IF NOT EXISTS idx_bookings_session
    ON bookings (stripe_session_id)
  `;

  console.log('✓ index on stripe_session_id created (or already exists)');

  await sql`
    CREATE INDEX IF NOT EXISTS idx_bookings_status
    ON bookings (stripe_payment_status)
  `;

  console.log('✓ index on stripe_payment_status created (or already exists)');

  console.log('Migration complete!');
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
