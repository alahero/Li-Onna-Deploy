import type { Metadata } from 'next';
import './fonts.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mandala Group — World Class Experiences Crafters',
  description: 'World class experiences crafters. From nightlife and daylife to gastronomic and events, Mandala Group creates unforgettable experiences.',
  openGraph: {
    title: 'Mandala Group — World Class Experiences Crafters',
    description: 'World class experiences crafters.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0e0e0f', color: '#fff', margin: 0, padding: 0, fontFamily: 'Inter, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
