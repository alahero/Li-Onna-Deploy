'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

/** Fracción de altura de viewport: scroll acumulado para que el logo desaparezca por completo (menor = más rápido) */
const ALTURA_VIEWPORT_TRANSITION_LOGO = 0.45;

/**
 * LI-ONNA Hero — matched to live site via Playwright extraction.
 *
 * Live structure (from Playwright at 1440px):
 *   Background-color: position fixed, z=1, rgb(0,91,255) — in layout.tsx
 *   Video wrapper: NO opacity, but mask: linear-gradient(black 63.5%, transparent 100%)
 *   Thicker_Desktop: opacity 0.3, z=2, absolute — contains Lionna Curve ticker
 *   Header: z=2, relative — contains sticky logo
 *   8 progressive blur layers at y=960 (below hero)
 */

interface HeroProps {
  heroImage?: string;
}

export function Hero({ heroImage }: HeroProps) {
  // Progreso 0–1 según scroll; el logo escala y pierde opacidad hasta desvanecerse
  const [progresoScroll, setProgresoScroll] = useState(0);
  const [movimientoReducido, setMovimientoReducido] = useState(false);

  const actualizarProgreso = useCallback(() => {
    const altura = window.innerHeight || 1;
    const distanciaTotal = ALTURA_VIEWPORT_TRANSITION_LOGO * altura;
    const p = Math.min(1, Math.max(0, window.scrollY / distanciaTotal));
    setProgresoScroll(p);
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
        actualizarProgreso();
      });
    };

    window.addEventListener('scroll', programar, { passive: true });
    window.addEventListener('resize', programar, { passive: true });
    actualizarProgreso();

    return () => {
      mq.removeEventListener('change', syncReduce);
      window.removeEventListener('scroll', programar);
      window.removeEventListener('resize', programar);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [actualizarProgreso]);

  const escala = 1 - progresoScroll;
  const opacidad = 1 - progresoScroll;
  const transicionSuave = movimientoReducido
    ? 'none'
    : 'transform 90ms cubic-bezier(0.22, 1, 0.36, 1), opacity 90ms cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <>
      {/* ── Hero section — transparent bg, the fixed blue in layout.tsx shows through ── */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: 600,
          overflow: 'hidden',
        }}
      >
        {/* Video — full opacity, masked to fade out at bottom (blue shows through) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            WebkitMaskImage: 'linear-gradient(black 63.5%, transparent 100%)',
            maskImage: 'linear-gradient(black 63.5%, transparent 100%)',
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
              height: 262,
              display: 'flex',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: 'max-content',
                animation: 'lionna-curve-scroll 45s linear infinite',
                willChange: 'transform',
              }}
            >
              {Array.from({ length: 17 }).map((_, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={i}
                  src="/images/lionna-curve.png"
                  alt=""
                  style={{
                    width: 551,
                    height: 262,
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

        {/* ── Rotating circular badge / scroll indicator ─── */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            width: 140,
            height: 140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            viewBox="0 0 140 140"
            width="140"
            height="140"
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
                fontSize: 11,
                letterSpacing: '0.18em',
                fill: '#fff',
              }}
            >
              <textPath href="#badge-circle">
                EXPLORA M&Aacute;S ABAJO &bull; &#x4E0B;&#x306B;&#x30B9;&#x30AF;&#x30ED;&#x30FC;&#x30EB; &bull;{' '}
              </textPath>
            </text>
          </svg>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ zIndex: 1 }}>
            <path d="M16 6v20M8 18l8 8 8-8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <style jsx global>{`
          @keyframes lionna-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes lionna-curve-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

    </>
  );
}
