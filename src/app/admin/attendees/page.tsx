import Link from 'next/link';
import { getAllTickets, Ticket } from '../../../lib/db';
import { formatAmount } from '../../../lib/ticket';
import Navbar from '../../../components/Navbar';

export const dynamic = 'force-dynamic';

function statusBadge(ticket: Ticket) {
  if (ticket.status === 'refunded') return { label: 'Refunded', color: '#ef4444' };
  if (ticket.status === 'cancelled') return { label: 'Cancelled', color: '#ef4444' };
  if (ticket.checked_in_at) return { label: 'Checked In', color: '#22c55e' };
  return { label: 'Valid', color: '#22d3ee' };
}

export default async function AttendeesPage() {
  const tickets = await getAllTickets();
  const checkedIn = tickets.filter((t) => t.checked_in_at).length;
  const valid = tickets.filter((t) => t.status === 'valid').length;

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <div style={{ paddingTop: '5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' }}>

          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>Attendees</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>AI Bridge Live Labs — 2 September 2026</p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="/admin/checkin" className="btn btn-secondary" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
                ← Check-In
              </Link>
              <a
                href="/api/admin/tickets/export"
                className="btn"
                style={{ fontSize: '0.85rem', padding: '0.5rem 1rem', background: 'rgba(34,211,238,0.1)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)', borderRadius: '8px', textDecoration: 'none' }}
              >
                ⬇ Export CSV
              </a>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {[
              { label: 'Total Tickets', value: tickets.length },
              { label: 'Valid', value: valid },
              { label: 'Checked In', value: checkedIn },
              { label: 'Remaining', value: valid - checkedIn },
            ].map(({ label, value }) => (
              <div key={label} className="card" style={{ flex: '1', minWidth: '130px', textAlign: 'center', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800 }} className="gradient-text">{value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Table */}
          {tickets.length === 0 ? (
            <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: 'var(--text-muted)' }}>No tickets sold yet.</p>
            </div>
          ) : (
            <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      {['Ticket Code', 'Name', 'Email', 'Amount', 'Status', 'Checked In', ''].map((h) => (
                        <th key={h} style={{ padding: '0.875rem 1rem', textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((ticket) => {
                      const { label, color } = statusBadge(ticket);
                      return (
                        <tr key={ticket.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <td style={{ padding: '0.75rem 1rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#22d3ee', whiteSpace: 'nowrap' }}>
                            {ticket.ticket_code}
                          </td>
                          <td style={{ padding: '0.75rem 1rem', fontWeight: 600, whiteSpace: 'nowrap' }}>{ticket.buyer_name}</td>
                          <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{ticket.buyer_email}</td>
                          <td style={{ padding: '0.75rem 1rem', whiteSpace: 'nowrap' }}>{formatAmount(ticket.amount_paid, ticket.currency)}</td>
                          <td style={{ padding: '0.75rem 1rem' }}>
                            <span style={{ color, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>{label}</span>
                          </td>
                          <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                            {ticket.checked_in_at ? new Date(ticket.checked_in_at).toLocaleString('en-GB') : '—'}
                          </td>
                          <td style={{ padding: '0.75rem 1rem' }}>
                            <Link href={`/admin/checkin/${ticket.secure_token}`} style={{ color: '#22d3ee', fontSize: '0.8rem', fontWeight: 600 }}>
                              View →
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
