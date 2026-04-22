import type { Metadata } from 'next';
import { EventosFormVideoSection } from '@/components/eventos-form-video-section';
import { EventosHeroFoto } from '@/components/eventos-hero-foto';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const FONDO_HERO_EVENTOS = 'rgb(246, 246, 242)';

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Eventos a tu medida en LI-ONNA — Cocina japonesa con alma latina, Madrid.',
  openGraph: {
    title: 'Eventos — LI-ONNA リオンナ',
    description: 'Eventos a tu medida. Celebra con nosotros en C. de Recoletos, 1, Madrid.',
  },
};

export default function EventosPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: FONDO_HERO_EVENTOS, minHeight: '100vh' }}>
        <EventosHeroFoto />
        <EventosFormVideoSection />
      </main>

      <Footer />
    </>
  );
}
