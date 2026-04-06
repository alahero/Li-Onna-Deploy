'use client';

import { useEffect, useRef, useState } from 'react';

const divisions = [
  {
    title: 'Daylife',
    description: 'Transforming normal days into extraordinary experiences.',
    video: '/videos/daylife.mp4',
  },
  {
    title: 'Nightlife',
    description: 'Immersive experiences crafted for every type of guest.',
    video: '/videos/nightlife.mp4',
  },
  {
    title: 'Gastronomic',
    description: 'Innovative cuisine, captivating atmospheres, and extraordinary flavors.',
    video: '/videos/gastronomic.mp4',
  },
  {
    title: 'Events',
    description: 'From roaring festivals to intimate, high-end gatherings.',
    video: '/videos/events.mp4',
  },
];

function DivisionCard({
  title,
  description,
  video,
}: {
  title: string;
  description: string;
  video: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-[13px] cursor-pointer"
      style={{ width: '100%', height: '100%' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1] transition-opacity duration-500"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', opacity: hovered ? 0.5 : 0.8 }}
      />

      {/* Stripe pattern */}
      <div
        className="absolute inset-0 z-[1] bg-stripe-pattern opacity-30"
        style={{ backgroundSize: '126px 126px' }}
      />

      {/* Content - positioned at bottom-left */}
      <div className="relative z-[2] flex h-full flex-col justify-end p-[30px] gap-[10px]">
        <h2
          className="font-figtree text-white"
          style={{
            fontSize: '44px',
            fontWeight: 300,
            letterSpacing: '0.06em',
            lineHeight: '1.2em',
          }}
        >
          {title}
        </h2>
        <p
          className="font-figtree text-white transition-all duration-500"
          style={{
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: '1em',
            textAlign: 'center',
            maxHeight: hovered ? '80px' : '0px',
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
    <section
      className="relative w-full"
      style={{ height: '100vh', backgroundColor: '#3d3e39' }}
    >
      <div
        className="mx-auto h-full"
        style={{
          maxWidth: '1500px',
          display: 'grid',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(2, minmax(50px, 1fr))',
          gap: '5px',
          padding: '5px',
        }}
      >
        {divisions.map((div) => (
          <DivisionCard
            key={div.title}
            title={div.title}
            description={div.description}
            video={div.video}
          />
        ))}
      </div>
    </section>
  );
}
