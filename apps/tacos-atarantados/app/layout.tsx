import type { Metadata } from 'next';
import { JsonLd } from '@mg/ui-primitives';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tacos Atarantados',
    template: '%s | Tacos Atarantados',
  },
  description:
    'Nacimos en Monterrey y eso se nota. Somos tacos norteños, bien servidos y hechos con carácter.',
  metadataBase: new URL('https://tacosatarantados.mx'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://tacosatarantados.mx',
    siteName: 'Tacos Atarantados',
    title: 'Tacos Atarantados',
    description: 'Nacimos en Monterrey y eso se nota. Tacos norteños, bien servidos.',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tacos Atarantados',
    description: 'Tacos norteños, bien servidos y hechos con carácter.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon-light.gif', media: '(prefers-color-scheme: light)' },
      { url: '/images/favicon-dark.gif', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
  keywords: ['tacos', 'tacos atarantados', 'taqueria monterrey', 'tacos norteños', 'trompo'],
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://tacosatarantados.mx/#restaurant',
  name: 'Tacos Atarantados',
  url: 'https://tacosatarantados.mx',
  image: 'https://tacosatarantados.mx/images/og-image.png',
  description:
    'Nacimos en Monterrey y eso se nota. Somos tacos norteños, bien servidos y hechos con carácter.',
  servesCuisine: ['Mexican', 'Norteño', 'Tacos'],
  priceRange: '$$',
  acceptsReservations: false,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monterrey',
    addressRegion: 'Nuevo León',
    addressCountry: 'MX',
  },
  sameAs: [
    'https://instagram.com/tacosatarantados',
    'https://facebook.com/tacosatarantados',
    'https://tiktok.com/@tacosatarantados',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
