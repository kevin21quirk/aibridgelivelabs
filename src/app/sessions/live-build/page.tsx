import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SessionExperience, { SessionData } from '../../../components/SessionExperience';

const data: SessionData = {
  part: 'Part 3 • 10:40 – 11:40',
  badgeColor: '#c4b5fd',
  accent: '#8b5cf6',
  accent2: '#22d3ee',
  glow: 'rgba(139, 92, 246, 0.35)',
  soft: 'rgba(139, 92, 246, 0.18)',
  bgImage: '/Part3.webp',
  titleLead: 'Live Build: ',
  titleHighlight: 'App in an Afternoon',
  presenter: 'AI Bridge Solutions',
  tagline: 'Theory meets reality. Watch a fully functional app built from scratch — live, unscripted, in real time.',
  stats: [
    { value: '60', label: 'Minutes' },
    { value: '0→1', label: 'Concept to Deploy' },
    { value: 'Live', label: 'Unscripted Demo' },
    { value: 'Q&A', label: 'Ask Anything' },
  ],
  overviewKicker: 'Session Overview',
  overviewHeading: 'From blank screen to shipped — live on stage',
  overview: [
    "This is where theory meets reality. Watch as we build a fully functional application from scratch — live on stage, in real time. This hands-on demonstration showcases exactly how AI-powered development works in practice: from initial concept through to deployment, all within the allotted timescale.",
    "You'll witness first-hand how modern AI tools accelerate the development process, enabling what once took weeks to be accomplished in hours. This isn't a rehearsed demo — it's a live, unscripted build that proves the power of AI-assisted development.",
  ],
  learnKicker: "What You'll See",
  learnHeading: 'Six things you have to see to believe',
  learnItems: [
    { icon: '🏗️', title: 'Zero to Deployed', text: 'A real application built from nothing, live on stage.' },
    { icon: '🤖', title: 'AI Coding Live', text: 'AI tools writing, debugging, and deploying in real time.' },
    { icon: '⚡', title: 'Concept to Product', text: 'Go from idea to working product in a single session.' },
    { icon: '🔁', title: 'Modern Workflows', text: 'Development workflows any business can adopt today.' },
    { icon: '🧩', title: 'The Real Reality', text: 'The practical truth of AI-assisted software development.' },
    { icon: '💬', title: 'Live Q&A', text: 'Ask anything about the process as it unfolds.' },
  ],
  highlight: {
    emoji: '🚀',
    title: 'The Grand Finale',
    text: "This session is the highlight of the day — physical proof that AI is not just the future, it's the present. You'll leave knowing exactly what's possible.",
  },
  prev: { href: '/sessions/pr-and-ai', label: 'Part 2: PR in the Age of AI' },
};

export default function LiveBuildPage() {
  return (
    <main>
      <Navbar />
      <SessionExperience data={data} />
      <Footer />
    </main>
  );
}
