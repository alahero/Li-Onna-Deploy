'use client';

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #000000 0%, #001133 40%, #003399 70%, #005BFF 100%)',
      }}
    >
      {/* ── Large centered LI-ONNA text ────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Odesta, "EditorialNew", serif',
            fontSize: 'clamp(60px, 14vw, 200px)',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '0.04em',
            lineHeight: 1,
            margin: 0,
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          LI-ONNA
        </h1>
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
  );
}
