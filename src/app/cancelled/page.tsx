import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const dynamic = 'force-dynamic';

export default function CancelledPage() {
  return (
    <main>
      <Navbar />
      <section className="container" style={{ paddingTop: '6rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Booking cancelled
          </h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Your payment was cancelled and no ticket has been reserved. If you change your mind, you can try again.
          </p>
          <a href="/booking" className="btn btn-primary">
            Try again
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
