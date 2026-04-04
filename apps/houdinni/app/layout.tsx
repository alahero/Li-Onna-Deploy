import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Houdinni | El Speakeasy Mágico',
    template: '%s | Houdinni',
  },
  description:
    'Houdinni — Un speakeasy donde la magia y la mixología se encuentran. Shows de ilusionismo, cócteles de autor y una experiencia que desafía los sentidos.',
  keywords: [
    'Houdinni',
    'speakeasy',
    'bar mágico',
    'ilusionismo',
    'shows de magia',
    'cócteles',
    'experiencia',
    'México',
  ],
  metadataBase: new URL('https://houdinni.com'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://houdinni.com',
    siteName: 'Houdinni',
    title: 'Houdinni | El Speakeasy Mágico',
    description:
      'Donde la magia y la mixología se encuentran. Shows de ilusionismo y cócteles de autor.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houdinni | El Speakeasy Mágico',
    description:
      'Donde la magia y la mixología se encuentran. Shows de ilusionismo y cócteles de autor.',
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
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Cormorant Garamond: theatrical display serif (headings)
          Raleway: elegant geometric sans (body)
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-black text-brand-cream min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
