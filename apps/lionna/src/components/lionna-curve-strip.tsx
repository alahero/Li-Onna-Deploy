'use client';

import { type CSSProperties, useCallback, useEffect, useRef, useState } from 'react';

/** Mismo asset y ritmo que `Hero` (carril de curvas horizontales). */
export const ANCHO_TILE_CURVA = 551;
export const ALTO_TILE_CURVA = 262;
const CANTIDAD_TILES_CURVA = 17;
const SEGUNDOS_ANIM_CURVA = (45 * 2) / CANTIDAD_TILES_CURVA;

const cssAnimCintaCurva = () => `lionna-curve-scroll ${SEGUNDOS_ANIM_CURVA}s linear infinite`;

type LionnaCurveStripProps = {
  /** Opacidad de la cinta sobre el fondo (en home ~0.3). */
  opacidad?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Franja animada con `lionna-curve.png` (mismo comportamiento que en el Hero principal).
 */
export function LionnaCurveStrip({ opacidad = 0.3, className, style: estiloExterno }: LionnaCurveStripProps) {
  const refCintaCurva = useRef<HTMLDivElement>(null);
  const [movimientoReducido, setMovimientoReducido] = useState(false);

  const reiniciarAnimacion = useCallback(() => {
    if (movimientoReducido) return;
    if (document.visibilityState !== 'visible') return;
    const nodo = refCintaCurva.current;
    if (!nodo) return;
    nodo.style.animation = 'none';
    void nodo.offsetWidth;
    nodo.style.animation = cssAnimCintaCurva();
  }, [movimientoReducido]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMovimientoReducido(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (movimientoReducido) return;
    document.addEventListener('visibilitychange', reiniciarAnimacion);
    window.addEventListener('pageshow', reiniciarAnimacion);
    window.addEventListener('resize', reiniciarAnimacion);
    const id1 = requestAnimationFrame(() => {
      requestAnimationFrame(reiniciarAnimacion);
    });
    return () => {
      document.removeEventListener('visibilitychange', reiniciarAnimacion);
      window.removeEventListener('pageshow', reiniciarAnimacion);
      window.removeEventListener('resize', reiniciarAnimacion);
      cancelAnimationFrame(id1);
    };
  }, [movimientoReducido, reiniciarAnimacion]);

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        opacity: opacidad,
        overflow: 'hidden',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        ...estiloExterno,
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
            /* eslint-disable-next-line @next/next/no-img-element -- secuencia de mosaicos como en Hero */
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
  );
}
