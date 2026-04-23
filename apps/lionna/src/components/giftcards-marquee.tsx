'use client';

/**
 * Carril continuo bajo el hero de gift cards: misma idea que BrandMarquee,
 * orden de texto alineado al diseño en Framer (segundo screenshot).
 */
export function GiftcardsMarquee() {
  const Bloque = () => (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        gap: '0.15em',
      }}
    >
      <span
        style={{
          fontFamily: '"Editorial New Regular", EditorialNew, serif',
          fontWeight: 400,
          fontSize: 81,
          lineHeight: '97.2px',
          color: 'rgb(0, 92, 254)',
        }}
        className="giftcards-marquee-em"
      >
        —
      </span>
      <span
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: 500,
          fontSize: 72,
          lineHeight: '86.4px',
          color: 'rgb(0, 92, 254)',
        }}
        className="giftcards-marquee-kata"
      >
        リオンナ
      </span>
      <span
        style={{
          fontFamily: '"Editorial New Regular", EditorialNew, serif',
          fontWeight: 400,
          fontSize: 81,
          lineHeight: '97.2px',
          color: 'rgb(0, 92, 254)',
        }}
        className="giftcards-marquee-brand"
      >
        LI-ONNA
      </span>
      <span
        style={{
          fontFamily: '"Editorial New Regular", EditorialNew, serif',
          fontWeight: 400,
          fontSize: 81,
          lineHeight: '97.2px',
          color: 'rgb(0, 92, 254)',
        }}
        className="giftcards-marquee-em"
      >
        —
      </span>
      <span
        style={{
          fontFamily: '"Odesta Regular Regular", Odesta, serif',
          fontWeight: 400,
          fontSize: 111,
          lineHeight: '133.2px',
          color: 'rgb(0, 92, 254)',
          fontStyle: 'italic',
        }}
        className="giftcards-marquee-tag"
      >
        Cocina japonesa con alma latina
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
          animation: 'giftcards-marquee-scroll 32s linear infinite',
          willChange: 'transform',
        }}
      >
        <Bloque />
        <Bloque />
        <Bloque />
        <Bloque />
      </div>

      <style jsx global>{`
        @keyframes giftcards-marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        @media (max-width: 1439px) {
          .giftcards-marquee-tag {
            font-size: 72px !important;
            line-height: 86.4px !important;
          }
          .giftcards-marquee-kata {
            font-size: 52px !important;
            line-height: 62.4px !important;
          }
          .giftcards-marquee-brand,
          .giftcards-marquee-em {
            font-size: 58px !important;
            line-height: 69.6px !important;
          }
        }
        @media (max-width: 809px) {
          .giftcards-marquee-tag {
            font-size: 48px !important;
            line-height: 57.6px !important;
          }
          .giftcards-marquee-kata {
            font-size: 36px !important;
            line-height: 43.2px !important;
          }
          .giftcards-marquee-brand,
          .giftcards-marquee-em {
            font-size: 40px !important;
            line-height: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
