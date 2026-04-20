'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

/** Fracción de altura de viewport: scroll acumulado para que el logo desaparezca por completo (menor = más rápido) */
const ALTURA_VIEWPORT_TRANSITION_LOGO = 0.45;

/** Azul del sitio en el hero; debe coincidir con el fondo fijo en `app/layout.tsx`. */
const AZUL_HERO = 'rgb(0, 91, 255)';

/** Mismo umbral que la máscara anterior: video limpio hasta ~63.5%, fundido hacia azul abajo. */
const GRADIENTE_HERO_FONDO = `linear-gradient(to bottom, transparent 63.5%, ${AZUL_HERO} 100%)`;

/** Carril de curva Lionna (mismo tamaño que cada `<img>` del ticker). */
const ANCHO_TILE_CURVA = 551;
const ALTO_TILE_CURVA = 262;
const CANTIDAD_TILES_CURVA = 17;

/**
 * Un ciclo = exactamente un tile en px (keyframes), no % sobre el ancho total.
 * Conserva la velocidad anterior: antes se recorría el 50% de la tira en 45s.
 */
const SEGUNDOS_ANIM_CURVA = (45 * 2) / CANTIDAD_TILES_CURVA;

const cssAnimCintaCurva = () =>
  `lionna-curve-scroll ${SEGUNDOS_ANIM_CURVA}s linear infinite`;

/**
 * LI-ONNA Hero — matched to live site via Playwright extraction.
 *
 * Live structure (from Playwright at 1440px):
 *   Background-color: position fixed, z=1, rgb(0,91,255) — in layout.tsx
 *   Video a pantalla completa; capa de gradiente position:fixed (viewport) entre video y curva/logo
 *   Thicker_Desktop: opacity 0.3, z=2, absolute — contains Lionna Curve ticker
 *   Header: z=2, relative — contains sticky logo
 *   8 progressive blur layers at y=960 (below hero)
 */

interface HeroProps {
  heroImage?: string;
}

export function Hero({ heroImage }: HeroProps) {
  const refSeccion = useRef<HTMLElement>(null);
  const refCintaCurva = useRef<HTMLDivElement>(null);
  // Progreso 0–1 según scroll; el logo escala y pierde opacidad hasta desvanecerse
  const [progresoScroll, setProgresoScroll] = useState(0);
  const [movimientoReducido, setMovimientoReducido] = useState(false);
  /** Mientras el hero cruce el viewport, el fundido fijo se pinta; si no, se oculta (el main va z=2 encima). */
  const [capaGradienteFijaVisible, setCapaGradienteFijaVisible] = useState(true);

  const sincronizarScroll = useCallback(() => {
    const altura = window.innerHeight || 1;
    const distanciaTotal = ALTURA_VIEWPORT_TRANSITION_LOGO * altura;
    const p = Math.min(1, Math.max(0, window.scrollY / distanciaTotal));
    setProgresoScroll(p);

    const el = refSeccion.current;
    if (el) {
      const r = el.getBoundingClientRect();
      const intersecaViewport = r.bottom > 0 && r.top < altura;
      setCapaGradienteFijaVisible(intersecaViewport);
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncReduce = () => setMovimientoReducido(mq.matches);
    syncReduce();
    mq.addEventListener('change', syncReduce);

    let raf = 0;
    const programar = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        sincronizarScroll();
      });
    };

    window.addEventListener('scroll', programar, { passive: true });
    window.addEventListener('resize', programar, { passive: true });
    sincronizarScroll();

    return () => {
      mq.removeEventListener('change', syncReduce);
      window.removeEventListener('scroll', programar);
      window.removeEventListener('resize', programar);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sincronizarScroll]);

  /** Reinicia la animación CSS (evita compositor “pegado” con % y carga de imágenes). */
  useEffect(() => {
    if (movimientoReducido) return;

    const reiniciarAnimacionCinta = () => {
      if (document.visibilityState !== 'visible') return;
      const nodo = refCintaCurva.current;
      if (!nodo) return;
      const animacion = cssAnimCintaCurva();
      nodo.style.animation = 'none';
      void nodo.offsetWidth;
      nodo.style.animation = animacion;
    };

    const alMostrarPagina = (e: PageTransitionEvent) => {
      if (e.persisted) reiniciarAnimacionCinta();
    };

    document.addEventListener('visibilitychange', reiniciarAnimacionCinta);
    window.addEventListener('pageshow', alMostrarPagina as (ev: Event) => void);
    window.addEventListener('resize', reiniciarAnimacionCinta);

    let idRafExterno = 0;
    let idRafInterno = 0;
    idRafExterno = requestAnimationFrame(() => {
      idRafInterno = requestAnimationFrame(reiniciarAnimacionCinta);
    });

    return () => {
      document.removeEventListener('visibilitychange', reiniciarAnimacionCinta);
      window.removeEventListener('pageshow', alMostrarPagina as (ev: Event) => void);
      window.removeEventListener('resize', reiniciarAnimacionCinta);
      cancelAnimationFrame(idRafExterno);
      cancelAnimationFrame(idRafInterno);
    };
  }, [movimientoReducido]);

  const escala = 1 - progresoScroll;
  const opacidad = 1 - progresoScroll;
  const transicionSuave = movimientoReducido
    ? 'none'
    : 'transform 90ms cubic-bezier(0.22, 1, 0.36, 1), opacity 90ms cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <>
      {/* ── Hero section — transparent bg, the fixed blue in layout.tsx shows through ── */}
      <section
        ref={refSeccion}
        style={{
          position: 'relative',
          /* Por debajo del nav sticky (z=10) para que el distintivo quede tapado al solaparse */
          zIndex: 1,
          width: '100%',
          height: '100vh',
          minHeight: 600,
          /* visible: el distintivo puede sobresalir hacia el nav */
          overflow: 'visible',
        }}
      >
        {/* Video / imagen a pantalla completa, sin máscara */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          {heroImage ? (
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
              }}
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%',
              }}
            >
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* Fundido fijo al viewport: el video/imagen se mueve con scroll, la franja azul no */}
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            backgroundImage: GRADIENTE_HERO_FONDO,
            opacity: capaGradienteFijaVisible ? 1 : 0,
            transition: movimientoReducido ? 'none' : 'opacity 0.2s ease-out',
          }}
        />

        {/* Thicker_Desktop — curve ticker at 30% opacity on top of video */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            opacity: 0.3,
            overflow: 'hidden',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              height: ALTO_TILE_CURVA,
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            <div
              ref={refCintaCurva}
              style={{
                display: 'flex',
                width: ANCHO_TILE_CURVA * CANTIDAD_TILES_CURVA,
                minWidth: ANCHO_TILE_CURVA * CANTIDAD_TILES_CURVA,
                animation: movimientoReducido ? 'none' : cssAnimCintaCurva(),
                willChange: 'transform',
                backfaceVisibility: 'hidden',
              }}
            >
              {Array.from({ length: CANTIDAD_TILES_CURVA }).map((_, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={i}
                  src="/images/lionna-curve.png"
                  alt=""
                  width={ANCHO_TILE_CURVA}
                  height={ALTO_TILE_CURVA}
                  decoding="async"
                  style={{
                    width: ANCHO_TILE_CURVA,
                    height: ALTO_TILE_CURVA,
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Header — logo centrado vertical y horizontalmente en el hero */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 80px',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              transform: `scale(${escala})`,
              opacity: opacidad,
              transformOrigin: 'center center',
              transition: transicionSuave,
              willChange: 'transform, opacity',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-large.svg"
              alt="LI-ONNA"
              style={{
                width: '36%',
                minWidth: 530,
                maxWidth: 628,
                height: 'auto',
                userSelect: 'none',
                pointerEvents: 'none',
                display: 'block',
              }}
              aria-hidden={progresoScroll >= 0.995}
            />
          </div>
        </div>

        {/* ── Distintivo circular / scroll: más grande, baja y queda bajo el nav (z) al solaparse ─── */}
        <div
          style={{
            position: 'absolute',
            /* Hacia abajo: parte del círculo queda bajo la franja del navbar */
            bottom: -68,
            left: '50%',
            transform: 'translateX(-50%)',
            /* Por debajo del nav (z=10); por encima del video (z=0) y alineado con el bloque del logo */
            zIndex: 6,
            width: 200,
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            viewBox="0 0 140 140"
            width={200}
            height={200}
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
                fontFamily: '"Editorial New Medium", serif',
                fontWeight: 500,
                fontSize: 15,
                letterSpacing: '0.18em',
                fill: '#fff',
              }}
            >
              <textPath href="#badge-circle">
                EXPLORA M&Aacute;S ABAJO &bull; &#x4E0B;&#x306B;&#x30B9;&#x30AF;&#x30ED;&#x30FC;&#x30EB; &bull;{' '}
              </textPath>
            </text>
          </svg>
          <svg width={48} height={48} viewBox="0 0 32 32" fill="none" style={{ zIndex: 1 }}>
            <path
              d="M16 6v20M8 18l8 8 8-8"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <style jsx global>{`
          @keyframes lionna-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          /* Un tile en px: bucle sin depender del % (evita “freeze” hasta reflow). Mantener sync con ANCHO_TILE_CURVA. */
          @keyframes lionna-curve-scroll {
            from { transform: translate3d(0, 0, 0); }
            to { transform: translate3d(-551px, 0, 0); }
          }
        `}</style>
      </section>

    </>
  );
}
