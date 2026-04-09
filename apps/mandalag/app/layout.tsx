import type { Metadata } from 'next';
import { JsonLd } from '@mg/ui-primitives';
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://mandalagroup.mx/#organization',
  name: 'Mandala Group',
  alternateName: 'MandalaG',
  url: 'https://mandalagroup.mx',
  description:
    'World class experiences crafters. From nightlife and daylife to gastronomic and events, Mandala Group creates unforgettable experiences.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MX',
  },
  subOrganization: [
    { '@type': 'NightClub', name: 'GUEPARDO', url: 'https://guepardo.com.mx' },
    { '@type': 'NightClub', name: 'Tehmplo', url: 'https://www.tehmplo.com' },
    { '@type': 'BarOrPub', name: 'SPADE', url: 'https://spade.mx' },
    { '@type': 'Restaurant', name: 'Tacos Atarantados', url: 'https://tacosatarantados.mx' },
    { '@type': 'Restaurant', name: 'LI-ONNA', url: 'https://lionna.es' },
    { '@type': 'MusicEvent', name: 'FUTUR Festival', url: 'https://futurfestival.mx' },
    { '@type': 'NightClub', name: 'Houdinni', url: 'https://houdinni.com' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#0e0e0f', color: '#fff', margin: 0, padding: 0, fontFamily: 'Inter, sans-serif' }}>
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
