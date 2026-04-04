import Image from 'next/image';

interface MenuItem {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string | null;
}

interface MenuSectionProps {
  items: MenuItem[];
}

const CATEGORY_LABELS: Record<string, string> = {
  starters: 'Entradas',
  mains: 'Platos Fuertes',
  desserts: 'Postres',
};

const CATEGORY_ORDER = ['starters', 'mains', 'desserts'];

export function MenuSection({ items }: MenuSectionProps) {
  // Group items by category
  const grouped = CATEGORY_ORDER.reduce<Record<string, MenuItem[]>>((acc, cat) => {
    const catItems = items.filter((i) => i.category === cat);
    if (catItems.length > 0) {
      acc[cat] = catItems;
    }
    return acc;
  }, {});

  const hasItems = items.length > 0;

  return (
    <section
      id="menu"
      className="py-24 lg:py-32 bg-brand-dark-surface relative"
    >
      {/* Subtle art deco top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-silver/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-silver/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Gastronomía</p>
          <div className="silver-line mb-6" />
          <h2
            className="section-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Menú de Alimentos
          </h2>
          <p className="mt-4 text-brand-silver/50 max-w-lg mx-auto text-sm font-light">
            Platillos diseñados para acompañar cada trago. Sabores que complementan
            nuestra coctelería de autor.
          </p>
        </div>

        {hasItems ? (
          <div className="space-y-16">
            {Object.entries(grouped).map(([cat, catItems]) => (
              <div key={cat}>
                {/* Category header */}
                <div className="flex items-center gap-6 mb-8">
                  <h3
                    className="text-sm uppercase tracking-[0.25em] text-brand-silver/60 font-medium whitespace-nowrap"
                  >
                    {CATEGORY_LABELS[cat] ?? cat}
                  </h3>
                  <div className="flex-1 h-px bg-brand-silver/10" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-silver/5">
                  {catItems.map((item) => (
                    <div
                      key={item.slug}
                      className="bg-brand-dark-surface group p-6 hover:bg-brand-dark-card transition-colors duration-300 flex gap-4"
                    >
                      {/* Thumbnail */}
                      {item.image && (
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden bg-brand-dark-card">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-400"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4
                            className="text-brand-white font-light text-sm leading-snug"
                            style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}
                          >
                            {item.name}
                          </h4>
                          {item.price && (
                            <span className="text-brand-silver/60 text-xs flex-shrink-0 mt-0.5">
                              {item.price}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-brand-silver/40 text-xs leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 border border-dashed border-brand-silver/10">
            <p className="text-brand-silver/20 text-sm uppercase tracking-widest">
              Menú próximamente
            </p>
            <p className="text-brand-silver/10 text-xs mt-2">
              Agrega platillos desde el CMS
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
