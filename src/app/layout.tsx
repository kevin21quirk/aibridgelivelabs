import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'AI Bridge Live Labs - 2nd September 2026',
  description:
    'Join AI Bridge Solutions for an exclusive event demonstrating how AI can revolutionise your business. Limited to 100 tickets.',
  openGraph: {
    title: 'AI Bridge Live Labs',
    description: 'AI revolution for business. 2nd September 2026.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
