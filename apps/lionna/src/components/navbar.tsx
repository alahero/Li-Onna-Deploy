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
  backgroundColor: 'rgb(0, 91, 255)',
  position: 'sticky',
  top: 0,
  zIndex: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 64px',
};

const linkStyle: React.CSSProperties = {
  fontFamily: '"Editorial New Medium", EditorialNew, serif',
  fontWeight: 400,
  fontSize: 16,
  letterSpacing: 'normal',
  lineHeight: '19.2px',
  color: 'rgb(255, 255, 255)',
  textDecoration: 'none',
};

const pillStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 400,
  fontSize: 13,
  letterSpacing: 'normal',
  lineHeight: '15.6px',
  background: 'rgba(255,255,255,0.1)',
  borderRadius: 8,
  color: '#fff',
  padding: '8px 12px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  whiteSpace: 'nowrap' as const,
  cursor: 'pointer',
  textDecoration: 'none',
  border: 'none',
  overflow: 'hidden',
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky nav bar — 60px, blue rgb(0,91,255) */}
      <nav style={navStyle} className="lionna-nav">
        {/* Left: Nav links (desktop) */}
        <div className="hidden md:flex items-center" style={{ gap: 24 }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <Link
          href="/"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            width: 108,
            height: 28,
          }}
        >
          <Image
            src="/images/logo-navbar.png"
            alt="LI-ONNA"
            width={607}
            height={89}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </Link>

        {/* Right: RESERVAS pill button */}
        <div className="hidden md:flex items-center" style={{ gap: 8 }}>
          <span style={pillStyle}>
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span>RESERVAS</span>
              <span>PRONTO</span>
            </span>
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
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

      {/* Mobile drawer */}
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
                fontFamily: '"Editorial New Medium", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 20,
                color: '#000',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: 16 }}>
            <span style={{ ...pillStyle, background: 'rgba(0,91,255,0.3)', color: '#005BFF' }}>
              <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span>RESERVAS</span>
                <span>PRONTO</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
