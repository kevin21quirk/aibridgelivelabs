'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export interface SessionStat {
  value: string;
  label: string;
}

export interface LearnItem {
  icon: string;
  title: string;
  text: string;
}

export interface SessionLink {
  href: string;
  label: string;
}

export interface SessionData {
  part: string;
  badgeColor: string;
  accent: string;
  accent2: string;
  glow: string;
  soft: string;
  bgImage: string;
  titleLead: string;
  titleHighlight: string;
  titleTail?: string;
  presenter: string;
  tagline: string;
  stats: SessionStat[];
  overviewKicker: string;
  overviewHeading: string;
  overview: string[];
  learnKicker: string;
  learnHeading: string;
  learnItems: LearnItem[];
  highlight?: { emoji: string; title: string; text: string };
  quote?: { text: string; attribution: string };
  prev?: SessionLink;
  next?: SessionLink;
}

export function useReveal() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll('.fx-reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return rootRef;
}

export function rootStyleFromData(data: SessionData): React.CSSProperties {
  return {
    '--s-accent': data.accent,
    '--s-accent2': data.accent2,
    '--s-glow': data.glow,
    '--s-soft': data.soft,
  } as React.CSSProperties;
}

/* Lightweight animated neural-network SVG, accent-aware via CSS vars */
export function NeuralViz() {
  const layers = [4, 6, 6, 3];
  const W = 320;
  const H = 280;
  const padX = 26;
  const padY = 26;
  const colGap = (W - padX * 2) / (layers.length - 1);

  const points = layers.map((count, li) => {
    const x = padX + li * colGap;
    const rowGap = (H - padY * 2) / (count - 1 || 1);
    return Array.from({ length: count }, (_, ni) => ({
      x,
      y: count === 1 ? H / 2 : padY + ni * rowGap,
    }));
  });

  const links: { x1: number; y1: number; x2: number; y2: number; key: string }[] = [];
  for (let li = 0; li < points.length - 1; li++) {
    points[li].forEach((a, ai) => {
      points[li + 1].forEach((b, bi) => {
        links.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, key: `${li}-${ai}-${bi}` });
      });
    });
  }

  return (
    <svg className="fx-neural" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Neural network visualization">
      {links.map((l, i) => (
        <line
          key={l.key}
          className="fx-link"
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          style={{ animationDelay: `${(i % 12) * 0.15}s` }}
        />
      ))}
      {points.map((col, li) =>
        col.map((p, ni) => (
          <g key={`${li}-${ni}`}>
            {(li === 0 || li === points.length - 1) && (
              <circle className="fx-ring" cx={p.x} cy={p.y} r={11} style={{ animationDelay: `${ni * 0.2}s` }} />
            )}
            <circle
              className={`fx-node${li % 2 ? ' alt' : ''}`}
              cx={p.x}
              cy={p.y}
              r={5.5}
              style={{ animationDelay: `${(li + ni) * 0.18}s` }}
            />
          </g>
        ))
      )}
    </svg>
  );
}

/* Shared cinematic hero (background image + accent badge). `align` controls layout. */
export function SessionHero({
  data,
  align = 'left',
  children,
}: {
  data: SessionData;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}) {
  const isCenter = align === 'center';
  return (
    <section
      className="hero-gradient grid-pattern"
      style={{ position: 'relative', minHeight: '86vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("${data.bgImage}")`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: isCenter
        ? 'radial-gradient(ellipse 90% 80% at 50% 40%, rgba(10,12,20,0.55) 0%, rgba(10,12,20,0.85) 70%, rgba(10,12,20,0.95) 100%)'
        : 'linear-gradient(to right, rgba(10, 12, 20, 0.92) 0%, rgba(10, 12, 20, 0.62) 45%, rgba(10, 12, 20, 0.32) 100%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 12, 20, 0.92) 0%, transparent 45%)', zIndex: 0 }} />
      <div className="animate-blob" style={{ position: 'absolute', top: '12%', right: '8%', width: '320px', height: '320px', borderRadius: '50%', background: data.soft, filter: 'blur(90px)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: isCenter ? 'center' : 'left' }}>
        <div className="fade-in-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1.1rem', background: data.soft, borderRadius: '9999px', border: `1px solid ${data.accent2}`, marginBottom: '1.5rem', backdropFilter: 'blur(8px)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: data.badgeColor, boxShadow: `0 0 10px ${data.badgeColor}` }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: data.badgeColor, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{data.part}</span>
        </div>
        <h1 className="fade-in-up-delay-1" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.05, color: '#ffffff', textShadow: '0 2px 28px rgba(0,0,0,0.6)', maxWidth: isCenter ? '950px' : '900px', marginLeft: isCenter ? 'auto' : undefined, marginRight: isCenter ? 'auto' : undefined }}>
          {data.titleLead}
          <span className="gradient-text">{data.titleHighlight}</span>
          {data.titleTail ? ` ${data.titleTail}` : ''}
        </h1>
        <p className="fade-in-up-delay-2" style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.88)', maxWidth: '640px', lineHeight: 1.7, textShadow: '0 1px 12px rgba(0,0,0,0.5)', marginBottom: '2rem', marginLeft: isCenter ? 'auto' : undefined, marginRight: isCenter ? 'auto' : undefined }}>
          {data.tagline}
        </p>
        <div className="fade-in-up-delay-2" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: isCenter ? 'center' : 'flex-start' }}>
          <Link href="/booking" className="btn btn-primary">Book Your Ticket</Link>
          <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>
            Presented by <strong style={{ color: '#fff' }}>{data.presenter}</strong>
          </span>
        </div>
        {children}
      </div>

      <div style={{ position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <div className="fx-scrollcue"><span /></div>
      </div>
    </section>
  );
}

/* Shared CTA band + prev/next navigation. */
export function SessionCTA({ data }: { data: SessionData }) {
  return (
    <section style={{ position: 'relative', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="fx-reveal fx-cta">
          <h2 className="fx-heading" style={{ marginBottom: '0.75rem' }}>Ready to see it in person?</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 1.75rem' }}>
            Just £10 secures your seat at this exclusive event.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/booking" className="btn btn-primary">Book Your Ticket — £10</Link>
            <Link href="/" className="btn btn-secondary">Back to Home</Link>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            <div style={{ minWidth: '120px', textAlign: 'left' }}>
              {data.prev && (
                <Link href={data.prev.href} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                  ← {data.prev.label}
                </Link>
              )}
            </div>
            <div style={{ minWidth: '120px', textAlign: 'right' }}>
              {data.next && (
                <Link href={data.next.href} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                  {data.next.label} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
