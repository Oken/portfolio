import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chinonso Oken — Doctor & Software Engineer',
  description:
    'Portfolio of Chinonso Oken — a medical doctor and software engineer building at the intersection of healthcare and technology.',
  keywords: ['medical doctor', 'software engineer', 'health tech', 'MBBS', 'Nigeria', 'portfolio'],
  openGraph: {
    title: 'Chinonso Oken — Doctor & Software Engineer',
    description: 'Where clinical intuition meets technical precision.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
