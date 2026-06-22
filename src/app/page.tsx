import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import HomeFeatures from '../components/HomeFeatures';
import GlassCarousel from '../components/GlassCarousel';
import HomeAgendaPreview from '../components/HomeAgendaPreview';
import SpeakersSection from '../components/SpeakersSection';
import HomeCTA from '../components/HomeCTA';
import { getTicketsRemaining } from '../lib/db';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const remaining = await getTicketsRemaining();

  return (
    <main>
      <Navbar />
      <HomeHero remaining={remaining} />
      <HomeFeatures />
      <GlassCarousel />
      <HomeAgendaPreview />
      <SpeakersSection />
      <HomeCTA remaining={remaining} />
      <Footer />
    </main>
  );
}
