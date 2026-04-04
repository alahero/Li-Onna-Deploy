'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuCard } from './menu-card';

interface MenuItem {
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string | null;
  spicyLevel: number;
  vegetarian: boolean;
  featured: boolean;
  category: string | null;
}

interface MenuSectionProps {
  items: MenuItem[];
}

export function MenuSection({ items }: MenuSectionProps) {
  const [filter, setFilter] = useState<'all' | 'featured' | 'vegetarian'>('all');

  const filtered = items.filter((item) => {
    if (filter === 'featured') return item.featured;
    if (filter === 'vegetarian') return item.vegetarian;
    return true;
  });

  const FILTERS = [
    { key: 'all', label: '🌮 Todos', count: items.length },
    { key: 'featured', label: '⭐ Destacados', count: items.filter((i) => i.featured).length },
    { key: 'vegetarian', label: '🌿 Vegetarianos', count: items.filter((i) => i.vegetarian).length },
  ] as const;

  return (
    <section id="menu" className="py-20 bg-brand-cream" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
            <span aria-hidden="true">🔥</span>
            <span>Nuestro Menú</span>
          </div>
          <h2
            id="menu-heading"
            className="section-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Lo Mejor de la Casa
          </h2>
          <p className="section-subtitle text-center">
            Preparados con ingredientes frescos y las mejores salsas artesanales.
          </p>
        </div>

        {/* Filter buttons */}
        {items.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10" role="group" aria-label="Filtrar menú">
            {FILTERS.map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 border-2 ${
                  filter === key
                    ? 'bg-brand-red border-brand-red text-white shadow-lg scale-105'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-brand-red hover:text-brand-red'
                }`}
                aria-pressed={filter === key}
              >
                {label}
                <span className="ml-1.5 text-xs opacity-70">({count})</span>
              </button>
            ))}
          </div>
        )}

        {/* Menu grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <MenuCard
                key={item.slug}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                spicyLevel={item.spicyLevel}
                vegetarian={item.vegetarian}
                featured={item.featured}
              />
            ))}
          </div>
        ) : (
          /* Empty state / placeholder */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Taco al Pastor', price: 35, desc: 'Carne de cerdo marinada con achiote, piña fresca y cilantro.', spicy: 3, veg: false, feat: true },
              { name: 'Taco de Bistec', price: 38, desc: 'Bistec de res a la plancha con cebollita asada y guacamole.', spicy: 2, veg: false, feat: false },
              { name: 'Taco de Nopales', price: 30, desc: 'Nopales tiernos con queso panela, pico de gallo y frijoles.', spicy: 1, veg: true, feat: false },
              { name: 'Taco Campechano', price: 42, desc: 'Mezcla de bistec y chorizo con salsa roja especial de la casa.', spicy: 4, veg: false, feat: true },
              { name: 'Taco de Barbacoa', price: 45, desc: 'Barbacoa de res cocida lentamente con consomé de la casa.', spicy: 2, veg: false, feat: true },
              { name: 'Taco de Suadero', price: 38, desc: 'Suadero crujiente con cebolla, cilantro y salsa verde tatemada.', spicy: 3, veg: false, feat: false },
            ].map((item, i) => (
              <MenuCard
                key={i}
                name={item.name}
                description={item.desc}
                price={item.price}
                image={null}
                spicyLevel={item.spicy}
                vegetarian={item.veg}
                featured={item.feat}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="#pedidos" className="btn-secondary">
            <span aria-hidden="true">🛵</span>
            Pedir Ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
