import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mandala Group — World Class Experiences Crafters',
  description: 'World class experiences crafters. From nightlife and daylife to gastronomic and events, Mandala Group creates unforgettable experiences.',
  openGraph: {
    title: 'Mandala Group — World Class Experiences Crafters',
    description: 'World class experiences crafters.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandala Group — World Class Experiences Crafters',
    description: 'World class experiences crafters.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-mg-bg text-white antialiased font-inter">
        {children}
      </body>
    </html>
  );
}
