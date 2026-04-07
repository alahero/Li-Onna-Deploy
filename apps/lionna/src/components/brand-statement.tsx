interface ContactData {
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  whatsapp?: string | null;
  mapUrl?: string | null;
}

interface BrandStatementProps {
  contact?: ContactData | null;
}

export function BrandStatement({ contact }: BrandStatementProps) {
  const address = contact?.address ?? 'C. de Recoletos, 1, Salamanca,\n28001 Madrid, España';
  const phone = contact?.phone ?? '+34 910 463 911';
  const emailAddr = contact?.email ?? 'hola@lionna.es';
  const mapEmbedUrl = contact?.mapUrl ?? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.285086796682!2d-3.693635823492879!3d40.422375955294875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289b5c5b6e91%3A0x74b5e4fbeff1ec02!2sLi-Onna!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses';
  return (
    <section
      className="brand-statement-section"
      style={{
        backgroundColor: '#F6F6F2',
        padding: '40px 80px 0',
      }}
    >
      {/* Contact info + map card — tan background */}
      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
          background: 'rgb(216, 206, 198)',
          borderRadius: 12,
          overflow: 'hidden',
        }}
        className="brand-statement-card"
      >
        {/* Info row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '32px 40px',
            gap: 24,
            flexWrap: 'wrap',
          }}
          className="brand-info-row"
        >
          {/* Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: '0.32px',
                lineHeight: '19.2px',
                color: 'rgb(0, 0, 0)',
                margin: 0,
              }}
            >
              Direcci&oacute;n:
            </p>
            <p
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: '0.32px',
                lineHeight: '19.2px',
                color: 'rgb(0, 0, 0)',
                margin: 0,
                whiteSpace: 'pre-line',
              }}
            >
              {address}
            </p>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: '0.32px',
                lineHeight: '19.2px',
                color: 'rgb(0, 0, 0)',
                margin: 0,
              }}
            >
              Tel&eacute;fono:
            </p>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: '0.32px',
                lineHeight: '19.2px',
                color: 'rgb(0, 0, 0)',
                textDecoration: 'none',
                margin: 0,
              }}
            >
              {phone}
            </a>
          </div>

          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: '0.32px',
                lineHeight: '19.2px',
                color: 'rgb(0, 0, 0)',
                margin: 0,
              }}
            >
              Email:
            </p>
            <a
              href={`mailto:${emailAddr}`}
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: '0.32px',
                lineHeight: '19.2px',
                color: 'rgb(0, 0, 0)',
                textDecoration: 'none',
                margin: 0,
              }}
            >
              {emailAddr}
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div style={{ height: 300, position: 'relative' }}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicaci&oacute;n de LI-ONNA en Google Maps"
          />
        </div>
      </div>

      {/* "Contacto" label with decorative arrow */}
      <div
        style={{
          textAlign: 'center',
          padding: '40px 0 24px',
        }}
      >
        <p
          style={{
            fontFamily: '"Editorial New Regular", EditorialNew, serif',
            fontWeight: 400,
            fontSize: 24,
            letterSpacing: '0.48px',
            lineHeight: '28.8px',
            color: 'rgb(0, 0, 0)',
            margin: 0,
            textDecoration: 'underline',
            textUnderlineOffset: '6px',
          }}
        >
          Contacto
        </p>
        {/* Decorative arrow */}
        <div style={{ marginTop: 8 }}>
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
            <path d="M2 2C6 6 10 10 12 12C14 10 18 6 22 2" stroke="rgb(0,0,0)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .brand-statement-section { padding: 40px 24px 0 !important; }
        }
        @media (max-width: 809px) {
          .brand-statement-section { padding: 24px 16px 0 !important; }
          .brand-info-row { flex-direction: column !important; padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  );
}
