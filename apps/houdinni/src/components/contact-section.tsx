/**
 * Contact / Info Section — exact Framer spec (§5.11)
 * Section ID: nDVkMp468 (hash anchor: contact)
 * Phone: tel:+34910463911, displayed as +34 671 80 77 47
 * Email: hola@houdinni.com
 * Maps: https://maps.app.goo.gl/boeQqsrXHHfuHfTW9
 */

interface ContactSectionProps {
  contact?: {
    address?: string | null;
    city?: string | null;
    phoneVenue?: string | null;
    phoneWhatsapp?: string | null;
    email?: string | null;
    mapsUrl?: string | null;
  } | null;
}

export function ContactSection({ contact }: ContactSectionProps = {}) {
  const address = contact?.address ?? 'C. de Serrano 41, Local A y B, Salamanca 28001';
  const city = contact?.city ?? 'Madrid, España';
  const phoneVenue = contact?.phoneVenue ?? '+34 910 46 39 11';
  const phoneVenueClean = phoneVenue.replace(/\s/g, '');
  const phoneWhatsapp = contact?.phoneWhatsapp ?? '+34 671 80 77 47';
  const phoneWhatsappClean = phoneWhatsapp.replace(/\s/g, '');
  const email = contact?.email ?? 'hola@houdinni.com';
  const mapsUrl = contact?.mapsUrl ?? 'https://maps.app.goo.gl/boeQqsrXHHfuHfTW9';
  return (
    <section
      id="contact"
      className="bg-houdinni-black"
      style={{ padding: '80px 0' }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: '1200px', padding: '0 24px' }}
      >
        {/* Section header */}
        <div style={{ marginBottom: '48px' }}>
          <span
            className="font-array text-houdinni-cyan text-xs uppercase tracking-widest block mb-4"
          >
            ENCUÉNTRANOS
          </span>
          <h2
            className="font-druk text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            CONTACTO
          </h2>
          {/* Blue accent bar */}
          <div
            style={{
              background: '#3388ff',
              height: '7px',
              width: '485px',
              maxWidth: '100%',
              marginTop: '12px',
              overflow: 'clip',
            }}
          />
        </div>

        {/* Info grid */}
        <div
          className="grid grid-cols-1 tablet:grid-cols-3 gap-12"
        >
          {/* Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span
              className="font-druk text-houdinni-blue-light text-sm"
            >
              DIRECCIÓN
            </span>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial text-white hover:text-houdinni-blue transition-colors"
              style={{ fontSize: '14px', letterSpacing: '0.1em', lineHeight: '1.6' }}
            >
              {address}<br />
              {city}
            </a>
          </div>

          {/* Phone + Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span
              className="font-druk text-houdinni-blue-light text-sm"
            >
              TELÉFONO & EMAIL
            </span>
            <a
              href={`tel:${phoneVenueClean}`}
              className="font-editorial text-white hover:text-houdinni-blue transition-colors"
              style={{ fontSize: '14px', letterSpacing: '0.1em' }}
            >
              {phoneVenue}
            </a>
            <a
              href={`tel:${phoneWhatsappClean}`}
              className="font-editorial text-white hover:text-houdinni-blue transition-colors"
              style={{ fontSize: '14px', letterSpacing: '0.1em' }}
            >
              {phoneWhatsapp}
            </a>
            <a
              href={`mailto:${email}`}
              className="font-editorial text-houdinni-blue hover:text-houdinni-blue-light transition-colors"
              style={{ fontSize: '14px', letterSpacing: '0.1em' }}
            >
              {email}
            </a>
          </div>

          {/* Action links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              className="font-druk text-houdinni-blue-light text-sm"
            >
              ACCESO RÁPIDO
            </span>
            <a
              href={`https://api.whatsapp.com/send?phone=${phoneWhatsappClean.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial text-white hover:text-houdinni-blue transition-colors flex items-center gap-2"
              style={{ fontSize: '14px', letterSpacing: '0.1em' }}
            >
              <span className="icon-btn shrink-0">
                <svg viewBox="0 0 24 24" fill="#050505" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              WhatsApp
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial text-white hover:text-houdinni-blue transition-colors flex items-center gap-2"
              style={{ fontSize: '14px', letterSpacing: '0.1em' }}
            >
              <span className="icon-btn shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </span>
              Ver en Google Maps
            </a>
            <a
              href="https://tickets.houdinni.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial text-houdinni-cyan hover:text-white transition-colors flex items-center gap-2"
              style={{ fontSize: '14px', letterSpacing: '0.1em' }}
            >
              <span className="icon-btn shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                </svg>
              </span>
              Comprar Entradas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
