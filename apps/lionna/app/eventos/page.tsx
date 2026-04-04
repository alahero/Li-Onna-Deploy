import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { EventsList } from '@/components/events-list';
import { ReservationCta } from '@/components/reservation-cta';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Eventos',
  description:
    'Descubre los próximos eventos en LI-ONNA: noches de jazz latino, menús omakase especiales, maridajes y experiencias únicas en C. de Recoletos, Madrid.',
  openGraph: {
    title: 'Eventos — LI-ONNA',
    description:
      'Noches de jazz, menús omakase y experiencias exclusivas. Agenda de eventos en LI-ONNA Madrid.',
  },
};

export default function EventosPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        {/* Page header */}
        <header className="relative py-24 px-6 md:px-12 bg-brand-black overflow-hidden border-b border-brand-gold/10">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-subtle opacity-30" />
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            aria-hidden="true"
          >
            <span
              className="japanese-text text-brand-gold/[0.04] font-light leading-none"
              style={{ fontSize: 'clamp(8rem, 18vw, 22rem)' }}
            >
              祭
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="section-subtitle mb-4">Agenda LI-ONNA</p>
            <h1 className="section-title font-light">Eventos</h1>

            <div className="flex items-center gap-4 mt-6">
              <span className="w-16 h-px bg-brand-gold/40" />
              <span className="japanese-text text-brand-gold/50 text-sm tracking-widest">行事</span>
            </div>

            <p className="mt-8 text-brand-cream/50 font-body font-light text-base max-w-xl leading-relaxed">
              De noches de jazz con alma latina a menús omakase de temporada.
              En LI-ONNA cada evento es una extensión de nuestra cocina: irrepetible, auténtico, vivo.
            </p>
          </div>
        </header>

        {/* Events listing */}
        <EventsList showHeading={false} />

        {/* Reservation CTA */}
        <ReservationCta
          title="¿Quieres Asistir?"
          description="Reserva tu mesa para uno de nuestros eventos especiales. Las plazas son limitadas — no te quedes sin la tuya."
        />
      </main>

      <Footer />
    </>
  );
}
