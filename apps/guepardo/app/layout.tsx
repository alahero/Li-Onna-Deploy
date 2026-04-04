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
    default: 'Guepardo | El Mejor Antro de México',
    template: '%s | Guepardo',
  },
  description:
    'Guepardo — La experiencia de nightlife más exclusiva. Eventos con los mejores DJs, zona VIP, y una atmósfera única en México.',
  keywords: [
    'Guepardo',
    'antro',
    'nightclub',
    'discoteca',
    'México',
    'eventos',
    'DJs',
    'VIP',
    'fiesta',
  ],
  metadataBase: new URL('https://guepardo.com.mx'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://guepardo.com.mx',
    siteName: 'Guepardo',
    title: 'Guepardo | El Mejor Antro de México',
    description:
      'La experiencia de nightlife más exclusiva. Eventos con los mejores DJs, zona VIP, y una atmósfera única.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guepardo | El Mejor Antro de México',
    description:
      'La experiencia de nightlife más exclusiva. Eventos con los mejores DJs, zona VIP, y una atmósfera única.',
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
        {/* Bebas Neue for display headings */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-black text-brand-white min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
