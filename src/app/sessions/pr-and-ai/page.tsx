import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function PRAndAIPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient grid-pattern" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url("/Part2.webp")', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
        {/* Dark overlay for legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10, 12, 20, 0.85) 0%, rgba(10, 12, 20, 0.6) 45%, rgba(10, 12, 20, 0.3) 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10, 12, 20, 0.6) 0%, transparent 55%)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1.1rem', background: 'rgba(6,182,212,0.25)', borderRadius: '9999px', border: '1px solid rgba(34,211,238,0.5)', marginBottom: '1.5rem', backdropFilter: 'blur(8px)' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#67e8f9', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Part 2 • 9:40 – 10:10</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1, color: '#ffffff', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
            PR in the <span className="gradient-text">Age of AI</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', maxWidth: '650px', lineHeight: 1.7, textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
            Presented by <strong style={{ color: '#ffffff' }}>FirstName Communications</strong>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Session Overview</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              FirstName Communications are specialists in public relations for the IT and AI sectors. In this session, 
              they&apos;ll share how to position your brand, craft compelling narratives around technology adoption, and 
              leverage media attention to amplify your AI story.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              In a world where every company is becoming a technology company, your PR strategy must evolve. Learn how 
              to stand out, attract the right attention, and build thought leadership in the AI space.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>What You&apos;ll Learn</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                'How to craft your AI story for maximum media impact',
                'Building thought leadership in the technology space',
                'PR strategies specific to IT and AI companies',
                'Leveraging press coverage to attract investors and clients',
                'Crisis communications in an AI-driven world',
                'Social media strategies for tech-forward brands',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>✓</span>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>About FirstName Communications</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              FirstName Communications is a specialist PR agency focused exclusively on the IT and AI industries. 
              With deep expertise in technology communications, they help businesses tell their story, build credibility, 
              and gain the media coverage needed to accelerate growth in competitive markets.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/sessions/ai-revolution" className="btn btn-secondary">← Part 1</Link>
            <Link href="/booking" className="btn btn-primary">Book Your Ticket</Link>
            <Link href="/sessions/live-build" className="btn btn-secondary">Part 3 →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
