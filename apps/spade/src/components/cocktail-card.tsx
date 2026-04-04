import Image from 'next/image';

const CATEGORY_LABELS: Record<string, string> = {
  signature: 'Signature',
  classic: 'Clásico',
  seasonal: 'Temporada',
};

export interface CocktailCardProps {
  slug: string;
  name: string;
  description: string;
  ingredients: string;
  image: string | null;
  category: string;
  price: string;
}

export function CocktailCard({
  name,
  description,
  ingredients,
  image,
  category,
  price,
}: CocktailCardProps) {
  const ingredientList = ingredients
    ? ingredients.split(',').map((i) => i.trim()).filter(Boolean)
    : [];

  return (
    <article className="card-cocktail group flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-dark-card flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-dark-card via-brand-navy/20 to-brand-dark-card">
            <div className="text-brand-silver/[0.08] w-20 h-24">
              <svg viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
              </svg>
            </div>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
          {ingredientList.length > 0 && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-silver/50 mb-2">
                Ingredientes
              </p>
              <p className="text-xs text-brand-silver/80 leading-relaxed">
                {ingredientList.join(' · ')}
              </p>
            </div>
          )}
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-emerald bg-brand-black/70 px-2.5 py-1 border border-brand-emerald/30">
            {CATEGORY_LABELS[category] ?? category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1 border-t border-brand-silver/[0.06]">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-lg text-brand-white font-light leading-snug"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {name}
          </h3>
          {price && (
            <span className="text-brand-silver text-sm font-light flex-shrink-0 mt-0.5">
              {price}
            </span>
          )}
        </div>

        {description && (
          <p className="text-brand-silver/50 text-sm font-light leading-relaxed mt-1 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
