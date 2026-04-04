import Link from 'next/link';

interface GiftCardSectionProps {
  title?: string;
  description?: string;
  amounts?: number[];
  purchaseUrl?: string;
}

const DEFAULT_AMOUNTS = [50, 100, 150, 200, 300, 500];

export function GiftCardSection({
  title = 'Regala una Experiencia',
  description = 'El regalo perfecto para los amantes de la alta cocina. Una gift card de LI-ONNA abre las puertas a una experiencia gastronómica irrepetible en el corazón de Salamanca.',
  amounts = DEFAULT_AMOUNTS,
  purchaseUrl = '#',
}: GiftCardSectionProps) {
  return (
    <div className="relative">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <section className="relative py-28 px-6 md:px-12 bg-brand-black overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-crimson/5" />
        <div className="absolute inset-0 bg-grid-subtle opacity-20" />

        {/* Large decorative character */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="japanese-text text-brand-gold/[0.03] font-light leading-none"
            style={{ fontSize: 'clamp(10rem, 25vw, 28rem)' }}
          >
            贈
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="section-subtitle mb-6">Gift Cards</p>

            <h1 className="section-title font-light mb-6">{title}</h1>

            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="w-16 h-px bg-brand-gold/40" />
              <span className="japanese-text text-brand-gold/60 text-sm tracking-widest">贈り物</span>
              <span className="w-16 h-px bg-brand-gold/40" />
            </div>

            <p className="text-brand-cream/60 font-body font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              {description}
            </p>
          </div>

          {/* Gift card visual */}
          <div className="max-w-md mx-auto mb-16">
            <div className="relative aspect-[1.586/1] bg-gradient-to-br from-brand-charcoal to-brand-black border border-brand-gold/20 overflow-hidden">
              {/* Card decorations */}
              <div className="absolute inset-0 bg-grid-subtle opacity-30" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-8">
                {/* Japanese watermark */}
                <span
                  className="japanese-text text-brand-gold/10 font-light leading-none absolute"
                  style={{ fontSize: '8rem' }}
                  aria-hidden="true"
                >
                  贈
                </span>

                <div className="relative z-10 text-center">
                  <p className="japanese-text text-brand-gold/50 text-xs tracking-widest mb-2">リオンナ</p>
                  <p className="font-display text-brand-cream text-2xl tracking-widest2 mb-1">LI-ONNA</p>
                  <p className="text-brand-cream/40 text-[9px] uppercase tracking-widest font-body">
                    Gift Experience
                  </p>
                  <div className="mt-4 w-16 h-px bg-brand-gold/30 mx-auto" />
                  <p className="mt-4 text-brand-cream/25 text-[9px] uppercase tracking-widest font-body">
                    C. de Recoletos, 1 &mdash; Madrid
                  </p>
                </div>
              </div>

              {/* Corner ornaments */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-brand-gold/30" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-brand-gold/30" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-brand-gold/30" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-brand-gold/30" />
            </div>
          </div>

          {/* Amount selection */}
          <div className="mb-14">
            <p className="text-center section-subtitle mb-8">Selecciona el importe</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className="group relative py-4 px-2 border border-brand-gold/20 hover:border-brand-gold/60 bg-transparent text-brand-cream/60 hover:text-brand-cream font-display text-xl tracking-wide transition-all duration-300 hover:bg-brand-gold/5"
                  aria-label={`Seleccionar ${amount} euros`}
                >
                  <span className="text-brand-gold/40 group-hover:text-brand-gold text-xs absolute top-1.5 left-1/2 -translate-x-1/2 font-body transition-colors duration-300">€</span>
                  <span className="relative z-10 block pt-2">{amount}</span>
                </button>
              ))}
            </div>
            <p className="text-center text-brand-cream/30 text-xs font-body mt-4 tracking-wide">
              También disponibles importes personalizados
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Comprar Gift Card
            </a>
            <p className="mt-6 text-brand-cream/30 text-xs font-body tracking-wide">
              Entrega inmediata por email &middot; Válida 12 meses &middot; Sin fecha de expiración en eventos
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
    </div>
  );
}
