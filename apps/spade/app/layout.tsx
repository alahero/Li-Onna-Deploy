import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SPADE | Premium Cocktail Bar — spade.mx',
    template: '%s | SPADE',
  },
  description:
    'SPADE — Cocktail bar de autor en México. Ambiente sofisticado, cócteles de temporada y eventos exclusivos. Reserva tu mesa hoy.',
  keywords: [
    'SPADE',
    'cocktail bar',
    'bar de autor',
    'lounge',
    'México',
    'cócteles',
    'eventos',
    'reservaciones',
    'spade.mx',
    'bar premium',
  ],
  metadataBase: new URL('https://spade.mx'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://spade.mx',
    siteName: 'SPADE',
    title: 'SPADE | Premium Cocktail Bar',
    description:
      'Cocktail bar de autor en México. Ambiente sofisticado, cócteles de temporada y eventos exclusivos.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPADE | Premium Cocktail Bar',
    description: 'Cocktails de autor, ambiente sofisticado y una noche que no olvidarás.',
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
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cormorant Garamond — art deco / luxury serif for headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-black text-brand-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
