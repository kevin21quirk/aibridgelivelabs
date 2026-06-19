'use client';

import { useState, FormEvent } from 'react';

interface BookingFormProps {
  remaining: number;
}

export default function BookingForm({ remaining }: BookingFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [tickets, setTickets] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const soldOut = remaining <= 0;
  const maxPurchasable = Math.min(remaining, 5);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, tickets }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message || 'Failed to create checkout session');
      setLoading(false);
    }
  }

  if (soldOut) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Sold out</h2>
        <p style={{ color: 'var(--text-muted)' }}>All 100 tickets have been claimed. Thank you for your interest!</p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'var(--bg)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 'var(--radius)',
    color: 'var(--text)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
    fontSize: '0.875rem',
  };

  return (
    <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <label style={labelStyle}>Full name *</label>
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
        <label style={labelStyle}>Email address *</label>
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
        <label style={labelStyle}>Company</label>
        <input
          style={inputStyle}
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Optional"
        />
      </div>

      <div>
        <label style={labelStyle}>Number of tickets (max {maxPurchasable})</label>
        <select
          style={{ ...inputStyle, cursor: 'pointer' }}
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value))}
        >
          {Array.from({ length: maxPurchasable }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} ticket{n > 1 ? 's' : ''} — £{n * 10}.00
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p style={{ color: '#ef4444', fontSize: '0.875rem', padding: '0.75rem', background: 'rgba(239,68,68,0.1)', borderRadius: 'var(--radius)' }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary glow" disabled={loading} style={{ width: '100%' }}>
        {loading ? 'Redirecting to payment...' : `Pay £${tickets * 10}.00`}
      </button>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textAlign: 'center' }}>
        You will be redirected to Stripe for secure payment processing.
      </p>
    </form>
  );
}
