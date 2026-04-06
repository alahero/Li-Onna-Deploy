import Image from 'next/image';
import Link from 'next/link';
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

      {/* Navbar overlaid on hero (hamburger for mobile only) */}
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

      {/* Desktop nav button grid — visible >=810px, hidden on mobile */}
      <div
        className="hero-nav-grid"
        style={{
          position: 'absolute',
          bottom: '96px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '7px',
          maxWidth: '723px',
          width: '100%',
        }}
      >
        {/* Row 1: SUCURSALES + QUIENES SOMOS */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '19px', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/sucursales" target="_blank" rel="noopener" className="nav-btn">
            <Image src="/images/nav-sucursales.png" alt="SUCURSALES" width={320} height={103} style={{ width: '320px', height: '103px', objectFit: 'contain' }} />
          </Link>
          <Link href="/#quienesomos1-1" className="nav-btn">
            <Image src="/images/nav-quienes-somos.png" alt="QUIENES SOMOS" width={349} height={124} style={{ width: '349px', height: '124px', objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Row 2: MERCH + GIF mascot + MENU MEX */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/merch" className="nav-btn">
            <Image src="/images/nav-merch.png" alt="MERCH" width={234} height={101} style={{ width: '234px', height: '101px', objectFit: 'contain' }} />
          </Link>
          <Image src="/images/nav-gif.gif" alt="Trompo mascot" width={123} height={122} unoptimized style={{ width: '123px', height: '123px' }} />
          <Link href="/menu-mex" className="nav-btn">
            <Image src="/images/nav-menu.png" alt="MENU MEX" width={272} height={117} style={{ width: '272px', height: '117px', objectFit: 'contain' }} />
          </Link>
        </div>

        {/* Row 3: CONTACTO + FACTURACION */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', justifyContent: 'center', padding: '8px 0 28px' }}>
          <Link href="/contacto" className="nav-btn">
            <Image src="/images/nav-contacto.png" alt="CONTACTO" width={321} height={101} style={{ width: '321px', height: '101px', objectFit: 'contain' }} />
          </Link>
          <Link href="/facturacion" className="nav-btn">
            <Image src="/images/nav-facturacion.png" alt="FACTURACION" width={330} height={106} style={{ width: '330px', height: '106px', objectFit: 'contain' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
