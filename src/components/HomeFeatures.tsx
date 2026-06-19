export default function HomeFeatures() {
  const features = [
    {
      icon: '🧠',
      title: 'AI Strategy',
      description: 'Learn how artificial intelligence is reshaping industries and discover actionable strategies to implement in your business today.',
    },
    {
      icon: '📢',
      title: 'PR & Branding',
      description: 'Position your brand at the forefront of the AI revolution with expert PR guidance from FirstName Communications.',
    },
    {
      icon: '🚀',
      title: 'Live Demonstration',
      description: 'Watch a fully functional app built from scratch, live on stage — proving that AI-powered development is the future.',
    },
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background effect */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.05)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(79,70,229,0.1)', borderRadius: '9999px', border: '1px solid rgba(79,70,229,0.2)', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>What to Expect</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Three powerful sessions, one <span className="gradient-text">transformative</span> day
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Each session is designed to give you practical, actionable insights you can apply immediately.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {features.map((feature, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '2rem' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', background: 'rgba(79,70,229,0.1)', borderRadius: '12px', border: '1px solid rgba(79,70,229,0.2)' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
