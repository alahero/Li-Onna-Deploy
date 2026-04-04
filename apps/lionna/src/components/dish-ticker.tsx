// Exact dish names from Framer extraction
const TICKER_ROWS: { items: string[]; speed: number }[] = [
  {
    items: ['Tostada de Atún', 'Tacos de Hamachi', 'Tataki de Res', 'Kushiage de Queso', 'Tacos de Bacalao', 'Fujiyama'],
    speed: 28,
  },
  {
    items: ['Akami Pesto', 'Ensaladas de Setas Crujientes'],
    speed: 45,
  },
  {
    items: ['Salmón Gochugaru', 'Pulpo Anticucho', 'Atún Futomaki', 'Li-Onna Roll', 'Gogo Roll'],
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
        marginInline: 20,
        color: 'rgba(255,255,255,0.5)',
        fontSize: 22,
        lineHeight: 1,
        flexShrink: 0,
      }}
    >
      ·
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
                fontFamily: 'EditorialNew, serif',
                fontWeight: 400,
                fontSize: 22,
                letterSpacing: '-0.04em',
                lineHeight: '1.4em',
                color: '#fff',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              className="ticker-text-responsive"
            >
              {item}
            </span>
            <Sep />
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
        backgroundColor: '#005BFF',
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      {/* "Imprescindibles" heading */}
      <div
        className="ticker-heading"
        style={{
          padding: '0 80px 48px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Odesta, serif',
            fontWeight: 600,
            fontSize: 50,
            letterSpacing: '0.02em',
            textAlign: 'center',
            color: '#fff',
            margin: 0,
          }}
          className="imprescindibles-title"
        >
          Imprescindibles
        </h2>
      </div>

      {/* Three ticker rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {TICKER_ROWS.map((row, i) => (
          <TickerRow key={i} items={row.items} speed={row.speed} />
        ))}
      </div>

      {/* MENÚ external link */}
      <div style={{ padding: '48px 80px 0', display: 'flex', justifyContent: 'center' }}>
        <a
          href="https://www.mnu.bio/lionna"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'EditorialNew, serif',
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: '0.21em',
            color: '#fff',
            textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: 8,
            padding: '10px 20px',
            display: 'inline-block',
            textTransform: 'uppercase',
          }}
        >
          MENÚ
        </a>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .ticker-heading { padding: 0 24px 40px !important; }
        }
        @media (max-width: 1199px) {
          .ticker-text-responsive { font-size: 18px !important; }
        }
        @media (max-width: 809px) {
          .ticker-text-responsive { font-size: 16px !important; }
          .ticker-heading { padding: 0 16px 32px !important; }
          .imprescindibles-title { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
}
