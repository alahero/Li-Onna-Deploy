export function ContactCta() {
  return (
    <section
      className="contact-cta-section"
      style={{
        backgroundColor: '#F6F6F2',
        padding: '80px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <h2
        style={{
          fontFamily: 'EditorialNew, serif',
          fontWeight: 400,
          fontSize: 34,
          letterSpacing: '-0.04em',
          lineHeight: 1.4,
          color: '#000',
          textAlign: 'center',
          margin: 0,
        }}
        className="contact-cta-h2"
      >
        ¡Síguenos para no perderte nada!
      </h2>

      <a
        href="https://www.instagram.com/lionnaes"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'EditorialNew, serif',
          fontWeight: 500,
          fontSize: 14,
          letterSpacing: '0.04em',
          background: 'rgb(0,92,254)',
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
        Siguenos en Instagram @lionnaes
      </a>

      {/* Contact form */}
      <div style={{ width: '100%', maxWidth: 480, marginTop: 16 }}>
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
            placeholder="Teléfono"
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
              fontFamily: 'EditorialNew, serif',
              fontWeight: 500,
              fontSize: 14,
              letterSpacing: '0.04em',
              background: 'rgb(0,92,254)',
              color: '#fff',
              borderRadius: 10,
              padding: '12px 24px',
              border: 'none',
              cursor: 'pointer',
              marginTop: 4,
            }}
          >
            Contáctanos
          </button>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'italic',
              fontSize: 10,
              color: '#8C8C8C',
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
          .contact-cta-section { padding: 80px 24px !important; }
        }
        @media (max-width: 809px) {
          .contact-cta-section { padding: 40px 16px !important; }
          .contact-cta-h2 { font-size: 26px !important; }
        }
      `}</style>
    </section>
  );
}
