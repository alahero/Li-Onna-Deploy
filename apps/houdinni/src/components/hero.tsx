'use client';

import Link from 'next/link';

/**
 * HeroSection -- Subway/Metro Station aesthetic.
 *
 * Built with CSS patterns to match the Framer live site:
 *   - White tile wall background with grout lines (CSS repeating pattern)
 *   - Fluorescent light tubes at top
 *   - Left: HOUDINNI poster (black bg, red H logo)
 *   - Center: Red hanging sign with "HOUDINNI"
 *   - Center-bottom: "RESERVATIONS" in graffiti/spray-paint style
 *   - Right: Metro direction nav buttons (M=green, E=red, C=grey) with arrows
 *   - Bottom: Dark platform/track area
 *
 * Keeps existing image assets as overlays where available.
 */
export function HeroSection() {
  return (
    <>
      <section className="hero-subway" aria-label="Houdinni - Subway Station Hero">
        {/* ---- FLUORESCENT LIGHTS ---- */}
        <div className="hero-lights">
          <div className="hero-light-tube" />
          <div className="hero-light-tube" />
          <div className="hero-light-tube" />
        </div>

        {/* ---- TILE WALL AREA ---- */}
        <div className="hero-tile-wall">
          {/* Left: HOUDINNI poster */}
          <div className="hero-poster">
            <a
              href="https://mandalagroup.menu/es/houdinni"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-poster-link"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero-left-poster.png"
                alt="Houdinni Menu"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </a>
          </div>

          {/* Center: Hanging metro sign */}
          <div className="hero-center-area">
            {/* Hanging cables */}
            <div className="hero-sign-cables">
              <div className="hero-cable" />
              <div className="hero-cable" />
            </div>

            {/* Red metro sign */}
            <div className="hero-metro-sign">
              <span className="hero-metro-sign-text">HOUDINNI</span>
            </div>

            {/* Reservations graffiti */}
            <a
              href="https://tickets.houdinni.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-reservations"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/btn-reservations.png"
                alt="Reservations"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </a>
          </div>

          {/* Right: Metro direction buttons */}
          <div className="hero-nav-buttons">
            {/* Menu button */}
            <a
              href="https://mandalagroup.menu/es/houdinni"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-metro-btn"
            >
              <span className="hero-metro-circle hero-metro-circle--green">M</span>
              <span className="hero-metro-btn-label">Menu</span>
              <span className="hero-metro-arrow">&rarr;</span>
            </a>

            {/* Events button */}
            <Link href="/events" className="hero-metro-btn">
              <span className="hero-metro-circle hero-metro-circle--red">E</span>
              <span className="hero-metro-btn-label">Events</span>
              <span className="hero-metro-arrow">&rarr;</span>
            </Link>

            {/* Contact button */}
            <a href="/#contact" className="hero-metro-btn">
              <span className="hero-metro-circle hero-metro-circle--grey">C</span>
              <span className="hero-metro-btn-label">Contact</span>
              <span className="hero-metro-arrow">&rarr;</span>
            </a>

            {/* Calendar button */}
            <Link href="/calendar" className="hero-calendar-btn">
              <span className="hero-calendar-btn-text">CALENDAR</span>
              <div className="hero-calendar-screen">
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
          </div>
        </div>

        {/* ---- PLATFORM / TRACK AREA ---- */}
        <div className="hero-platform">
          {/* Yellow safety line */}
          <div className="hero-safety-line" />
          {/* Dark track bed */}
          <div className="hero-tracks">
            <div className="hero-rail" />
            <div className="hero-rail" />
          </div>
        </div>
      </section>

      <style>{`
        /* ============================================================
           HERO SUBWAY STATION
           ============================================================ */
        .hero-subway {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 34px; /* below nav */
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ---- FLUORESCENT LIGHTS ---- */
        .hero-lights {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          padding: 0 60px;
          height: 28px;
          background: linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%);
          border-bottom: 2px solid #333;
          position: relative;
          z-index: 2;
        }

        .hero-light-tube {
          width: 200px;
          height: 8px;
          background: linear-gradient(180deg, #fff 0%, #e8e8e8 40%, #d0d0d0 100%);
          border-radius: 4px;
          box-shadow:
            0 0 20px rgba(255, 255, 255, 0.6),
            0 0 60px rgba(255, 255, 255, 0.3),
            0 4px 30px rgba(255, 255, 255, 0.15);
          position: relative;
        }

        .hero-light-tube::before {
          content: '';
          position: absolute;
          left: -4px;
          right: -4px;
          top: -2px;
          bottom: -2px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 6px;
        }

        /* ---- TILE WALL ---- */
        .hero-tile-wall {
          position: relative;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          min-height: 440px;
          padding: 30px 40px 30px 30px;
          gap: 20px;

          /* White subway tile pattern — wide rectangular tiles like real metro */
          background-color: #e8e5e0;
          background-image:
            /* Horizontal grout lines */
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 28px,
              #c8c4be 28px,
              #c8c4be 30px
            ),
            /* Vertical grout lines */
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 118px,
              #c8c4be 118px,
              #c8c4be 120px
            );
          background-size: 120px 30px;

          /* Subtle lighting gradient from fluorescents */
          box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.08);
        }

        .hero-tile-wall::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.15) 0%,
            transparent 30%,
            transparent 80%,
            rgba(0, 0, 0, 0.05) 100%
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ---- LEFT POSTER ---- */
        .hero-poster {
          position: relative;
          width: 220px;
          min-height: 280px;
          flex-shrink: 0;
          z-index: 2;
          /* Poster shadow on tile wall */
          filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.4));
        }

        .hero-poster-link {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          border: 3px solid #222;
          background: #0a0a0a;
          transition: transform 0.2s ease;
        }

        .hero-poster-link:hover {
          transform: scale(1.02);
        }

        /* ---- CENTER AREA ---- */
        .hero-center-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 24px;
          z-index: 2;
          padding-top: 10px;
        }

        /* Hanging cables */
        .hero-sign-cables {
          display: flex;
          gap: 160px;
          height: 30px;
        }

        .hero-cable {
          width: 3px;
          height: 30px;
          background: #555;
          border-radius: 1px;
          box-shadow: 1px 0 2px rgba(0, 0, 0, 0.3);
        }

        /* Red metro sign */
        .hero-metro-sign {
          background: #cc0000;
          color: #ffffff;
          padding: 14px 48px;
          border-radius: 6px;
          position: relative;
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -2px 0 rgba(0, 0, 0, 0.2);
          border: 2px solid #990000;
        }

        .hero-metro-sign::before {
          content: '';
          position: absolute;
          inset: 4px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 3px;
          pointer-events: none;
        }

        .hero-metro-sign-text {
          font-family: "Druk Text Wide Trial Bold", "Impact", sans-serif;
          font-weight: 700;
          font-size: clamp(18px, 2.5vw, 28px);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* Reservations graffiti */
        .hero-reservations {
          position: relative;
          display: block;
          width: 340px;
          max-width: 90%;
          height: 110px;
          margin-top: auto;
          transition: transform 0.2s ease;
        }

        .hero-reservations:hover {
          transform: scale(1.03);
        }

        /* ---- RIGHT NAV BUTTONS ---- */
        .hero-nav-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 2;
          align-self: center;
          flex-shrink: 0;
        }

        /* Metro direction button */
        .hero-metro-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 2px solid #e0e0e0;
          border-radius: 4px;
          padding: 10px 16px;
          width: 200px;
          text-decoration: none;
          color: #1a1a1a;
          transition: all 0.15s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .hero-metro-btn:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
          border-color: #ccc;
        }

        .hero-metro-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-family: "Druk Text Wide Trial Bold", "Impact", sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0;
          flex-shrink: 0;
        }

        .hero-metro-circle--green {
          background: #009944;
        }

        .hero-metro-circle--red {
          background: #cc0000;
        }

        .hero-metro-circle--grey {
          background: #888888;
        }

        .hero-metro-btn-label {
          font-family: "Druk Text Wide Trial Bold", "Impact", sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.04em;
          flex: 1;
        }

        .hero-metro-arrow {
          font-size: 18px;
          color: #666;
          flex-shrink: 0;
        }

        /* Calendar button */
        .hero-calendar-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #1a1a1a;
          border: 2px solid #333;
          border-radius: 4px;
          padding: 8px 12px 4px;
          width: 200px;
          text-decoration: none;
          color: #ffffff;
          transition: all 0.15s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          position: relative;
        }

        .hero-calendar-btn:hover {
          border-color: #0099ff;
          box-shadow: 0 0 12px rgba(0, 153, 255, 0.3);
        }

        .hero-calendar-btn-text {
          font-family: "Druk Text Wide Trial Bold", "Impact", sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          z-index: 1;
        }

        .hero-calendar-screen {
          width: 176px;
          height: 36px;
          margin-top: 4px;
          overflow: hidden;
          border-radius: 2px;
          opacity: 0.7;
        }

        /* ---- PLATFORM / TRACKS ---- */
        .hero-platform {
          position: relative;
          width: 100%;
        }

        .hero-safety-line {
          height: 6px;
          background: repeating-linear-gradient(
            90deg,
            #f5c518 0px,
            #f5c518 30px,
            #1a1a1a 30px,
            #1a1a1a 40px
          );
        }

        .hero-tracks {
          height: 60px;
          background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 50%, #050505 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 12px 0;
        }

        .hero-rail {
          height: 4px;
          background: linear-gradient(
            180deg,
            #555 0%,
            #888 50%,
            #555 100%
          );
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        /* ============================================================
           MOBILE RESPONSIVE
           ============================================================ */
        @media (max-width: 809px) {
          .hero-tile-wall {
            flex-direction: column;
            align-items: center;
            padding: 20px 16px;
            min-height: auto;
            gap: 20px;
          }

          .hero-poster {
            width: 160px;
            min-height: 200px;
            order: -1;
          }

          .hero-center-area {
            padding-top: 0;
            gap: 16px;
          }

          .hero-sign-cables {
            gap: 100px;
            height: 20px;
          }

          .hero-cable {
            height: 20px;
          }

          .hero-metro-sign {
            padding: 10px 32px;
          }

          .hero-reservations {
            width: 280px;
            height: 80px;
          }

          .hero-nav-buttons {
            width: 100%;
            align-items: center;
          }

          .hero-metro-btn,
          .hero-calendar-btn {
            width: 100%;
            max-width: 280px;
          }

          .hero-lights {
            padding: 0 20px;
          }

          .hero-light-tube {
            width: 80px;
          }
        }

        @media (max-width: 480px) {
          .hero-poster {
            display: none;
          }

          .hero-light-tube {
            width: 60px;
          }
        }
      `}</style>
    </>
  );
}
