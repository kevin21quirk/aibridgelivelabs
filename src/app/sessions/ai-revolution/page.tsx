import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SessionExperience, { SessionData } from '../../../components/SessionExperience';

const data: SessionData = {
  part: 'Part 1 • 9:00 – 9:40',
  badgeColor: '#a5b4fc',
  accent: '#6366f1',
  accent2: '#22d3ee',
  glow: 'rgba(99, 102, 241, 0.35)',
  soft: 'rgba(99, 102, 241, 0.18)',
  bgImage: '/Part1.webp',
  titleLead: 'The AI ',
  titleHighlight: 'Revolution',
  titleTail: 'for Business',
  presenter: 'AI Bridge Solutions',
  tagline: 'An in-depth look at how artificial intelligence is reshaping the business landscape — and how to put it to work for you.',
  stats: [
    { value: '40', label: 'Minutes' },
    { value: '6+', label: 'Key Takeaways' },
    { value: 'All', label: 'Levels Welcome' },
    { value: '∞', label: 'Possibilities' },
  ],
  overviewKicker: 'Session Overview',
  overviewHeading: 'Your competitive advantage starts here',
  overview: [
    "This opening session is an in-depth exploration of how artificial intelligence is reshaping the business landscape. You'll discover how AI tools, automation, and machine-learning strategies can project your company to the forefront of your industry — from streamlining operations to unlocking entirely new revenue streams.",
    "Whether you're a startup founder, an established business owner, or a corporate decision-maker, this session will give you the knowledge and confidence to embrace AI as your competitive advantage.",
  ],
  learnKicker: "What You'll Learn",
  learnHeading: 'Six ways AI changes the game',
  learnItems: [
    { icon: '🌐', title: 'Cross-Sector Impact', text: 'How AI is already transforming businesses across every sector.' },
    { icon: '🛠️', title: 'Practical Tools', text: 'AI tools you can implement immediately in your workflows.' },
    { icon: '📉', title: 'Cost & Efficiency', text: 'Real cost savings and efficiency gains from AI automation.' },
    { icon: '🔎', title: 'Spot Opportunities', text: 'Identify AI opportunities within your existing operations.' },
    { icon: '🚀', title: 'AI-First Strategy', text: 'Build a sustainable, AI-first strategy for growth.' },
    { icon: '📈', title: 'Real Case Studies', text: 'Real-world examples of AI-powered business transformation.' },
  ],
  next: { href: '/sessions/pr-and-ai', label: 'Part 2: PR in the Age of AI' },
};

export default function AIRevolutionPage() {
  return (
    <main>
      <Navbar />
      <SessionExperience data={data} />
      <Footer />
    </main>
  );
}
