import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { JsonLd } from '@mg/ui-primitives';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SPADE',
    template: '%s | SPADE',
  },
  description: 'SPADE — Guadalajara, MX. AV. Real de Acueducto 300, Puerta de Hierro 45116.',
  metadataBase: new URL('https://spade.mx'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://spade.mx',
    siteName: 'SPADE',
    title: 'SPADE',
    description: 'SPADE — Guadalajara, MX.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPADE',
    description: 'SPADE — Guadalajara, MX.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  '@id': 'https://spade.mx/#bar',
  name: 'SPADE',
  url: 'https://spade.mx',
  description:
    'Cocktail bar de autor en Guadalajara. Ambiente sofisticado, cócteles de temporada y eventos exclusivos.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Real de Acueducto 300, Puerta de Hierro',
    postalCode: '45116',
    addressLocality: 'Zapopan',
    addressRegion: 'Jalisco',
    addressCountry: 'MX',
  },
  priceRange: '$$$',
  servesCuisine: 'Cocktails',
  sameAs: ['https://instagram.com/spade.mx'],
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
    <html lang="es" className={inter.className}>
      <body>
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
