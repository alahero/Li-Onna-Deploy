import Image from 'next/image';

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string | null;
  spicyLevel: number;
  vegetarian: boolean;
  featured: boolean;
}

function SpicyIndicator({ level }: { level: number }) {
  return (
    <span className="badge-spicy" title={`Nivel de picante: ${level}/5`} aria-label={`Picante: ${level} de 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < level ? 'opacity-100' : 'opacity-20'} aria-hidden="true">
          🌶️
        </span>
      ))}
    </span>
  );
}

export function MenuCard({
  name,
  description,
  price,
  image,
  spicyLevel,
  vegetarian,
  featured,
}: MenuCardProps) {
  return (
    <article className="card-base group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              🌮
            </span>
          </div>
        )}

        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {featured && (
            <span className="badge-featured">
              <span aria-hidden="true">⭐</span> Destacado
            </span>
          )}
          {vegetarian && (
            <span className="badge-veg">
              <span aria-hidden="true">🌿</span> Veggie
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-display text-brand-dark leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {name}
          </h3>
          <span className="text-xl font-bold text-brand-red whitespace-nowrap flex-shrink-0">
            ${price.toFixed(0)}
          </span>
        </div>

        {description && (
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
          <SpicyIndicator level={spicyLevel} />
          {vegetarian && (
            <span className="text-xs text-green-600 font-semibold">Sin carne</span>
          )}
        </div>
      </div>
    </article>
  );
}
