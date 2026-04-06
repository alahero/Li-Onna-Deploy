'use client';

import { useState } from 'react';
import Link from 'next/link';

function MandalaLogo({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo/mandala-group-logo.svg"
      alt="Mandala Group"
      className={className}
      style={{ height: '44px', width: 'auto' }}
    />
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={className}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [venueOpen, setVenueOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center"
      style={{
        height: '64px',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
      }}
    >
      <div className="flex w-full max-w-nav items-center justify-between px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-5">
          <MandalaLogo />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-5">
          {/* Venues Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setVenueOpen(true)}
            onMouseLeave={() => setVenueOpen(false)}
          >
            <button className="flex items-center gap-2 font-inter text-sm text-white/80 hover:text-white transition-colors">
              Venues
              <ChevronDown className={`transition-transform ${venueOpen ? 'rotate-180' : ''}`} />
            </button>
            {venueOpen && (
              <div
                className="absolute top-full left-0 mt-2 py-2 px-1 min-w-[180px] rounded-lg"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Link href="#venues" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  All Venues
                </Link>
                <Link href="#venues" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  Nightlife
                </Link>
                <Link href="#venues" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  Gastronomic
                </Link>
                <Link href="#venues" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                  Daylife
                </Link>
              </div>
            )}
          </div>

          {/* Corporate Events */}
          <span className="font-inter text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
            Corporate Events
          </span>

          {/* Private Events */}
          <span className="font-inter text-sm text-white/80 hover:text-white transition-colors cursor-pointer">
            Private Events
          </span>
        </div>

        {/* Desktop CTA Links */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#venues"
            className="inline-flex items-center justify-center rounded-button border border-mg-gray-border bg-transparent px-5 py-2 font-figtree text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            EXPLORE OUR VENUES
          </a>
          <a
            href="#reservations"
            className="inline-flex items-center justify-center rounded-button border border-mg-gray-border bg-transparent px-5 py-2 font-figtree text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            RESERVATIONS
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="absolute top-[64px] left-0 right-0 md:hidden flex flex-col gap-4 p-6"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <a href="#venues" className="font-inter text-sm text-white/80 hover:text-white" onClick={() => setMobileOpen(false)}>
            Venues
          </a>
          <span className="font-inter text-sm text-white/80">Corporate Events</span>
          <span className="font-inter text-sm text-white/80">Private Events</span>
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href="#venues"
              className="inline-flex items-center justify-center rounded-button border border-mg-gray-border bg-transparent px-5 py-2 font-figtree text-[15px] font-bold text-white"
              onClick={() => setMobileOpen(false)}
            >
              EXPLORE OUR VENUES
            </a>
            <a
              href="#reservations"
              className="inline-flex items-center justify-center rounded-button border border-mg-gray-border bg-transparent px-5 py-2 font-figtree text-[15px] font-bold text-white"
              onClick={() => setMobileOpen(false)}
            >
              RESERVATIONS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
