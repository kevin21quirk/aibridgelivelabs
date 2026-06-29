'use client';

import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState, FormEvent } from 'react';

const SUPPORT_EMAIL = 'support@aibridgesolutions.co.uk';
const SUPPORT_PHONE_DISPLAY = '+44 7359 969266';
const SUPPORT_PHONE_TEL = '+447359969266';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name} — AI Bridge Live Labs`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 'var(--radius)',
    color: 'var(--text)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    backdropFilter: 'blur(10px)',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
    fontSize: '0.875rem',
    color: 'var(--text-muted)',
  };

  return (
    <main>
      <Navbar />

      <section className="hero-gradient grid-pattern" style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        <div className="animate-blob" style={{ position: 'absolute', top: '20%', right: '15%', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.1)', filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
            Have a question about AI Bridge Live Labs? Send us a message below — or if
            you&apos;re ready to attend, you can <Link href="/booking" className="gradient-text" style={{ fontWeight: 700 }}>buy your tickets online</Link>.
          </p>
        </div>
      </section>

      <section className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {submitted ? (
            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Message Sent!</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Thank you for reaching out. We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={labelStyle}>Your name</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label style={labelStyle}>Email address</label>
                <input
                  style={inputStyle}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          )}

          <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="card" style={{ textAlign: 'center', padding: '1.5rem', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📧</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email</p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-word' }}>{SUPPORT_EMAIL}</p>
            </a>
            <a href={`tel:${SUPPORT_PHONE_TEL}`} className="card" style={{ textAlign: 'center', padding: '1.5rem', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Phone</p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{SUPPORT_PHONE_DISPLAY}</p>
            </a>
            <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Event Date</p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>2nd September 2026</p>
            </div>
            <Link href="/booking" className="card" style={{ textAlign: 'center', padding: '1.5rem', display: 'block' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎟️</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Tickets</p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>£10 — Buy online</p>
            </Link>
          </div>

          <div className="glass-panel" style={{ marginTop: '2.5rem', padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ready to join us?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Skip the wait and secure your place now — tickets are just £10 and limited to 100 seats.
            </p>
            <Link href="/booking" className="btn btn-primary">Buy Tickets Online</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
