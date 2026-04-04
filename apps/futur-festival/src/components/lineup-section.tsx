'use client';

import React, { useState } from 'react';
import { ArtistCard } from './artist-card';
import { cn } from '@mg/shared-utils';

interface Artist {
  name: string;
  slug: string;
  genre: string;
  country: string;
  image?: string;
  headliner: boolean;
  day: string;
  performanceTime?: string;
  stage?: string;
  socialUrl?: string;
}

interface LineupSectionProps {
  artists: Artist[];
}

const DAY_FILTERS = [
  { label: 'Todos', value: 'all' },
  { label: 'Viernes', value: 'friday' },
  { label: 'Sábado', value: 'saturday' },
  { label: 'Domingo', value: 'sunday' },
];

export function LineupSection({ artists }: LineupSectionProps) {
  const [activeDay, setActiveDay] = useState<string>('all');

  const headliners = artists.filter((a) => a.headliner);
  const regular = artists.filter((a) => !a.headliner);

  const filteredHeadliners =
    activeDay === 'all' ? headliners : headliners.filter((a) => a.day === activeDay);
  const filteredRegular =
    activeDay === 'all' ? regular : regular.filter((a) => a.day === activeDay);

  if (artists.length === 0) {
    return (
      <section id="lineup" className="py-24 bg-brand-black relative">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <SectionHeading title="LINEUP" accent="2025" />
          <p className="mt-8 text-white/30 font-body">Lineup próximamente — Stay tuned.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="lineup" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      {/* Glow blobs */}
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-purple/8 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-cyan/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="LINEUP" accent="2025" />

        {/* Day filter tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {DAY_FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveDay(filter.value)}
              className={cn(
                'rounded-full px-5 py-2 font-display text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300',
                activeDay === filter.value
                  ? 'bg-brand-purple text-white shadow-neon-purple'
                  : 'border border-white/15 text-white/50 hover:border-brand-purple/40 hover:text-white'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Headliners */}
        {filteredHeadliners.length > 0 && (
          <div className="mt-12">
            <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.3em] text-brand-purple">
              — Headliners
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredHeadliners.map((artist) => (
                <ArtistCard
                  key={artist.slug}
                  {...artist}
                  className="lg:col-span-1"
                />
              ))}
            </div>
          </div>
        )}

        {/* Regular artists */}
        {filteredRegular.length > 0 && (
          <div className="mt-10">
            {filteredHeadliners.length > 0 && (
              <p className="mb-6 font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                — Artistas
              </p>
            )}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredRegular.map((artist) => (
                <ArtistCard key={artist.slug} {...artist} />
              ))}
            </div>
          </div>
        )}

        {filteredHeadliners.length === 0 && filteredRegular.length === 0 && (
          <p className="mt-16 text-center text-white/30 font-body">
            No hay artistas anunciados para este día todavía.
          </p>
        )}
      </div>
    </section>
  );
}

function SectionHeading({ title, accent }: { title: string; accent?: string }) {
  return (
    <div className="text-center">
      <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.02em]">
        <span className="text-white">{title}</span>
        {accent && (
          <span className="ml-3 text-brand-purple text-glow-purple">{accent}</span>
        )}
      </h2>
      <div className="mx-auto mt-4 divider-neon w-24" />
    </div>
  );
}
