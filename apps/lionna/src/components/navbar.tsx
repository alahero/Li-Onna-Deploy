'use client';

import Link from 'next/link';
import { useReservationBookingUrl } from '@/components/reservation-booking-provider';
import { ReservasLaunchLink } from '@/components/reservas-launch-link';

/** Alto del wordmark en la barra (60px); mismo SVG que el hero (`logo-large.svg`). */
const ALTURA_LOGO_NAV_PX = 26;

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
  /* Encima de todo el contenido del main (galería, copy) para que el CTA sea clicable. */
  zIndex: 500,
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
  /** Separación bajo el hero (p. ej. distintivo circular) para que no choque con el nav */
  overlapReservationPx?: number;
}

/**
 * Reservas: con URL en CMS (CoverManager) se abre un panel con iframe, como en el sitio en Framer;
 * sin URL, el CTA baja a la sección #reservar.
 */
export function Navbar({ overlapReservationPx = 0 }: NavbarProps) {
  const urlReservaCms = useReservationBookingUrl();
  const reservaEmbeddable = urlReservaCms != null && urlReservaCms.length > 0;

  return (
    <nav
      style={{
        ...navStyle,
        ...(overlapReservationPx > 0 ? { marginTop: overlapReservationPx } : {}),
        isolation: 'isolate',
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

      {/* Centro: mismo logo que el hero, escala acotada a la altura del nav */}
      <Link
        href="/"
        style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          lineHeight: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG local, mismo asset que Hero */}
        <img
          src="/images/logo-large.svg"
          alt="LI-ONNA"
          width={7966}
          height={2181}
          style={{
            height: ALTURA_LOGO_NAV_PX,
            width: 'auto',
            display: 'block',
            userSelect: 'none',
          }}
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
        {reservaEmbeddable ? (
          <ReservasLaunchLink
            pillStyle={{ ...pillStyle, position: 'relative', zIndex: 1 }}
          />
        ) : (
          <a href="/#reservar" style={pillStyle}>
            RESERVAS
          </a>
        )}
      </div>
    </nav>
  );
}
