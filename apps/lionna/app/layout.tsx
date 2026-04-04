import type { Metadata } from 'next';
import './globals.css';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
