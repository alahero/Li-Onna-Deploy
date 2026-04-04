import React from 'react';
import Image from 'next/image';
import { CocktailShowcase, CocktailProps } from './cocktail-showcase';

export interface MenuCategoryProps {
  slug: string;
  name: string;
  order: number;
}

export interface MenuItemProps {
  slug: string;
  name: string;
  description: string;
  price: string;
  category: string | null;
  image: string | null;
}

interface MenuSectionProps {
  categories: MenuCategoryProps[];
  items: MenuItemProps[];
  cocktails: CocktailProps[];
}

function MenuItemCard({ item }: { item: MenuItemProps }) {
  return (
    <div className="flex items-start gap-4 py-5 border-b border-white/6 group hover:border-brand-gold/20 transition-colors duration-300 last:border-0">
      {/* Optional small image */}
      {item.image && (
        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden border border-white/8">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            quality={70}
          />
        </div>
      )}

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <h4
            className="text-base text-brand-cream group-hover:text-brand-gold transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
          >
            {item.name}
          </h4>
          {/* Dotted leader line */}
          <div className="flex-1 border-b border-dotted border-brand-cream/15 mb-1 min-w-[20px]" />
          {item.price && (
            <span
              className="text-brand-gold text-sm whitespace-nowrap flex-shrink-0"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {item.price}
            </span>
          )}
        </div>
        {item.description && (
          <p
            className="text-brand-cream/40 text-xs leading-relaxed mt-1"
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
          >
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

export function MenuSection({ categories, items, cocktails }: MenuSectionProps) {
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <section
      id="menu"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0B0B0B 0%, #0A0A14 50%, #0B0B0B 100%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(128,0,32,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,27,105,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-mystical text-brand-gold/70 mb-4 block"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Gastronomía &amp; Mixología
          </span>
          <h2 className="section-title mb-4">
            El Menú
          </h2>
          <div className="gold-divider max-w-xs mx-auto">
            <span className="text-brand-gold/60 text-xs" aria-hidden="true">&#9670;</span>
          </div>
          <p
            className="text-brand-cream/50 text-sm max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
          >
            Una carta diseñada para complementar la experiencia. Cada platillo y bebida,
            una ilusión para el paladar.
          </p>
        </div>

        {/* Food menu by category */}
        {sortedCategories.length > 0 && (
          <div className="space-y-12 mb-16">
            {sortedCategories.map((cat) => {
              const catItems = items.filter((item) => item.category === cat.slug);
              if (catItems.length === 0) return null;
              return (
                <div key={cat.slug}>
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-6">
                    <h3
                      className="text-2xl text-brand-cream italic"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                      {cat.name}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-brand-gold/30 to-transparent" />
                  </div>
                  {/* Items */}
                  <div>
                    {catItems.map((item) => (
                      <MenuItemCard key={item.slug} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Fallback: uncategorized items */}
        {sortedCategories.length === 0 && items.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <h3
                className="text-2xl text-brand-cream italic"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                Alimentos
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-brand-gold/30 to-transparent" />
            </div>
            {items.map((item) => (
              <MenuItemCard key={item.slug} item={item} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {sortedCategories.length === 0 && items.length === 0 && (
          <div className="text-center py-12 mb-16">
            <p
              className="text-brand-cream/25 text-sm italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              La carta de temporada está siendo preparada con magia...
            </p>
          </div>
        )}

        {/* Cocktail showcase */}
        <CocktailShowcase cocktails={cocktails} />

        {/* Footnote */}
        <p
          className="text-center text-brand-cream/25 text-xs mt-10"
          style={{ fontFamily: "'Raleway', sans-serif" }}
        >
          Los precios y disponibilidad pueden cambiar sin previo aviso.
          Favor de consultar al staff.
        </p>
      </div>
    </section>
  );
}
