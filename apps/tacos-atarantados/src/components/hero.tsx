'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './navbar';

interface HeroSectionProps {
  heroImage?: string | null;
}

export function HeroSection({ heroImage }: HeroSectionProps = {}) {
  const bgSrc = heroImage || '/images/hero-bg.png';
  return (
    <section
      id="hero"
      className="hero-section relative w-full flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar overlaid on hero */}
      <Navbar />

      {/* Rejilla de navegación en escritorio */}
      <div className="hero-nav-grid w-full max-w-[980px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center gap-y-4 md:gap-y-5">
        {/* Fila 1: SUCURSALES + QUIENES SOMOS */}
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

        {/* Fila 2: MERCH + mascota + MENÚ (laterales para separar merch/menú) */}
        <div className="flex flex-row items-center justify-center w-full gap-4 sm:gap-5 md:gap-7">
          <Link href="/merch" className="nav-btn shrink-0" style={{ transform: 'rotate(-2deg) translateY(2px)' }}>
            <Image
              src="/images/nav-merch.png"
              alt="MERCH"
              width={310}
              height={121}
              className="w-[220px] sm:w-[270px] md:w-[310px] h-auto object-contain"
            />
          </Link>
          <div className="shrink-0">
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

        {/* Fila 3: CONTACTO + FACTURACIÓN */}
        <div className="flex flex-row items-center justify-center w-full">
          <Link href="/contacto" className="nav-btn shrink-0" style={{ transform: 'rotate(-1.5deg) translateY(3px)' }}>
            <Image
              src="/images/nav-contacto.png"
              alt="CONTACTO"
              width={385}
              height={121}
              className="w-[280px] sm:w-[340px] md:w-[385px] h-auto object-contain"
            />
          </Link>
          <div className="w-2 md:w-5 shrink-0" />
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

      {/* Navegación vertical para móvil chico (<=650px) */}
      <div className="hero-nav-vertical w-full max-w-[420px] mx-auto px-5 flex flex-col items-center gap-0">
        <Link href="#quienes-somos" className="nav-btn hero-v-item hero-v-quienes shrink-0">
          <Image
            src="/images/nav-quienes-somos.png"
            alt="QUIENES SOMOS"
            width={419}
            height={149}
            className="w-[250px] sm:w-[262px] h-auto object-contain"
          />
        </Link>
        <Link href="/menu-mex" className="nav-btn hero-v-item hero-v-menu shrink-0">
          <Image
            src="/images/nav-menu.png"
            alt="MENU"
            width={326}
            height={140}
            className="w-[220px] sm:w-[250px] h-auto object-contain"
          />
        </Link>
        <Link href="/merch" className="nav-btn hero-v-item hero-v-merch shrink-0">
          <Image
            src="/images/nav-merch.png"
            alt="MERCH"
            width={310}
            height={121}
            className="w-[210px] sm:w-[236px] h-auto object-contain"
          />
        </Link>
        <Link href="/contacto" className="nav-btn hero-v-item hero-v-contacto shrink-0">
          <Image
            src="/images/nav-contacto.png"
            alt="CONTACTO"
            width={385}
            height={121}
            className="w-[220px] sm:w-[250px] h-auto object-contain"
          />
        </Link>
        <Link href="/sucursales" className="nav-btn hero-v-item hero-v-sucursales shrink-0">
          <Image
            src="/images/nav-sucursales.png"
            alt="SUCURSALES"
            width={384}
            height={124}
            className="w-[220px] sm:w-[252px] h-auto object-contain"
          />
        </Link>
        <Link href="/facturacion" className="nav-btn hero-v-item hero-v-facturacion shrink-0">
          <Image
            src="/images/nav-facturacion.png"
            alt="FACTURACION"
            width={396}
            height={127}
            className="w-[222px] sm:w-[255px] h-auto object-contain"
          />
        </Link>
      </div>
    </section>
  );
}
