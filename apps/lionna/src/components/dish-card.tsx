import Image from 'next/image';

export interface DishCardProps {
  name: string;
  description?: string;
  imageSrc?: string;
  category?: string;
}

const categoryLabels: Record<string, string> = {
  'cold-starters': 'Entrante Frío',
  'hot-starters': 'Entrante Caliente',
  'rice-salads': 'Arroces y Ensaladas',
  'seafood': 'Pescados y Mariscos',
  'premium-cuts': 'Corte Premium',
  'sashimi-nigiri': 'Sashimi & Nigiri',
  'rolls': 'Rolls',
  'desserts': 'Postre',
};

export function DishCard({ name, description, imageSrc, category }: DishCardProps) {
  return (
    <article className="group relative overflow-hidden bg-brand-charcoal/30 border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-700">
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-charcoal to-brand-black">
            <span className="japanese-text text-brand-gold/20 text-6xl select-none" aria-hidden="true">
              食
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="text-[9px] uppercase tracking-widest font-body font-medium text-brand-gold bg-brand-black/80 px-3 py-1.5 border border-brand-gold/30">
              {categoryLabels[category] ?? category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Decorative line */}
        <div className="w-8 h-px bg-brand-gold/40 mb-4 transition-all duration-500 group-hover:w-12 group-hover:bg-brand-gold" />

        <h3 className="font-display text-xl md:text-2xl text-brand-cream tracking-wide leading-tight mb-3 transition-colors duration-300 group-hover:text-brand-gold">
          {name}
        </h3>

        {description && (
          <p className="text-brand-cream/50 text-sm font-body font-light leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </article>
  );
}
