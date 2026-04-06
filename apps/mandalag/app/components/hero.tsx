'use client';

import { useEffect, useRef } from 'react';

interface HeroProps {
  line1: string;
  line2: string;
  line3: string;
  videoSrc: string;
  cta1Text: string;
  cta1Link: string;
  cta2Text: string;
  cta2Link: string;
}

export default function Hero({ line1, line2, line3, videoSrc, cta1Text, cta1Link, cta2Text, cta2Link }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      style={{
        background: 'linear-gradient(#1a1c1e 14%, #3d3e39 117%)',
        display: 'flex',
        flexFlow: 'column',
        placeContent: 'center',
        alignItems: 'center',
        gap: '45px',
        width: '100%',
        height: '727px',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Video background */}
      <div style={{ position: 'absolute', zIndex: 0, width: '100%', height: '100%', top: 0, left: 0 }}>
        <video
          ref={videoRef}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%' }}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      </div>

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          zIndex: 0,
          width: '100%',
          height: '100%',
          bottom: 0,
          left: 0,
          background: 'linear-gradient(rgba(27, 29, 31, 0.5) 14%, #3d3e39 100%)',
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexFlow: 'column',
          placeContent: 'center',
          alignItems: 'center',
          gap: 0,
          width: '100%',
        }}
      >
        <h1
          className="font-figtree"
          style={{ fontSize: '65px', fontWeight: 900, lineHeight: '1.1em', letterSpacing: '0em', color: '#fff', textAlign: 'left' }}
        >
          {line1}
        </h1>
        <h1
          className="font-figtree"
          style={{ fontSize: '65px', fontWeight: 900, lineHeight: '1.1em', letterSpacing: '0em', color: '#fff', textAlign: 'left' }}
        >
          {line2}
        </h1>
        <h1
          className="font-figtree"
          style={{ fontSize: '65px', fontWeight: 900, lineHeight: '1.1em', letterSpacing: '0em', color: '#fff', textAlign: 'left' }}
        >
          {line3}
        </h1>
      </div>

      {/* CTA buttons */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexFlow: 'row',
          placeContent: 'center',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
        }}
      >
        <a
          href={cta1Link}
          className="font-figtree"
          style={{
            border: '1px solid #d9d9d9',
            borderRadius: '13px',
            backgroundColor: 'transparent',
            padding: '10px 20px',
            fontSize: '15px',
            fontWeight: 700,
            lineHeight: '1.5em',
            color: '#fff',
            textDecoration: 'none',
            textAlign: 'center',
          }}
        >
          {cta1Text}
        </a>
        <a
          href={cta2Link}
          className="font-figtree"
          style={{
            border: '1px solid #d9d9d9',
            borderRadius: '13px',
            backgroundColor: 'transparent',
            padding: '10px 20px',
            fontSize: '15px',
            fontWeight: 700,
            lineHeight: '1.5em',
            color: '#fff',
            textDecoration: 'none',
            textAlign: 'center',
          }}
        >
          {cta2Text}
        </a>
      </div>
    </section>
  );
}
