import Link from 'next/link';
import { formatDate } from '../lib/utils';

interface HeroProps {
  remaining: number;
}

export default function Hero({ remaining }: HeroProps) {
  const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE ?? '2026-09-02';
  const soldOut = remaining <= 0;

  return (
    <section
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.2) 0%, transparent 60%)',
      }}
    >
      <div className="container">
        <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.05em' }}>
          AI BRIDGE SOLUTIONS PRESENTS
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1, marginBottom: '1.25rem' }}>
          Discover how AI will <br />
          <span className="gradient-text">revolutionise your business</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 2rem' }}>
          An exclusive hands-on event for business leaders ready to move to the forefront of the AI revolution.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span className="card" style={{ fontWeight: 600 }}>
            {formatDate(eventDate)}
          </span>
          <span className="card" style={{ fontWeight: 600 }}>
            £10 per ticket
          </span>
          <span className="card" style={{ fontWeight: 600 }}>
            {soldOut ? 'Sold out' : `${remaining} tickets remaining`}
          </span>
        </div>
        {soldOut ? (
          <span className="btn" style={{ background: 'var(--bg-light)', color: 'var(--text-muted)' }}>
            Sold out
          </span>
        ) : (
          <Link href="/booking" className="btn btn-primary glow">
            Book your ticket
          </Link>
        )}
      </div>
    </section>
  );
}
