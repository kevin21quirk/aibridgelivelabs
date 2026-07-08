import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeHero from '../components/HomeHero';
import HomeFeatures from '../components/HomeFeatures';
import GlassCarousel from '../components/GlassCarousel';
import SpeakersSection from '../components/SpeakersSection';
import HomeCTA from '../components/HomeCTA';
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <HomeFeatures />
      <GlassCarousel />
      <SpeakersSection />
      <HomeCTA />
      <Footer />
    </main>
  );
}
