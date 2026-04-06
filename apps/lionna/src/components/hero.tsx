'use client';

export function Hero() {
  return (
    <>
      {/* ── Section 1: Full-Page Video Hero ──────────────── */}
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
        {/* Video background — loops, muted, 30% opacity */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            opacity: 0.3,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '50% 50%',
            }}
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Scrolling curve ticker overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 262,
            zIndex: 2,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'lionna-curve-scroll 20s linear infinite',
              willChange: 'transform',
            }}
          >
            {Array.from({ length: 16 }).map((_, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={i}
                src="/images/logo-large.svg"
                alt=""
                style={{
                  width: 551,
                  height: 262,
                  objectFit: 'cover',
                  opacity: 0.12,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Large centered logo SVG */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 80px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-large.svg"
            alt="LI-ONNA"
            style={{
              width: '39%',
              height: 'auto',
              maxWidth: 468,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
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
                EXPLORA MAS ABAJO · EXPLORA MAS ABAJO ·{' '}
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
          @keyframes lionna-curve-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </>
  );
}
