import Image from 'next/image';

/* ── Photo card positions from Framer extraction ──
   All positions are absolute within a 1200px viewport.
   We use percentage-based positioning for responsiveness. */
const FLOAT_CARDS = [
  { src: '/images/photo-dish-5.jpg',       w: 205, h: 241, top: '-5%',   left: '14.6%', zIndex: 0, alt: 'Plato' },
  { src: '/images/photo-dish-2.jpg',       w: 179, h: 186, top: '16%',   left: '61.4%', zIndex: 6, alt: 'Plato Hamachi' },
  { src: '/images/photo-dish-3.jpg',       w: 196, h: 277, top: '-3.3%', left: '74.2%', zIndex: 5, alt: 'Plato Atun' },
  { src: '/images/photo-interior-1.png',   w: 232, h: 273, top: '18.8%', left: '-1.1%', zIndex: 5, alt: 'Interior LI-ONNA' },
  { src: '/images/photo-dish-1.jpg',       w: 175, h: 217, top: '46.5%', left: '17.2%', zIndex: 6, alt: 'Plato Salmon' },
  { src: '/images/photo-dish-4.jpg',       w: 212, h: 250, top: '31%',   left: '72.9%', zIndex: 5, alt: 'Plato Tataki' },
  { src: '/images/photo-interior-2.png',   w: 183, h: 215, top: '68.3%', left: '4.6%',  zIndex: 5, alt: 'Sala LI-ONNA' },
  { src: '/images/photo-interior-wide.jpg',w: 289, h: 186, top: '64.3%', left: '22%',   zIndex: 6, alt: 'Restaurante LI-ONNA' },
  { src: '/images/photo-dish-6.jpg',       w: 185, h: 248, top: '27.2%', left: '83.5%', zIndex: 0, alt: 'Plato extra' },
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
      {/* Vector curve watermark behind photos */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 50,
          left: 24,
          width: 'calc(100% - 48px)',
          height: '60%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/logo-large.svg"
          alt=""
          width={7966}
          height={2181}
          style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.06 }}
        />
      </div>

      {/* Photo Section wrapper — padding: 120px 24px 80px */}
      <div
        className="gallery-section-wrap"
        style={{
          padding: '120px 24px 80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Photo container with floating cards */}
        <div
          className="gallery-photo-container"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: 1152,
            margin: '0 auto',
            paddingTop: '80px',
            paddingBottom: '90px',
          }}
        >
          {/* Aspect-ratio container for cards */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '62.5%', /* ~720/1152 aspect ratio */
              minHeight: 500,
            }}
          >
            {FLOAT_CARDS.map((card, i) => {
              const cardStyle: React.CSSProperties = {
                position: 'absolute',
                width: `${(card.w / 1152) * 100}%`,
                aspectRatio: `${card.w}/${card.h}`,
                borderRadius: 2,
                overflow: 'hidden',
                zIndex: card.zIndex,
                willChange: 'transform',
                boxShadow: '0.398px 0.398px 0.563px -0.9375px rgba(0,0,0,0.18), 1.207px 1.207px 1.707px -1.875px rgba(0,0,0,0.17), 3.191px 3.191px 4.513px -2.8125px rgba(0,0,0,0.15), 10px 10px 14.142px -3.75px rgba(0,0,0,0.06)',
                top: card.top,
                left: card.left,
              };
              return (
                <div key={i} style={cardStyle}>
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="20vw"
                  />
                </div>
              );
            })}

            {/* Gradient overlay fading to F6F4F0 */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '55%',
                background: 'linear-gradient(transparent 0%, #F6F4F0 68.7829%)',
                zIndex: 7,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>

        {/* ── "hola Madrid" text content ──────────────────── */}
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <h2
            style={{
              fontFamily: '"Odesta Regular Regular", Odesta, serif',
              fontSize: 84,
              fontWeight: 400,
              color: 'rgb(0, 91, 255)',
              letterSpacing: '1.68px',
              textAlign: 'right',
              lineHeight: '100.8px',
              margin: '0 0 16px 0',
            }}
            className="lionna-hero-heading"
          >
            hola Madrid
          </h2>
          <p
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontSize: 24,
              fontWeight: 400,
              color: 'rgb(0, 0, 0)',
              letterSpacing: '0.48px',
              textAlign: 'justify',
              lineHeight: '28.8px',
              margin: 0,
            }}
          >
            Desde esta esquina en el corazon de la capital perseguimos la sintonia perfecta entre la cocina japonesa y nuestras raices latinas creando una atmosfera atemporal y autentica.
          </p>
        </div>

        {/* Japanese katakana accent */}
        <div
          style={{
            maxWidth: 900,
            margin: '24px auto 0',
            padding: '0 24px',
          }}
        >
          <p
            style={{
              fontFamily: '"Editorial New Thin", EditorialNew, serif',
              fontSize: 48,
              fontWeight: 400,
              color: 'rgb(0, 91, 255)',
              letterSpacing: '0.96px',
              lineHeight: '57.6px',
              textAlign: 'left',
              margin: 0,
            }}
            className="lionna-katakana-text"
          >
            リオンナ
          </p>
        </div>

        {/* ── MENU / RESERVAS buttons ─────────────────────── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            padding: '32px 0',
          }}
        >
          <a
            href="https://www.mnu.bio/lionna"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 13,
              lineHeight: '15.6px',
              color: '#fff',
              background: 'rgb(0, 92, 254)',
              borderRadius: 8,
              padding: '8px 16px',
              textDecoration: 'none',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <span>MENU</span>
            <span>PRONTO</span>
          </a>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 13,
              lineHeight: '15.6px',
              color: 'rgb(0, 92, 254)',
              background: 'transparent',
              borderRadius: 8,
              padding: '8px 16px',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <span>RESERVAS</span>
            <span>PRONTO</span>
          </span>
        </div>

        {/* ── Separator ──────────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .lionna-hero-heading { font-size: 56px !important; line-height: 67.2px !important; letter-spacing: 1.12px !important; }
          .lionna-katakana-text { font-size: 36px !important; line-height: 43.2px !important; }
        }
        @media (max-width: 809px) {
          .gallery-section-wrap { padding: 80px 16px 60px !important; }
          .lionna-hero-heading { font-size: 36px !important; line-height: 43.2px !important; letter-spacing: 0.72px !important; }
          .lionna-katakana-text { font-size: 28px !important; line-height: 33.6px !important; }
        }
      `}</style>
    </section>
  );
}
