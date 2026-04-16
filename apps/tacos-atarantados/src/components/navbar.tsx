'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Evita scroll del documento cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Cierra con Escape (accesibilidad)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

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

        {/* Ícono taco: escritorio y tablet; abre/cierra el mismo menú deslizante */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="taco-nav-btn absolute top-[31px] right-[82px] hidden md:flex items-center justify-center bg-transparent border-none p-0 cursor-pointer"
        >
          <Image
            src="/images/taco-cursor-nav.png"
            alt=""
            width={51}
            height={29}
            className="w-[51px] h-[29px] object-cover pointer-events-none"
          />
        </button>

        {/* Hamburguesa — móvil */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="hamburger-btn absolute right-6 top-1/2 -translate-y-1/2 bg-transparent border-none p-2 flex flex-col gap-[5px]"
        >
          <span className="block w-7 h-[3px] bg-[#0c7528] rounded-sm" />
          <span className="block w-7 h-[3px] bg-[#0c7528] rounded-sm" />
          <span className="block w-7 h-[3px] bg-[#0c7528] rounded-sm" />
        </button>
      </nav>

      {/* Fondo semitransparente */}
      <div
        className={`fixed inset-0 z-[199] bg-black/50 transition-opacity duration-300 ease-out ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Franja derecha: un poco más pegada al borde que antes; en md sigue cerca del taco */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!open}
        className={`fixed top-0 right-2 z-[200] w-[min(42vw,220px)] md:right-[58px] md:w-[240px] max-h-[min(88vh,640px)] overflow-y-auto rounded-bl-xl bg-[rgba(12,117,40,0.96)] shadow-xl backdrop-blur-[2px] transition-transform duration-300 ease-out ${
          open ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
      >
        <div className="relative flex flex-col items-stretch pl-4 pr-5 pt-12 pb-8 md:pt-14 md:pb-10 md:pr-6">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="absolute top-3 right-4 z-[1] min-h-10 min-w-10 flex items-center justify-center rounded-md bg-transparent border-none text-white text-2xl leading-none cursor-pointer opacity-90 hover:opacity-100 md:top-4 md:right-6"
          >
            &#x2715;
          </button>

          <nav className="mt-2 flex flex-col gap-3 pr-11 text-right font-inter text-[13px] sm:text-sm font-medium uppercase tracking-[0.06em] text-white md:pr-12">
            <Link href="#quienes-somos" onClick={() => setOpen(false)} className="py-0.5 hover:opacity-80 transition-opacity">
              ¿Quiénes somos?
            </Link>
            <Link href="/menu-mex" onClick={() => setOpen(false)} className="py-0.5 hover:opacity-80 transition-opacity">
              Menú
            </Link>
            <Link href="/sucursales" onClick={() => setOpen(false)} className="py-0.5 hover:opacity-80 transition-opacity">
              Sucursales
            </Link>
            <Link href="/contacto" onClick={() => setOpen(false)} className="py-0.5 hover:opacity-80 transition-opacity">
              Contacto
            </Link>
            <Link href="/facturacion" onClick={() => setOpen(false)} className="py-0.5 hover:opacity-80 transition-opacity">
              Facturación
            </Link>
            <Link href="/merch" onClick={() => setOpen(false)} className="py-0.5 hover:opacity-80 transition-opacity">
              Merch
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
