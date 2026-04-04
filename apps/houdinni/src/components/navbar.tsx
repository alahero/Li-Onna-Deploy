'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  siteName?: string;
}

const NAV_LINKS = [
  { label: 'El Concepto', href: '#concepto' },
  { label: 'Shows', href: '#shows' },
  { label: 'Menú', href: '#menu' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#reservaciones' },
];

// Minimal wand/star SVG for the logo accent
function WandIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-brand-gold"
      aria-hidden="true"
    >
      <path
        d="M15 4L20 9L9 20L4 15L15 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 4L20.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 20L3.5 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="21" cy="3" r="0.5" fill="currentColor" />
      <circle cx="3" cy="21" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function Navbar({ siteName = 'Houdinni' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-brand-black/96 backdrop-blur-md border-b border-brand-gold/15 py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-2.5 group"
            aria-label={`${siteName} — Volver al inicio`}
          >
            <WandIcon />
            <span
              className="text-xl md:text-2xl text-brand-cream group-hover:text-brand-gold transition-colors duration-500 tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: '0.25em' }}
            >
              {siteName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-xs uppercase tracking-[0.2em] text-brand-cream/60 hover:text-brand-gold transition-colors duration-300 group"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="#reservaciones"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-brand-gold/60 text-brand-gold text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Reservar
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-px bg-brand-cream transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-brand-cream transition-all duration-300 ${
                  menuOpen ? 'opacity-0 w-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-brand-cream transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-black/98 border-t border-brand-gold/15 px-6 py-8">
          <ul className="flex flex-col gap-1 mb-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.2em] text-brand-cream/70 hover:text-brand-gold transition-colors duration-300 py-3 border-b border-white/5"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#reservaciones"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center w-full py-3.5 bg-brand-gold text-brand-black text-xs uppercase tracking-[0.2em] font-semibold"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Solicitar Reservación
          </Link>
        </div>
      </div>
    </header>
  );
}
