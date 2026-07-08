'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Ticket } from '../../../../lib/db';
import { formatAmount } from '../../../../lib/ticket';

interface Props {
  ticket: Ticket | null;
  token: string;
}

export default function CheckInView({ ticket, token }: Props) {
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [checkedInAt, setCheckedInAt] = useState<string | null>(ticket?.checked_in_at ?? null);

  if (!ticket) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❌</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ef4444', marginBottom: '0.5rem' }}>
          Invalid Ticket
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          This QR code is not recognised. The ticket may not exist.
        </p>
        <Link href="/admin/checkin" className="btn btn-secondary">← Back to Check-In</Link>
      </div>
    );
  }

  const isRefunded = ticket.status === 'refunded';
  const isCancelled = ticket.status === 'cancelled';
  const alreadyCheckedIn = checkedInAt !== null;
  const canCheckIn = ticket.status === 'valid' && !alreadyCheckedIn && state !== 'done';

  async function handleCheckIn() {
    setState('loading');
    try {
      const res = await fetch(`/api/admin/checkin/${token}`, { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        setState('done');
        setCheckedInAt(new Date().toISOString());
        setMessage('✅ Checked in successfully!');
      } else {
        setState('error');
        setMessage(data.error ?? 'Check-in failed.');
      }
    } catch {
      setState('error');
      setMessage('Network error. Please try again.');
    }
  }

  const statusColor = isRefunded || isCancelled ? '#ef4444' : alreadyCheckedIn || state === 'done' ? '#f59e0b' : '#22c55e';
  const statusLabel = isRefunded ? 'REFUNDED' : isCancelled ? 'CANCELLED' : alreadyCheckedIn || state === 'done' ? 'ALREADY CHECKED IN' : 'VALID';

  return (
    <div style={{ maxWidth: '520px', margin: '0 auto', padding: '2rem 1rem' }}>

      {/* Status banner */}
      <div style={{
        background: `${statusColor}22`,
        border: `1px solid ${statusColor}55`,
        borderRadius: '10px',
        padding: '1rem 1.5rem',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: statusColor, flexShrink: 0 }} />
        <div>
          <p style={{ color: statusColor, fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', margin: 0 }}>{statusLabel}</p>
          {(alreadyCheckedIn || state === 'done') && checkedInAt && (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: '2px 0 0' }}>
              Checked in: {new Date(checkedInAt).toLocaleString('en-GB')}
            </p>
          )}
        </div>
      </div>

      {/* Ticket details */}
      <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Ticket Details
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {[
              ['Ticket Code', ticket.ticket_code],
              ['Name', ticket.buyer_name],
              ['Email', ticket.buyer_email],
              ['Amount Paid', formatAmount(ticket.amount_paid, ticket.currency)],
              ['Purchased', new Date(ticket.created_at).toLocaleString('en-GB')],
            ].map(([label, value]) => (
              <tr key={label} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <td style={{ color: 'var(--text-muted)', fontSize: '0.85rem', padding: '0.5rem 0', width: '40%' }}>{label}</td>
                <td style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 600, padding: '0.5rem 0' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action area */}
      {canCheckIn && (
        <button
          onClick={handleCheckIn}
          disabled={state === 'loading'}
          className="btn btn-primary"
          style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}
        >
          {state === 'loading' ? 'Checking in…' : '✓ Check In Attendee'}
        </button>
      )}

      {(isRefunded || isCancelled) && (
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <p style={{ color: '#ef4444', fontWeight: 700, margin: '0 0 4px' }}>Entry Denied</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
            This ticket has been {ticket.status}. Please contact the event organiser.
          </p>
        </div>
      )}

      {state === 'done' && (
        <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '1rem', textAlign: 'center', marginTop: '0.75rem' }}>
          <p style={{ color: '#22c55e', fontWeight: 700, margin: 0 }}>{message}</p>
        </div>
      )}

      {state === 'error' && (
        <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '1rem', textAlign: 'center', marginTop: '0.75rem' }}>
          <p style={{ color: '#ef4444', fontWeight: 700, margin: 0 }}>{message}</p>
        </div>
      )}

      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <Link href="/admin/checkin" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          ← Back to Check-In
        </Link>
      </div>
    </div>
  );
}
