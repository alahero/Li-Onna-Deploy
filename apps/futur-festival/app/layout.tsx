import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'FUTUR Festival — Coming to Mexico',
    template: '%s | FUTUR Festival',
  },
  description:
    'FUTUR Festival is coming to Mexico. Register now to be the first to know.',
  metadataBase: new URL('https://futurfestival.mx'),
  keywords: ['festival', 'música electrónica', 'México', 'FUTUR', 'techno', 'house', 'EDM'],
  authors: [{ name: 'FUTUR Festival' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FUTUR Festival — Coming to Mexico',
    description: 'FUTUR Festival is coming to Mexico. Register now.',
    url: 'https://futurfestival.mx',
    siteName: 'FUTUR Festival',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FUTUR Festival — Coming to Mexico',
    description: 'FUTUR Festival is coming to Mexico. Register now.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 },
  },
  icons: {
    icon: '/favicon-square.png',
    apple: '/favicon-square.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <body style={{ backgroundColor: '#224366', color: '#ffffff' }}>
        {children}
      </body>
    </html>
  );
}
