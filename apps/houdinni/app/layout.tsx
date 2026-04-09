import type { Metadata } from 'next';
import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
