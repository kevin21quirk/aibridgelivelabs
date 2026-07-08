import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const dynamic = 'force-dynamic';

export default function SuccessPage() {
  return (
    <main>
      <Navbar />
      <section className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h1 className="gradient-text" style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1rem' }}>
            You&apos;re in!
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Your ticket for <strong style={{ color: 'var(--text)' }}>AI Bridge Live Labs</strong> is confirmed.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            A branded ticket with your unique QR code has been sent to your email.
            Please show it at the registration desk on <strong style={{ color: 'var(--text)' }}>2 September 2026</strong>.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/" className="btn btn-primary">
              Return to event page
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact us
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '2rem' }}>
            Didn&apos;t receive an email? Check your spam folder or contact{' '}
            <a href="mailto:support@aibridgesolutions.co.uk" style={{ color: 'var(--accent)' }}>
              support@aibridgesolutions.co.uk
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
