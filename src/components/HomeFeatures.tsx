'use client';

import { useEffect, useRef, useState } from 'react';

interface Stop {
  time: string;
  icon: string;
  tag?: string;
  title: string;
  kind: 'session' | 'break';
}

const schedule: Stop[] = [
  { time: '8:30 am', icon: '☕', title: 'Sign in & welcome', kind: 'break' },
  { time: '9:00 – 9:40', icon: '🧠', tag: 'Session 1', title: 'The AI Revolution', kind: 'session' },
  { time: '9:40 – 10:10', icon: '📢', tag: 'Session 2', title: 'PR in the Age of AI', kind: 'session' },
  { time: '10:10 – 10:40', icon: '☕', title: 'Tea & coffee break', kind: 'break' },
  { time: '10:40 – 11:40', icon: '🚀', tag: 'Session 3', title: 'Live App Build', kind: 'session' },
  { time: '11:40 – 12:30', icon: '🤝', title: 'Networking, Q&A & refreshments', kind: 'break' },
];

export default function HomeFeatures() {
  const [visible, setVisible] = useState(false);
  const scheduleRef = useRef<HTMLDivElement | null>(null);

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
      </div>
    </section>
  );
}
