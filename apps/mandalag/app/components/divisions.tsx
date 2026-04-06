'use client';

import { useEffect, useRef } from 'react';

const divisions = [
  {
    title: 'Daylife',
    description: 'Transforming normal days into extraordinary experiences.',
    video: '/videos/daylife.mp4',
    hasBgBlack: false,
  },
  {
    title: 'Nightlife',
    description: 'Immersive experiences crafted for every type of guest.',
    video: '/videos/nightlife.mp4',
    hasBgBlack: false,
  },
  {
    title: 'Gastronomic',
    description: 'Innovative cuisine, captivating atmospheres, and extraordinary flavors.',
    video: '/videos/gastronomic.mp4',
    hasBgBlack: true,
  },
  {
    title: 'Events',
    description: 'From roaring festivals to intimate, high-end gatherings.',
    video: '/videos/events.mp4',
    hasBgBlack: true,
  },
];

function DivisionCard({
  title,
  description,
  video,
  hasBgBlack,
}: {
  title: string;
  description: string;
  video: string;
  hasBgBlack: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-[13px]"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: hasBgBlack ? '#000' : 'transparent',
      }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      </div>

      {/* Dark overlay rgba(0,0,0,0.8) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      />

      {/* Content - positioned at TOP-LEFT */}
      <div
        className="relative z-[2] flex flex-col items-start gap-[5px]"
        style={{ padding: '10px 0 0 20px' }}
      >
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
          className="font-figtree text-white"
          style={{
            fontSize: '20px',
            fontWeight: 300,
            letterSpacing: '-0.03em',
            lineHeight: '1em',
            width: '50%',
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
        style={{
          maxWidth: '1500px',
          height: '100vh',
          display: 'grid',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(2, minmax(50px, 1fr))',
          gap: '20px',
          padding: '40px',
          position: 'absolute',
          top: 'calc(50% - 50vh)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
        }}
      >
        {divisions.map((div) => (
          <DivisionCard
            key={div.title}
            title={div.title}
            description={div.description}
            video={div.video}
            hasBgBlack={div.hasBgBlack}
          />
        ))}
      </div>
    </section>
  );
}
