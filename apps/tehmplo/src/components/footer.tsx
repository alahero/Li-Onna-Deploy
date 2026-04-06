import Image from 'next/image';
import Link from 'next/link';

interface SiteSettings {
  social?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    twitter?: string;
    whatsapp?: string;
  };
}

interface LocationData {
  email?: string;
  phone?: string;
  address?: string;
}

interface FooterProps {
  siteSettings?: SiteSettings | null;
  location?: LocationData | null;
}

export default function Footer({ siteSettings, location }: FooterProps) {
  const email = 'hello@tehmplo.mx';

  return (
    <footer
      style={{
        backgroundColor: '#000000',
        minHeight: 339,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Main content row */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          padding: '48px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
        }}
      >
        {/* Top row: logo left, address right */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 32,
          }}
        >
          {/* Logo — desktop 247px wide */}
          <div style={{ position: 'relative', width: 247, height: 40, flexShrink: 0 }}>
            <Image
              src="/images/footer-logo.png"
              alt="Tehmplo"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              unoptimized
            />
          </div>

          {/* Address block — right-aligned */}
          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                fontFamily: '"Austin Cyr Italic", serif',
                fontSize: 26,
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#ffffff',
                lineHeight: '1em',
                marginBottom: 8,
              }}
            >
              Parcela, Carretera Tulum - Boca Paila
            </p>
            <p
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: 20,
                fontWeight: 500,
                color: '#ffffff',
                lineHeight: '1em',
                marginBottom: 16,
              }}
            >
              1678-Km. 5.5, 77780 Tulum, Q.R.
            </p>
            <a
              href={`mailto:${email}`}
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: 20,
                fontWeight: 500,
                color: '#ffffff',
                lineHeight: '1em',
                textDecoration: 'none',
                display: 'block',
              }}
            >
              {email}
            </a>
          </div>
        </div>

        {/* Separator line */}
        <div
          style={{
            width: '100%',
            maxWidth: 943,
            height: 1,
            background: 'rgba(255, 255, 255, 0.22)',
            margin: '0 auto',
          }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {/* Badge image */}
          <div style={{ position: 'relative', width: 289, height: 59, flexShrink: 0 }}>
            <Image
              src="/images/footer-badge.png"
              alt="experience the REAL Tulum"
              fill
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              unoptimized
            />
          </div>

          {/* Legal links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/tc"
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 10,
                fontWeight: 400,
                color: '#ffffff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              TERMS &amp; CONDITIONS
            </Link>
            <Link
              href="/tc"
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 10,
                fontWeight: 400,
                color: '#ffffff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              PRIVACY POLICY
            </Link>
            <a
              href="mailto:hello@tehmplo.mx"
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 10,
                fontWeight: 400,
                color: '#ffffff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              CONTACT
            </a>

            {/* Language selector */}
            <div
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 10,
                color: '#ffffff',
                display: 'flex',
                gap: 8,
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: 600 }}>EN</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <a
                href="/es"
                style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.6 }}
              >
                ES
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
