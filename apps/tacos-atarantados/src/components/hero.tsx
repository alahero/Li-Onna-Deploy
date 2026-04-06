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
        aspectRatio: '1200 / 675',
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

      {/* Desktop nav button grid — visible >=810px, hidden on mobile */}
      <div
        className="hero-nav-grid"
        style={{
          position: 'absolute',
          top: '19.3%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0px',
          width: '868px',
          maxWidth: '90%',
          overflow: 'hidden',
          padding: '18px 0',
        }}
      >
        {/* Row 1: SUCURSALES + QUIENES SOMOS */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div style={{ padding: '0 4px' }}>
            <Link href="/sucursales" target="_blank" rel="noopener" className="nav-btn">
              <Image src="/images/nav-sucursales.png" alt="SUCURSALES" width={384} height={124} style={{ width: '384px', height: '124px', objectFit: 'cover' }} />
            </Link>
          </div>
          {/* Small vertical divider */}
          <div style={{ width: '23px', height: '89px', flexShrink: 0 }} />
          <Link href="/#quienesomos1-1" className="nav-btn">
            <Image src="/images/nav-quienes-somos.png" alt="QUIENES SOMOS" width={419} height={149} style={{ width: '419px', height: '149px', objectFit: 'cover' }} />
          </Link>
        </div>

        {/* Row 2: MERCH + GIF mascot + MENU MEX */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '-2px' }}>
          <Link href="/merch" className="nav-btn">
            <Image src="/images/nav-merch.png" alt="MERCH" width={310} height={121} style={{ width: '310px', height: '121px', objectFit: 'cover' }} />
          </Link>
          <Image src="/images/nav-gif.gif" alt="Trompo mascot" width={148} height={146} unoptimized style={{ width: '148px', height: '146px' }} />
          <Link href="/menu-mex" className="nav-btn">
            <Image src="/images/nav-menu.png" alt="MENU MEX" width={326} height={140} style={{ width: '326px', height: '140px', objectFit: 'cover' }} />
          </Link>
        </div>

        {/* Row 3: CONTACTO + FACTURACION */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '-2px' }}>
          <div style={{ padding: '0 2px' }}>
            <Link href="/contacto" className="nav-btn">
              <Image src="/images/nav-contacto.png" alt="CONTACTO" width={385} height={121} style={{ width: '385px', height: '121px', objectFit: 'cover' }} />
            </Link>
          </div>
          <Link href="/facturacion" className="nav-btn">
            <Image src="/images/nav-facturacion.png" alt="FACTURACION" width={396} height={127} style={{ width: '396px', height: '127px', objectFit: 'cover' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
