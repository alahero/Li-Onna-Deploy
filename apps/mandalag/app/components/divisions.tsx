'use client';

import { useEffect, useRef } from 'react';

interface Division {
  title: string;
  description: string;
  video: string;
}

function DivisionCard({ title, description, video, index }: Division & { index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => { videoRef.current?.play().catch(() => {}); }, []);

  const hasBgBlack = index >= 2;

  return (
    <div
      style={{
        height: '100%',
        overflow: 'hidden',
        borderRadius: '13px',
        display: 'flex',
        flexFlow: 'column',
        placeContent: 'flex-start',
        placeSelf: 'start',
        alignItems: 'flex-start',
        gap: '5px',
        width: '100%',
        padding: '10px 0 0 20px',
        position: 'relative',
        backgroundColor: hasBgBlack ? '#000' : 'transparent',
      }}
    >
      {/* Video */}
      <div style={{ position: 'absolute', zIndex: 0, inset: 0 }}>
        <video
          ref={videoRef}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      </div>

      {/* Overlay */}
      <div style={{ position: 'absolute', zIndex: 1, inset: 0, backgroundColor: 'rgba(0,0,0,0.8)' }} />

      {/* Title */}
      <div
        className="font-figtree"
        style={{
          position: 'relative',
          zIndex: 1,
          fontSize: '44px',
          fontWeight: 300,
          letterSpacing: '0.06em',
          lineHeight: '1.2em',
          color: '#fff',
        }}
      >
        {title}
      </div>

      {/* Description */}
      <div
        className="font-figtree"
        style={{
          position: 'relative',
          zIndex: 1,
          fontSize: '20px',
          fontWeight: 300,
          letterSpacing: '-0.03em',
          lineHeight: '1em',
          color: '#fff',
          width: '50%',
        }}
      >
        {description}
      </div>
    </div>
  );
}

interface DivisionsProps {
  divisions: Division[];
}

export default function Divisions({ divisions }: DivisionsProps) {
  return (
    <section style={{ height: '100vh', backgroundColor: '#3d3e39', width: '100%', position: 'relative' }}>
      <div
        style={{
          maxWidth: '1500px',
          height: '100vh',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(2, minmax(50px, 1fr))',
          gridAutoRows: 'minmax(0, 1fr)',
          justifyContent: 'center',
          gap: '20px',
          width: '100%',
          padding: '40px',
          position: 'absolute',
          top: 'calc(50% - 50vh)',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {divisions.map((d, i) => (
          <DivisionCard key={d.title} {...d} index={i} />
        ))}
      </div>
    </section>
  );
}
