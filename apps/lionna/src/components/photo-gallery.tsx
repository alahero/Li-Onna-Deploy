import Image from 'next/image';

// Exact positions and dimensions from Framer extraction
const FLOAT_CARDS = [
  { src: '/images/photo-dish-2.jpg',       w: 222, h: 231, style: { top: 171, right: 418 }, zIndex: 6, alt: 'Plato Hamachi' },
  { src: '/images/photo-dish-3.jpg',       w: 243, h: 344, style: { top: -22,  right: 149 }, zIndex: 5, alt: 'Plato Atún' },
  { src: '/images/photo-interior-1.png',   w: 288, h: 339, style: { bottom: 149, left: 75 }, zIndex: 5, alt: 'Interior LI-ONNA' },
  { src: '/images/photo-dish-1.jpg',       w: 217, h: 215, style: { top: 395,  left: 532 }, zIndex: 6, alt: 'Plato Salmón' },
  { src: '/images/photo-dish-4.jpg',       w: 264, h: 311, style: { bottom: 26,  right: 172 }, zIndex: 5, alt: 'Plato Tataki' },
  { src: '/images/photo-interior-2.png',   w: 228, h: 267, style: { top: 539,  left: 304 }, zIndex: 5, alt: 'Sala LI-ONNA' },
  { src: '/images/photo-interior-wide.jpg',w: 359, h: 231, style: { bottom: -82, left: 570 }, zIndex: 6, alt: 'Restaurante LI-ONNA' },
];

export function PhotoGallery() {
  return (
    <section
      style={{
        backgroundColor: '#F6F6F2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* SVG curve / logo watermark at top */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: '2%',
          width: '96%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/logo-large.svg"
          alt=""
          width={7966}
          height={2181}
          style={{ width: '100%', height: 'auto', opacity: 0.06 }}
        />
      </div>

      {/* Content wrapper — padding: 120px 80px 80px */}
      <div
        className="gallery-section-wrap"
        style={{
          padding: '120px 80px 80px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
      >
        {/* Photo container — 90vh with floating cards */}
        <div
          style={{
            position: 'relative',
            height: '90vh',
            minHeight: 600,
          }}
        >
          {FLOAT_CARDS.map((card, i) => {
            const cardStyle: React.CSSProperties = {
              position: 'absolute',
              width: card.w,
              height: card.h,
              borderRadius: 2,
              overflow: 'hidden',
              zIndex: card.zIndex,
              willChange: 'transform',
              boxShadow: '0.398px 0.398px 0.563px -0.9375px rgba(0,0,0,0.18), 1.207px 1.207px 1.707px -1.875px rgba(0,0,0,0.17), 3.191px 3.191px 4.513px -2.8125px rgba(0,0,0,0.15), 10px 10px 14.142px -3.75px rgba(0,0,0,0.06)',
              ...card.style,
            };
            return (
              <div key={i} style={cardStyle}>
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes={`${card.w}px`}
                />
              </div>
            );
          })}

          {/* Gradient overlay fading to #F6F4F0 */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 654,
              background: 'linear-gradient(transparent 0%, #F6F4F0 68.7829%)',
              zIndex: 7,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .gallery-section-wrap { padding: 120px 24px 80px !important; }
        }
        @media (max-width: 809px) {
          .gallery-section-wrap { padding: 80px 0 80px !important; }
        }
      `}</style>
    </section>
  );
}
