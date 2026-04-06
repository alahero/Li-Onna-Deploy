'use client';

import { useState } from 'react';

const divisions = [
  {
    title: 'Daylife',
    description: 'Transforming normal days into extraordinary experiences.',
  },
  {
    title: 'Nightlife',
    description: 'Immersive experiences crafted for every type of guest.',
  },
  {
    title: 'Gastronomic',
    description: 'Innovative cuisine, captivating atmospheres, and extraordinary flavors.',
  },
  {
    title: 'Events',
    description: 'From roaring festivals to intimate, high-end gatherings.',
  },
];

function DivisionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-1 flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-500"
      style={{
        aspectRatio: '1.0961',
        minHeight: '280px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Stripe pattern background */}
      <div
        className="absolute inset-0 bg-stripe-pattern opacity-100"
        style={{ backgroundSize: '126px 126px' }}
      />

      {/* Overlay on hover */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-500"
        style={{ opacity: hovered ? 0.6 : 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-8">
        <h3 className="font-figtree text-division-title text-white font-bold">
          {title}
        </h3>
        <p
          className="font-inter text-[15px] leading-[1.5em] text-mg-gray transition-all duration-500"
          style={{
            maxHeight: hovered ? '100px' : '0px',
            opacity: hovered ? 1 : 0,
            overflow: 'hidden',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Divisions() {
  return (
    <section className="w-full bg-mg-bg py-16 md:py-24">
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {divisions.map((div) => (
            <DivisionCard
              key={div.title}
              title={div.title}
              description={div.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
