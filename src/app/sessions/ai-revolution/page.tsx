import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function AIRevolutionPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient grid-pattern" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.15)', filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(79,70,229,0.1)', borderRadius: '9999px', border: '1px solid rgba(79,70,229,0.2)', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Part 1 • 9:00 – 9:40</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
            The AI <span className="gradient-text">Revolution</span> for Business
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
