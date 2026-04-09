import type { Metadata, Viewport } from 'next';
import { createReader } from '@keystatic/core/reader';
import { JsonLd } from '@mg/ui-primitives';
import keystaticConfig from '../keystatic.config';
import './fonts.css';
import './globals.css';

const SITE_URL = 'https://mandalagroup.mx';
const DEFAULT_TITLE = 'Mandala Group — World Class Experiences Crafters';
const DEFAULT_DESCRIPTION =
  'World class experiences crafters. From nightlife and daylife to gastronomic and events, Mandala Group creates unforgettable experiences.';

export const viewport: Viewport = {
  themeColor: '#0e0e0f',
  width: 'device-width',
  initialScale: 1,
};

/**
 * Metadata is read from Keystatic so marketing can change the site title,
 * description, favicon and OG image without touching code. Values fall
 * back to the static defaults when the singleton isn't populated yet.
 */
export async function generateMetadata(): Promise<Metadata> {
  const reader = createReader(process.cwd(), keystaticConfig);
  const settings = await reader.singletons.siteSettings.read().catch(() => null);

  const siteName = settings?.siteName || 'Mandala Group';
  const tagline = settings?.tagline || 'World Class Experiences Crafters';
  const metaTitle = settings?.metaTitle || DEFAULT_TITLE;
  const metaDescription = settings?.metaDescription || DEFAULT_DESCRIPTION;
  const ogImage = settings?.ogImage || undefined;
  const favicon = settings?.favicon || undefined;

  return {
    title: {
      default: metaTitle,
      template: `%s | ${siteName}`,
    },
    description: metaDescription,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: '/' },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: SITE_URL,
      siteName,
      locale: settings?.language === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: tagline || metaDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
    },
    ...(favicon ? { icons: { icon: favicon, apple: favicon } } : {}),
  };
}

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const reader = createReader(process.cwd(), keystaticConfig);
  const settings = await reader.singletons.siteSettings.read().catch(() => null);
  const lang = settings?.language || 'en';

  return (
    <html lang={lang}>
      <body style={{ backgroundColor: '#0e0e0f', color: '#fff', margin: 0, padding: 0, fontFamily: 'Inter, sans-serif' }}>
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
