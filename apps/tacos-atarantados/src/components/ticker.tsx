import Image from 'next/image';

export function Ticker() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1200 / 623',
        overflow: 'hidden',
      }}
    >
      {/* Full-bleed banner background image */}
      <Image
        src="/images/ticker-bg.png"
        alt="Tacos Atarantados banner"
        fill
        style={{ objectFit: 'cover' }}
      />

      {/* Centered trompo logo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '304px',
          height: '304px',
          zIndex: 2,
        }}
      >
        <Image
          src="/images/trompo-logo.png"
          alt="Trompo logo"
          width={304}
          height={304}
          style={{ width: '304px', height: '304px', objectFit: 'contain' }}
        />
      </div>
    </section>
  );
}
