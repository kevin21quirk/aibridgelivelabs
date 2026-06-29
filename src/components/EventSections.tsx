export default function EventSections() {
  const sessions = [
    {
      time: '10:00 – 11:30',
      title: 'The AI Revolution for Business',
      presenter: 'AI Bridge Solutions',
      description:
        'An in-depth exploration of how artificial intelligence is reshaping the business landscape. Learn how AI tools, automation, and machine-learning strategies can project your company to the forefront of your industry — from streamlining operations to unlocking new revenue streams.',
      icon: '🧠',
    },
    {
      time: '11:45 – 13:00',
      title: 'PR in the Age of AI',
      presenter: 'Firstname Communications',
      description:
        'Firstname Communications specialise in public relations for the IT and AI sectors. This session covers how to position your brand, craft compelling narratives around technology adoption, and leverage media attention to amplify your AI story.',
      icon: '📢',
    },
    {
      time: '14:00 – 16:00',
      title: 'Live Build: App in an Afternoon',
      presenter: 'AI Bridge Solutions',
      description:
        'Watch as we build a fully functional application from scratch — live on stage. This hands-on demonstration showcases exactly how AI-powered development works in practice: from concept to deployment, all within the allotted timescale.',
      icon: '🚀',
    },
  ];

  return (
    <section id="agenda" className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
          THE AGENDA
        </p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Three sessions, one <span className="gradient-text">transformative</span> day
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {sessions.map((session, i) => (
          <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  fontSize: '2rem',
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.5rem',
                  background: 'rgba(79, 70, 229, 0.15)',
                  flexShrink: 0,
                }}
              >
                {session.icon}
              </span>
              <div>
                <span style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
                  Part {i + 1}
                </span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{session.time}</p>
              </div>
            </div>
            <h3 style={{ fontSize: '1.25rem' }}>{session.title}</h3>
            <p style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Presented by {session.presenter}
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', flex: 1 }}>
              {session.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
