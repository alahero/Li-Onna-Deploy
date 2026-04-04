import Image from 'next/image';
import Link from 'next/link';

/**
 * Houdinni Footer — pixel-perfect from Framer design.
 *
 * Spec (§14):
 *   - Background: #000000
 *   - Width: 1440px desktop
 *   - Padding: 80px 80px 16px 80px (desktop), 80px 16px 16px 16px (mobile)
 *   - 3 sections: top info bar, middle bar (Mandala logo + legal), copyright bar
 *   - Border-bottom: 1px solid #ffffff between sections
 */
export function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: '#000000', width: '100%' }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1440px',
          padding: 'clamp(80px, 8vw, 80px) clamp(16px, 5.5vw, 80px) 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {/* ── TOP INFO BAR ── */}
        <div
          style={{
            borderBottom: '1px solid #ffffff',
            padding: '0 24px 24px 24px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* Left: Logo + Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Image
              src="/logo-white.png"
              alt="Houdinni"
              width={269}
              height={50}
              className="object-contain"
              style={{ width: '269px', height: 'auto' }}
            />
            {/* Address block — 4px gap between lines */}
            <address
              style={{
                fontStyle: 'normal',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <span
                className="font-editorial text-white"
                style={{ fontSize: '14px', letterSpacing: '0.1em' }}
              >
                C. de Serrano 41. Salamanca 28001
              </span>
              <span
                className="font-editorial text-white"
                style={{ fontSize: '14px', letterSpacing: '0.1em' }}
              >
                Madrid, España
              </span>
            </address>
          </div>

          {/* Right: Social icons + Contact info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              paddingBottom: '16px',
              alignItems: 'flex-end',
            }}
          >
            {/* Icon buttons row */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href="https://www.instagram.com/houdinni.madrid/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#050505" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/boeQqsrXHHfuHfTW9"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="Google Maps"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </a>
              <a
                href="https://mandalagroup.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="Mandala Group"
              >
                <svg viewBox="0 0 24 24" fill="#050505" className="w-4 h-4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=34671807747"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="#050505" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            {/* Contact info */}
            <a
              href="tel:+34910463911"
              className="font-editorial text-white hover:text-houdinni-blue transition-colors"
              style={{ fontSize: '14px', letterSpacing: '0.1em' }}
            >
              Tel: +34 671 80 77 47
            </a>
            <a
              href="mailto:hola@houdinni.com"
              className="font-editorial text-houdinni-blue hover:text-houdinni-blue-light transition-colors"
              style={{ fontSize: '14px', letterSpacing: '0.1em' }}
            >
              hola@houdinni.com
            </a>
          </div>
        </div>

        {/* ── MIDDLE BAR ── */}
        <div
          style={{
            padding: '12px 24px 16px 24px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Left: Mandala Group logo */}
          <a
            href="https://mandalagroup.mx/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '20%', minWidth: '120px' }}
          >
            <Image
              src="/mandala-logo.png"
              alt="Mandala Group"
              width={442}
              height={84}
              className="object-contain w-full h-auto"
            />
          </a>

          {/* Right: Legal links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'flex-end',
            }}
          >
            <Link
              href="/privacidad"
              className="font-editorial text-white hover:text-houdinni-blue transition-colors"
              style={{ fontSize: '12px', letterSpacing: '0.1em' }}
            >
              POLITICA DE PRIVACIDAD
            </Link>
            <Link
              href="/aviso-legal"
              className="font-editorial hover:text-houdinni-blue transition-colors"
              style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'rgb(161, 161, 161)' }}
            >
              AVISO LEGAL
            </Link>
            <Link
              href="/cookies"
              className="font-editorial hover:text-houdinni-blue transition-colors"
              style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'rgb(171, 171, 171)' }}
            >
              POLÍTICA DE COOKIES
            </Link>
            <Link
              href="/#contact"
              className="font-editorial text-white hover:text-houdinni-blue transition-colors"
              style={{ fontSize: '12px', letterSpacing: '0.1em' }}
            >
              CONTACTO
            </Link>
          </div>
        </div>

        {/* ── COPYRIGHT BAR ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            className="font-editorial text-white text-center"
            style={{ fontSize: '12px', letterSpacing: '0.02em' }}
          >
            Copyright ® 2025 Mandala Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
