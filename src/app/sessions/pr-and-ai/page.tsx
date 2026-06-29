import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { SessionData } from '../../../components/SessionExperience';
import PRExperience from '../../../components/PRExperience';

const data: SessionData = {
  part: 'Part 2 • 9:40 – 10:10',
  badgeColor: '#67e8f9',
  accent: '#06b6d4',
  accent2: '#22d3ee',
  glow: 'rgba(6, 182, 212, 0.35)',
  soft: 'rgba(6, 182, 212, 0.18)',
  bgImage: '/Part2.webp',
  titleLead: 'PR in the ',
  titleHighlight: 'Age of AI',
  presenter: 'Firstname Communications',
  tagline: 'Position your brand, craft a compelling AI narrative, and turn media attention into momentum.',
  stats: [
    { value: '30', label: 'Minutes' },
    { value: 'IT/AI', label: 'Specialists' },
    { value: '6+', label: 'Strategies' },
    { value: '360°', label: 'Brand Story' },
  ],
  overviewKicker: 'Session Overview',
  overviewHeading: 'Make your AI story impossible to ignore',
  overview: [
    "Firstname Communications are specialists in public relations for the IT and AI sectors. In this session, they'll share how to position your brand, craft compelling narratives around technology adoption, and leverage media attention to amplify your AI story.",
    "In a world where every company is becoming a technology company, your PR strategy must evolve. Learn how to stand out, attract the right attention, and build thought leadership in the AI space.",
  ],
  learnKicker: "What You'll Learn",
  learnHeading: 'Six moves for tech-forward PR',
  learnItems: [
    { icon: '📰', title: 'Craft Your Story', text: 'Shape your AI narrative for maximum media impact.' },
    { icon: '🧠', title: 'Thought Leadership', text: 'Build authority and credibility in the technology space.' },
    { icon: '🎯', title: 'IT & AI PR', text: 'PR strategies built specifically for IT and AI companies.' },
    { icon: '💼', title: 'Attract Capital', text: 'Use press coverage to draw investors and clients.' },
    { icon: '🛡️', title: 'Crisis Comms', text: 'Handle communications in an AI-driven, fast-moving world.' },
    { icon: '📣', title: 'Social Strategy', text: 'Social media playbooks for tech-forward brands.' },
  ],
  highlight: {
    emoji: '🤝',
    title: 'About Firstname Communications',
    text: 'A specialist PR agency focused exclusively on the IT and AI industries — helping businesses tell their story, build credibility, and earn the coverage needed to accelerate growth in competitive markets.',
  },
  quote: {
    text: 'In a world where every company is becoming a technology company, the brands that win are the ones who tell their AI story first — and tell it best.',
    attribution: 'Firstname Communications',
  },
  prev: { href: '/sessions/ai-revolution', label: 'Part 1: The AI Revolution' },
  next: { href: '/sessions/live-build', label: 'Part 3: Live Build' },
};

export default function PRAndAIPage() {
  return (
    <main>
      <Navbar />
      <PRExperience data={data} />
      <Footer />
    </main>
  );
}
