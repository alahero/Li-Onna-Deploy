'use client';

/**
 * BrandMarquee — huge scrolling blue text between contact section and footer.
 * Text: "Cocina japonesa con alma latina リオンナ LI-ONNA —"
 * Mixed fonts: Odesta for script portions, Editorial New for "LI-ONNA —"
 * Background: #F6F6F2 (same beige)
 */
export function BrandMarquee() {
  // The marquee text repeated for seamless scrolling
  const MarqueeItem = () => (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', whiteSpace: 'nowrap', flexShrink: 0 }}>
      <span
        style={{
          fontFamily: '"Odesta Regular Regular", Odesta, serif',
          fontWeight: 400,
          fontSize: 111,
          lineHeight: '133.2px',
          color: 'rgb(0, 92, 254)',
          letterSpacing: 'normal',
        }}
        className="marquee-odesta"
      >
        Cocina japonesa con alma latina{' '}
      </span>
      <span
        style={{
          fontFamily: '"Editorial New Regular", EditorialNew, serif',
          fontWeight: 400,
          fontSize: 81,
          lineHeight: '97.2px',
          color: 'rgb(0, 92, 254)',
          letterSpacing: 'normal',
        }}
        className="marquee-editorial"
      >
        &#x30EA;&#x30AA;&#x30F3;&#x30CA; LI-ONNA &mdash;{' '}
      </span>
    </span>
  );

  return (
    <section
      style={{
        backgroundColor: '#F6F6F2',
        padding: '80px 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'brand-marquee-scroll 30s linear infinite',
          willChange: 'transform',
        }}
      >
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
        <MarqueeItem />
      </div>

      <style jsx global>{`
        @keyframes brand-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @media (max-width: 1439px) {
          .marquee-odesta { font-size: 72px !important; line-height: 86.4px !important; }
          .marquee-editorial { font-size: 54px !important; line-height: 64.8px !important; }
        }
        @media (max-width: 809px) {
          .marquee-odesta { font-size: 48px !important; line-height: 57.6px !important; }
          .marquee-editorial { font-size: 36px !important; line-height: 43.2px !important; }
        }
      `}</style>
    </section>
  );
}
