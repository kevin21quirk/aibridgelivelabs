import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { PAYMENT_LINK_URL, TICKET_PRICE_GBP } from '../../lib/event';

const INCLUDED = [
  'AI strategy masterclass by AI Bridge Solutions',
  'PR & branding insights from Firstname Communications',
  'Live app build demonstration',
  'Networking opportunities with industry leaders',
  'Refreshments included',
];

export default function BookingPage() {
  return (
    <main>
      <Navbar />
      <section className="hero-gradient grid-pattern" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '3rem', overflow: 'hidden' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '20%', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.12)', filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.5rem' }}>
            Secure your <span className="gradient-text">ticket</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            One ticket gives you full-day access to all three sessions on 2nd September 2026.
          </p>
        </div>
      </section>
      <section className="container" style={{ paddingTop: '0' }}>
        <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', padding: 'clamp(1.75rem, 4vw, 2.75rem)', textAlign: 'center' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Full Event Pass</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 800 }} className="gradient-text">
              £{TICKET_PRICE_GBP}
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}> / person</span>
            </p>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', textAlign: 'left' }}>
            {INCLUDED.map((item) => (
              <li key={item} style={{ padding: '0.5rem 0', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a href={PAYMENT_LINK_URL} className="btn btn-primary glow" style={{ width: '100%' }}>
            Buy Tickets — £{TICKET_PRICE_GBP}
          </a>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1rem' }}>
            Secure payment processed by Stripe. You can pay by card and other supported methods.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            Have questions first? <Link href="/contact" className="gradient-text" style={{ fontWeight: 700 }}>Contact us</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
