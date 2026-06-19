import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function LiveBuildPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient grid-pattern" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        <div className="animate-blob animation-delay-4000" style={{ position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.15)', filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(139,92,246,0.1)', borderRadius: '9999px', border: '1px solid rgba(139,92,246,0.2)', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Part 3 • 10:40 – 11:40</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
            Live Build: <span className="gradient-text">App in an Afternoon</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '650px', lineHeight: 1.7 }}>
            Presented by <strong style={{ color: 'var(--text)' }}>AI Bridge Solutions</strong>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Session Overview</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              This is where theory meets reality. Watch as we build a fully functional application from scratch — 
              live on stage, in real time. This hands-on demonstration showcases exactly how AI-powered development 
              works in practice: from initial concept through to deployment, all within the allotted timescale.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              You&apos;ll witness first-hand how modern AI tools accelerate the development process, enabling 
              what once took weeks to be accomplished in hours. This isn&apos;t a rehearsed demo — it&apos;s a live, 
              unscripted build that proves the power of AI-assisted development.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>What You&apos;ll See</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                'A real application built from zero to deployment, live on stage',
                'AI-powered coding tools in action — writing, debugging, and deploying',
                'How to go from concept to working product in a single session',
                'Modern development workflows that any business can adopt',
                'The practical reality of AI-assisted software development',
                'Q&A session where you can ask anything about the process',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>✓</span>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel shimmer" style={{ padding: '2rem', marginBottom: '2rem', textAlign: 'center', border: '1px solid rgba(139,92,246,0.3)' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              🚀 The Grand Finale
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              This session is the highlight of the day — physical proof that AI is not just the future, 
              it&apos;s the present. You&apos;ll leave knowing exactly what&apos;s possible.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/sessions/pr-and-ai" className="btn btn-secondary">← Part 2</Link>
            <Link href="/booking" className="btn btn-primary">Book Your Ticket</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
