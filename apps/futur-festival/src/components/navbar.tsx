'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@mg/shared-utils';

const navLinks = [
  { label: 'Lineup', href: '#lineup' },
  { label: 'Boletos', href: '#tickets' },
  { label: 'Horarios', href: '#schedule' },
  { label: 'Venue', href: '#venue' },
  { label: 'Galería', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

interface NavbarProps {
  ticketUrl?: string;
}

export function Navbar({ ticketUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass-dark border-b border-brand-purple/20 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-xl font-black tracking-[0.2em] text-white text-glow-purple hover:text-brand-purple transition-colors duration-300"
        >
          FUTUR<span className="text-brand-purple">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/60 transition-colors duration-200 hover:text-brand-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        {ticketUrl && (
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 rounded-full border border-brand-purple bg-brand-purple/10 px-5 py-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-brand-purple transition-all duration-300 hover:bg-brand-purple hover:text-white hover:shadow-neon-purple"
          >
            Boletos
          </a>
        )}

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <span
            className={cn(
              'block h-0.5 w-6 bg-white transition-all duration-300',
              mobileOpen && 'translate-y-2 rotate-45'
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-6 bg-white transition-all duration-300',
              mobileOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block h-0.5 w-6 bg-white transition-all duration-300',
              mobileOpen && '-translate-y-2 -rotate-45'
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-400',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="glass-dark border-t border-brand-purple/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-brand-cyan py-2"
            >
              {link.label}
            </a>
          ))}
          {ticketUrl && (
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full border border-brand-purple bg-brand-purple/10 px-5 py-3 text-center font-display text-xs font-bold uppercase tracking-[0.15em] text-brand-purple transition-all hover:bg-brand-purple hover:text-white"
            >
              Comprar Boletos
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
