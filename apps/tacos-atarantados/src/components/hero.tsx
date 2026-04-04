import Image from 'next/image';
import { Navbar } from './navbar';

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '675px',
        overflow: 'hidden',
      }}
    >
      {/* Full-bleed background photo */}
      <Image
        src="/images/hero-bg.png"
        alt="Tacos Atarantados"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />

      {/* Navbar overlaid on hero */}
      <Navbar />

      {/* Centered logo on hero */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Tacos Atarantados"
          width={300}
          height={82}
          style={{ width: '300px', height: 'auto', filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }}
          priority
        />
      </div>

      {/* Animated trompo mascot GIF */}
      <div
        style={{
          position: 'absolute',
          bottom: '96px',
          left: 'calc(50% - 61.5px)',
          zIndex: 10,
        }}
      >
        <Image
          src="/images/nav-gif.gif"
          alt="Trompo mascot"
          width={123}
          height={122}
          unoptimized
          style={{ width: '123px', height: '123px' }}
        />
      </div>
    </section>
  );
}
