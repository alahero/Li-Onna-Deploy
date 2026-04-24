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
 * Ancho compartido del fondo interior y del collage: hasta ~1152px crece con el viewport; después solo
 * absorbe una parte del ancho extra (factor FRAC) para que las tarjetas no escalan todo el salto a
 * pantallas ultra anchas y la composición se parece más al diseño de referencia.
 */
const FRAC_CRECIMIENTO_ESCENARIO_TRAS_ARTBOARD = 0.4;
const ANCHO_ESCENARIO_GALERIA = `min(${ANCHO_CAPA_INTERIOR_1}, calc(1152px + (max(0px, ${ANCHO_CAPA_INTERIOR_1} - 1152px) * ${FRAC_CRECIMIENTO_ESCENARIO_TRAS_ARTBOARD})))`;

/**
 * Alto mínimo del escenario para que, al ancho de capa efectivo, quepa casi toda la foto (ratio 1300×1937).
 * Opción B: menos recorte vertical que un escenario bajo con solo overflow:hidden.
 */
const ALTO_MIN_ESCENARIO_INTERIOR = `calc((${ANCHO_ESCENARIO_GALERIA}) * ${INTERIOR_1_ALTO} / ${INTERIOR_1_ANCHO} + 5rem)`;

/** Alto fijo del contenedor de la foto interior (persistido desde preview en navegador). */
const ALTO_CONTENEDOR_FOTO_INTERIOR_1 = '977px';

/** Color de fondo de la sección galería (debe coincidir con el degradado del fondo interior). */
const COLOR_FONDO_SECCION_GALERIA = '#F6F6F2';

/** Alto fijo de la sección (persistido desde preview en navegador). */
const ALTO_SECCION_GALERIA = '1484px';

/** z-index: fondo interior < tarjetas < degradado < copy superpuesto (clicable). */
const Z_INTERIOR_FONDO = 2;
const Z_TARJETA_MIN = 10;
const Z_DEGRADADO_GALERIA = 25;
/** Por encima del degradado del collage (y fuera del overflow del escenario de tarjetas). */
const Z_CAPA_COPY_SOBRE_ESCENARIO = 40;

/** Aire bajo el bloque full-bleed del escenario (el copy va dentro del escenario, no aquí). */
const PADDING_INFERIOR_CONTENEDOR_FOTOS = '48px';

/**
 * Desde el borde inferior de la columna del collage (valores mayores = bloque más arriba).
 */
const DESDE_ABAJO_CAPA_COPY = 'clamp(3.5rem, 20vw, 15rem)';

/** Menos franja blanca bajo las tarjetas: el degradado empieza más arriba y no “lava” el copy. */
const ALTO_FRACCION_DEGRADADO_COLLAGE = '36%';

/**
 * Ancho de diseño del escenario de tarjetas (columna centrada). Las medidas en px del collage
 * se convierten a `cqw` para escalar proporcionalmente entre viewports, como en Framer.
 */
const ANCHO_REF_COLLAGE = 1152;

/** Convierte px del diseño @1152 a longitud fluida respecto al contenedor con `container-type: inline-size`. */
function fluidoCollage(px: number): string {
  return `calc((${px} * 100cqw) / ${ANCHO_REF_COLLAGE})`;
}

/** top/left en px de diseño → fluido; conserva %, calc() y demás valores tal cual. */
function resuelvePosCollage(valor: string): string {
  const m = /^([\d.]+)px$/.exec(valor.trim());
  if (m) return fluidoCollage(Number(m[1]));
  return valor;
}

/** Tarjeta flotante sobre el escenario de la galería (coordenadas y tamaño). */
type FloatCard = {
  src: string;
  w: number;
  h: number;
  top: string;
  left: string;
  zIndex: number;
  alt: string;
  /** Si existe, ancho fijo en px de diseño @1152 (se escala con `fluidoCollage`). */
  widthPx?: number;
  /** Si existe, alto fijo en px de diseño @1152 (se escala con `fluidoCollage`). */
  heightPx?: number;
  /** Desplazamiento vertical del crop en la imagen `fill`, en px de diseño @1152. */
  imageTopDesignPx?: number;
  /** Si es true, `top` y `left` se aplican en px tal cual (sin convertir a cqw). */
  posicionFijaPx?: boolean;
  /** Si es true, solo `left` en px tal cual; `top` sigue fluido (cqw) salvo `posicionFijaPx`. */
  izquierdaFijaPx?: boolean;
};

/* -- Photo card positions from Playwright @ 1440px viewport --
   Section starts at y=1032. Positions converted to % of 1440x1000 container. */
const FLOAT_CARDS: FloatCard[] = [
  {
    src: '/images/photo-interior-3.jpg',
    w: 288,
    h: 339,
    top: '346px',
    left: '396px',
    zIndex: Z_TARJETA_MIN,
    alt: 'Interior',
    /** Posición y tamaño fijos desde preview en navegador. */
    widthPx: 202,
    heightPx: 204,
    posicionFijaPx: true,
  },
  { src: '/images/photo-dish-1.jpg',       w: 222, h: 231, top: '185px', left: '50%',   zIndex: Z_TARJETA_MIN + 1, alt: 'Plato' },
  { src: '/images/photo-dish-2.jpg',       w: 243, h: 344, top: '2.6%',  left: '67.2%', zIndex: Z_TARJETA_MIN, alt: 'Plato' },
  {
    src: '/images/photo-dish-3.jpg',
    w: 288,
    h: 339,
    top: '347px',
    left: '2px',
    zIndex: Z_TARJETA_MIN,
    alt: 'Plato',
    /** Ajuste fino respecto a aspect-ratio (preview navegador). */
    heightPx: 315,
    /** Posición persistida desde preview (px fijos, sin cqw). */
    posicionFijaPx: true,
  },
  {
    src: '/images/photo-dish-4.jpg',
    w: 217,
    h: 215,
    top: '554px',
    left: '746px',
    zIndex: Z_TARJETA_MIN + 1,
    alt: 'Plato',
    /** Ajuste fino respecto a aspect-ratio (preview navegador). */
    heightPx: 267,
  },
  {
    src: '/images/photo-dish-5.jpg',
    w: 264,
    h: 311,
    top: '45px',
    left: '169px',
    zIndex: Z_TARJETA_MIN,
    alt: 'Plato',
    /** Ajuste fino respecto a aspect-ratio (preview navegador). */
    heightPx: 341,
  },
  {
    src: '/images/photo-interior-2.png',
    w: 228,
    h: 267,
    top: '578px',
    left: '245px',
    zIndex: 272,
    alt: 'Interior',
    /** Posición, apilado y alto fijos desde preview en navegador. */
    heightPx: 240,
    /** Preview: `left: 245px` fijos; el `top` sigue en cqw. */
    izquierdaFijaPx: true,
  },
  {
    src: '/images/photo-interior-wide.jpg',
    w: 359,
    h: 231,
    top: '440px',
    left: '469px',
    zIndex: Z_TARJETA_MIN + 1,
    alt: 'Restaurante',
    widthPx: 215,
    heightPx: 203,
    /** Alineación vertical del crop (preview: top 0 en la imagen). */
    imageTopDesignPx: 0,
  },
  {
    src: '/images/photo-dish-6.jpg',
    w: 222,
    h: 298,
    top: '336px',
    left: '79%',
    zIndex: Z_TARJETA_MIN,
    alt: 'Plato',
    /** Ajuste fino respecto a aspect-ratio (preview navegador). */
    heightPx: 272,
  },
];

interface PhotoGalleryProps {
  heroTitle?: string;
  heroSubtitle?: string;
}

export function PhotoGallery({ heroTitle, heroSubtitle }: PhotoGalleryProps) {
  return (
    <section
      style={{
        backgroundColor: COLOR_FONDO_SECCION_GALERIA,
        position: 'relative',
        height: ALTO_SECCION_GALERIA,
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
        {/* Bloque galería: fondo y collage comparten ancho sublineal (crece menos que 96vw tras el artboard 1152) */}
        <div
          className="gallery-photo-container"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 'none',
            margin: 0,
            paddingTop: '28px',
            paddingBottom: PADDING_INFERIOR_CONTENEDOR_FOTOS,
          }}
        >
          <div
            style={{
              position: 'relative',
              left: '50%',
              width: '100vw',
              marginLeft: '-50vw',
              minHeight: ALTO_MIN_ESCENARIO_INTERIOR,
              overflowX: 'hidden',
              /* visible en Y: el intro en posición absoluta puede subir sin recorte respecto al escenario */
              overflowY: 'visible',
              isolation: 'isolate',
            }}
          >
            {/* Fondo y collage: mismo ANCHO_ESCENARIO_GALERIA (sublineal) para alinear sin inflar todo en 4K */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: Z_INTERIOR_FONDO,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: '1%',
                lineHeight: 0,
                width: '100%',
                maxHeight: ALTO_CONTENEDOR_FOTO_INTERIOR_1,
                overflow: 'hidden',
                /* Sin inset inferior: altura acotada al escenario para que la foto no se desborde. */
              }}
            >
              {/* Contenedor solo para interior-1: recorte + máscara al pie hacia el color de sección */}
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  maxWidth: '100%',
                  height: ALTO_CONTENEDOR_FOTO_INTERIOR_1,
                  maxHeight: ALTO_CONTENEDOR_FOTO_INTERIOR_1,
                  overflow: 'hidden',
                  verticalAlign: 'top',
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
                    /* Ancho del escenario fijo; el alto sigue el ratio real — el padre recorta con overflow:hidden */
                    width: ANCHO_ESCENARIO_GALERIA,
                    maxWidth: ANCHO_ESCENARIO_GALERIA,
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '28%',
                    pointerEvents: 'none',
                    background: `linear-gradient(to bottom, transparent 0%, ${COLOR_FONDO_SECCION_GALERIA} 100%)`,
                  }}
                />
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: ANCHO_ESCENARIO_GALERIA,
                maxWidth: ANCHO_ESCENARIO_GALERIA,
                marginInline: 'auto',
                containerType: 'inline-size',
                /* Alto persistido desde preview en navegador (antes ~1949px computado). */
                height: '1581px',
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
                    width:
                      typeof card.widthPx === 'number'
                        ? fluidoCollage(card.widthPx)
                        : `${(card.w / ANCHO_REF_COLLAGE) * 100}%`,
                    ...(typeof card.heightPx === 'number'
                      ? { height: fluidoCollage(card.heightPx) }
                      : { aspectRatio: `${card.w}/${card.h}` }),
                    borderRadius: 2,
                    overflow: 'hidden',
                    zIndex: card.zIndex,
                    willChange: 'transform',
                    boxShadow:
                      '0.398px 0.398px 0.563px -0.9375px rgba(0,0,0,0.18), 1.207px 1.207px 1.707px -1.875px rgba(0,0,0,0.17), 3.191px 3.191px 4.513px -2.8125px rgba(0,0,0,0.15), 10px 10px 14.142px -3.75px rgba(0,0,0,0.06)',
                    top: card.posicionFijaPx ? card.top : resuelvePosCollage(card.top),
                    left: card.posicionFijaPx
                      ? card.left
                      : card.izquierdaFijaPx
                        ? card.left
                        : resuelvePosCollage(card.left),
                  };
                  return (
                    <div key={card.src} style={cardStyle}>
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        style={{
                          objectFit: 'cover',
                          ...(typeof card.imageTopDesignPx === 'number'
                            ? {
                                top: fluidoCollage(card.imageTopDesignPx),
                                left: 0,
                                right: 0,
                                bottom: 0,
                                width: '100%',
                                height: '100%',
                              }
                            : {}),
                        }}
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
                    height: ALTO_FRACCION_DEGRADADO_COLLAGE,
                    background: 'linear-gradient(transparent 0%, #F6F4F0 72%)',
                    zIndex: Z_DEGRADADO_GALERIA,
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Fuera del overflow:hidden del escenario de tarjetas: evita que el copy se recorte al subirlo */}
              <section
                aria-labelledby="lionna-intro-heading"
                className="lionna-gallery-intro"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: DESDE_ABAJO_CAPA_COPY,
                  zIndex: Z_CAPA_COPY_SOBRE_ESCENARIO,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 16,
                  padding: '0 24px',
                  boxSizing: 'border-box',
                }}
              >
                  <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
                    <h2
                      id="lionna-intro-heading"
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
                      {heroSubtitle ??
                        'Desde esta esquina en el coraz\u00f3n de la capital perseguimos la sinton\u00eda perfecta entre la cocina japonesa y nuestras ra\u00edces latinas creando una atm\u00f3sfera atemporal y aut\u00e9ntica.'}
                    </p>
                  </div>

                  <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
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

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 16,
                      padding: '16px 0 0',
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
                      href="#reservar"
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

                  <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
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
              </section>
            </div>
          </div>
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
