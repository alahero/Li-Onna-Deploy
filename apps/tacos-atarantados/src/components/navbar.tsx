'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR — transparent, overlaid on hero */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center h-[80px] px-6">
        {/* Logo centered */}
        <Link href="/" className="absolute top-4 left-1/2 -translate-x-1/2">
          <Image
            src="/images/logo.png"
            alt="Tacos Atarantados"
            width={170}
            height={46}
            className="w-[140px] md:w-[170px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Taco cursor icon — desktop only */}
        <div className="absolute top-[31px] right-[82px] hidden md:block">
          <Image
            src="/images/taco-cursor-nav.png"
            alt=""
            width={51}
            height={29}
            className="w-[51px] h-[29px] object-cover"
          />
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="hamburger-btn absolute right-6 top-1/2 -translate-y-1/2 bg-transparent border-none p-2 flex flex-col gap-[5px]"
        >
          <span className="block w-7 h-[3px] bg-[#0c7528] rounded-sm" />
          <span className="block w-7 h-[3px] bg-[#0c7528] rounded-sm" />
          <span className="block w-7 h-[3px] bg-[#0c7528] rounded-sm" />
        </button>
      </nav>

      {/* FULL-SCREEN NAV OVERLAY — mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-[rgba(12,117,40,0.97)] z-[200] flex flex-col items-center justify-center overflow-hidden">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menu"
            className="absolute top-6 right-6 bg-transparent border-none text-white text-3xl leading-none"
          >
            &#x2715;
          </button>

          {/* Logo in overlay */}
          <Link href="/" onClick={() => setOpen(false)} className="mb-8">
            <Image
              src="/images/logo.png"
              alt="Tacos Atarantados"
              width={200}
              height={54}
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
            />
          </Link>

          {/* Nav Grid — image-based buttons */}
          <div className="flex flex-col items-center gap-0 max-w-[868px] w-full px-4">
            {/* Row 1 */}
            <div className="flex flex-row gap-0 items-center flex-wrap justify-center">
              <Link href="/sucursales" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-sucursales.png" alt="SUCURSALES" width={384} height={124} className="w-[260px] sm:w-[320px] h-auto object-cover max-w-full" />
              </Link>
              <Link href="#quienes-somos" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-quienes-somos.png" alt="QUIENES SOMOS" width={419} height={149} className="w-[260px] sm:w-[349px] h-auto object-cover max-w-full" />
              </Link>
            </div>

            {/* Row 2 */}
            <div className="flex flex-row gap-0 items-center flex-wrap justify-center">
              <Link href="/merch" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-merch.png" alt="MERCH" width={310} height={121} className="w-[200px] sm:w-[260px] h-auto object-cover max-w-full" />
              </Link>
              <Image src="/images/nav-gif.gif" alt="" width={148} height={146} unoptimized className="w-[100px] sm:w-[123px] h-auto" />
              <Link href="/menu-mex" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-menu.png" alt="MENU" width={326} height={140} className="w-[200px] sm:w-[272px] h-auto object-cover max-w-full" />
              </Link>
            </div>

            {/* Row 3 */}
            <div className="flex flex-row gap-0 items-center flex-wrap justify-center">
              <Link href="/contacto" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-contacto.png" alt="CONTACTO" width={385} height={121} className="w-[260px] sm:w-[321px] h-auto object-cover max-w-full" />
              </Link>
              <Link href="/facturacion" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-facturacion.png" alt="FACTURACION" width={396} height={127} className="w-[260px] sm:w-[330px] h-auto object-cover max-w-full" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
