'use client';

/**
 * Navbar -- 34px marquee ticker, fixed top, bg rgba(0,0,0,0.96).
 * Contains two identical marquee strips for seamless infinite loop.
 */

const DEFAULT_MARQUEE_TEXT =
  'HOUDINNI OR NOWHERE \u00A0\u00A0//\u00A0\u00A0 MUSIC IS THE ANSWER \u00A0\u00A0//\u00A0\u00A0 AUTHENTICITY, COMMUNITY, AND IRREVERENCE. CRAFTING A COMMUNITY OF LOUD MUSIC-LOVERS FREAKS. \u00A0\u00A0//\u00A0\u00A0 HOUDINNI OR NOWHERE \u00A0\u00A0//\u00A0\u00A0 HOUDINNI \u00A0\u00A0//\u00A0\u00A0 NOW YOU SEE ME, NOW YOU DON\'T. \u00A0\u00A0//\u00A0\u00A0 \u4E00 \u6703\u5152\u4F60\u770B\u898B\u6211 \u4E00 \u6703\u5152\u4F60\u770B\u4E0D\u898B\u6211 \u00A0\u00A0//\u00A0\u00A0 LA M\u00DASICA VA PRIMERO \u00A0\u00A0//\u00A0\u00A0 HOUDINNI \u00A0\u00A0//\u00A0\u00A0';

interface NavbarProps {
  /** CMS marquee text -- falls back to hardcoded default */
  marqueeText?: string | null;
}

export function Navbar({ marqueeText }: NavbarProps = {}) {
  const text = marqueeText || DEFAULT_MARQUEE_TEXT;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden flex items-center"
      style={{
        height: '34px',
        backgroundColor: 'rgba(0, 0, 0, 0.96)',
      }}
    >
      {/*
        Two identical spans side-by-side. The animation translates the
        container left by 50% (one full copy), then resets. Because
        both copies are identical the loop is seamless.
      */}
      <div className="marquee-track">
        <span
          className="whitespace-nowrap font-druk"
          style={{
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: '#ffffff',
            paddingRight: '48px',
          }}
        >
          {text}
        </span>
        <span
          className="whitespace-nowrap font-druk"
          style={{
            fontSize: '10px',
            letterSpacing: '0.1em',
            color: '#ffffff',
            paddingRight: '48px',
          }}
        >
          {text}
        </span>
      </div>
    </nav>
  );
}
