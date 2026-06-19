import Navbar from '../../components/Navbar';
import BookingForm from '../../components/BookingForm';
import Footer from '../../components/Footer';
import { getTicketsRemaining } from '../../lib/db';

export const dynamic = 'force-dynamic';

export default async function BookingPage() {
  const remaining = await getTicketsRemaining();

  return (
    <main>
      <Navbar />
      <section className="hero-gradient grid-pattern" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '3rem', overflow: 'hidden' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '20%', left: '10%', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(79, 70, 229, 0.12)', filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.5rem' }}>
            Secure your <span className="gradient-text">ticket</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Complete the form below to purchase your £10 ticket for AI Bridge Live Labs.
          </p>
        </div>
      </section>
      <section className="container" style={{ paddingTop: '0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <BookingForm remaining={remaining} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
