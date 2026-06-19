'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function HomeAgendaPreview() {
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
      logo: '/fnc13c (003).png',
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

  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const dragStartRef = useRef(0);
  const rotationStartRef = useRef(0);
  const animFrameRef = useRef<number>();

  // Auto-rotate
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      setRotation((r) => r + delta * 0.015); // slow rotation
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [autoRotate, isDragging]);

  // Mouse/touch drag
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
    // Resume auto-rotate after 3 seconds
    setTimeout(() => setAutoRotate(true), 3000);
  };

  const numItems = sessions.length;
  const angleStep = 360 / numItems;
  const radius = 240;

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '5rem 0' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(79,70,229,0.3), transparent)' }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(6,182,212,0.1)', borderRadius: '9999px', border: '1px solid rgba(6,182,212,0.2)', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Agenda</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800 }}>
            Your day at a <span className="gradient-text">glance</span>
          </h2>
        </div>

        {/* Globe / 3D Carousel */}
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
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Earth globe - realistic sphere using CSS */}
          <div style={{
            position: 'absolute',
            width: '260px',
            height: '260px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 0,
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 0 80px rgba(30,144,255,0.25), 0 0 30px rgba(30,144,255,0.15)',
          }}>
            {/* Flat map as texture */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/earth.jpg"
              alt="Earth"
              style={{ width: '130%', height: '130%', objectFit: 'cover', objectPosition: 'center', marginLeft: '-15%', marginTop: '-15%' }}
            />
            {/* Sphere shading overlay - makes flat image look 3D */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(0,0,30,0.6) 100%)',
            }} />
            {/* Atmosphere glow ring */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              border: '2px solid rgba(100,200,255,0.3)',
              boxShadow: '0 0 20px rgba(60,160,255,0.25), inset 0 0 20px rgba(0,50,100,0.3)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Rotating container - cards orbit around earth */}
          <div style={{
            position: 'absolute',
            width: '300px',
            height: '100%',
            left: '50%',
            top: 0,
            marginLeft: '-150px',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)`,
            transition: isDragging ? 'none' : undefined,
            zIndex: 1,
          }}>
            {sessions.map((session, i) => {
              const angle = -(angleStep * i);
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
                  }}
                >
                  <Link
                    href={session.href}
                    onClick={(e) => { if (isDragging) e.preventDefault(); }}
                    style={{
                      display: 'block',
                      padding: '1.75rem',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <Image src={session.logo} alt={session.presenter} width={120} height={40} style={{ height: '36px', width: 'auto', maxWidth: '120px', objectFit: 'contain', filter: session.logoInvert ? 'invert(1) brightness(2)' : 'none' }} />
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: session.color, background: `${session.color}20`, padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>Part {session.part}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>{session.time}</span>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.35rem', lineHeight: 1.3 }}>{session.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Presented by {session.presenter}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Drag hint */}
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic', marginTop: '0.5rem', marginBottom: '2rem' }}>
          Drag to rotate • Click a session to learn more
        </p>

        {/* Full schedule */}
        <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '1.5rem 2rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Full Day Schedule</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>☕ Sign in &amp; welcome</span><span style={{ fontWeight: 600, color: 'var(--text)' }}>8:30 am</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>🧠 Session 1 — The AI Revolution</span><span style={{ fontWeight: 600, color: 'var(--text)' }}>9:00 – 9:40</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>📢 Session 2 — PR in the Age of AI</span><span style={{ fontWeight: 600, color: 'var(--text)' }}>9:40 – 10:10</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>☕ Tea &amp; coffee break</span><span style={{ fontWeight: 600, color: 'var(--text)' }}>10:10 – 10:40</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>🚀 Session 3 — Live App Build</span><span style={{ fontWeight: 600, color: 'var(--text)' }}>10:40 – 11:40</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
              <span>🤝 Networking, Q&amp;A &amp; refreshments</span><span style={{ fontWeight: 600, color: 'var(--text)' }}>11:40 – 12:30</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
