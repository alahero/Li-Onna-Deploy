import type { Metadata } from 'next';
import { JsonLd } from '@mg/ui-primitives';
import './globals.css';

export const metadata: Metadata = {
  title: 'GUEPARDO',
  description:
    'Un espacio donde la noche se disfruta: cócteles sin pretensiones, música sin límites y ambiente sin juicios. Guepardo no sigue tendencias, las define. Sao Paulo, Providencia. Guadalajara, Jalisco.',
  metadataBase: new URL('https://guepardo.com.mx'),
  alternates: {
    canonical: 'https://guepardo.com.mx/',
  },
  openGraph: {
    type: 'website',
    locale: 'es',
    url: 'https://guepardo.com.mx',
    siteName: 'GUEPARDO',
    title: 'GUEPARDO',
    description:
      'Un espacio donde la noche se disfruta: cócteles sin pretensiones, música sin límites y ambiente sin juicios. Guepardo no sigue tendencias, las define. Sao Paulo, Providencia. Guadalajara, Jalisco.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GUEPARDO',
    description:
      'Un espacio donde la noche se disfruta: cócteles sin pretensiones, música sin límites y ambiente sin juicios. Guepardo no sigue tendencias, las define.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NightClub',
  '@id': 'https://guepardo.com.mx/#nightclub',
  name: 'GUEPARDO',
  url: 'https://guepardo.com.mx',
  image: 'https://guepardo.com.mx/images/og-image.png',
  description:
    'Un espacio donde la noche se disfruta: cócteles sin pretensiones, música sin límites y ambiente sin juicios.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'São Paulo 2367 int. 6, Providencia',
    addressLocality: 'Guadalajara',
    addressRegion: 'Jalisco',
    postalCode: '44630',
    addressCountry: 'MX',
  },
  telephone: '+52-33-2055-9502',
  servesCuisine: 'Cocktails',
  priceRange: '$$$',
  sameAs: [
    'https://www.instagram.com/guepardo.mx/',
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Mandala Group',
    url: 'https://mandalagroup.mx/',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#3d1010' }}>
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
