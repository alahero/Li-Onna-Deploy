'use client';

import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="scroll"
      style={{
        position: 'sticky',
        top: 34,
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#050505',
      }}
    >
      {/* Subway station background — Desktop */}
      <div className="houdinni-hero-desktop" style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/subway-desktop.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          aria-hidden
        />
      </div>

      {/* Subway station background — Mobile */}
      <div className="houdinni-hero-mobile" style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/subway-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          aria-hidden
        />
      </div>

      {/* Dark overlay at bottom for tracks area */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '35%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(5,5,5,0.7) 50%, rgba(5,5,5,0.95) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
        aria-hidden
      />

      {/* Hero content overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          minHeight: '100vh',
          padding: '49px 40px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Main content area */}
        <div className="houdinni-hero-grid">
          {/* LEFT — Menu poster */}
          <div className="houdinni-hero-left">
            <a
              href="https://mandalagroup.menu/es/houdinni"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              <Image
                src="/btn-menu-1.png"
                alt="Menu"
                width={759}
                height={268}
                style={{
                  width: '100%',
                  maxWidth: 280,
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.4))',
                  cursor: 'pointer',
                }}
              />
            </a>
          </div>

          {/* CENTER — HOUDINNI red sign + RESERVATIONS graffiti */}
          <div className="houdinni-hero-center">
            <div
              style={{
                backgroundColor: '#cc0000',
                padding: '20px 48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                border: '3px solid #990000',
              }}
            >
              <span
                className="font-druk"
                style={{
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                HOUDINNI
              </span>
            </div>

            {/* RESERVATIONS graffiti text */}
            <a
              href="https://tickets.houdinni.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-druk"
              style={{
                fontSize: 'clamp(24px, 3.5vw, 44px)',
                fontWeight: 700,
                color: 'rgba(80, 80, 80, 0.7)',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                transform: 'rotate(-2deg)',
                display: 'inline-block',
                marginTop: 16,
                cursor: 'pointer',
              }}
            >
              RESERVATIONS
            </a>
          </div>

          {/* RIGHT — Metro-style navigation buttons */}
          <div className="houdinni-hero-right">
            <a
              href="https://mandalagroup.menu/es/houdinni"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block' }}
            >
              <Image
                src="/btn-menu-poster.png"
                alt="Menu"
                width={759}
                height={268}
                style={{ width: '100%', maxWidth: 220, height: 'auto', cursor: 'pointer' }}
              />
            </a>
            <Link href="/events" style={{ display: 'block' }}>
              <Image
                src="/btn-events.png"
                alt="Events"
                width={759}
                height={268}
                style={{ width: '100%', maxWidth: 220, height: 'auto', cursor: 'pointer' }}
              />
            </Link>
            <a href="/#contact" style={{ display: 'block' }}>
              <Image
                src="/btn-contact.png"
                alt="Contact"
                width={759}
                height={268}
                style={{ width: '100%', maxWidth: 220, height: 'auto', cursor: 'pointer' }}
              />
            </a>
            <Link href="/calendar" style={{ display: 'block' }}>
              <Image
                src="/btn-calendar.png"
                alt="Calendar"
                width={717}
                height={158}
                style={{ width: '100%', maxWidth: 220, height: 'auto', cursor: 'pointer' }}
              />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .houdinni-hero-mobile { display: none; }
        .houdinni-hero-desktop { display: block; }

        .houdinni-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr 1fr;
          gap: 24px;
          align-items: center;
          flex: 1;
        }

        .houdinni-hero-left {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .houdinni-hero-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .houdinni-hero-right {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
        }

        @media (max-width: 809px) {
          .houdinni-hero-desktop { display: none !important; }
          .houdinni-hero-mobile { display: block !important; }

          .houdinni-hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .houdinni-hero-left {
            display: none;
          }

          .houdinni-hero-right {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            align-items: stretch;
          }

          .houdinni-hero-right img {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
