'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LionnaCurveStrip } from '@/components/lionna-curve-strip';

const URL_COMPRA_GIFT =
  'https://www.covermanager.com/eco/buy_products/restaurante-li-onna/spanish';

/**
 * Hero de Tarjetas Regalo: azul sólido, cinta de curvas (mismo patrón que el Hero),
 * logo, panel tipo vidrio y tarjetas con movimiento vertical tipo “wiggle”.
 */
export function GiftcardsHero() {
  return (
    <section
      className="giftcards-hero-section"
      style={{
        position: 'relative',
        backgroundColor: 'rgb(0, 91, 255)',
        minHeight: 'min(90vh, 900px)',
        padding: '48px 64px 64px',
        overflow: 'hidden',
      }}
    >
      <LionnaCurveStrip opacidad={0.3} />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
        }}
      >
        {/* Logo principal con leve resplandor, como en el sitio en Framer */}
        <div style={{ textAlign: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG local, mismo criterio que en Navbar/Hero */}
          <img
            src="/images/logo-large.svg"
            alt="LI-ONNA"
            style={{
              width: 'min(50vw, 480px)',
              minWidth: 240,
              height: 'auto',
              display: 'block',
              margin: '0 auto',
              filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.35))',
              userSelect: 'none',
            }}
          />
        </div>

        {/* Panel vidrio: 20% blanco, blur, borde blanco */}
        <div
          className="giftcards-glass-panel"
          style={{
            width: '100%',
            maxWidth: 920,
            borderRadius: 20,
            border: '1px solid rgba(255, 255, 255, 0.55)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            padding: '48px 32px 32px',
            boxSizing: 'border-box',
          }}
        >
          <div
            className="giftcards-cards-wrap"
            style={{
              position: 'relative',
              width: '100%',
              minHeight: 280,
              marginBottom: 28,
            }}
          >
            {/* Tarjeta inferior (fondo) — wiggle solo en eje Y (capa interna) */}
            <div
              style={{
                position: 'absolute',
                left: '40%',
                top: '50%',
                transform: 'translate(-50%, calc(-50% - 36px)) rotate(-7deg)',
                zIndex: 1,
                width: 'min(72%, 360px)',
                maxWidth: 360,
              }}
            >
              <div className="giftcards-wiggle-a" style={{ width: '100%' }}>
                <Image
                  src="/images/photo-giftcard-1.webp"
                  alt="Tarjeta regalo LI-ONNA"
                  width={400}
                  height={252}
                  quality={80}
                  sizes="(max-width: 809px) 80vw, 360px"
                  className="giftcards-card-img"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
            {/* Tarjeta superior (encima) */}
            <div
              style={{
                position: 'absolute',
                left: '56%',
                top: '48%',
                transform: 'translate(-50%, calc(-50% - 36px)) rotate(9deg)',
                zIndex: 2,
                width: 'min(72%, 360px)',
                maxWidth: 360,
              }}
            >
              <div className="giftcards-wiggle-b" style={{ width: '100%' }}>
                <Image
                  src="/images/photo-giftcard-2.webp"
                  alt=""
                  width={400}
                  height={252}
                  quality={80}
                  sizes="(max-width: 809px) 80vw, 360px"
                  className="giftcards-card-img"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              href={URL_COMPRA_GIFT}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"Editorial New Medium", EditorialNew, serif',
                fontWeight: 500,
                fontSize: 15,
                letterSpacing: '0.06em',
                color: '#0a0a0a',
                backgroundColor: '#fff',
                borderRadius: 999,
                padding: '14px 36px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
              }}
            >
              Gift Card — 100€
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 809px) {
          .giftcards-hero-section {
            padding: 32px 16px 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
