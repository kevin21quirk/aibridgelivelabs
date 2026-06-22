'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [sessionsOpen, setSessionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav-glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image src="/aibridgelogo.png" alt="AI Bridge Solutions" width={140} height={40} style={{ filter: 'invert(1) brightness(2)', height: 'auto', maxHeight: '36px', width: 'auto' }} />
          <span style={{ fontWeight: 700, fontSize: '1.15rem' }}>
            <span className="gradient-text">Live Labs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <Link href="/" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>
            Home
          </Link>

          {/* Sessions Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setSessionsOpen(true)}
            onMouseLeave={() => setSessionsOpen(false)}
          >
            <button
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                fontWeight: 500,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '1.5rem 0',
              }}
            >
              Sessions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 0.2s', transform: sessionsOpen ? 'rotate(180deg)' : '' }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {sessionsOpen && (
              <div className="dropdown-glass" style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', padding: '0.75rem', minWidth: '260px' }}>
                <Link href="/sessions/ai-revolution" style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(79,70,229,0.15)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  <strong style={{ display: 'block', color: 'inherit' }}>Part 1: The AI Revolution</strong>
                  <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>AI Bridge Solutions</span>
                </Link>
                <Link href="/sessions/pr-and-ai" style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(79,70,229,0.15)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  <strong style={{ display: 'block', color: 'inherit' }}>Part 2: PR in the Age of AI</strong>
                  <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>FirstName Communications</span>
                </Link>
                <Link href="/sessions/live-build" style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(79,70,229,0.15)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  <strong style={{ display: 'block', color: 'inherit' }}>Part 3: Live App Build</strong>
                  <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>AI Bridge Solutions</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}>
            Contact
          </Link>

          <Link href="/booking" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ position: 'absolute', top: '4.5rem', left: '1rem', right: '1rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', background: 'rgba(26, 30, 48, 0.99)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '1rem', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}>
          <Link href="/" onClick={() => setMobileOpen(false)} style={{ padding: '0.75rem 0.5rem', color: 'var(--text)', fontWeight: 600, borderRadius: '0.5rem' }}>Home</Link>
          <Link href="/sessions/ai-revolution" onClick={() => setMobileOpen(false)} style={{ padding: '0.75rem 0.5rem', color: 'var(--text)', fontWeight: 600, borderRadius: '0.5rem' }}>Part 1: AI Revolution</Link>
          <Link href="/sessions/pr-and-ai" onClick={() => setMobileOpen(false)} style={{ padding: '0.75rem 0.5rem', color: 'var(--text)', fontWeight: 600, borderRadius: '0.5rem' }}>Part 2: PR & AI</Link>
          <Link href="/sessions/live-build" onClick={() => setMobileOpen(false)} style={{ padding: '0.75rem 0.5rem', color: 'var(--text)', fontWeight: 600, borderRadius: '0.5rem' }}>Part 3: Live Build</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ padding: '0.75rem 0.5rem', color: 'var(--text)', fontWeight: 600, borderRadius: '0.5rem' }}>Contact</Link>
          <Link href="/booking" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ textAlign: 'center', marginTop: '0.75rem' }}>Book Now</Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
