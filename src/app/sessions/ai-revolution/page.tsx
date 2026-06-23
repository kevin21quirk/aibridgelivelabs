import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function AIRevolutionPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient grid-pattern" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("/Part1.webp")', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
        {/* Dark overlay for legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10, 12, 20, 0.96) 0%, rgba(10, 12, 20, 0.88) 45%, rgba(10, 12, 20, 0.65) 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 12, 20, 0.85) 0%, transparent 60%)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1.1rem', background: 'rgba(79,70,229,0.25)', borderRadius: '9999px', border: '1px solid rgba(129,140,248,0.5)', marginBottom: '1.5rem', backdropFilter: 'blur(8px)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Part 1 • 9:00 – 9:40</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1, color: '#ffffff', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
            The AI <span className="gradient-text">Revolution</span> for Business
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', maxWidth: '650px', lineHeight: 1.7, textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
            Presented by <strong style={{ color: '#ffffff' }}>AI Bridge Solutions</strong>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Session Overview</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              This opening session is an in-depth exploration of how artificial intelligence is reshaping the business landscape. 
              You&apos;ll discover how AI tools, automation, and machine-learning strategies can project your company to the 
              forefront of your industry — from streamlining operations to unlocking entirely new revenue streams.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Whether you&apos;re a startup founder, an established business owner, or a corporate decision-maker, this session 
              will give you the knowledge and confidence to embrace AI as your competitive advantage.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>What You&apos;ll Learn</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                'How AI is already transforming businesses across every sector',
                'Practical AI tools you can implement immediately',
                'Cost savings and efficiency gains from AI automation',
                'How to identify AI opportunities within your existing workflows',
                'Building an AI-first strategy for sustainable growth',
                'Real-world case studies of AI-powered business transformation',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>✓</span>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/booking" className="btn btn-primary">Book Your Ticket</Link>
            <Link href="/sessions/pr-and-ai" className="btn btn-secondary">Next: Part 2 →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
