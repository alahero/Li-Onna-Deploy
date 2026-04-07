'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './navbar';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar overlaid on hero */}
      <Navbar />

      {/* Desktop nav grid — the creative navigation */}
      <div className="hero-nav-grid w-full max-w-[868px] mx-auto px-4 pt-[100px] pb-12 flex flex-col items-center gap-0">
        {/* Row 1: SUCURSALES + QUIENES SOMOS */}
        <div className="flex flex-row items-center justify-center w-full">
          <Link href="/sucursales" className="nav-btn shrink-0" style={{ transform: 'rotate(-3deg) translateY(4px)' }}>
            <Image
              src="/images/nav-sucursales.png"
              alt="SUCURSALES"
              width={384}
              height={124}
              className="w-[280px] sm:w-[340px] md:w-[384px] h-auto object-contain"
            />
          </Link>
          <div className="w-4 md:w-6 shrink-0" />
          <Link href="#quienes-somos" className="nav-btn shrink-0" style={{ transform: 'rotate(2deg) translateY(-2px)' }}>
            <Image
              src="/images/nav-quienes-somos.png"
              alt="QUIENES SOMOS"
              width={419}
              height={149}
              className="w-[280px] sm:w-[360px] md:w-[419px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* Row 2: MERCH + Devil mascot + MENU */}
        <div className="flex flex-row items-center justify-center w-full -mt-3">
          <Link href="/merch" className="nav-btn shrink-0" style={{ transform: 'rotate(-2deg) translateY(2px)' }}>
            <Image
              src="/images/nav-merch.png"
              alt="MERCH"
              width={310}
              height={121}
              className="w-[220px] sm:w-[270px] md:w-[310px] h-auto object-contain"
            />
          </Link>
          <div className="shrink-0 mx-1">
            <Image
              src="/images/nav-gif.gif"
              alt="Trompo mascot"
              width={148}
              height={146}
              unoptimized
              className="w-[100px] sm:w-[130px] md:w-[148px] h-auto"
            />
          </div>
          <Link href="/menu-mex" className="nav-btn shrink-0" style={{ transform: 'rotate(3deg) translateY(6px)' }}>
            <Image
              src="/images/nav-menu.png"
              alt="MENU"
              width={326}
              height={140}
              className="w-[220px] sm:w-[280px] md:w-[326px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* Row 3: CONTACTO + FACTURACION */}
        <div className="flex flex-row items-center justify-center w-full -mt-3">
          <Link href="/contacto" className="nav-btn shrink-0" style={{ transform: 'rotate(-1.5deg) translateY(3px)' }}>
            <Image
              src="/images/nav-contacto.png"
              alt="CONTACTO"
              width={385}
              height={121}
              className="w-[280px] sm:w-[340px] md:w-[385px] h-auto object-contain"
            />
          </Link>
          <Link href="/facturacion" className="nav-btn shrink-0" style={{ transform: 'rotate(2.5deg) translateY(-1px)' }}>
            <Image
              src="/images/nav-facturacion.png"
              alt="FACTURACION"
              width={396}
              height={127}
              className="w-[280px] sm:w-[340px] md:w-[396px] h-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
