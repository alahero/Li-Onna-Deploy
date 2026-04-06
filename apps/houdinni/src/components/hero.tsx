'use client';

import Image from 'next/image';
import Link from 'next/link';

/**
 * HeroSection — pixel-perfect from Framer extraction.
 *
 * The hero consists of two elements within the Main container:
 *   1. Background image (subway-desktop.png): absolute/static, 1200x561, at (0,0)
 *   2. XL section: position sticky, top 24px, x:86, w:1028, h:434, padding 24px, z-index 1
 *
 * The XL section overlays the background image and sticks as user scrolls.
 * Inside XL (all positions relative to XL's 1028x434 padded area):
 *   - Left poster (menu): at (-11, 157), 230x289 — position relative to XL left edge
 *   - Center top image: at (298, 49), 428x272
 *   - Center bottom (reservations link): at (306, 314), 411x147
 *   - Right menu btn: at (right:0, 117), 193x68
 *   - Right events btn: at (right:0, 203), 193x68
 *   - Right contact btn: at (right:0, 288), 193x68
 *   - Calendar btn: at (right:7, 373), 180x64, objectFit contain
 *   - Calendar video: (right:6, 386), 178x38, z-index -1, absolute
 */
export function HeroSection() {
  return (
    <>
      {/* Background image — 1200×561 at position (0,0) within Main */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '561px',
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
      </div>

      {/* XL section — sticky, overlaps the background image above
          Position in Framer: x:86, y:24 (from top of Main), w:1028, h:434
          Since it's sticky with top:24px, it starts 24px from viewport top.
          We use negative margin-top to pull it up over the background image.
          In Framer, XL starts at y:24 while the bg ends at y:561, so it
          sits 24px from the top and overlaps the bg completely.
          margin-top: -(561 - 24) = -537px to position at y:24 relative to bg start */}
      <section
        className="houdinni-hero-overlay"
        style={{
          position: 'sticky',
          top: '24px',
          zIndex: 1,
          width: '1028px',
          maxWidth: '100%',
          height: '434px',
          margin: '0 auto',
          marginTop: '-537px',
          padding: '24px',
        }}
      >
        {/* Left — Menu poster: 230x289 at Framer (75, 181)
            Within XL (x:86): left = 75 - 86 = -11px
            Within XL (y:24, pad:24): top = 181 - 24 = 157px */}
        <div
          className="houdinni-hero-left"
          style={{
            position: 'absolute',
            left: '-11px',
            top: '157px',
            width: '230px',
            height: '289px',
          }}
        >
          <a
            href="https://mandalagroup.menu/es/houdinni"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}
          >
            <Image
              src="/hero-left-poster.png"
              alt="Menu"
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>
        </div>

        {/* Center top image: 428x272 at Framer (384, 73)
            Within XL: left = 384 - 86 = 298px, top = 73 - 24 = 49px */}
        <div
          className="houdinni-hero-center-top"
          style={{
            position: 'absolute',
            left: '298px',
            top: '49px',
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

        {/* Center bottom — Reservations link: 411x147 at Framer (392, 338)
            Within XL: left = 392 - 86 = 306px, top = 338 - 24 = 314px */}
        <a
          href="https://tickets.houdinni.com"
          target="_blank"
          rel="noopener noreferrer"
          className="houdinni-hero-center-bottom"
          style={{
            position: 'absolute',
            left: '306px',
            top: '314px',
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

        {/* Right — Metro-style nav buttons */}
        {/* Menu button: 193x68 at Framer (911, 141)
            Within XL (right edge at 86+1028=1114): right = 1114 - (911+193) = 10px
            top = 141 - 24 = 117px */}
        <a
          href="https://mandalagroup.menu/es/houdinni"
          target="_blank"
          rel="noopener noreferrer"
          className="houdinni-hero-btn-right"
          style={{
            position: 'absolute',
            right: '10px',
            top: '117px',
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

        {/* Events button: 193x68 at Framer (911, 227) → right:10, top:203 */}
        <Link
          href="/events"
          className="houdinni-hero-btn-right"
          style={{
            position: 'absolute',
            right: '10px',
            top: '203px',
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

        {/* Contact button: 193x68 at Framer (911, 312) → right:10, top:288 */}
        <a
          href="/#contact"
          className="houdinni-hero-btn-right"
          style={{
            position: 'absolute',
            right: '10px',
            top: '288px',
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

        {/* Calendar button: 180x64 at Framer (918, 397)
            Within XL: right = 1114 - (918+180) = 16px, top = 397 - 24 = 373px
            objectFit: contain */}
        <Link
          href="/calendar"
          className="houdinni-hero-btn-calendar"
          style={{
            position: 'absolute',
            right: '16px',
            top: '373px',
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
          {/* Calendar screen video: 178x38 at Framer (919, 410), z-index -1, absolute
              Within calendar btn: left = 919-918 = 1px, top = 410-397 = 13px */}
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

      <style>{`
        .houdinni-hero-mobile { display: none; }
        .houdinni-hero-desktop { display: block; }

        @media (max-width: 809px) {
          .houdinni-hero-desktop { display: none !important; }
          .houdinni-hero-mobile { display: block !important; }

          .houdinni-hero-overlay {
            position: relative !important;
            top: auto !important;
            width: 100% !important;
            height: auto !important;
            margin-top: -200px !important;
            padding: 16px !important;
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: center;
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
