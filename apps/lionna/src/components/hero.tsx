'use client';

import Image from 'next/image';

// 8-layer backdrop blur configuration
const BLUR_LAYERS = [
  { blur: 0.25, maskEnd: 37.5 },
  { blur: 0.5,  maskEnd: 50 },
  { blur: 1,    maskEnd: 62.5 },
  { blur: 2,    maskEnd: 75 },
  { blur: 4,    maskEnd: 87.5 },
  { blur: 8,    maskEnd: 100 },
  { blur: 16,   heightPct: 25 },
  { blur: 32,   heightPct: 12.5 },
];

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        backgroundColor: '#005BFF',
      }}
    >
      {/* ── Background video with mask ─────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          maskImage: 'linear-gradient(#000 63.5276%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(#000 63.5276%, transparent 100%)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/images/hero-poster.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 50%',
            opacity: 0.3,
          }}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── 8-layer backdrop blur at hero bottom ───────── */}
      {/* Layers 1-6: full-height with mask to bottom portion */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, backdropFilter: 'blur(0.25px)', WebkitBackdropFilter: 'blur(0.25px)', maskImage: 'linear-gradient(to top, black 0%, black 37.5%, transparent 37.5%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, black 37.5%, transparent 37.5%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, backdropFilter: 'blur(0.5px)', WebkitBackdropFilter: 'blur(0.5px)', maskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 50%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, black 50%, transparent 50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, backdropFilter: 'blur(1px)', WebkitBackdropFilter: 'blur(1px)', maskImage: 'linear-gradient(to top, black 0%, black 62.5%, transparent 62.5%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, black 62.5%, transparent 62.5%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 4, backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)', maskImage: 'linear-gradient(to top, black 0%, black 75%, transparent 75%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, black 75%, transparent 75%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 5, backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', maskImage: 'linear-gradient(to top, black 0%, black 87.5%, transparent 87.5%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, black 87.5%, transparent 87.5%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 6, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', maskImage: 'linear-gradient(to top, black 0%, black 100%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 0%, black 100%, transparent 100%)', pointerEvents: 'none' }} />
      {/* Layers 7-8: only cover the bottom portion */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%', zIndex: 7, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '12.5%', zIndex: 8, backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', pointerEvents: 'none' }} />

      {/* ── Hero content overlay ────────��──────────────── */}
      <div
        className="hero-content"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          padding: '0 80px',
        }}
      >
        {/* Top sticky bar with large logo — 80px height */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: 80,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '36%', minWidth: 160 }}>
            <Image
              src="/images/logo-large.svg"
              alt="LI-ONNA"
              width={7966}
              height={2181}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* "hola Madrid" + リオンナ */}
        <div style={{ paddingBottom: 80 }}>
          <h1
            className="text-hero"
            style={{ margin: 0 }}
          >
            hola Madrid
          </h1>
          <p
            style={{
              fontFamily: 'Odesta, serif',
              fontWeight: 600,
              fontSize: 30,
              letterSpacing: '0.02em',
              color: 'rgb(0,91,255)',
              textAlign: 'right',
              margin: '8px 0 0 0',
            }}
            className="hero-japanese"
          >
            リオンナ
          </p>
        </div>
      </div>

      {/* ── Rotating circular badge / scroll indicator ─── */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          width: 140,
          height: 140,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 140 140"
          width="140"
          height="140"
          style={{
            position: 'absolute',
            inset: 0,
            animation: 'lionna-spin 12s linear infinite',
            willChange: 'transform',
          }}
        >
          <defs>
            <path id="badge-circle" d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
          </defs>
          <text
            style={{
              fontFamily: 'EditorialNew, serif',
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: '0.18em',
              fill: '#fff',
            }}
          >
            <textPath href="#badge-circle">
              LIONNA · COCINA JAPONESA · MADRID · リオンナ ·{' '}
            </textPath>
          </text>
        </svg>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ zIndex: 1 }}>
          <path d="M16 6v20M8 18l8 8 8-8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes lionna-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 1439px) {
          .hero-content { padding: 0 64px !important; }
        }
        @media (max-width: 809px) {
          .hero-content { padding: 0 16px !important; }
          .hero-japanese { font-size: 22px !important; }
        }
      `}</style>
    </section>
  );
}
