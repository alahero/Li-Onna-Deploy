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
        {/* Video background — loops, muted, 30% opacity, gradient mask */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            opacity: 0.3,
            WebkitMaskImage: 'linear-gradient(#000 63.5%, transparent 100%)',
            maskImage: 'linear-gradient(#000 63.5%, transparent 100%)',
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
              width: '36%',
              height: 'auto',
              maxWidth: 600,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* ── Decorative concentric semicircle arches ────── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            zIndex: 2,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <svg
            viewBox="0 0 1440 300"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax meet"
            style={{ display: 'block' }}
          >
            {[200, 240, 280, 320, 360, 400, 440].map((r, i) => (
              <path
                key={i}
                d={`M${720 - r},300 A${r},${r} 0 0,1 ${720 + r},300`}
                fill="none"
                stroke="rgba(246, 244, 240, 0.15)"
                strokeWidth="1"
              />
            ))}
          </svg>
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
                EXPLORA MÁS ABAJO · EXPLORA MÁS ABAJO ·{' '}
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
        `}</style>
      </section>

      {/* ── Section 4: Hero Text — "hola Madrid" ─────────── */}
      <section
        style={{
          backgroundColor: '#F7F8F3',
          padding: '120px 80px 80px',
        }}
        className="lionna-hero-text"
      >
        <div style={{ maxWidth: 1440, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Odesta, serif',
              fontSize: 84,
              fontWeight: 600,
              color: 'rgb(0, 91, 255)',
              letterSpacing: '0.02em',
              textAlign: 'right',
              lineHeight: 1,
              margin: '0 0 48px 0',
            }}
            className="lionna-hero-heading"
          >
            hola Madrid
          </h2>
          <p
            style={{
              fontFamily: 'EditorialNew, serif',
              fontSize: 24,
              fontWeight: 400,
              color: '#000000',
              letterSpacing: '0.02em',
              textAlign: 'justify',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Desde esta esquina en el corazón de la capital perseguimos la sintonía perfecta entre la cocina japonesa y nuestras raíces latinas creando una atmósfera atemporal y auténtica.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 1439px) {
          .lionna-hero-heading { font-size: 44px !important; }
          .lionna-hero-text { padding: 80px 64px 60px !important; }
        }
        @media (max-width: 809px) {
          .lionna-hero-heading { font-size: 30px !important; }
          .lionna-hero-text { padding: 60px 16px 40px !important; }
        }
      `}</style>
    </>
  );
}
