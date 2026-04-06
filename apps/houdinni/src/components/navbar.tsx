'use client';

/**
 * Navbar — exact Framer spec.
 * The live Houdinni site uses a 34px-tall marquee ticker as the nav bar.
 * Tag: NAV, height 34px, bg rgba(0,0,0,0.96), padding 0px 24px, overflow hidden.
 * Contains two identical "Variant 1" marquee strips (25763px wide each).
 */

const MARQUEE_TEXT =
  'HOUDINNI OR NOWHERE \u00A0\u00A0//\u00A0\u00A0 MUSIC IS THE ANSWER \u00A0\u00A0//\u00A0\u00A0 AUTHENTICITY, COMMUNITY, AND IRREVERENCE. CRAFTING A COMMUNITY OF LOUD MUSIC-LOVERS FREAKS. \u00A0\u00A0//\u00A0\u00A0 HOUDINNI OR NOWHERE \u00A0\u00A0//\u00A0\u00A0 HOUDINNI \u00A0\u00A0//\u00A0\u00A0 NOW YOU SEE ME, NOW YOU DON\'T. \u00A0\u00A0//\u00A0\u00A0 一 會兒你看見我 一 會兒你看不見我 \u00A0\u00A0//\u00A0\u00A0 LA MÚSICA VA PRIMERO \u00A0\u00A0//\u00A0\u00A0 HOUDINNI \u00A0\u00A0//\u00A0\u00A0';

export function Navbar() {
  const content = `${MARQUEE_TEXT} ${MARQUEE_TEXT}`;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '34px',
        backgroundColor: 'rgba(0, 0, 0, 0.96)',
        padding: '0px 24px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Marquee track 1 */}
      <div
        className="marquee-track"
        style={{ overflow: 'clip' }}
      >
        <span
          className="whitespace-nowrap font-druk"
          style={{
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: '#ffffff',
            paddingRight: '64px',
          }}
        >
          {content}
        </span>
        <span
          className="whitespace-nowrap font-druk"
          style={{
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: '#ffffff',
            paddingRight: '64px',
          }}
        >
          {content}
        </span>
      </div>
    </nav>
  );
}
