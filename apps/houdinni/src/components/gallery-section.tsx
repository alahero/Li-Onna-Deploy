'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface GalleryItem {
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
  venue: 'El Lugar',
  shows: 'Shows',
  cocktails: 'Cócteles',
};

const ALL_CATEGORY = 'all';

export function GallerySection({ items }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);

  const sorted = [...items].sort((a, b) => a.order - b.order);
  const categories = [ALL_CATEGORY, ...Array.from(new Set(sorted.map((i) => i.category)))];

  const filtered =
    activeCategory === ALL_CATEGORY
      ? sorted
      : sorted.filter((i) => i.category === activeCategory);

  return (
    <section
      id="galeria"
      className="section-padding relative overflow-hidden bg-brand-black"
    >
      {/* Subtle center vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(11,11,11,0.5) 100%)',
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-xs uppercase tracking-mystical text-brand-gold/70 mb-4 block"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Momentos Capturados
          </span>
          <h2 className="section-title mb-4">Galería</h2>
          <div className="gold-divider max-w-xs mx-auto">
            <span className="text-brand-gold/60 text-xs" aria-hidden="true">&#9670;</span>
          </div>
        </div>

        {/* Category filter tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-brand-gold text-brand-black border-brand-gold'
                    : 'border-white/15 text-brand-cream/50 hover:border-brand-gold/40 hover:text-brand-cream/80'
                }`}
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {cat === ALL_CATEGORY ? 'Todos' : CATEGORY_LABELS[cat] ?? cat}
              </button>
            ))}
          </div>
        )}

        {/* Masonry-like grid */}
        {filtered.length > 0 ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered.map((item, idx) => (
              <div
                key={item.slug}
                className="relative break-inside-avoid overflow-hidden border border-white/6 hover:border-brand-gold/35 transition-all duration-500 group"
                style={{ aspectRatio: idx % 5 === 0 ? '3/4' : idx % 3 === 0 ? '4/3' : '1/1' }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    quality={75}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{
                      background: 'linear-gradient(135deg, #111111 0%, #1A0F40 100%)',
                    }}
                  />
                )}
                {/* Hover overlay with title */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end p-3">
                  <span
                    className="text-brand-cream/0 group-hover:text-brand-cream/80 text-xs uppercase tracking-widest transition-all duration-300"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p
              className="text-brand-cream/25 text-sm italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Las imágenes están siendo reveladas como en sala oscura...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
