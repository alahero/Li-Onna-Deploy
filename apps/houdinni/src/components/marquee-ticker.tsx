'use client';

/**
 * Marquee Ticker — exact Framer text content.
 * Contains Chinese characters: 一 會兒你看見我 一 會兒你看不見我
 */

interface MarqueeTickerProps {
  /** Speed variant */
  speed?: 'slow' | 'normal' | 'fast';
  /** Background color */
  background?: string;
  /** Text color */
  color?: string;
  /** Custom text (defaults to brand manifesto) */
  text?: string;
}

const DEFAULT_TEXT =
  'HOUDINNI OR NOWHERE // MUSIC IS THE ANSWER // AUTHENTICITY, COMMUNITY, AND IRREVERENCE. CRAFTING A COMMUNITY OF LOUD MUSIC-LOVERS FREAKS. // HOUDINNI OR NOWHERE // HOUDINNI // NOW YOU SEE ME, NOW YOU DON\'T. // 一 會兒你看見我 一 會兒你看不見我 // LA MÚSICA VA PRIMERO // HOUDINNI';

export function MarqueeTicker({
  speed = 'normal',
  background = '#000000',
  color = '#ffffff',
  text = DEFAULT_TEXT,
}: MarqueeTickerProps) {
  const trackClass =
    speed === 'fast'
      ? 'marquee-track-fast'
      : speed === 'slow'
      ? 'marquee-track-slow'
      : 'marquee-track';

  /* Duplicate content for seamless loop */
  const content = `${text} \u00A0\u00A0\u00A0 ${text} \u00A0\u00A0\u00A0`;

  return (
    <div
      className="w-full overflow-hidden"
      style={{ background, color, height: '34px', display: 'flex', alignItems: 'center' }}
      aria-hidden="true"
    >
      <div className={trackClass}>
        <span
          className="whitespace-nowrap font-druk text-xs pr-16"
          style={{ letterSpacing: '0.1em' }}
        >
          {content}
        </span>
        {/* Duplicate for seamless loop */}
        <span
          className="whitespace-nowrap font-druk text-xs pr-16"
          style={{ letterSpacing: '0.1em' }}
        >
          {content}
        </span>
      </div>
    </div>
  );
}

/** Event teaser ticker — scrolling upcoming events */
export function EventsTicker() {
  const events = [
    'BETICAL 23 OCT',
    'BENJA  06 NOV',
    'OKIO - ASIAN STREET MARKET',
    'BETICAL 23 OCT',
    'BENJA  06 NOV',
    'OKIO - ASIAN STREET MARKET',
  ];
  const text = events.join(' // ');
  const content = `${text} // ${text} //`;

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        background: '#0099ff',
        color: '#ffffff',
        height: '34px',
        display: 'flex',
        alignItems: 'center',
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <span
          className="whitespace-nowrap font-druk text-xs pr-16"
          style={{ letterSpacing: '0.1em' }}
        >
          {content}
        </span>
        <span
          className="whitespace-nowrap font-druk text-xs pr-16"
          style={{ letterSpacing: '0.1em' }}
        >
          {content}
        </span>
      </div>
    </div>
  );
}
