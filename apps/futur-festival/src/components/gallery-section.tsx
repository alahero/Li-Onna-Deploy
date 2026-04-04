'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@mg/shared-utils';

interface GalleryItem {
  title: string;
  image?: string;
  edition: string;
  order: number;
}

interface GallerySectionProps {
  items: GalleryItem[];
}

export function GallerySection({ items }: GallerySectionProps) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const sorted = [...items].sort((a, b) => a.order - b.order);

  return (
    <section id="gallery" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-pink/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.02em] text-white">
            GALERÍA
          </h2>
          <div className="mx-auto mt-4 divider-neon w-24" />
        </div>

        {sorted.length === 0 ? (
          <p className="text-center text-white/30 font-body">
            Galería de ediciones anteriores próximamente.
          </p>
        ) : (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {sorted.map((item, i) => (
              <div
                key={i}
                className="group relative break-inside-avoid overflow-hidden rounded-xl border border-white/8 cursor-pointer hover:border-brand-pink/40 transition-all duration-300"
                onClick={() => setLightbox(item)}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full bg-brand-dark flex items-center justify-center"
                    style={{ paddingBottom: i % 3 === 0 ? '133%' : '75%', position: 'relative' }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center font-display text-4xl font-black text-brand-pink/20">
                      {item.edition.slice(0, 2)}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-display text-xs font-bold text-white leading-tight">{item.title}</p>
                  <p className="font-display text-[10px] text-brand-pink mt-0.5">{item.edition}</p>
                </div>

                {/* Expand icon */}
                <div className="absolute top-2 right-2 h-7 w-7 rounded-full bg-brand-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.image && (
              <Image
                src={lightbox.image}
                alt={lightbox.title}
                width={1200}
                height={800}
                className="w-full object-contain max-h-[80vh]"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-black to-transparent">
              <p className="font-display text-sm font-bold text-white">{lightbox.title}</p>
              <p className="font-display text-xs text-brand-pink">{lightbox.edition}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-brand-black/60 border border-white/20 flex items-center justify-center hover:bg-brand-black transition-colors"
            >
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
