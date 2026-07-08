import Link from 'next/link';

export default function TicketCard() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
        TICKETS
      </p>
      <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>
        Secure your <span className="gradient-text">place</span>
      </h2>

      <div className="card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>General Admission</h3>
            <p style={{ color: 'var(--text-muted)' }}>Full-day access to all three sessions</p>
          </div>
          <p style={{ fontSize: '2rem', fontWeight: 700 }}>
            £10<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}> /person</span>
          </p>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', textAlign: 'left' }}>
          {[
            'AI strategy masterclass by AI Bridge Solutions',
            'PR & branding insights from Firstname Communications',
            'Live app build demonstration',
            'Networking opportunities with industry leaders',
            'Refreshments included',
          ].map((item, i) => (
            <li key={i} style={{ padding: '0.5rem 0', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>

        <Link href="/booking" className="btn btn-primary glow" style={{ width: '100%' }}>
          Book your ticket
        </Link>
      </div>
    </div>
  );
}
