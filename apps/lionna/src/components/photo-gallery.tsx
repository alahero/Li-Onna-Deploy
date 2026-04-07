import Image from 'next/image';

/* -- Photo card positions from Playwright @ 1440px viewport --
   Section starts at y=1032. Positions converted to % of 1440x1000 container. */
const FLOAT_CARDS = [
  { src: '/images/photo-interior-3.jpg',   w: 288, h: 339, top: '4.8%',  left: '25.7%', zIndex: 5, alt: 'Interior' },
  { src: '/images/photo-dish-1.jpg',       w: 222, h: 231, top: '21.9%', left: '50%',   zIndex: 6, alt: 'Plato' },
  { src: '/images/photo-dish-2.jpg',       w: 243, h: 344, top: '2.6%',  left: '67.2%', zIndex: 5, alt: 'Plato' },
  { src: '/images/photo-dish-3.jpg',       w: 288, h: 339, top: '37%',   left: '10.8%', zIndex: 5, alt: 'Plato' },
  { src: '/images/photo-dish-4.jpg',       w: 217, h: 215, top: '44.3%', left: '42.5%', zIndex: 6, alt: 'Plato' },
  { src: '/images/photo-dish-5.jpg',       w: 264, h: 311, top: '52.1%', left: '64.2%', zIndex: 5, alt: 'Plato' },
  { src: '/images/photo-interior-2.png',   w: 228, h: 267, top: '58.7%', left: '26.7%', zIndex: 5, alt: 'Interior' },
  { src: '/images/photo-interior-wide.jpg',w: 359, h: 231, top: '70.9%', left: '45.1%', zIndex: 6, alt: 'Restaurante' },
  { src: '/images/photo-dish-6.jpg',       w: 222, h: 298, top: '33.4%', left: '79%',   zIndex: 5, alt: 'Plato' },
  { src: '/images/photo-interior-1.png',   w: 288, h: 339, top: '4.8%',  left: '3%',    zIndex: 4, alt: 'Interior' },
];

/**
 * Blue decorative curved lines on the left side of the gallery.
 * These are vertical wavy/curved lines visible in the live site.
 */
function BlueDecorativeCurves() {
  return (
    <div
      aria-hidden
      className="gallery-blue-curves"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 140,
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 140 800"
        fill="none"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {/* Multiple parallel curved vertical lines */}
        {[0, 18, 36, 54, 72, 90, 108, 126].map((x) => (
          <path
            key={x}
            d={`M${x},0 C${x + 30},200 ${x - 30},400 ${x + 20},600 C${x - 10},700 ${x + 30},750 ${x},800`}
            stroke="rgb(0, 91, 255)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.15"
          />
        ))}
      </svg>
    </div>
  );
}

interface PhotoGalleryProps {
  heroTitle?: string;
  heroSubtitle?: string;
}

export function PhotoGallery({ heroTitle, heroSubtitle }: PhotoGalleryProps) {
  return (
    <section
      style={{
        backgroundColor: '#F6F6F2',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Blue decorative curved lines on left side */}
      <BlueDecorativeCurves />

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

      {/* Photo Section wrapper */}
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

        {/* -- "hola Madrid" text content -- */}
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
            {heroTitle ?? 'hola Madrid'}
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
            {heroSubtitle ?? 'Desde esta esquina en el coraz\u00f3n de la capital perseguimos la sinton\u00eda perfecta entre la cocina japonesa y nuestras ra\u00edces latinas creando una atm\u00f3sfera atemporal y aut\u00e9ntica.'}
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
            &#x30EA;&#x30AA;&#x30F3;&#x30CA;
          </p>
        </div>

        {/* -- MENU / RESERVAS buttons -- */}
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
              padding: '8px 48px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              textTransform: 'uppercase',
            }}
          >
            Men&uacute;
          </a>
          <a
            href="#reservas"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 13,
              lineHeight: '15.6px',
              color: 'rgb(0, 92, 254)',
              background: 'transparent',
              borderRadius: 8,
              padding: '8px 36px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              cursor: 'pointer',
              textDecoration: 'none',
              border: '1px solid rgb(0, 92, 254)',
              textTransform: 'uppercase',
            }}
          >
            Reservas
          </a>
        </div>

        {/* -- Separator -- */}
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
          .gallery-blue-curves { display: none; }
        }
      `}</style>
    </section>
  );
}
