import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { BrandStatement } from '@/components/brand-statement';
import { SignatureDishes } from '@/components/signature-dishes';
import { ReservationCta } from '@/components/reservation-cta';
import { EventsList } from '@/components/events-list';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero — full viewport */}
        <Hero
          title="Hola, Madrid"
          subtitle="Cocina japonesa con alma latina"
        />

        {/* Brand philosophy */}
        <BrandStatement />

        {/* Signature dishes / Imprescindibles */}
        <SignatureDishes />

        {/* Upcoming events — preview */}
        <section className="relative bg-brand-charcoal/20 border-t border-brand-gold/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-0">
            <div className="text-center mb-0">
              <p className="section-subtitle">Próximamente</p>
              <h2 className="section-title font-light mt-4 mb-0">Eventos</h2>
            </div>
          </div>
          <EventsList showHeading={false} />
        </section>

        {/* Reservation CTA */}
        <ReservationCta />
      </main>

      <Footer />
    </>
  );
}
