'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * HeroSection — pixel-perfect from Framer extraction.
 *
 * Layout (viewport 1200px):
 *   - Background image: subway-desktop.png, 1200x561, objectFit cover
 *   - XL section: sticky, top 24px, positioned at x:86, w:1028, h:434, padding 24px, z-index 1
 *   - Left poster (menu): x:75, y:181, 230x289
 *   - Center top image: x:384, y:73, 428x272
 *   - Center bottom (reservations): x:392, y:338, 411x147
 *   - Right buttons: menu(911,141 193x68), events(911,227 193x68), contact(911,312 193x68)
 *   - Calendar button: (918,397 180x64) objectFit contain
 *   - Calendar screen video: (919,410 178x38) z-index -1, position absolute
 */
export function HeroSection() {
  return (
    <>
      {/* Full background image — spans entire hero area 0–561px */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingBottom: `${(561 / 1200) * 100}%`, /* aspect ratio 1200:561 */
        }}
      >
        {/* Desktop background */}
        <div className="houdinni-hero-desktop" style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/subway-desktop.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            aria-hidden
          />
        </div>

        {/* Mobile background */}
        <div className="houdinni-hero-mobile" style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/subway-mobile.png"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            aria-hidden
          />
        </div>

        {/* XL section overlay — sticky, z-index 1 */}
        <section
          className="houdinni-hero-overlay"
          style={{
            position: 'sticky',
            top: '24px',
            zIndex: 1,
            width: '100%',
            maxWidth: '1028px',
            margin: '0 auto',
            padding: '24px',
            height: '434px',
          }}
        >
          {/* Left — Menu poster: 230x289, positioned at relative (75,181) → ~left side */}
          <div
            className="houdinni-hero-left"
            style={{
              position: 'absolute',
              left: '0',
              top: '157px', /* 181 - 24 (section padding) */
              width: '230px',
              height: '289px',
            }}
          >
            <a
              href="https://mandalagroup.menu/es/houdinni"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              <Image
                src="/hero-left-poster.png"
                alt="Menu"
                fill
                style={{ objectFit: 'cover' }}
              />
            </a>
          </div>

          {/* Center top image: 428x272, at (384,73) relative to viewport → within section at ~(298,49) */}
          <div
            className="houdinni-hero-center-top"
            style={{
              position: 'absolute',
              left: '298px', /* 384 - 86 (section x offset) */
              top: '49px',  /* 73 - 24 (section top) */
              width: '428px',
              height: '272px',
            }}
          >
            <Image
              src="/hero-center-top.png"
              alt="Houdinni"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Center bottom — Reservations link: 411x147, at (392,338) */}
          <a
            href="https://tickets.houdinni.com"
            target="_blank"
            rel="noopener noreferrer"
            className="houdinni-hero-center-bottom"
            style={{
              position: 'absolute',
              left: '306px', /* 392 - 86 */
              top: '314px',  /* 338 - 24 */
              width: '411px',
              height: '147px',
              display: 'block',
            }}
          >
            <Image
              src="/hero-center-bottom.png"
              alt="Reservations"
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>

          {/* Right column — Metro-style nav buttons */}
          {/* Menu button: 193x68 at (911,141) → within section (825,117) */}
          <a
            href="https://mandalagroup.menu/es/houdinni"
            target="_blank"
            rel="noopener noreferrer"
            className="houdinni-hero-btn-right"
            style={{
              position: 'absolute',
              right: '0',
              top: '117px', /* 141 - 24 */
              width: '193px',
              height: '68px',
              display: 'block',
            }}
          >
            <Image
              src="/btn-menu-poster.png"
              alt="Menu"
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>

          {/* Events button: 193x68 at (911,227) */}
          <Link
            href="/events"
            className="houdinni-hero-btn-right"
            style={{
              position: 'absolute',
              right: '0',
              top: '203px', /* 227 - 24 */
              width: '193px',
              height: '68px',
              display: 'block',
            }}
          >
            <Image
              src="/btn-events.png"
              alt="Events"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Link>

          {/* Contact button: 193x68 at (911,312) */}
          <a
            href="/#contact"
            className="houdinni-hero-btn-right"
            style={{
              position: 'absolute',
              right: '0',
              top: '288px', /* 312 - 24 */
              width: '193px',
              height: '68px',
              display: 'block',
            }}
          >
            <Image
              src="/btn-contact.png"
              alt="Contact"
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>

          {/* Calendar button: 180x64 at (918,397) — objectFit contain */}
          <Link
            href="/calendar"
            className="houdinni-hero-btn-calendar"
            style={{
              position: 'absolute',
              right: '0',
              top: '373px', /* 397 - 24 */
              width: '180px',
              height: '64px',
              display: 'block',
            }}
          >
            <Image
              src="/btn-calendar.png"
              alt="Calendar"
              fill
              style={{ objectFit: 'contain' }}
            />
            {/* Calendar screen video overlay: 178x38 at (919,410), z-index -1, absolute */}
            <div
              style={{
                position: 'absolute',
                left: '1px',
                top: '13px',
                width: '178px',
                height: '38px',
                zIndex: -1,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src="/videos/calendar-screen.mp4" type="video/mp4" />
              </video>
            </div>
          </Link>
        </section>
      </div>

      <style>{`
        .houdinni-hero-mobile { display: none; }
        .houdinni-hero-desktop { display: block; }

        @media (max-width: 809px) {
          .houdinni-hero-desktop { display: none !important; }
          .houdinni-hero-mobile { display: block !important; }

          .houdinni-hero-overlay {
            position: relative !important;
            height: auto !important;
            max-width: 100% !important;
            padding: 16px !important;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .houdinni-hero-left,
          .houdinni-hero-center-top {
            display: none !important;
          }

          .houdinni-hero-center-bottom,
          .houdinni-hero-btn-right,
          .houdinni-hero-btn-calendar {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            width: 100% !important;
            max-width: 300px;
            margin: 0 auto;
          }

          .houdinni-hero-center-bottom {
            height: 80px !important;
          }

          .houdinni-hero-btn-right {
            height: 48px !important;
          }

          .houdinni-hero-btn-calendar {
            height: 48px !important;
          }
        }
      `}</style>
    </>
  );
}
