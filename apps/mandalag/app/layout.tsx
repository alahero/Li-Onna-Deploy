import type { Metadata } from 'next';
import './fonts.css';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mandala Group — World Class Experiences Crafters',
    template: '%s | Mandala Group',
  },
  description: 'World class experiences crafters. From nightlife and daylife to gastronomic and events, Mandala Group creates unforgettable experiences.',
  metadataBase: new URL('https://mandalagroup.mx'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mandala Group — World Class Experiences Crafters',
    description: 'World class experiences crafters. From nightlife to gastronomic, Mandala Group creates unforgettable experiences.',
    url: 'https://mandalagroup.mx',
    siteName: 'Mandala Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mandala Group — World Class Experiences Crafters',
    description: 'World class experiences crafters.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
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
