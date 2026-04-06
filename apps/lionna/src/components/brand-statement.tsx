export function BrandStatement() {
  return (
    <section
      className="brand-statement-section"
      style={{
        backgroundColor: '#F6F6F2',
        padding: '80px 80px',
      }}
    >
      {/* Contact info + map card */}
      <div
        style={{
          maxWidth: 992,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
        }}
        className="brand-statement-grid"
      >
        {/* Left: Contact details */}
        <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
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
              Direccion:
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
              }}
            >
              C. de Recoletos, 1, Salamanca, 28001 Madrid, Espana
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 }}>
            <a
              href="tel:+34910463911"
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
              <span>Telefono:</span>
              <br />
              +34 910 463 911
            </a>
          </div>

          <div style={{ marginTop: 4 }}>
            <a
              href="mailto:hola@lionna.es"
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
              <span>Email:</span>hola@lionna.es
            </a>
          </div>
        </div>

        {/* Right: Google Map */}
        <div style={{ minHeight: 300, position: 'relative' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.285086796682!2d-3.693635823492879!3d40.422375955294875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1"
            width="100%"
            height="100%"
            style={{ border: 0, position: 'absolute', inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicacion de LI-ONNA en Google Maps"
          />
        </div>
      </div>

      {/* Large brand statement card */}
      <div
        style={{
          maxWidth: 800,
          margin: '80px auto 0',
          background: 'rgb(216, 206, 198)',
          padding: 8,
          position: 'relative',
        }}
        className="brand-card"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 700,
            padding: '40px',
            textAlign: 'center',
          }}
        >
          {/* "Contacto" label */}
          <p
            style={{
              fontFamily: '"Editorial New Regular", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 24,
              letterSpacing: '0.48px',
              lineHeight: '28.8px',
              color: 'rgb(0, 0, 0)',
              margin: '0 0 32px 0',
              textAlign: 'center',
            }}
          >
            Contacto
          </p>

          {/* Large brand text */}
          <p
            style={{
              margin: 0,
              textAlign: 'center',
            }}
            className="brand-statement-large-text"
          >
            <span
              style={{
                fontFamily: '"Editorial New Regular", EditorialNew, serif',
                fontWeight: 400,
                fontSize: 81,
                lineHeight: '97.2px',
                color: 'rgb(0, 92, 254)',
                letterSpacing: 'normal',
              }}
              className="brand-lionna-name"
            >
              LI-ONNA &mdash;
            </span>
            <br />
            <span
              style={{
                fontFamily: '"Odesta Regular Regular", Odesta, serif',
                fontWeight: 400,
                fontSize: 111,
                lineHeight: '133.2px',
                color: 'rgb(0, 92, 254)',
                letterSpacing: 'normal',
              }}
              className="brand-tagline"
            >
              Cocina japonesa con alma latina
            </span>
          </p>
        </div>

        {/* GFD Union logo at bottom */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0 0 12px' }}>
          <svg width="54" height="12" viewBox="0 0 54 12" fill="none" aria-hidden>
            <rect width="54" height="12" rx="2" fill="rgba(0,0,0,0.2)" />
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .brand-statement-section { padding: 80px 24px !important; }
          .brand-lionna-name { font-size: 54px !important; line-height: 64.8px !important; }
          .brand-tagline { font-size: 72px !important; line-height: 86.4px !important; }
        }
        @media (max-width: 809px) {
          .brand-statement-section { padding: 40px 16px !important; }
          .brand-statement-grid { grid-template-columns: 1fr !important; }
          .brand-lionna-name { font-size: 32px !important; line-height: 38.4px !important; }
          .brand-tagline { font-size: 42px !important; line-height: 50.4px !important; }
          .brand-card { margin-top: 40px !important; }
        }
      `}</style>
    </section>
  );
}
