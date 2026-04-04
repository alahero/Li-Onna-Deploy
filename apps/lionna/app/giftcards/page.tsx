import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { GiftCardSection } from '@/components/gift-card-section';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Gift Cards',
  description:
    'Regala una experiencia en LI-ONNA. Gift cards para disfrutar de la cocina japonesa con alma latina en el corazón de Barrio Salamanca, Madrid.',
  openGraph: {
    title: 'Gift Cards — LI-ONNA',
    description:
      'El regalo perfecto para los amantes de la alta cocina. Gift cards LI-ONNA disponibles en varios importes.',
  },
};

export default function GiftCardsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        {/* Page header */}
        <header className="relative py-24 px-6 md:px-12 bg-brand-black overflow-hidden border-b border-brand-gold/10">
          <div className="absolute inset-0 bg-grid-subtle opacity-30" />
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
            aria-hidden="true"
          >
            <span
              className="japanese-text text-brand-gold/[0.04] font-light leading-none"
              style={{ fontSize: 'clamp(8rem, 18vw, 22rem)' }}
            >
              贈
            </span>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="section-subtitle mb-4">El Regalo Perfecto</p>
            <h1 className="section-title font-light">Gift Cards</h1>

            <div className="flex items-center gap-4 mt-6">
              <span className="w-16 h-px bg-brand-gold/40" />
              <span className="japanese-text text-brand-gold/50 text-sm tracking-widest">贈り物</span>
            </div>

            <p className="mt-8 text-brand-cream/50 font-body font-light text-base max-w-xl leading-relaxed">
              No hay mejor regalo que una experiencia. Comparte la magia de LI-ONNA con quien más quieres:
              una cena en el Barrio Salamanca que no olvidarán.
            </p>
          </div>
        </header>

        {/* Gift card section */}
        <GiftCardSection />

        {/* Why gift section */}
        <section className="py-20 px-6 md:px-12 bg-brand-charcoal/20 border-t border-brand-gold/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  japanese: '即',
                  label: 'Entrega Inmediata',
                  description: 'Recibes la gift card por email al instante, lista para regalar o imprimir.',
                },
                {
                  japanese: '自',
                  label: 'Uso Flexible',
                  description: 'Válida para cualquier servicio: almuerzo, cena, eventos privados o maridajes.',
                },
                {
                  japanese: '永',
                  label: 'Sin Caducidad',
                  description: 'Tu gift card no caduca. Úsala cuando quieras, sin presión.',
                },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="mb-4">
                    <span className="japanese-text text-brand-gold/20 text-5xl select-none" aria-hidden="true">
                      {item.japanese}
                    </span>
                  </div>
                  <p className="section-subtitle mb-3">{item.label}</p>
                  <p className="text-brand-cream/40 text-sm font-body font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
