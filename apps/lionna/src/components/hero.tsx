'use client';

import { LionnaCurveStrip } from '@/components/lionna-curve-strip';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

/** Fracción de altura de viewport: scroll acumulado para que el logo desaparezca por completo (menor = más rápido) */
const ALTURA_VIEWPORT_TRANSITION_LOGO = 0.45;

/** Azul del sitio en el hero; debe coincidir con el fondo fijo en `app/layout.tsx`. */
const AZUL_HERO = 'rgb(0, 91, 255)';

/** Mismo umbral que la máscara anterior: video limpio hasta ~63.5%, fundido hacia azul abajo. */
const GRADIENTE_HERO_FONDO = `linear-gradient(to bottom, transparent 63.5%, ${AZUL_HERO} 100%)`;

/** Poster (primer fotograma) + VP9 + H.264 comprimido; el MP4 pesado original ya no se usa. */
const RUTA_POSTER_HERO = '/images/hero-video-poster.webp';
const RUTA_VIDEO_WEBM = '/images/hero-video.webm';
const RUTA_VIDEO_MP4 = '/images/hero-video.mp4';

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
  /** Solo reemplazamos el video por imagen con una ruta de Keystatic no vacía. */
  const rutaImagenFondo =
    typeof heroImage === 'string' && heroImage.trim().length > 0 ? heroImage.trim() : undefined;

  const refSeccion = useRef<HTMLElement>(null);
  const refVideo = useRef<HTMLVideoElement>(null);
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

  /** Fuentes del <video> siempre en el DOM; autoplay/nudge tras paint (ref listo). */
  useEffect(() => {
    if (rutaImagenFondo || movimientoReducido) return;
    const t = window.setTimeout(() => {
      const v = refVideo.current;
      if (!v) return;
      v.load();
      const pr = v.play();
      if (pr !== undefined) void pr.catch(() => {});
    }, 0);
    return () => clearTimeout(t);
  }, [rutaImagenFondo, movimientoReducido]);

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
          {rutaImagenFondo ? (
            <Image
              src={rutaImagenFondo}
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
              ref={refVideo}
              poster={RUTA_POSTER_HERO}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%',
              }}
            >
              {!movimientoReducido ? (
                <>
                  <source src={RUTA_VIDEO_WEBM} type="video/webm" />
                  <source src={RUTA_VIDEO_MP4} type="video/mp4" />
                </>
              ) : null}
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

        {/* Cinta de curvas (mismo componente que en gift cards) */}
        <LionnaCurveStrip opacidad={0.3} style={{ zIndex: 2 }} />

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
      </section>

    </>
  );
}
