'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '/eventos', label: 'Eventos' },
  { href: '/giftcards', label: 'Tarjetas Regalo' },
  { href: '/contact', label: 'Contacto' },
];

const navStyle: React.CSSProperties = {
  height: 60,
  backgroundColor: '#005BFF',
  position: 'sticky',
  top: 0,
  zIndex: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 80px',
};

const linkStyle: React.CSSProperties = {
  fontFamily: 'EditorialNew, serif',
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: '0.04em',
  color: '#fff',
  textDecoration: 'none',
};

const pillStyle: React.CSSProperties = {
  fontFamily: 'EditorialNew, serif',
  fontWeight: 500,
  fontSize: 13,
  letterSpacing: '0.04em',
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid #fff',
  borderRadius: 8,
  color: '#fff',
  padding: '8px 16px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  whiteSpace: 'nowrap' as const,
  cursor: 'pointer',
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky nav bar — 60px, blue #005BFF */}
      <nav style={navStyle} className="lionna-nav">
        {/* Left: Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', width: '7%', minWidth: 80 }}>
          <Image
            src="/images/logo-navbar.png"
            alt="LI-ONNA"
            width={607}
            height={89}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </Link>

        {/* Center: Nav links (desktop) */}
        <div className="hidden md:flex items-center" style={{ gap: 24 }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: RESERVAS pill button */}
        <div className="hidden md:block">
          <span style={pillStyle}>RESERVAS / PRONTO</span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all 0.25s', transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all 0.25s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.302)', zIndex: 49 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer — right-anchored, white, border-radius 12px, width 371px */}
      <div
        className="mobile-drawer md:hidden"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(calc(100% + 20px))',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'EditorialNew, serif',
                fontWeight: 500,
                fontSize: 20,
                letterSpacing: '0.04em',
                color: '#000',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: 16 }}>
            <span style={{ ...pillStyle, background: 'rgba(0,91,255,0.3)', border: '1px solid #005BFF', color: '#005BFF' }}>
              RESERVAS / PRONTO
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
