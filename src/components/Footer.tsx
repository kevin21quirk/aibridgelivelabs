import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', padding: '3rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Image src="/aibridgelogo.png" alt="AI Bridge Solutions" width={100} height={30} style={{ filter: 'invert(1) brightness(2)', height: 'auto', maxHeight: '24px', width: 'auto' }} />
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}><span className="gradient-text">Live Labs</span></span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.6 }}>
              An exclusive AI event for business leaders. 2nd September 2026.
            </p>
          </div>

          {/* Sessions */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sessions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Link href="/sessions/ai-revolution" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>The AI Revolution</Link>
              <Link href="/sessions/pr-and-ai" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>PR in the Age of AI</Link>
              <Link href="/sessions/live-build" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Live App Build</Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <Link href="/booking" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Book Tickets</Link>
              <Link href="/contact" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Contact Us</Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} AI Bridge Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
