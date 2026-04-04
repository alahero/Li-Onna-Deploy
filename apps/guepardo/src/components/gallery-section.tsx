'use client';

import React, { useState } from 'react';
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

const CATEGORIES = [
  { value: 'all', label: 'Todo' },
  { value: 'ambiente', label: 'Ambiente' },
  { value: 'eventos', label: 'Eventos' },
  { value: 'vip', label: 'VIP' },
  { value: 'instalaciones', label: 'Instalaciones' },
];

export function GallerySection({ items }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const sorted = [...items].sort((a, b) => a.order - b.order);
  const filtered =
    activeCategory === 'all'
      ? sorted
      : sorted.filter((item) => item.category === activeCategory);

  const hasImages = filtered.some((item) => item.image);

  return (
    <section id="galeria" className="py-24 bg-brand-dark">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-4">
            Fotos
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest text-brand-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Galería
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-8 h-px bg-brand-gold" />
            <span className="w-2 h-2 bg-brand-gold rotate-45 inline-block" />
            <span className="w-8 h-px bg-brand-gold" />
          </div>
        </div>

        {/* Category filter */}
        {items.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-brand-gold text-brand-black'
                    : 'border border-white/20 text-brand-white/60 hover:border-brand-gold/50 hover:text-brand-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery grid */}
        {hasImages ? (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filtered
              .filter((item) => item.image)
              .map((item, i) => (
                <div
                  key={item.slug}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-zinc-900"
                  style={{
                    // Vary height slightly for masonry effect
                    aspectRatio: i % 5 === 0 ? '4/5' : i % 3 === 0 ? '1/1' : '4/3',
                  }}
                  onClick={() => setLightboxItem(item)}
                >
                  <Image
                    src={item.image!}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-3">
                      <p className="text-brand-white text-xs uppercase tracking-widest">
                        {item.title}
                      </p>
                      <span className="inline-block mt-2 w-6 h-px bg-brand-gold" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          /* Empty state */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-brand-black/50 border border-white/5 flex items-center justify-center"
              >
                <svg
                  className="w-8 h-8 text-white/10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
            ))}
          </div>
        )}

        {items.length === 0 && (
          <p className="text-center text-brand-gray text-sm uppercase tracking-widest mt-8">
            Las fotos se publicarán próximamente
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxItem && lightboxItem.image && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-brand-gold transition-colors p-2"
            onClick={() => setLightboxItem(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxItem.image}
              alt={lightboxItem.title}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto mx-auto"
            />
            <p className="text-center text-brand-white/60 text-xs uppercase tracking-widest mt-3">
              {lightboxItem.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
