import type { Metadata, Viewport } from 'next';
import { JsonLd } from '@mg/ui-primitives';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#005BFF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'LI-ONNA リオンナ — Cocina japonesa con alma latina',
    template: '%s | LI-ONNA',
  },
  description: 'LI-ONNA リオンナ  - Cocina japonesa con alma latina',
  metadataBase: new URL('https://lionna.es'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://lionna.es',
    siteName: 'LI-ONNA',
    title: 'LI-ONNA リオンナ — Cocina japonesa con alma latina',
    description: 'LI-ONNA リオンナ  - Cocina japonesa con alma latina',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LI-ONNA リオンナ — Cocina japonesa con alma latina',
    description: 'LI-ONNA リオンナ  - Cocina japonesa con alma latina',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://lionna.es/#restaurant',
  name: 'LI-ONNA リオンナ',
  alternateName: 'LI-ONNA Madrid',
  url: 'https://lionna.es',
  image: 'https://lionna.es/images/og-image.png',
  description: 'Cocina japonesa con alma latina en Madrid.',
  servesCuisine: ['Japanese', 'Latin American', 'Fusion', 'Nikkei'],
  priceRange: '$$$',
  acceptsReservations: true,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  sameAs: ['https://instagram.com/lionna.madrid'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <JsonLd data={jsonLd} />
        {/* Fixed blue background — visible when hero scrolls away */}
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgb(0, 91, 255)',
            zIndex: 0,
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
