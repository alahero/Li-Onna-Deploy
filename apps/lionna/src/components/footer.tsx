import Link from 'next/link';
import Image from 'next/image';

const legalLinks = [
  { href: '/politica-de-privacidad', label: 'POLITICA DE PRIVACIDAD' },
  { href: '/aviso-legal', label: 'INFORMACION LEGAL' },
  { href: '/politica-de-cookies', label: 'POLITICA DE COOKIES' },
  { href: '/contact', label: 'CONTACTO' },
];

const labelStyle: React.CSSProperties = {
  fontFamily: 'EditorialNew, serif',
  fontWeight: 400,
  fontSize: 10,
  letterSpacing: '0.1em',
  color: 'rgba(255,255,255,0.5)',
};

export function Footer() {
  return (
    <footer
      className="lionna-footer"
      style={{
        backgroundColor: '#005BFF',
        color: '#fff',
        padding: '60px 80px',
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: 48 }}>
        <Image
          src="/images/logo-large.svg"
          alt="LI-ONNA"
          width={7966}
          height={2181}
          style={{ width: 200, height: 'auto', opacity: 0.9 }}
        />
      </div>

      {/* Three-column grid */}
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 40,
          marginBottom: 60,
        }}
      >
        {/* Column 1: Collaborators + Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ ...labelStyle, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            EN COLABORACIÓN CON
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{
              fontFamily: 'EditorialNew, serif',
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: '0.04em',
              color: '#fff',
              margin: 0,
            }}>
              Mandala Group
            </p>
            <p style={{
              fontFamily: 'EditorialNew, serif',
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: '0.04em',
              color: '#fff',
              margin: 0,
            }}>
              Grupo Kampai
            </p>
          </div>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p style={labelStyle}>Copyright ® 2024 Mandala Group.</p>
            <p style={labelStyle}>Copyright ® 2024 Grupo Kampai</p>
          </div>
        </div>

        {/* Column 2: Address + Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <address style={{
            fontStyle: 'normal',
            fontFamily: 'EditorialNew, serif',
            fontWeight: 400,
            fontSize: 13,
            letterSpacing: '0.04em',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.6,
            marginBottom: 4,
          }}>
            C. de Recoletos, 1, Salamanca, 28001<br />
            Madrid, España
          </address>
          <a href="tel:+34910463911" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 400, fontSize: 13, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
            Tel: +34 910 463 911
          </a>
          <a href="https://api.whatsapp.com/send?phone=34679836561" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 400, fontSize: 13, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
            Mob: +34 679 83 65 61
          </a>
          <a href="mailto:hola@lionna.es" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 400, fontSize: 13, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
            hola@lionna.es
          </a>
        </div>

        {/* Column 3: Legal links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'EditorialNew, serif',
                fontWeight: 500,
                fontSize: 10,
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Japanese name at bottom center */}
      <div style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: 'Odesta, serif',
          fontWeight: 600,
          fontSize: 24,
          letterSpacing: '0.02em',
          color: 'rgba(255,255,255,0.35)',
          margin: 0,
        }}>
          リオンナ
        </p>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .lionna-footer { padding: 60px 64px !important; }
        }
        @media (max-width: 809px) {
          .lionna-footer { padding: 40px 16px !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
