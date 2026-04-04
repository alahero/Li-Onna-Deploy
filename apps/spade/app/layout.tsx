import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SPADE',
  description: 'SPADE — Guadalajara, MX. AV. Real de Acueducto 300, Puerta de Hierro 45116.',
  metadataBase: new URL('https://spade.mx'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://spade.mx',
    siteName: 'SPADE',
    title: 'SPADE',
    description: 'SPADE — Guadalajara, MX.',
  },
  robots: {
    index: true,
    follow: true,
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
