'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface SocialLink {
  platform: string;
  url: string;
}

interface NavbarProps {
  siteName: string;
  socialLinks?: SocialLink[];
}

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'VIP', href: '#vip' },
  { label: 'Ubicación', href: '#ubicacion' },
];

export function Navbar({ siteName, socialLinks = [] }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-gold/20 py-3'
          : 'bg-gradient-to-b from-black/70 to-transparent py-5'
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-2 group"
            aria-label={`${siteName} - Ir al inicio`}
          >
            <div className="relative">
              {/* Guepardo text logo with gold accent */}
              <span
                className="font-display text-2xl md:text-3xl uppercase tracking-[0.2em] text-brand-white group-hover:text-brand-gold transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {siteName}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-sm uppercase tracking-widest text-brand-white/80 hover:text-brand-gold transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#vip"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 border border-brand-gold text-brand-gold text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:bg-brand-gold hover:text-brand-black"
            >
              Reservar
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 group"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-px bg-brand-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-brand-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-brand-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-black/98 border-t border-brand-gold/20 px-4 py-6">
          <ul className="flex flex-col gap-4 mb-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base uppercase tracking-widest text-brand-white/80 hover:text-brand-gold transition-colors duration-200 py-2 border-b border-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#vip"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center w-full py-3 bg-brand-gold text-brand-black text-sm uppercase tracking-widest font-bold"
          >
            Reservar Mesa VIP
          </Link>
        </div>
      </div>
    </header>
  );
}
