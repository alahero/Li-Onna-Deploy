'use client';

import { useState } from 'react';
import Image from 'next/image';

type Category = 'All' | 'Gastronomic' | 'Events' | 'Daylife' | 'Nightlife';

interface Venue {
  image: string;
  category: Category;
}

const venues: Venue[] = [
  { image: '/images/venues/venue-1.jpg', category: 'Nightlife' },
  { image: '/images/venues/venue-2.jpg', category: 'Gastronomic' },
  { image: '/images/venues/venue-3.jpg', category: 'Nightlife' },
  { image: '/images/venues/venue-4.jpg', category: 'Events' },
  { image: '/images/venues/venue-5.jpg', category: 'Nightlife' },
  { image: '/images/venues/venue-6.jpg', category: 'Gastronomic' },
];

const categories: Category[] = ['All', 'Gastronomic', 'Events', 'Daylife', 'Nightlife'];

function FilterTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[12px] rounded-[8px] px-[15px] py-[15px] font-inter text-[14px] transition-all cursor-pointer"
      style={{
        color: active ? '#000' : '#6e6e6e',
        backgroundColor: active ? '#fff' : 'transparent',
        fontWeight: active ? 500 : 400,
      }}
    >
      {active && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5" fill="#000" />
        </svg>
      )}
      {label}
    </button>
  );
}

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div
      className="relative overflow-hidden rounded-[10px] cursor-pointer group"
      style={{ aspectRatio: '350 / 180' }}
    >
      <Image
        src={venue.image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
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
        {/* Filter tabs row */}
        <div className="mb-8 flex flex-wrap items-center gap-0">
          {categories.map((cat) => (
            <FilterTab
              key={cat}
              label={cat}
              active={active === cat}
              onClick={() => {
                setActive(cat);
                setShowAll(false);
              }}
            />
          ))}
        </div>

        {/* Venue Grid - 3 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
          }}
        >
          {displayed.map((venue, i) => (
            <VenueCard key={i} venue={venue} />
          ))}
        </div>

        {/* Load More */}
        {!showAll && filtered.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="font-inter text-[14px] text-white underline hover:no-underline transition-all cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}

        {filtered.length <= 6 && (
          <div className="mt-6 flex justify-center">
            <span className="font-inter text-[14px] text-[#6e6e6e] cursor-pointer hover:text-white transition-colors">
              Load More
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
