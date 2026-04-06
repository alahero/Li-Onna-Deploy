'use client';

export function ContactCta() {
  return (
    <section
      className="contact-cta-section"
      style={{
        backgroundColor: '#F6F6F2',
        padding: '80px 80px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}
    >
      {/* Mixed-font heading: "!Siguenos para no perderte nada!" */}
      <div style={{ maxWidth: 800, width: '100%', padding: '0 8px', textAlign: 'center' }}>
        <p
          style={{
            fontFamily: '"Editorial New Regular", EditorialNew, serif',
            fontWeight: 400,
            fontSize: 32,
            letterSpacing: '0.64px',
            lineHeight: '38.4px',
            color: 'rgb(0, 0, 0)',
            margin: 0,
          }}
          className="contact-cta-text"
        >
          &iexcl;<span
            style={{
              fontFamily: '"Odesta Regular Regular", Odesta, serif',
              fontWeight: 400,
              fontSize: 50,
              letterSpacing: '1px',
              lineHeight: '60px',
            }}
            className="contact-cta-siguenos"
          >
            S&iacute;guenos
          </span>{' '}
          para no perderte nada!
        </p>
      </div>

      {/* Contact form card — tan/beige background, horizontal layout */}
      <div
        style={{
          width: '100%',
          maxWidth: 780,
          background: 'rgb(216, 206, 198)',
          borderRadius: 12,
          padding: '24px 32px',
        }}
        className="contact-form-card"
      >
        <form
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            width: '100%',
          }}
          action="mailto:hola@lionna.es"
          method="post"
          encType="text/plain"
          className="contact-form-row"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            required
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              borderRadius: 8,
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              outline: 'none',
              color: '#000',
              flex: 1,
              minWidth: 0,
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            required
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              borderRadius: 8,
              padding: '12px 16px',
              background: 'rgba(255,255,255,0.7)',
              border: 'none',
              outline: 'none',
              color: '#000',
              flex: 1,
              minWidth: 0,
            }}
          />
          <button
            type="submit"
            style={{
              fontFamily: '"Editorial New Medium", EditorialNew, serif',
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: '0.56px',
              lineHeight: '16.8px',
              background: 'rgb(0, 92, 254)',
              color: '#fff',
              borderRadius: 10,
              padding: '12px 32px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              height: 44,
              flexShrink: 0,
            }}
          >
            Cont&aacute;ctanos
          </button>

          {/* Instagram icon circle */}
          <a
            href="https://www.instagram.com/lionnaes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgb(0, 92, 254)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              textDecoration: 'none',
            }}
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="#fff" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="#fff" />
            </svg>
          </a>
        </form>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontStyle: 'italic',
            fontSize: 10,
            lineHeight: '12px',
            color: 'rgb(0, 0, 0)',
            textAlign: 'center',
            margin: '12px 0 0',
          }}
        >
          *Al completar este formulario acceptas nuestro aviso de privacidad
        </p>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .contact-cta-section { padding: 60px 24px 24px !important; }
        }
        @media (max-width: 809px) {
          .contact-cta-section { padding: 40px 16px 16px !important; }
          .contact-cta-text { font-size: 24px !important; line-height: 28.8px !important; }
          .contact-cta-siguenos { font-size: 36px !important; line-height: 43.2px !important; }
          .contact-form-row {
            flex-direction: column !important;
          }
          .contact-form-card {
            padding: 16px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
