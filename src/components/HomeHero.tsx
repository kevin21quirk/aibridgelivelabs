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
    <section style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden',
      backgroundImage: 'url("/cyprus-compressed.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Light overlay for text readability */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'linear-gradient(to bottom, rgba(30, 34, 53, 0.3), rgba(30, 34, 53, 0.4))',
        zIndex: 1 
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', transform: `translateY(${scrollY * 0.3}px)` }}>
        {/* Enhanced Date/Time Badge */}
        <div className="fade-in-up" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '0.75rem', 
          padding: '0.75rem 2rem', 
          background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(6, 182, 212, 0.1))', 
          backdropFilter: 'blur(20px)', 
          borderRadius: '50px', 
          border: '2px solid rgba(34, 211, 238, 0.3)', 
          marginBottom: '2rem',
          boxShadow: '0 8px 32px rgba(34, 211, 238, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem'
          }}>
            <div style={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              background: '#22d3ee', 
              boxShadow: '0 0 20px rgba(34,211,238,0.8), 0 0 40px rgba(34,211,238,0.4)',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: 600, 
              color: '#ffffff',
              letterSpacing: '0.05em'
            }}>
              2nd September 2026
            </span>
          </div>
          <div style={{ 
            width: '1px', 
            height: '20px', 
            background: 'rgba(255, 255, 255, 0.2)' 
          }} />
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem'
          }}>
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: 500, 
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Sign in 8:30am
            </span>
          </div>
          <div style={{ 
            width: '1px', 
            height: '20px', 
            background: 'rgba(255, 255, 255, 0.2)' 
          }} />
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem'
          }}>
            <span style={{ 
              fontSize: '0.9rem', 
              fontWeight: 500, 
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Limited to 100 places
            </span>
          </div>
        </div>

        {/* Enhanced Partnership Section with Logos */}
        <div className="fade-in-up-delay-1" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '1rem', 
          marginBottom: '2rem' 
        }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            padding: '0.75rem 2rem', 
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(139, 92, 246, 0.1))', 
            backdropFilter: 'blur(20px)', 
            borderRadius: '50px', 
            border: '2px solid rgba(79, 70, 229, 0.3)', 
            boxShadow: '0 8px 32px rgba(79, 70, 229, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: 600, 
              color: '#ffffff',
              letterSpacing: '0.05em'
            }}>
              Presented by
            </span>
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: 700, 
              color: '#8b5cf6',
              letterSpacing: '0.05em'
            }}>
              AI Bridge Solutions
            </span>
            <span style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(255, 255, 255, 0.8)',
              letterSpacing: '0.05em'
            }}>
              in partnership with
            </span>
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: 700, 
              color: '#06b6d4',
              letterSpacing: '0.05em'
            }}>
              Firstname Communications
            </span>
          </div>
        </div>

        {/* Dual Logos */}
        <div className="fade-in-up-delay-1" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '3rem', 
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem 2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Image 
              src="/aibridgelogo.png" 
              alt="AI Bridge Solutions" 
              width={200} 
              height={60} 
              style={{ 
                filter: 'invert(1) brightness(2)', 
                height: 'auto', 
                maxHeight: '50px', 
                width: 'auto'
              }} 
            />
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem 2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Image 
              src="/fnc.png" 
              alt="Firstname Communications" 
              width={400} 
              height={120} 
              style={{ 
                height: 'auto', 
                maxHeight: '50px', 
                width: 'auto',
                objectFit: 'contain',
                maxWidth: '280px'
              }} 
            />
          </div>
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
