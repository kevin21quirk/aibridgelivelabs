'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CheckInSearchPage() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    const value = input.trim().toUpperCase();
    if (!value) return;

    // If it looks like a full URL (QR scan pasted as text) extract the token
    const urlMatch = value.match(/\/ADMIN\/CHECKIN\/([A-F0-9]+)$/i);
    if (urlMatch) {
      router.push(`/admin/checkin/${urlMatch[1].toLowerCase()}`);
      return;
    }

    // Hex token (32 chars)
    if (/^[a-f0-9]{32}$/i.test(value)) {
      router.push(`/admin/checkin/${value.toLowerCase()}`);
      return;
    }

    // Try to look up by ticket code (AIBRIDGE-2026-XXXXXX)
    if (value.startsWith('AIBRIDGE-')) {
      const res = await fetch(`/api/admin/checkin/lookup?code=${encodeURIComponent(value)}`);
      if (res.ok) {
        const { token } = await res.json();
        router.push(`/admin/checkin/${token}`);
        return;
      }
      setError('Ticket code not found.');
      return;
    }

    setError('Please enter a valid ticket code (AIBRIDGE-2026-XXXXXX) or scan a QR code.');
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', padding: '2rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              Event Check-In
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>AI Bridge Live Labs — 2 September 2026</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/admin/attendees" className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
              Attendees
            </Link>
            <button onClick={handleLogout} className="btn" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)' }}>
              Log out
            </button>
          </div>
        </div>

        {/* QR scan instruction */}
        <div className="glass-panel" style={{ padding: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>📷</div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Scan a QR Code</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Use your device&apos;s camera app to scan the attendee&apos;s QR code.
            The check-in page will open automatically.
          </p>
        </div>

        {/* Manual entry */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
            Or enter a ticket code manually
          </h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="AIBRIDGE-2026-000001"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text)',
                fontSize: '1rem',
              }}
            />
            <button type="submit" className="btn btn-primary">
              Look up
            </button>
          </form>
          {error && (
            <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.75rem' }}>{error}</p>
          )}
        </div>

      </div>
    </main>
  );
}
