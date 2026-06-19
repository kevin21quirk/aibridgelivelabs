'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface HomeHeroProps {
  remaining: number;
}

export default function HomeHero({ remaining }: HomeHeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const soldOut = remaining <= 0;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-gradient grid-pattern" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Animated Blobs */}
      <div className="animate-blob" style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.15)', filter: 'blur(80px)' }} />
      <div className="animate-blob animation-delay-2000" style={{ position: 'absolute', top: '30%', right: '10%', width: '350px', height: '350px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.12)', filter: 'blur(80px)' }} />
      <div className="animate-blob animation-delay-4000" style={{ position: 'absolute', bottom: '10%', left: '30%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', filter: 'blur(80px)' }} />

      {/* Floating Decorative Elements */}
      <div className="animate-float" style={{ position: 'absolute', top: '20%', right: '15%', width: '60px', height: '60px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }} />
      <div className="animate-float-delayed" style={{ position: 'absolute', bottom: '25%', left: '12%', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(79,70,229,0.3)', background: 'rgba(79,70,229,0.1)' }} />
      <div className="animate-float" style={{ position: 'absolute', top: '60%', right: '8%', width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)' }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', transform: `translateY(${scrollY * 0.3}px)` }}>
        {/* Badge */}
        <div className="fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.12)', marginBottom: '2rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 12px rgba(34,211,238,0.5)' }} />
          <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)' }}>2nd September 2026 • Sign in 8:30am • Limited to 100 places</span>
        </div>

        {/* Logo */}
        <div className="fade-in-up-delay-1" style={{ marginBottom: '1.5rem' }}>
          <Image src="/aibridgelogo.png" alt="AI Bridge Solutions" width={280} height={80} style={{ filter: 'invert(1) brightness(2)', height: 'auto', maxHeight: '70px', width: 'auto', margin: '0 auto' }} />
        </div>

        {/* Heading */}
        <h1 className="fade-in-up-delay-1" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.05, marginBottom: '1.5rem', fontWeight: 800 }}>
          <span style={{ display: 'block' }}>AI Bridge</span>
          <span className="gradient-text" style={{ display: 'block' }}>Live Labs</span>
        </h1>

        {/* Subtitle */}
        <p className="fade-in-up-delay-2" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          An exclusive event for business leaders ready to harness the power of artificial intelligence.
          Three transformative sessions. One unforgettable day.
        </p>

        {/* CTA Buttons */}
        <div className="fade-in-up-delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {soldOut ? (
            <span className="btn btn-secondary" style={{ opacity: 0.6 }}>Sold Out</span>
          ) : (
            <Link href="/booking" className="btn btn-primary">
              Book Your Ticket — £10
            </Link>
          )}
          <Link href="/sessions/ai-revolution" className="btn btn-secondary">
            View Sessions
          </Link>
        </div>

        {/* Stats Row */}
        <div className="fade-in-up-delay-3" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800 }} className="gradient-text">3</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sessions</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800 }} className="gradient-text">{remaining}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tickets Left</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800 }} className="gradient-text">£10</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Per Ticket</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, #1e2235, transparent)', pointerEvents: 'none' }} />
    </section>
  );
}
