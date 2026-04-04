import React from 'react';
import Image from 'next/image';

export interface CocktailProps {
  slug: string;
  name: string;
  description: string;
  ingredients: string;
  image: string | null;
  featured: boolean;
  price: string;
}

interface CocktailShowcaseProps {
  cocktails: CocktailProps[];
}

function CocktailCard({ cocktail }: { cocktail: CocktailProps }) {
  const ingredientList = cocktail.ingredients
    ? cocktail.ingredients.split(',').map((i) => i.trim()).filter(Boolean)
    : [];

  return (
    <article
      className="group relative overflow-hidden border border-white/8 hover:border-brand-gold/40 transition-all duration-700"
      style={{ background: 'linear-gradient(145deg, #0D0820 0%, #0B0B0B 100%)' }}
    >
      {/* Featured ribbon */}
      {cocktail.featured && (
        <div
          className="absolute top-0 right-0 z-20 w-20 h-20 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-4 right-[-24px] w-28 text-center text-[9px] uppercase tracking-widest bg-brand-gold text-brand-black font-bold py-1 rotate-45"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Firma
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        {cocktail.image ? (
          <Image
            src={cocktail.image}
            alt={cocktail.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            quality={80}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #0D0820 0%, #2D1B69 50%, #0D0820 100%)',
            }}
          >
            {/* Cocktail glass SVG placeholder */}
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="opacity-25" aria-hidden="true">
              <path d="M14 10L28 32L42 10H14Z" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
              <line x1="28" y1="32" x2="28" y2="46" stroke="#D4AF37" strokeWidth="1.5" />
              <line x1="20" y1="46" x2="36" y2="46" stroke="#D4AF37" strokeWidth="1.5" />
              <circle cx="40" cy="14" r="3" stroke="#D4AF37" strokeWidth="1" fill="none" />
            </svg>
          </div>
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, rgba(13,8,32,0.95) 100%)',
          }}
        />

        {/* Price badge over image */}
        {cocktail.price && (
          <div className="absolute bottom-3 right-3 z-10">
            <span
              className="px-2.5 py-1 border border-brand-gold/50 text-brand-gold text-xs"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {cocktail.price}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-xl text-brand-cream mb-2 group-hover:text-brand-gold transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          {cocktail.name}
        </h3>

        {cocktail.description && (
          <p
            className="text-brand-cream/45 text-sm leading-relaxed mb-4 line-clamp-2"
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
          >
            {cocktail.description}
          </p>
        )}

        {/* Ingredients */}
        {ingredientList.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {ingredientList.slice(0, 4).map((ing, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-brand-purple/20 border border-brand-purple/30 text-brand-cream/50 text-xs"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {ing}
              </span>
            ))}
            {ingredientList.length > 4 && (
              <span
                className="px-2 py-0.5 text-brand-gold/40 text-xs"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                +{ingredientList.length - 4} más
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function CocktailShowcase({ cocktails }: CocktailShowcaseProps) {
  const featuredCocktails = cocktails.filter((c) => c.featured);
  const regularCocktails = cocktails.filter((c) => !c.featured);
  const ordered = [...featuredCocktails, ...regularCocktails];

  return (
    <div className="mt-16">
      {/* Sub-header */}
      <div className="flex items-center gap-4 mb-10">
        <h3
          className="text-2xl md:text-3xl text-brand-cream italic"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Cócteles de la Casa
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-brand-gold/30 to-transparent" />
      </div>

      {ordered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {ordered.map((cocktail) => (
            <CocktailCard key={cocktail.slug} cocktail={cocktail} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p
            className="text-brand-cream/30 text-sm italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Los cócteles de temporada serán revelados próximamente...
          </p>
        </div>
      )}
    </div>
  );
}
