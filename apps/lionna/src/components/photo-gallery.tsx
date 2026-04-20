import Image from 'next/image';

/** Dimensiones reales de `photo-interior-1.png` (IHDR); evita distorsión en next/image. */
const INTERIOR_1_ANCHO = 1300;
const INTERIOR_1_ALTO = 1937;

/**
 * Ancho de la foto de fondo casi a ancho útil del viewport (alineado con Framer ~calc(100vw * 0.96)).
 * Margen horizontal mínimo para no rozar el borde del navegador.
 */
const ANCHO_CAPA_INTERIOR_1 = 'min(calc(100vw * 0.96), calc(100vw - 24px))';

/**
 * Alto mínimo del escenario para que, al ancho de capa (~96vw), quepa casi toda la foto (ratio 1300×1937).
 * Opción B: menos recorte vertical que un escenario bajo con solo overflow:hidden.
 */
const ALTO_MIN_ESCENARIO_INTERIOR = `calc(${ANCHO_CAPA_INTERIOR_1} * ${INTERIOR_1_ALTO} / ${INTERIOR_1_ANCHO} + 5rem)`;

/** z-index: fondo interior < tarjetas < degradado (sin afectar el flujo del documento). */
const Z_INTERIOR_FONDO = 2;
const Z_TARJETA_MIN = 10;
const Z_DEGRADADO_GALERIA = 25;

/* -- Photo card positions from Playwright @ 1440px viewport --
   Section starts at y=1032. Positions converted to % of 1440x1000 container. */
const FLOAT_CARDS = [
  { src: '/images/photo-interior-3.jpg',   w: 288, h: 339, top: '4.8%',  left: '25.7%', zIndex: Z_TARJETA_MIN, alt: 'Interior' },
  { src: '/images/photo-dish-1.jpg',       w: 222, h: 231, top: '21.9%', left: '50%',   zIndex: Z_TARJETA_MIN + 1, alt: 'Plato' },
  { src: '/images/photo-dish-2.jpg',       w: 243, h: 344, top: '2.6%',  left: '67.2%', zIndex: Z_TARJETA_MIN, alt: 'Plato' },
  { src: '/images/photo-dish-3.jpg',       w: 288, h: 339, top: '37%',   left: '10.8%', zIndex: Z_TARJETA_MIN, alt: 'Plato' },
  { src: '/images/photo-dish-4.jpg',       w: 217, h: 215, top: '44.3%', left: '42.5%', zIndex: Z_TARJETA_MIN + 1, alt: 'Plato' },
  { src: '/images/photo-dish-5.jpg',       w: 264, h: 311, top: '52.1%', left: '64.2%', zIndex: Z_TARJETA_MIN, alt: 'Plato' },
  { src: '/images/photo-interior-2.png',   w: 228, h: 267, top: '58.7%', left: '26.7%', zIndex: Z_TARJETA_MIN, alt: 'Interior' },
  { src: '/images/photo-interior-wide.jpg',w: 359, h: 231, top: '70.9%', left: '45.1%', zIndex: Z_TARJETA_MIN + 1, alt: 'Restaurante' },
  { src: '/images/photo-dish-6.jpg',       w: 222, h: 298, top: '33.4%', left: '79%',   zIndex: Z_TARJETA_MIN, alt: 'Plato' },
];

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
        /* hidden: evita que la foto de fondo (más alta que el escenario) se pinte hacia el hero/nav */
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

      {/* Photo Section wrapper */}
      <div
        className="gallery-section-wrap"
        style={{
          /* Menos padding superior: acerca la galería al bloque anterior (nav / main) */
          padding: '48px 24px 80px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Bloque galería: foto a ancho viewport (como Framer ~96vw); tarjetas siguen en columna 1152px */}
        <div
          className="gallery-photo-container"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 'none',
            margin: 0,
            paddingTop: '28px',
            paddingBottom: '90px',
          }}
        >
          <div
            style={{
              position: 'relative',
              left: '50%',
              width: '100vw',
              marginLeft: '-50vw',
              minHeight: ALTO_MIN_ESCENARIO_INTERIOR,
              overflow: 'hidden',
              isolation: 'isolate',
            }}
          >
            {/* Fondo: sale del maxWidth 1152; sin esto el ancho visible queda ~1152px aunque el img pida ~96vw */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: Z_INTERIOR_FONDO,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: '1%',
                lineHeight: 0,
              }}
            >
              <Image
                src="/images/photo-interior-1.png"
                alt=""
                width={INTERIOR_1_ANCHO}
                height={INTERIOR_1_ALTO}
                sizes="96vw"
                style={{
                  width: ANCHO_CAPA_INTERIOR_1,
                  maxWidth: ANCHO_CAPA_INTERIOR_1,
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: 1152,
                margin: '0 auto',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '58%',
                  minHeight: ALTO_MIN_ESCENARIO_INTERIOR,
                  overflow: 'hidden',
                }}
              >
                {FLOAT_CARDS.map((card) => {
                  const cardStyle: React.CSSProperties = {
                    position: 'absolute',
                    width: `${(card.w / 1152) * 100}%`,
                    aspectRatio: `${card.w}/${card.h}`,
                    borderRadius: 2,
                    overflow: 'hidden',
                    zIndex: card.zIndex,
                    willChange: 'transform',
                    boxShadow:
                      '0.398px 0.398px 0.563px -0.9375px rgba(0,0,0,0.18), 1.207px 1.207px 1.707px -1.875px rgba(0,0,0,0.17), 3.191px 3.191px 4.513px -2.8125px rgba(0,0,0,0.15), 10px 10px 14.142px -3.75px rgba(0,0,0,0.06)',
                    top: card.top,
                    left: card.left,
                  };
                  return (
                    <div key={card.src} style={cardStyle}>
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

                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '55%',
                    background: 'linear-gradient(transparent 0%, #F6F4F0 68.7829%)',
                    zIndex: Z_DEGRADADO_GALERIA,
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* -- "hola Madrid" text content -- (por encima de posible desborde visual de la foto de fondo) */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
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
            position: 'relative',
            zIndex: 3,
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
            position: 'relative',
            zIndex: 3,
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
        <div style={{ position: 'relative', zIndex: 3, display: 'flex', justifyContent: 'center' }}>
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
