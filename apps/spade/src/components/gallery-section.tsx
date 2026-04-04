import Image from 'next/image';

interface GalleryItem {
  slug: string;
  title: string;
  image: string | null;
  category: string;
  order: number;
}

interface GallerySectionProps {
  items: GalleryItem[];
}

const CATEGORY_LABELS: Record<string, string> = {
  venue: 'Venue',
  cocktails: 'Cócteles',
  events: 'Eventos',
};

export function GallerySection({ items }: GallerySectionProps) {
  const hasItems = items.length > 0;

  // Create a masonry-like layout by splitting into columns
  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="galeria"
      className="py-24 lg:py-32 bg-brand-dark-surface relative"
    >
      {/* Top border accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-silver/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Galería</p>
          <div className="silver-line mb-6" />
          <h2
            className="section-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Momentos en SPADE
          </h2>
          <p className="mt-4 text-brand-silver/50 max-w-lg mx-auto text-sm font-light">
            Una mirada al ambiente, los cócteles y las noches que construyen la leyenda de SPADE.
          </p>
        </div>

        {hasItems ? (
          <>
            {/* Masonry-style columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[col1, col2, col3].map((col, ci) => (
                <div key={ci} className="flex flex-col gap-3">
                  {col.map((item) => (
                    <div
                      key={item.slug}
                      className="group relative overflow-hidden bg-brand-dark-card border border-brand-silver/[0.05] hover:border-brand-silver/20 transition-all duration-400"
                    >
                      <div
                        className={`relative overflow-hidden ${
                          item.order % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'
                        }`}
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-brand-dark-card flex items-center justify-center">
                            <div className="text-brand-silver/[0.05] w-12 h-14">
                              <svg viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Hover overlay with title */}
                        <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-emerald mb-1">
                            {CATEGORY_LABELS[item.category] ?? item.category}
                          </p>
                          <p className="text-brand-white/80 text-sm font-light" style={{ fontFamily: 'var(--font-display)' }}>
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Category filter hint */}
            <div className="mt-10 flex items-center justify-center gap-6">
              {Object.entries(CATEGORY_LABELS).map(([value, label]) => {
                const count = items.filter((i) => i.category === value).length;
                if (count === 0) return null;
                return (
                  <span key={value} className="text-[11px] uppercase tracking-widest text-brand-silver/30">
                    {label} ({count})
                  </span>
                );
              })}
            </div>
          </>
        ) : (
          /* Empty state — 6 placeholder tiles */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`bg-brand-dark-card border border-brand-silver/[0.05] flex items-center justify-center ${
                  i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'
                }`}
              >
                <div className="text-brand-silver/[0.05] w-10 h-12">
                  <svg viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
