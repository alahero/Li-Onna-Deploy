interface VipData {
  title?: string;
  description?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
}

interface VipSectionProps {
  data?: VipData | null;
}

export default function VipSection({ data }: VipSectionProps) {
  const waUrl =
    'https://wa.me/+52+529981909288?text=Hi,%20I%20would%20like%20to%20get%20info%20for%20VIP%20Tables%20at%20Tehmplo';

  return (
    <section
      id="viptables"
      style={{
        position: 'relative',
        height: 318,
        width: '100%',
        overflow: 'hidden',
        scrollMarginTop: 30,
        backgroundColor: '#0d0e11',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/vip-banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* Vimeo video bg — transparent bg */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
          background: 'rgba(0,0,0,0)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <iframe
          src="https://player.vimeo.com/video/Wfh4uC3RW?autoplay=1&loop=1&muted=1&background=1&autopause=0"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="autoplay; fullscreen"
          title="VIP background video"
        />
      </div>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(13, 14, 17, 0.55)',
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        {/* VIP TABLES label */}
        <p
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: 18,
            fontWeight: 400,
            color: 'rgb(239, 128, 36)',
            letterSpacing: '2.52px',
            lineHeight: '1em',
            marginBottom: 12,
            textTransform: 'uppercase',
          }}
        >
          VIP TABLES
        </p>

        {/* Headline */}
        <h2
          style={{
            fontSize: 39,
            lineHeight: '1em',
            color: '#ffffff',
            marginBottom: 24,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ fontFamily: '"Basteleur Moonlight", sans-serif', fontWeight: 400 }}>
            ELEVATE{' '}
          </span>
          <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontWeight: 400, fontStyle: 'italic' }}>
            YOUR
          </span>
          <br />
          <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontWeight: 400, fontStyle: 'italic' }}>
            TULUM{' '}
          </span>
          <span style={{ fontFamily: '"Basteleur Moonlight", sans-serif', fontWeight: 400 }}>
            EXPERIENCE.
          </span>
        </h2>

        {/* BOOK NOW button */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: 19,
            fontWeight: 400,
            color: 'rgb(239, 128, 36)',
            letterSpacing: '2.66px',
            lineHeight: '1.5em',
            border: '2px solid rgb(239, 128, 36)',
            borderRadius: 5,
            width: 195,
            height: 33,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            marginBottom: 12,
            transition: 'background-color 0.2s ease',
          }}
        >
          BOOK NOW
        </a>

        {/* VIP ZONE PACKAGES label */}
        <p
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: 14,
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '1.96px',
            lineHeight: '1em',
            textTransform: 'uppercase',
          }}
        >
          VIP ZONE PACKAGES
        </p>
      </div>
    </section>
  );
}
