import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
