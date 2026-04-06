import type { Metadata } from 'next';
import './framer.css';

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
      <body>
        {children}
      </body>
    </html>
  );
}
