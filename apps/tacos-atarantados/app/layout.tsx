import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tacos Atarantados – Los Mejores Tacos de la Ciudad',
    template: '%s | Tacos Atarantados',
  },
  description:
    'Tacos Atarantados: sabor auténtico, ingredientes frescos y calidad insuperable. Visítanos en nuestras sucursales o pide a domicilio.',
  metadataBase: new URL('https://tacosatarantados.mx'),
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://tacosatarantados.mx',
    siteName: 'Tacos Atarantados',
    title: 'Tacos Atarantados – Los Mejores Tacos de la Ciudad',
    description:
      'Tacos Atarantados: sabor auténtico, ingredientes frescos y calidad insuperable.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tacos Atarantados',
    description: 'Los mejores tacos de la ciudad. Pide ahora.',
  },
  keywords: ['tacos', 'taqueria', 'comida mexicana', 'tacos atarantados', 'tacos a domicilio'],
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
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-screen bg-brand-cream text-brand-dark antialiased"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {children}
      </body>
    </html>
  );
}
