export function ContactCta() {
  return (
    <section
      className="contact-cta-section"
      style={{
        backgroundColor: '#F6F6F2',
        padding: '32px 80px',
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
          !<span
            style={{
              fontFamily: '"Odesta Regular Regular", Odesta, serif',
              fontWeight: 400,
              fontSize: 50,
              letterSpacing: '1px',
              lineHeight: '60px',
            }}
            className="contact-cta-siguenos"
          >
            Siguenos
          </span>{' '}
          para no perderte nada!
        </p>
      </div>

      {/* Instagram button */}
      <a
        href="https://www.instagram.com/lionnaes"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: '"Editorial New Medium", EditorialNew, serif',
          fontWeight: 400,
          fontSize: 14,
          letterSpacing: '0.56px',
          lineHeight: '16.8px',
          background: 'rgb(0, 92, 254)',
          color: '#fff',
          borderRadius: 10,
          padding: '12px 24px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          border: 'none',
        }}
      >
        Contactanos
      </a>

      {/* Contact form */}
      <div style={{ width: '100%', maxWidth: 480, marginTop: 8 }}>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          action="mailto:hola@lionna.es"
          method="post"
          encType="text/plain"
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                borderRadius: 30,
                padding: '6px 16px',
                background: '#fff',
                border: '1px solid #E3E3E3',
                outline: 'none',
                color: '#000',
              }}
            />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                borderRadius: 30,
                padding: '6px 16px',
                background: '#fff',
                border: '1px solid #E3E3E3',
                outline: 'none',
                color: '#000',
              }}
            />
          </div>
          <input
            type="tel"
            name="telefono"
            placeholder="Telefono"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              borderRadius: 30,
              padding: '6px 16px',
              background: '#fff',
              border: '1px solid #E3E3E3',
              outline: 'none',
              color: '#000',
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              borderRadius: 30,
              padding: '6px 16px',
              background: '#fff',
              border: '1px solid #E3E3E3',
              outline: 'none',
              color: '#000',
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
              padding: '12px 24px',
              border: 'none',
              cursor: 'pointer',
              marginTop: 4,
              width: '100%',
              maxWidth: 227,
              height: 40,
              alignSelf: 'flex-end',
            }}
          >
            Contactanos
          </button>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'italic',
              fontSize: 10,
              lineHeight: '12px',
              color: 'rgb(0, 0, 0)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            *Al completar este formulario acceptas nuestro aviso de privacidad
          </p>
        </form>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .contact-cta-section { padding: 32px 24px !important; }
        }
        @media (max-width: 809px) {
          .contact-cta-section { padding: 24px 16px !important; }
          .contact-cta-text { font-size: 24px !important; line-height: 28.8px !important; }
          .contact-cta-siguenos { font-size: 36px !important; line-height: 43.2px !important; }
        }
      `}</style>
    </section>
  );
}
