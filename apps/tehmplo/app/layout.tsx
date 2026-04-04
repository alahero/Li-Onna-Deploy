import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tehmplo – Elevate Your Tulum Experience',
  description:
    'Premium open-air jungle nightclub in the heart of Tulum. VIP tables, world-class DJs, and an unforgettable experience under the stars.',
  keywords: [
    'Tehmplo',
    'Tulum nightclub',
    'jungle club Tulum',
    'VIP tables Tulum',
    'open air club Mexico',
    'Tulum events',
  ],
  openGraph: {
    title: 'Tehmplo – Elevate Your Tulum Experience',
    description:
      'Premium open-air jungle nightclub in the heart of Tulum. VIP tables, world-class DJs, and an unforgettable experience under the stars.',
    url: 'https://tehmplo.com',
    siteName: 'Tehmplo',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tehmplo – Elevate Your Tulum Experience',
    description:
      'Premium open-air jungle nightclub in Tulum, Mexico.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-brand-black text-brand-cream antialiased">
        {children}
      </body>
    </html>
  );
}
