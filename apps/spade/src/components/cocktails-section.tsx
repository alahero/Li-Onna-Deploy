import { CocktailCard, type CocktailCardProps } from './cocktail-card';

interface CocktailsSectionProps {
  cocktails: CocktailCardProps[];
}

const FILTER_CATEGORIES = [
  { value: 'all', label: 'Todos' },
  { value: 'signature', label: 'Signature' },
  { value: 'classic', label: 'Clásicos' },
  { value: 'seasonal', label: 'Temporada' },
];

export function CocktailsSection({ cocktails }: CocktailsSectionProps) {
  const hasItems = cocktails.length > 0;

  // Group by category for display
  const signatureItems = cocktails.filter((c) => c.category === 'signature');
  const classicItems = cocktails.filter((c) => c.category === 'classic');
  const seasonalItems = cocktails.filter((c) => c.category === 'seasonal');

  return (
    <section
      id="cocteleria"
      className="py-24 lg:py-32 bg-brand-black relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/5 via-transparent to-transparent pointer-events-none" />

      {/* Large faint spade motif */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-96 h-96 text-brand-silver/[0.02] pointer-events-none select-none">
        <svg viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Coctelería de Autor</p>
          <div className="silver-line mb-6" />
          <h2
            className="section-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nuestros Cócteles
          </h2>
          <p className="mt-4 text-brand-silver/50 max-w-xl mx-auto text-sm font-light leading-relaxed">
            Cada trago es una composición. Técnica clásica, ingredientes de temporada
            y una presentación que seduce antes del primer sorbo.
          </p>
        </div>

        {hasItems ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cocktails.map((cocktail) => (
              <CocktailCard key={cocktail.slug} {...cocktail} />
            ))}
          </div>
        ) : (
          /* Empty state — shows category placeholders */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FILTER_CATEGORIES.filter((c) => c.value !== 'all').map((cat) => (
              <div
                key={cat.value}
                className="card-dark p-8 text-center flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full border border-brand-silver/10 flex items-center justify-center">
                  <div className="text-brand-silver/20 w-7 h-8">
                    <svg viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
                    </svg>
                  </div>
                </div>
                <p className="text-brand-silver/30 text-xs uppercase tracking-widest">
                  {cat.label}
                </p>
                <p className="text-brand-silver/20 text-xs">
                  Agrega cócteles desde el CMS
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Category legend — only shown when there are items */}
        {hasItems && (signatureItems.length > 0 || classicItems.length > 0 || seasonalItems.length > 0) && (
          <div className="mt-12 flex items-center justify-center gap-8">
            {[
              { items: signatureItems, label: 'Signature', color: 'border-brand-emerald/50' },
              { items: classicItems, label: 'Clásicos', color: 'border-brand-silver/30' },
              { items: seasonalItems, label: 'Temporada', color: 'border-brand-navy border-b-brand-emerald/30' },
            ]
              .filter((c) => c.items.length > 0)
              .map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <div className={`w-4 h-px border-t ${c.color}`} />
                  <span className="text-[11px] uppercase tracking-widest text-brand-silver/40">
                    {c.label}
                  </span>
                </div>
              ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#reservaciones" className="btn-outline-emerald">
            Reservar para Degustar
          </a>
        </div>
      </div>
    </section>
  );
}
