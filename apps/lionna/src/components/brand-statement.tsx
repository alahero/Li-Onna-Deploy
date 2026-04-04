export function BrandStatement() {
  return (
    <section
      className="brand-statement-section"
      style={{
        backgroundColor: '#F6F6F2',
        padding: '120px 80px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          maxWidth: 900,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
      >
        <p
          style={{
            fontFamily: 'EditorialNew, serif',
            fontWeight: 400,
            fontSize: 24,
            letterSpacing: '0.02em',
            lineHeight: 1.5,
            textAlign: 'justify',
            color: '#000',
            margin: 0,
          }}
        >
          Desde esta esquina en el corazón de la capital perseguimos la sintonía perfecta entre la
          cocina japonesa y nuestras raíces latinas creando una atmósfera atemporal y auténtica.
        </p>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .brand-statement-section { padding: 120px 24px 24px !important; }
        }
        @media (max-width: 809px) {
          .brand-statement-section { padding: 60px 16px 16px !important; }
        }
      `}</style>
    </section>
  );
}
