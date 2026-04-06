import Link from 'next/link';
import Image from 'next/image';

const legalLinks = [
  { href: '/politica-de-privacidad', label: 'POLITICA DE PRIVACIDAD' },
  { href: '/aviso-legal', label: 'INFORMACION LEGAL' },
  { href: '/politica-de-cookies', label: 'POLITICA DE COOKIES' },
  { href: '/contact', label: 'CONTACTO' },
];

export function Footer() {
  return (
    <footer
      className="lionna-footer"
      style={{
        backgroundColor: 'rgb(0, 0, 0)',
        color: '#fff',
        padding: '80px 80px 16px',
        overflow: 'hidden',
      }}
    >
      {/* Infos row */}
      <div
        className="footer-infos"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          padding: '0 24px 24px',
          overflow: 'hidden',
        }}
      >
        {/* Left: Logo + EN COLABORACION CON */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Logo */}
          <div>
            <Image
              src="/images/logo-large.svg"
              alt="LI-ONNA"
              width={7966}
              height={2181}
              style={{ width: 252, height: 'auto' }}
            />
          </div>

          {/* EN COLABORACION CON */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 14,
                letterSpacing: '0.28px',
                lineHeight: '18.2px',
                color: 'rgb(255, 255, 255)',
                margin: 0,
              }}
            >
              EN COLABORACION CON
            </p>
            {/* Collaborator logos placeholder */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 4 }}>
              <Image
                src="/images/logo-navbar.png"
                alt="Mandala Group"
                width={607}
                height={89}
                style={{ width: 143, height: 'auto', opacity: 0.8 }}
              />
            </div>
          </div>
        </div>

        {/* Right: Address + Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'right' }}>
          <p
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '1.4px',
              lineHeight: '16.8px',
              color: 'rgb(255, 255, 255)',
              margin: 0,
            }}
          >
            C. de Recoletos, 1, Salamanca, 28001
          </p>
          <p
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '1.4px',
              lineHeight: '16.8px',
              color: 'rgb(255, 255, 255)',
              margin: 0,
            }}
          >
            Madrid, Espana
          </p>
          <a
            href="tel:+34910463911"
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '1.4px',
              lineHeight: '16.8px',
              color: 'rgb(255, 255, 255)',
              textDecoration: 'none',
              margin: 0,
              marginTop: 8,
            }}
          >
            Tel: +34 910 463 911
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=34679836561"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '1.4px',
              lineHeight: '16.8px',
              color: 'rgb(255, 255, 255)',
              textDecoration: 'none',
              margin: 0,
            }}
          >
            Mob: +34 679 83 65 61
          </a>
          <a
            href="mailto:hola@lionna.es"
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '1.4px',
              lineHeight: '16.8px',
              color: 'rgb(255, 255, 255)',
              textDecoration: 'none',
              margin: 0,
            }}
          >
            hola@lionna.es
          </a>
        </div>
      </div>

      {/* Logo row */}
      <div
        style={{
          padding: '12px 24px 16px',
          overflow: 'hidden',
        }}
      >
        {/* Large footer logo image placeholder - Kampai logo area */}
      </div>

      {/* Legal links — center aligned */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          padding: '16px 0',
        }}
      >
        {legalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 12,
              letterSpacing: '1.2px',
              lineHeight: '14.4px',
              color: 'rgb(255, 255, 255)',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          padding: '16px 0 0',
        }}
      >
        <p
          style={{
            fontFamily: '"Editorial New Regular", EditorialNew, serif',
            fontWeight: 400,
            fontSize: 12,
            letterSpacing: '0.24px',
            lineHeight: '14.4px',
            color: 'rgb(255, 255, 255)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Copyright &reg; 2024 Mandala Group.
        </p>
        <p
          style={{
            fontFamily: '"Editorial New Regular", EditorialNew, serif',
            fontWeight: 400,
            fontSize: 12,
            letterSpacing: '0.24px',
            lineHeight: '14.4px',
            color: 'rgb(255, 255, 255)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Copyright &reg; 2024 Grupo Kampai
        </p>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .lionna-footer { padding: 60px 64px 16px !important; }
        }
        @media (max-width: 809px) {
          .lionna-footer { padding: 40px 16px 16px !important; }
          .footer-infos { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
