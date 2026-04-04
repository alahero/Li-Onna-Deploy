'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Inline spade suit SVG icon
function SpadeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C12 2 3 8.5 3 14a4.5 4.5 0 0 0 7.5 3.35C10 19 9 21 7 22h10c-2-1-3-3-3.5-4.65A4.5 4.5 0 0 0 21 14C21 8.5 12 2 12 2z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cócteles', href: '#cocteleria' },
  { label: 'Menú', href: '#menu' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reservar', href: '#reservaciones' },
];

interface SocialLink {
  platform: string;
  url: string;
}

interface NavbarProps {
  siteName?: string;
  socialLinks?: SocialLink[];
}

export function Navbar({ siteName = 'SPADE', socialLinks = [] }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-sm border-b border-brand-silver/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label={siteName}
        >
          <SpadeIcon className="w-5 h-5 text-brand-silver group-hover:text-brand-emerald transition-colors duration-300" />
          <span
            className="font-display text-xl tracking-[0.3em] text-brand-white font-light uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {siteName}
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-brand-silver/70 hover:text-brand-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#reservaciones"
            className="hidden md:inline-flex btn-silver text-[11px] py-2 px-5"
          >
            Reservar
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span
              className={`w-5 h-px bg-brand-silver transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-5 h-px bg-brand-silver transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-px bg-brand-silver transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-black/98 backdrop-blur-sm border-t border-brand-silver/10">
          <ul className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] text-brand-silver/80 hover:text-brand-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#reservaciones"
                className="btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Reservar Mesa
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
