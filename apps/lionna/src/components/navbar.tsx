'use client';

import Link from 'next/link';
import Image from 'next/image';

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
  /* Por encima del distintivo del hero (z=2) y del main (z=2) al hacer scroll */
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  padding: '0 64px',
  gap: 16,
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
  padding: '8px 20px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap' as const,
  cursor: 'pointer',
  textDecoration: 'none',
  border: 'none',
  overflow: 'hidden',
};

interface NavbarProps {
  reservationsUrl?: string;
  /** Separación bajo el hero (p. ej. distintivo circular) para que no choque con el nav */
  overlapReservationPx?: number;
}

export function Navbar({ reservationsUrl, overlapReservationPx = 0 }: NavbarProps) {
  const enlaceReservas =
    reservationsUrl && reservationsUrl.trim().length > 0 ? reservationsUrl.trim() : '#reservas';
  const reservasExterno = enlaceReservas !== '#reservas';

  return (
    <nav
      style={{
        ...navStyle,
        ...(overlapReservationPx > 0 ? { marginTop: overlapReservationPx } : {}),
      }}
      className="lionna-nav"
    >
      {/* Izquierda: Eventos, Tarjetas Regalo, Contacto */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          minWidth: 0,
        }}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} style={linkStyle}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Centro: logo LI-ONNA */}
      <Link
        href="/"
        style={{
          flexShrink: 0,
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

      {/* Derecha: botón RESERVAS */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          minWidth: 0,
        }}
      >
        <a
          href={enlaceReservas}
          style={pillStyle}
          {...(reservasExterno ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          RESERVAS
        </a>
      </div>
    </nav>
  );
}
