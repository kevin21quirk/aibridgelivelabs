import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const dynamic = 'force-dynamic';

export default function SuccessPage() {
  return (
    <main>
      <Navbar />
      <section className="container" style={{ paddingTop: '6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Booking confirmed!
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Thank you for purchasing your ticket to AI Bridge Live Labs. A confirmation email with your receipt will be sent shortly.
          </p>
          <a href="/" className="btn btn-primary">
            Return to event page
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
