'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '727px',
        background: 'linear-gradient(#1a1c1e 14%, #3d3e39 117%)',
      }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient overlay on top of video */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(rgba(27, 29, 31, 0.5) 14%, #3d3e39 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-[45px]">
        {/* Headline */}
        <div className="flex flex-col items-center text-center">
          <h1
            className="font-figtree uppercase text-white"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 65px)',
              fontWeight: 900,
              lineHeight: '1.1em',
              letterSpacing: '0em',
            }}
          >
            <span className="block">WORLD</span>
            <span className="block">CLASS</span>
          </h1>
          <h1
            className="font-figtree uppercase text-white"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 65px)',
              fontWeight: 900,
              lineHeight: '1.1em',
              letterSpacing: '0em',
            }}
          >
            EXPERIENCES
          </h1>
          <h1
            className="font-figtree uppercase text-white"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 65px)',
              fontWeight: 900,
              lineHeight: '1.1em',
              letterSpacing: '0em',
            }}
          >
            CRAFTERS
          </h1>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center gap-[10px]">
          <a
            href="#venues"
            className="inline-flex items-center justify-center rounded-[13px] border border-[#d9d9d9] bg-transparent px-5 py-2.5 font-figtree text-[15px] font-bold leading-[1.5em] text-white text-center transition-colors hover:bg-white/10"
          >
            EXPLORE OUR VENUES
          </a>
          <a
            href="#reservations"
            className="inline-flex items-center justify-center rounded-[13px] border border-[#d9d9d9] bg-transparent px-5 py-2.5 font-figtree text-[15px] font-bold leading-[1.5em] text-white text-center transition-colors hover:bg-white/10"
          >
            RESERVATIONS
          </a>
        </div>
      </div>
    </section>
  );
}
