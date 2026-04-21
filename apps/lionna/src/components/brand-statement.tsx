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

/** Fondo de las franjas superior e inferior (datos + pie Contacto). */
const FONDO_BLOQUE_CONTACTO = 'rgb(216, 206, 198)';

/** Radio de esquinas del mapa (las cuatro). */
const RADIO_MAPA = 34;

/** Ancho del mapa: ~85% del viewport, sin rebasar el ancho útil del contenedor. */
const ANCHO_MAPA = 'min(85vw, 100%)';

/** Misma anchura que la fila de datos (cabecera + pie alineados). */
const ANCHO_MAX_CABECERA_PIE = 800;

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
        padding: '40px 80px 56px',
      }}
    >
      {/* Tres bloques: cabecera y pie misma anchura (800px); mapa más ancho entre ambos */}
      <div
        className="brand-statement-stack"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: 0,
        }}
      >
        {/* 1 — Dirección / Teléfono / Email: solo esquinas superiores redondeadas */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '32px 40px',
            gap: 24,
            flexWrap: 'wrap',
            background: FONDO_BLOQUE_CONTACTO,
            borderRadius: '12px 12px 0 0',
            maxWidth: ANCHO_MAX_CABECERA_PIE,
            width: '100%',
            boxSizing: 'border-box',
          }}
          className="brand-info-row"
        >
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

        {/* 2 — Mapa: más ancho que la cabecera; las cuatro esquinas redondeadas */}
        <div
          className="brand-map-block"
          style={{
            width: ANCHO_MAPA,
            height: 452,
            borderRadius: RADIO_MAPA,
            overflow: 'hidden',
            boxSizing: 'border-box',
          }}
        >
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', width: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicaci&oacute;n de LI-ONNA en Google Maps"
          />
        </div>

        {/* 3 — Pie Contacto: solo esquinas inferiores redondeadas */}
        <div
          className="brand-contacto-footer"
          style={{
            textAlign: 'center',
            padding: '32px 24px 28px',
            background: FONDO_BLOQUE_CONTACTO,
            borderRadius: '0 0 12px 12px',
            maxWidth: ANCHO_MAX_CABECERA_PIE,
            width: '100%',
            boxSizing: 'border-box',
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
          <div style={{ marginTop: 8 }}>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden>
              <path d="M2 2C6 6 10 10 12 12C14 10 18 6 22 2" stroke="rgb(0,0,0)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1439px) {
          .brand-statement-section { padding: 40px 24px 48px !important; }
        }
        @media (max-width: 809px) {
          .brand-statement-section { padding: 24px 16px 40px !important; }
          .brand-info-row {
            flex-direction: column !important;
            padding: 24px 20px !important;
          }
          .brand-map-block {
            width: min(100%, calc(100vw - 32px)) !important;
            height: 260px !important;
          }
          .brand-contacto-footer { padding: 28px 16px 22px !important; }
        }
      `}</style>
    </section>
  );
}
