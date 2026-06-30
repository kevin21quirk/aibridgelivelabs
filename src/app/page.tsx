import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import HomeFeatures from '../components/HomeFeatures';
import GlassCarousel from '../components/GlassCarousel';
import SpeakersSection from '../components/SpeakersSection';
import HomeCTA from '../components/HomeCTA';
import { TICKETS_REMAINING } from '../lib/event';

export default function HomePage() {
  const remaining = TICKETS_REMAINING;

  return (
    <main>
      <Navbar />
      <HomeHero remaining={remaining} />
      <HomeFeatures />
      <GlassCarousel />
      <SpeakersSection />
      <HomeCTA remaining={remaining} />
      <Footer />
    </main>
  );
}
