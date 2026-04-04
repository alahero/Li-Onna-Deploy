import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'LI-ONNA | Cocina Japonesa con Alma Latina — Madrid',
    template: '%s | LI-ONNA',
  },
  description:
    'LI-ONNA (リオンナ) — Cocina japonesa con alma latina en el corazón de Barrio Salamanca, Madrid. Alta cocina de fusión japonesa-latina en C. de Recoletos, 1.',
  keywords: [
    'LI-ONNA',
    'リオンナ',
    'restaurante japonés Madrid',
    'cocina japonesa',
    'fusión japonesa latina',
    'Barrio Salamanca',
    'Recoletos',
    'Madrid',
    'sushi Madrid',
    'alta cocina',
    'Tanaka Hospitality',
    'Grupo Kampai',
    'Mandala Group',
  ],
  metadataBase: new URL('https://lionna.es'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://lionna.es',
    siteName: 'LI-ONNA',
    title: 'LI-ONNA | Cocina Japonesa con Alma Latina',
    description:
      'リオンナ — Cocina japonesa con alma latina. Restaurante en C. de Recoletos, 1, Barrio Salamanca, Madrid.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LI-ONNA | Cocina Japonesa con Alma Latina',
    description:
      'リオンナ — Cocina japonesa con alma latina. Barrio Salamanca, Madrid.',
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
          Cormorant Garamond: elegant serif for display headings
          Jost: clean geometric sans for body/UI text
          Noto Serif JP: Japanese characters rendering
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&family=Noto+Serif+JP:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-black text-brand-cream min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
