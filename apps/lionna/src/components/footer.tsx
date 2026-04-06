import Link from 'next/link';
import Image from 'next/image';

const legalLinks = [
  { href: '/politica-de-privacidad', label: 'POLITICA DE PRIVACIDAD' },
  { href: '/aviso-legal', label: 'INFORMACION LEGAL' },
  { href: '/politica-de-cookies', label: 'POLITICA DE COOKIES' },
  { href: '/contact', label: 'CONTACTO' },
];

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill="#fff"
      />
      <path
        d="M20.52 3.449C18.24 1.245 15.24 0 12.05 0 5.495 0 .16 5.335.16 11.892c0 2.096.547 4.142 1.588 5.945L.1 24l6.335-1.652A11.924 11.924 0 0012.05 23.8c6.555 0 11.89-5.335 11.89-11.893 0-3.181-1.24-6.169-3.42-8.458zM12.05 21.785a9.9 9.9 0 01-5.055-1.382l-.36-.216-3.764.986 1.005-3.667-.236-.376A9.846 9.846 0 012.18 11.892c0-5.442 4.424-9.867 9.87-9.867 2.637 0 5.115 1.03 6.981 2.898a9.825 9.825 0 012.889 6.986c0 5.443-4.424 9.876-9.87 9.876z"
        fill="#fff"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="#fff" />
    </svg>
  );
}

function MapsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#fff" />
      <circle cx="12" cy="9" r="2.5" fill="#000" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

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
      {/* Main footer content row */}
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
        {/* Left column: Logo + EN COLABORACION CON + TANAKA HOSPITALITY */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* LI-ONNA Logo */}
          <div>
            <Image
              src="/images/logo-large.svg"
              alt="LI-ONNA"
              width={7966}
              height={2181}
              style={{ width: 252, height: 'auto' }}
            />
          </div>

          {/* EN COLABORACION CON + TANAKA HOSPITALITY */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
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
              EN COLABORACI&Oacute;N CON
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '1px',
                lineHeight: '18px',
                color: 'rgb(255, 255, 255)',
                margin: '4px 0 0',
                textTransform: 'uppercase',
              }}
            >
              TANAKA HOSPITALITY
            </p>
          </div>
        </div>

        {/* Right column: Social icons + Language selector + Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
          {/* Social icons row + Language selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=34679836561"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/lionnaes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            {/* Google Maps */}
            <a
              href="https://maps.google.com/?q=Li-Onna+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
              }}
              aria-label="Google Maps"
            >
              <MapsIcon />
            </a>

            {/* Language selector */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 20,
                padding: '8px 16px',
                cursor: 'pointer',
              }}
            >
              <GlobeIcon />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 13,
                  color: '#fff',
                }}
              >
                Spanish
              </span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Address */}
          <p
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '1.4px',
              lineHeight: '16.8px',
              color: 'rgb(255, 255, 255)',
              margin: 0,
              textAlign: 'right',
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
              textAlign: 'right',
            }}
          >
            Madrid, Espa&ntilde;a
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
              textAlign: 'right',
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
              textAlign: 'right',
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
              textAlign: 'right',
            }}
          >
            hola@lionna.es
          </a>
        </div>
      </div>

      {/* Separator line */}
      <div
        style={{
          width: '100%',
          height: 1,
          background: 'rgba(255,255,255,0.2)',
          margin: '32px 0',
        }}
      />

      {/* MANDALA GROUP HOSPITALITY logo + Legal links row */}
      <div
        className="footer-bottom-row"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '0 24px',
        }}
      >
        {/* Left: Mandala Group Hospitality text/logo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 22,
              letterSpacing: '2px',
              lineHeight: '28px',
              color: 'rgb(255, 255, 255)',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            <span style={{ fontWeight: 400 }}>MANDALA</span>
            <span style={{ fontWeight: 700 }}>GROUP</span>
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 9,
              letterSpacing: '4px',
              lineHeight: '12px',
              color: 'rgb(255, 255, 255)',
              margin: 0,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            HOSPITALITY
          </p>
        </div>

        {/* Right: Legal links — right-aligned */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 6,
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
                textAlign: 'right',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          padding: '32px 0 0',
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
          .footer-bottom-row { flex-direction: column !important; gap: 24px !important; align-items: center !important; }
        }
      `}</style>
    </footer>
  );
}
