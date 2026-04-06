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

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All'
    ? venues
    : venues.filter((v) => v.category === active);

  return (
    <section
      id="venues"
      className="relative w-full"
      style={{
        background: 'linear-gradient(#3d3e39 0%, #1b1c1d 100%)',
      }}
    >
      <div
        className="mx-auto"
        style={{
          minWidth: '320px',
          maxWidth: '1500px',
          padding: '40px',
          display: 'flex',
          flexFlow: 'row',
          gap: '50px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        {/* Left column - Browser/filter + text */}
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            gap: '31px',
            flex: '1 0 0',
            height: '720px',
          }}
        >
          {/* Section heading */}
          <h2
            className="font-figtree text-white"
            style={{
              fontSize: '44px',
              fontWeight: 300,
              letterSpacing: '0.06em',
              lineHeight: '1.2em',
            }}
          >
            Our Venues
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="font-inter text-[14px] transition-all cursor-pointer"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  color: active === cat ? '#000' : '#888',
                  backgroundColor: active === cat ? '#fff' : 'transparent',
                  fontWeight: active === cat ? 500 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Load More */}
          <span className="font-inter text-[14px] text-[#888] cursor-pointer hover:text-white transition-colors">
            Load More
          </span>
        </div>

        {/* Right column - Venue card grid */}
        <div
          style={{
            flex: '2 0 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(50px, 1fr))',
            gridAutoRows: '200px',
            gap: '0 20px',
          }}
        >
          {filtered.map((venue, i) => (
            <div
              key={i}
              className="flex items-center justify-start"
              style={{ width: '100%', height: '180px' }}
            >
              <div
                className="relative overflow-hidden"
                style={{
                  width: '350px',
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '15px',
                  boxShadow: '0.4px 0.4px 0.5px -0.875px rgba(0,0,0,0.34), 1.2px 1.2px 1.5px -1.75px rgba(0,0,0,0.33), 3.2px 3.2px 4px -2.625px rgba(0,0,0,0.29), 10px 10px 12.7px -3.5px rgba(0,0,0,0.15)',
                  aspectRatio: '350 / 180',
                }}
              >
                <Image
                  src={venue.image}
                  alt=""
                  fill
                  sizes="350px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
