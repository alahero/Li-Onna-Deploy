import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FUTUR Festival — El futuro del sonido. México.',
  description:
    'El festival de música electrónica más futurista de México. Lineup, boletos, horarios y más. futurfestival.mx',
  keywords: ['festival', 'música electrónica', 'México', 'FUTUR', 'techno', 'house', 'EDM'],
  authors: [{ name: 'FUTUR Festival' }],
  openGraph: {
    title: 'FUTUR Festival',
    description: 'El futuro del sonido. México.',
    url: 'https://futurfestival.mx',
    siteName: 'FUTUR Festival',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FUTUR Festival',
    description: 'El futuro del sonido. México.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es-MX"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-brand-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
