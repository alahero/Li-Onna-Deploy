export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 600,
        backgroundColor: '#0d0e11',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Hero"
    >
      {/* Hero background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* Vimeo video overlay — very low opacity */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden',
          opacity: 0.08,
          pointerEvents: 'none',
          background: 'rgb(0, 0, 0)',
        }}
        aria-hidden="true"
      >
        <iframe
          src="https://player.vimeo.com/video/gV7TSdL5l?autoplay=1&loop=1&muted=1&background=1&autopause=0"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="autoplay; fullscreen"
          title="Hero background video"
        />
      </div>

      {/* Spline 3D scene */}
      <div
        style={{
          position: 'absolute',
          top: 93,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1200,
          maxWidth: '100vw',
          height: '88.375vh',
          zIndex: 2,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <iframe
          src="https://my.spline.design/untitled-a0437a7d64d3670e9d2c5846d0642085/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          sandbox="allow-scripts allow-same-origin"
          title="Spline 3D scene"
        />
      </div>

      {/* Dark overlay to darken background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,14,17,0.5) 0%, rgba(13,14,17,0.65) 40%, rgba(13,14,17,0.9) 100%)',
          zIndex: 3,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          maxWidth: 1200,
          width: '100%',
          padding: '0 24px',
          paddingTop: 60, // nav height
        }}
      >
        {/* Main headline — Austin Cyr Italic + Basteleur Moonlight mix */}
        <h1
          style={{
            fontSize: 39,
            lineHeight: '1.15em',
            color: '#ffffff',
            marginBottom: 40,
          }}
        >
          <span style={{ display: 'block' }}>
            <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontWeight: 400, fontStyle: 'italic' }}>
              welcome
            </span>
          </span>
          <span style={{ display: 'block' }}>
            <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontWeight: 400, fontStyle: 'italic' }}>
              to the{' '}
            </span>
            <span style={{ fontFamily: '"Basteleur Moonlight", sans-serif', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              REAL
            </span>
            <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontWeight: 400, fontStyle: 'italic' }}>
              {' '}Tulum
            </span>
          </span>
          <span style={{ display: 'block', marginTop: 8 }}>
            <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontWeight: 400, fontStyle: 'italic' }}>
              let the{' '}
            </span>
            <span style={{ fontFamily: '"Basteleur Moonlight", sans-serif', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              GATHERING
            </span>
            <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontWeight: 400, fontStyle: 'italic' }}>
              {' '}begin
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
