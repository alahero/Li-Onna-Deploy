import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import { JsonLd } from '@mg/ui-primitives';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Tehmplo – Elevate Your Tulum Experience',
    template: '%s | Tehmplo',
  },
  description:
    'Hidden in the jungle, this is where music, people, and emotions come together to make Tulum truly one of a kind. World-class DJs and an atmosphere that awakens your senses.',
  metadataBase: new URL('https://www.tehmplo.com'),
  keywords: ['Tehmplo', 'Tulum nightclub', 'jungle club Tulum', 'VIP tables Tulum', 'open air club Mexico', 'Tulum events'],
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 } },
  openGraph: {
    title: 'Tehmplo – Elevate Your Tulum Experience',
    description: 'Hidden in the jungle, this is where music, people, and emotions come together to make Tulum truly one of a kind.',
    url: 'https://www.tehmplo.com',
    siteName: 'Tehmplo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tehmplo – Elevate Your Tulum Experience',
    description: 'Hidden in the jungle. Tulum nightclub experience.',
  },
  alternates: {
    canonical: 'https://www.tehmplo.com',
  },
  icons: {
    icon: '/images/favicon-light.png',
    apple: '/images/favicon-light.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NightClub',
  '@id': 'https://www.tehmplo.com/#nightclub',
  name: 'Tehmplo',
  url: 'https://www.tehmplo.com',
  image: 'https://www.tehmplo.com/images/favicon-light.png',
  description:
    'Hidden in the jungle, this is where music, people, and emotions come together to make Tulum truly one of a kind.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tulum',
    addressRegion: 'Quintana Roo',
    addressCountry: 'MX',
  },
  priceRange: '$$$',
  sameAs: ['https://instagram.com/tehmplo'],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Mandala Group',
    url: 'https://mandalagroup.mx/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Source+Sans+3:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* General Sans from Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FVMKLEM3NT" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-FVMKLEM3NT');`
        }} />
      </head>
      <body className="bg-tehmplo-bg text-white antialiased">
        <JsonLd data={jsonLd} />
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
