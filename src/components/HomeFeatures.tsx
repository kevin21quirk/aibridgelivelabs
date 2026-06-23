'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Stop {
  time: string;
  icon: string;
  tag?: string;
  title: string;
  kind: 'session' | 'break';
}

const schedule: Stop[] = [
  { time: '8:30 am', icon: '👋', title: 'Sign in & welcome', kind: 'break' },
  { time: '9:00 – 9:40', icon: '💡', tag: 'Session 1', title: 'The AI Revolution', kind: 'session' },
  { time: '9:40 – 10:10', icon: '�', tag: 'Session 2', title: 'PR in the Age of AI', kind: 'session' },
  { time: '10:10 – 10:40', icon: '☕', title: 'Tea & coffee break', kind: 'break' },
  { time: '10:40 – 11:40', icon: '�', tag: 'Session 3', title: 'Live App Build', kind: 'session' },
  { time: '11:40 – 12:30', icon: '🤝', title: 'Networking, Q&A & refreshments', kind: 'break' },
];

const sessions = [
  {
    part: 1,
    time: '9:00 – 9:40',
    title: 'The AI Revolution for Business',
    presenter: 'AI Bridge Solutions',
    href: '/sessions/ai-revolution',
    logo: '/aibridgelogo.png',
    logoInvert: true,
    color: '#6366f1',
  },
  {
    part: 2,
    time: '9:40 – 10:10',
    title: 'PR in the Age of AI',
    presenter: 'FirstName Communications',
    href: '/sessions/pr-and-ai',
    logo: '/fnc.png',
    logoInvert: false,
    color: '#06b6d4',
  },
  {
    part: 3,
    time: '10:40 – 11:40',
    title: 'Live Build: App in an Afternoon',
    presenter: 'AI Bridge Solutions',
    href: '/sessions/live-build',
    logo: '/aibridgelogo.png',
    logoInvert: true,
    color: '#a78bfa',
  },
];

export default function HomeFeatures() {
  const [visible, setVisible] = useState(false);
  const scheduleRef = useRef<HTMLDivElement | null>(null);

  // Globe carousel state
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const dragStartRef = useRef(0);
  const rotationStartRef = useRef(0);
  const animFrameRef = useRef<number>();

  useEffect(() => {
    const node = scheduleRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate globe
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      setRotation((r) => r + delta * 0.015);
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [autoRotate, isDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setAutoRotate(false);
    dragStartRef.current = e.clientX;
    rotationStartRef.current = rotation;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartRef.current;
    setRotation(rotationStartRef.current + delta * 0.5);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setTimeout(() => setAutoRotate(true), 3000);
  };

  const numItems = sessions.length;
  const angleStep = 360 / numItems;
  const radius = 240;

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      {/* Ambient background glows */}
      <div style={{ position: 'absolute', top: '12%', left: '6%', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.12)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '8%', right: '6%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.1)', filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(79,70,229,0.1)', borderRadius: '9999px', border: '1px solid rgba(79,70,229,0.2)', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Schedule</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Three powerful sessions, one <span className="gradient-text">transformative</span> morning
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Doors open at 8:30am and we wrap by 12:30pm — here is how the morning unfolds.
          </p>
        </div>

        <div ref={scheduleRef} className={`schedule ${visible ? 'is-visible' : ''}`}>
          <div className="schedule-track">
            <div className="schedule-line" />
            {schedule.map((stop, i) => {
              const pos = i % 2 === 0 ? 'top' : 'bottom';
              const card = (
                <div className={`schedule-card ${stop.kind === 'break' ? 'is-break' : ''}`}>
                  <span className="schedule-time">{stop.time}</span>
                  {stop.tag && <span className="schedule-tag">{stop.tag}</span>}
                  <span className="schedule-title">{stop.title}</span>
                </div>
              );
              return (
                <div key={i} className="schedule-item" style={{ transitionDelay: `${i * 0.09}s` }}>
                  <div className="schedule-slot top">{pos === 'top' ? card : null}</div>
                  <div className={`schedule-node ${stop.kind === 'break' ? 'is-break' : ''}`}>
                    <span>{stop.icon}</span>
                  </div>
                  <div className="schedule-slot bottom">{pos === 'bottom' ? card : null}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Globe / 3D Carousel — explore the sessions */}
        <div
          style={{
            position: 'relative',
            height: '440px',
            perspective: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            marginTop: '4rem',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Earth globe */}
          <div style={{
            position: 'absolute',
            width: '260px',
            height: '260px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 2,
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 0 80px rgba(30,144,255,0.25), 0 0 30px rgba(30,144,255,0.15)',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/earth.jpg"
              alt="Earth"
              style={{ width: '130%', height: '130%', objectFit: 'cover', objectPosition: 'center', marginLeft: '-15%', marginTop: '-15%' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(0,0,30,0.6) 100%)',
            }} />
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              border: '2px solid rgba(100,200,255,0.3)',
              boxShadow: '0 0 20px rgba(60,160,255,0.25), inset 0 0 20px rgba(0,50,100,0.3)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Orbiting cards — each a sibling of the earth so they layer behind/in front of it */}
          {sessions.map((session, i) => {
            const angle = rotation - angleStep * i;
            const depth = Math.cos((angle * Math.PI) / 180); // >0 front, <0 behind earth
            const inFront = depth >= 0;
            return (
              <div
                key={session.part}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '300px',
                  marginLeft: '-150px',
                  marginTop: '-110px',
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                  transition: isDragging ? 'none' : undefined,
                  zIndex: inFront ? 3 : 1,
                }}
              >
                <Link
                  href={session.href}
                  onClick={(e) => { if (isDragging) e.preventDefault(); }}
                  style={{
                    display: 'block',
                    padding: '1.6rem 1.75rem',
                    borderRadius: '1.25rem',
                    background: 'rgba(20, 25, 45, 0.92)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                    textDecoration: 'none',
                    transition: 'box-shadow 0.3s, border-color 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = session.color;
                    e.currentTarget.style.boxShadow = `0 8px 40px ${session.color}33, inset 0 1px 0 rgba(255,255,255,0.15)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)';
                  }}
                >
                  {/* Logo on its own row for clarity */}
                  <div style={{ display: 'flex', alignItems: 'center', minHeight: '48px', marginBottom: '0.85rem' }}>
                    <Image src={session.logo} alt={session.presenter} width={200} height={64} style={{ height: '48px', width: 'auto', maxWidth: '200px', objectFit: 'contain', filter: session.logoInvert ? 'invert(1) brightness(2)' : 'none' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff', background: session.color, padding: '0.3rem 0.75rem', borderRadius: '9999px', boxShadow: `0 2px 10px ${session.color}80`, border: '1px solid rgba(255,255,255,0.25)' }}>Part {session.part}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)', marginLeft: 'auto' }}>{session.time}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.35rem', lineHeight: 1.3 }}>{session.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Presented by {session.presenter}</p>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Drag hint */}
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.5rem' }}>
          Drag to rotate • Click a session to learn more
        </p>
      </div>
    </section>
  );
}
