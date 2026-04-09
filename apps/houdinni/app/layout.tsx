import type { Metadata, Viewport } from 'next';
import { JsonLd } from '@mg/ui-primitives';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Houdinni',
    template: '%s | Houdinni',
  },
  description: 'Houdinni Madrid — speakeasy, cócteles y entretenimiento en vivo.',
  metadataBase: new URL('https://houdinni.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://houdinni.com',
    siteName: 'Houdinni',
    title: 'Houdinni',
    description: 'Houdinni Madrid — speakeasy, cócteles y entretenimiento en vivo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houdinni',
    description: 'Houdinni Madrid — speakeasy, cócteles y entretenimiento en vivo.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NightClub',
  '@id': 'https://houdinni.com/#venue',
  name: 'Houdinni',
  url: 'https://houdinni.com',
  description:
    'Houdinni — Un speakeasy donde la magia y la mixología se encuentran. Shows de ilusionismo, cócteles de autor y una experiencia que desafía los sentidos.',
  image: 'https://houdinni.com/apple-touch-icon.png',
  priceRange: '$$$',
  servesCuisine: 'Cocktails',
  sameAs: [
    'https://instagram.com/houdinni',
    'https://facebook.com/houdinni',
    'https://tiktok.com/@houdinni',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Framer Events script */}
        <script src="https://events.framer.com/script?v=2" async />
      </head>
      <body className="bg-houdinni-black text-houdinni-white min-h-screen overflow-x-hidden">
        <JsonLd data={jsonLd} />
        {children}
      </body>
    </html>
  );
}
