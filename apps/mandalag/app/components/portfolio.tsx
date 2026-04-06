'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Venue {
  name: string;
  image: string;
  category: string;
  url: string;
}

interface PortfolioProps {
  venues: Venue[];
  categories: string[];
}

export default function Portfolio({ venues, categories }: PortfolioProps) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? venues : venues.filter((v) => v.category === active);

  return (
    <section
      id="venues"
      style={{
        background: 'linear-gradient(#3d3e39 0%, #1b1c1d 100%)',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '1500px',
          margin: '0 auto',
          padding: '40px',
          display: 'flex',
          flexFlow: 'row',
          gap: '50px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        {/* Left: filters */}
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            gap: '31px',
            flex: '1 0 0',
            height: '720px',
          }}
        >
          {/* Filter tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {['All', ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="font-inter"
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  color: active === cat ? '#000' : '#888',
                  backgroundColor: active === cat ? '#fff' : 'transparent',
                  fontWeight: active === cat ? 500 : 400,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-inter" style={{ fontSize: '14px', color: '#888', cursor: 'pointer' }}>
            Load More
          </span>
        </div>

        {/* Right: venue grid */}
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
            <a
              key={i}
              href={venue.url || '#'}
              target={venue.url ? '_blank' : undefined}
              rel={venue.url ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                flexFlow: 'row',
                placeContent: 'center flex-start',
                placeSelf: 'center',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                height: '180px',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  borderRadius: '15px',
                  width: '350px',
                  maxWidth: '100%',
                  height: 'auto',
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '350 / 180',
                  boxShadow: '0.4px 0.4px 0.5px -0.875px rgba(0,0,0,0.34), 1.2px 1.2px 1.5px -1.75px rgba(0,0,0,0.33), 3.2px 3.2px 4px -2.625px rgba(0,0,0,0.29), 10px 10px 12.7px -3.5px rgba(0,0,0,0.15)',
                }}
              >
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  sizes="350px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
