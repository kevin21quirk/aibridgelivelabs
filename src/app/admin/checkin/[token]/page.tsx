import { getTicketByToken } from '../../../../lib/db';
import CheckInView from './CheckInView';
import Navbar from '../../../../components/Navbar';

interface PageProps {
  params: { token: string };
}

export default async function CheckInTicketPage({ params }: PageProps) {
  const ticket = await getTicketByToken(params.token);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <div style={{ paddingTop: '5rem' }}>
        <CheckInView ticket={ticket} token={params.token} />
      </div>
    </main>
  );
}
