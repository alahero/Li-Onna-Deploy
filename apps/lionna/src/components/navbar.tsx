'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#menu', label: 'Menú' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/giftcards', label: 'Gift Cards' },
  { href: '/contact', label: 'Contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-brand-black/95 backdrop-blur-sm border-b border-brand-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-18 md:h-22">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start group">
              <span className="text-brand-cream font-display text-xl tracking-widest2 transition-colors duration-300 group-hover:text-brand-gold">
                LI-ONNA
              </span>
              <span className="japanese-text text-brand-gold/70 text-[10px] tracking-widest transition-colors duration-300 group-hover:text-brand-gold">
                リオンナ
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Reservation CTA */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/#reservar"
                className="btn-primary text-[10px] px-6 py-3"
              >
                Reservar
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 text-brand-cream/80 hover:text-brand-cream transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span
                className={`block w-6 h-px bg-current transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-current transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-current transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Decorative Japanese character */}
        <div className="absolute top-1/4 right-8 japanese-text text-8xl text-brand-gold/5 select-none">
          リ
        </div>

        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl text-brand-cream/80 hover:text-brand-cream tracking-wide transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="gold-divider w-24" />
          <Link
            href="/#reservar"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4"
          >
            Reservar Mesa
          </Link>
        </nav>

        <div className="absolute bottom-12 text-center">
          <p className="japanese-text text-brand-gold/40 text-sm tracking-widest">
            リオンナ
          </p>
        </div>
      </div>
    </>
  );
}
