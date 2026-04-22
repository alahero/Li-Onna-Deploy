'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const AZUL_MARCA = 'rgb(0, 91, 255)';

/** Debe coincidir con el bloque “Eventos a tu medida” (sin banda de otro blanco en el corte). */
const BLANCO_FONDO_SECCION = 'rgb(246, 246, 242)';

const TEXTO_L1 = 'Cada celebración,';
const TEXTO_L2 = 'una experiencia única.';

type LineaConLetrasProps = { texto: string; idBloque: string };

/**
 * Cada letra en un `span` para el stagger con GSAP.
 * Ojo: las keys deben ser **únicas en todo el árbol**; no reutilices índice ni entre dos líneas.
 */
function LineaConLetras({ texto, idBloque }: LineaConLetrasProps) {
  return (
    <span
      className="block w-full shrink-0"
      style={{ lineHeight: 1.02, textAlign: 'center' }}
    >
      {texto.split('').map((car, i) => (
        <span
          key={`${idBloque}-c${i}-${car === ' ' ? 'sp' : car}`}
          className="eventos-hero-foto__letra inline-block"
          style={{ willChange: 'transform, opacity' }}
        >
          {car === ' ' ? '\u00A0' : car}
        </span>
      ))}
    </span>
  );
}

/**
 * Hero de /eventos: foto, gradiente claro en la base, copy Odesta centrado con animación por letra.
 */
export function EventosHeroFoto() {
  const refContenedor = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const raíz = refContenedor.current;
    if (!raíz) return;

    const letras = raíz.querySelectorAll<HTMLElement>('.eventos-hero-foto__letra');
    if (letras.length === 0) return;

    const respetarReducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (respetarReducir) {
      gsap.set(letras, { y: 0, opacity: 1, clearProps: 'willChange' });
      return;
    }

    gsap.set(letras, { y: 40, opacity: 0 });
    gsap.to(letras, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.018,
      onComplete: () => {
        gsap.set(letras, { clearProps: 'willChange' });
      },
    });
  }, []);

  return (
    <section
      className="eventos-hero-foto"
      aria-label="Cada celebración, una experiencia única."
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: BLANCO_FONDO_SECCION,
      }}
    >
      <div
        className="relative z-0 w-full"
        style={{
          height: 'clamp(360px, 50vw, 720px)',
        }}
      >
        <Image
          src="/images/eventos-hero-mesa.png"
          alt="Mesa con platos y copas en LI-ONNA, vista desde arriba"
          fill
          className="object-cover"
          style={{ zIndex: 0, objectPosition: '50% 55%' }}
          sizes="100vw"
          priority
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 1,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%)',
          }}
          aria-hidden
        />
        {/* Degradé blanco/crema más notorio (continuidad hacia la siguiente sección + legible el azul) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 1,
            background: [
              `linear-gradient(to top, ${BLANCO_FONDO_SECCION} 0%, ${BLANCO_FONDO_SECCION} 12%, rgba(255,255,255,0.75) 38%, rgba(255,255,255,0) 70%)`,
            ].join(),
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 1,
            /* Refuerzo suave bajo el texto: barra de lectura, sin anular el azul */
            background:
              'radial-gradient(ellipse 85% 50% at 50% 48%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)',
          }}
          aria-hidden
        />

        <div
          ref={refContenedor}
          className="absolute inset-0 z-[2] box-border flex flex-col items-center justify-center px-4 -translate-y-[min(1.25rem,2.5vh)] sm:-translate-y-[min(1.75rem,3.5vh)]"
          style={{
            paddingTop: 'clamp(1rem, 3.5vh, 2.5rem)',
            paddingBottom: 'clamp(1rem, 3.5vh, 2.5rem)',
          }}
        >
          <h1
            className="m-0 flex w-full max-w-[min(100%,900px)] flex-col items-center justify-center text-center"
            style={{
              fontFamily: "'Odesta', serif",
              fontWeight: 400,
              fontSize: 'clamp(30px, 5.2vw, 80px)',
              letterSpacing: '0.04em',
              lineHeight: 1.02,
              color: AZUL_MARCA,
              /* Contraste en zonas aún más oscuras del plato o banqueta */
              textShadow:
                '0 0 1px rgba(255,255,255,0.95), 0 0 20px rgba(255,255,255,0.6), 0 1px 2px rgba(255,255,255,0.9)',
            }}
          >
            <LineaConLetras idBloque="evh-l1" texto={TEXTO_L1} />
            {/* Separación mínima entre renglones; el bloque entero se sube con -translate en el contenedor */}
            <span className="block h-px w-full shrink-0" aria-hidden />
            <LineaConLetras idBloque="evh-l2" texto={TEXTO_L2} />
          </h1>
        </div>
      </div>
    </section>
  );
}
