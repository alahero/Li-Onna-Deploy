'use client';

import { useState } from 'react';
import Image from 'next/image';

type Category = 'All' | 'Gastronomic' | 'Events' | 'Daylife' | 'Nightlife';

interface Venue {
  name: string;
  image: string;
  category: Category;
}

const venues: Venue[] = [
  { name: 'Guepardo', image: '/images/venues/venue-1.jpg', category: 'Nightlife' },
  { name: 'LI-ONNA', image: '/images/venues/venue-2.jpg', category: 'Gastronomic' },
  { name: 'Tehmplo', image: '/images/venues/venue-3.jpg', category: 'Nightlife' },
  { name: 'FUTUR Festival', image: '/images/venues/venue-4.jpg', category: 'Events' },
  { name: 'SPADE', image: '/images/venues/venue-5.jpg', category: 'Nightlife' },
  { name: 'Tacos Atarantados', image: '/images/venues/venue-6.jpg', category: 'Gastronomic' },
];

const categories: Category[] = ['All', 'Gastronomic', 'Events', 'Daylife', 'Nightlife'];

function VenueCard({ venue }: { venue: Venue }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer"
      style={{ aspectRatio: '350 / 180' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={venue.image}
        alt={venue.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500"
        style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300"
        style={{ opacity: hovered ? 0.4 : 0.15 }}
      />
      {/* Venue name overlay */}
      <div className="absolute inset-0 flex items-end p-4">
        <span className="font-figtree text-sm font-bold text-white uppercase tracking-wide">
          {venue.name}
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = active === 'All'
    ? venues
    : venues.filter((v) => v.category === active);

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="venues" className="w-full bg-mg-bg py-16 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-10">
        {/* Browser-style search bar */}
        <div
          className="mb-10 flex flex-wrap items-center gap-3 rounded-xl border border-white/10 p-2"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setShowAll(false);
              }}
              className={`rounded-lg px-4 py-2 font-inter text-sm transition-all ${
                active === cat
                  ? 'bg-white text-black font-medium'
                  : 'text-mg-gray hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Venue Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((venue) => (
            <VenueCard key={venue.name} venue={venue} />
          ))}
        </div>

        {/* Load More */}
        {!showAll && filtered.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-button border border-mg-gray-border bg-transparent px-8 py-3 font-figtree text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
