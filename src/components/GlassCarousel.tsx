'use client';

import { useState } from 'react';

interface CardData {
  icon: string;
  tag: string;
  title: string;
  subtitle: string;
  detail: string;
  fullDescription: string;
}

export default function GlassCarousel() {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const cards: CardData[] = [
    {
      icon: '🧠',
      tag: 'Strategy',
      title: 'AI for Business Growth',
      subtitle: 'Transform Operations',
      detail: 'Learn how to identify AI opportunities within your existing workflows and unlock new revenue streams.',
      fullDescription: 'This session dives deep into practical AI implementation strategies. You\'ll learn to identify bottlenecks in your business that AI can solve, explore real-world case studies, and leave with a clear roadmap for integrating AI into your operations.',
    },
    {
      icon: '📢',
      tag: 'PR & Media',
      title: 'Technology PR',
      subtitle: 'FirstName Communications',
      detail: 'Position your brand at the forefront of innovation with expert PR strategies for the AI age.',
      fullDescription: 'FirstName Communications will reveal how to craft compelling technology narratives, secure media coverage in top-tier publications, and build thought leadership that attracts clients, investors, and talent to your AI-forward business.',
    },
    {
      icon: '🚀',
      tag: 'Live Demo',
      title: 'App in an Afternoon',
      subtitle: 'Built on Stage',
      detail: 'Watch a real application built from zero to deployment, live — proving AI-powered development is the future.',
      fullDescription: 'The highlight of the day: a completely unscripted, live application build from concept to deployment. See AI-assisted coding in action, ask questions in real-time, and witness first-hand what modern development looks like.',
    },
    {
      icon: '⚡',
      tag: 'Automation',
      title: 'AI-Powered Workflows',
      subtitle: 'Efficiency Unlocked',
      detail: 'Discover tools and techniques to automate repetitive tasks and free your team for strategic work.',
      fullDescription: 'From customer service chatbots to automated reporting, learn which AI tools deliver the fastest ROI. We\'ll cover no-code AI solutions, integration strategies, and how to measure the impact of automation on your bottom line.',
    },
    {
      icon: '🎯',
      tag: 'Networking',
      title: 'Industry Leaders',
      subtitle: 'Build Connections',
      detail: 'Connect with forward-thinking business leaders who are already embracing AI transformation.',
      fullDescription: 'Network with 100 ambitious business leaders in an intimate setting. Share challenges, discover partnerships, and build relationships with people who share your vision for an AI-powered future.',
    },
    {
      icon: '🔮',
      tag: 'Future',
      title: 'What Comes Next',
      subtitle: 'Stay Ahead',
      detail: 'Get a preview of emerging AI technologies and how they will reshape industries in the next 5 years.',
      fullDescription: 'Look beyond today\'s AI capabilities. We\'ll explore emerging technologies like multimodal AI, autonomous agents, and industry-specific models that will define the next wave of business transformation.',
    },
  ];

  return (
    <section style={{ position: 'relative', padding: '5rem 0', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1e35 0%, #252050 50%, #1a1e35 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(30,34,53,0.3)' }} />

      {/* Heading */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>What You&apos;ll Gain</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'white' }}>
          Everything in <span className="gradient-text">One Day</span>
        </h2>
      </div>

      {/* Scrolling cards with perspective */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ perspective: '1200px', perspectiveOrigin: '75% 50%', overflow: 'hidden' }}>
          <div style={{ transform: 'rotateY(-14deg)', transformStyle: 'preserve-3d' }}>
            <div className="scroll-cards-track" style={{ display: 'flex', gap: '1.25rem', padding: '2rem 1.5rem', width: 'max-content', animation: 'scrollCards 35s linear infinite' }}>
              {[...cards, ...cards].map((card, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedCard(card)}
                  style={{
                    flexShrink: 0,
                    width: '380px',
                    height: '200px',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    display: 'flex',
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 4px 24px rgba(0,0,0,0.25)',
                    transition: 'transform 0.2s, brightness 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                >
                  {/* Left icon panel */}
                  <div style={{ width: '70px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', borderRight: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)' }}>
                      {card.icon}
                    </div>
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)' }} />
                    <span style={{ color: 'var(--accent)', fontSize: '0.6rem', fontWeight: 800, writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.15em' }}>AB</span>
                  </div>

                  {/* Right content */}
                  <div style={{ flex: 1, padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.45)', marginBottom: '0.25rem' }}>{card.tag}</span>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.15rem', lineHeight: 1.2 }}>{card.title}</h3>
                    <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>{card.subtitle}</p>
                    <div style={{ width: '2rem', height: '2px', background: 'var(--accent)', marginBottom: '0.75rem' }} />
                    <p style={{ fontSize: '0.78rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.7)' }}>{card.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Edge fades */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, #1a1e35, transparent)', pointerEvents: 'none', zIndex: 20 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, #1a1e35, transparent)', pointerEvents: 'none', zIndex: 20 }} />
      </div>

      {/* Click hint text */}
      <p style={{ position: 'relative', zIndex: 10, textAlign: 'center', marginTop: '1.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontStyle: 'italic' }}>
        Click a card to find out more
      </p>

      {/* Modal Popup */}
      {selectedCard && (
        <div
          className="animate-backdrop-reveal"
          onClick={() => setSelectedCard(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(10, 14, 26, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '2rem',
          }}
        >
          <div
            className="animate-card-expand"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '520px',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              background: 'rgba(42, 47, 71, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
              padding: '2.5rem',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }}>
                {selectedCard.icon}
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)' }}>{selectedCard.tag}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>{selectedCard.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.15rem' }}>{selectedCard.subtitle}</p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)', marginBottom: '1.5rem' }} />

            {/* Content */}
            <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {selectedCard.fullDescription}
            </p>

            {/* Close button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
