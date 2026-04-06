// Exact dish names from Framer extraction
const TICKER_ROWS: { items: string[]; speed: number }[] = [
  {
    items: ['Tostada de Atun', 'Tacos de Hamachi', 'Tataki de Res', 'Kushiage de Queso', 'Tacos de Bacalao', 'Fujiyama'],
    speed: 28,
  },
  {
    items: ['Akami Pesto', 'Ensaladas de Setas Crujientes'],
    speed: 45,
  },
  {
    items: ['Salmon Gochugaru', 'Pulpo Anticucho', 'Atun Futomaki', 'Li-Onna Roll', 'Gogo Roll'],
    speed: 32,
  },
];

function Sep() {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        marginInline: 16,
        color: 'rgba(0,0,0,0.3)',
        fontSize: 22,
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      |
    </span>
  );
}

function ZwnjSep() {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        marginInline: 8,
        color: 'rgba(0,0,0,0.3)',
        fontSize: 22,
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      |
    </span>
  );
}

function TickerRow({ items, speed }: { items: string[]; speed: number }) {
  // Duplicate 4x to ensure seamless loop
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
      }}
    >
      <div
        className="ticker-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
            <span
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 22,
                letterSpacing: '-0.88px',
                lineHeight: '30.8px',
                color: 'rgb(0, 0, 0)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              className="ticker-text-responsive"
            >
              {item}
            </span>
            {i < repeated.length - 1 && <Sep />}
          </span>
        ))}
      </div>
    </div>
  );
}

export function DishTicker() {
  return (
    <section
      style={{
        backgroundColor: '#F6F6F2',
        padding: '32px 24px',
      }}
    >
      {/* Star/Union decorative icon */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" aria-hidden>
          <path d="M14 0L16.5 9.5L26 13L16.5 16.5L14 26L11.5 16.5L2 13L11.5 9.5L14 0Z" fill="rgb(0,92,254)" />
        </svg>
      </div>

      {/* "Imprescindibles" heading */}
      <div
        className="ticker-heading"
        style={{
          padding: '0 24px 32px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: '"Odesta Regular Regular", Odesta, serif',
            fontWeight: 400,
            fontSize: 50,
            letterSpacing: '1px',
            lineHeight: '60px',
            textAlign: 'center',
            color: 'rgb(0, 92, 254)',
            margin: 0,
          }}
          className="imprescindibles-title"
        >
          Imprescindibles
        </h2>
      </div>

      {/* Three ticker rows */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          maxWidth: 900,
          margin: '0 auto',
          overflow: 'hidden',
          padding: '8px',
        }}
      >
        {TICKER_ROWS.map((row, i) => (
          <TickerRow key={i} items={row.items} speed={row.speed} />
        ))}
      </div>

      {/* ── Separator ──────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
        <div
          style={{
            width: '50%',
            maxWidth: 600,
            height: 2,
            background: 'rgb(0, 0, 0)',
            opacity: 0.4,
          }}
        />
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .ticker-heading { padding: 0 24px 32px !important; }
        }
        @media (max-width: 1199px) {
          .ticker-text-responsive { font-size: 18px !important; }
        }
        @media (max-width: 809px) {
          .ticker-text-responsive { font-size: 16px !important; }
          .ticker-heading { padding: 0 16px 24px !important; }
          .imprescindibles-title { font-size: 36px !important; line-height: 43.2px !important; }
        }
      `}</style>
    </section>
  );
}
