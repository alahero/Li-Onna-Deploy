import Image from 'next/image';
import Link from 'next/link';

/**
 * Houdinni Footer — pixel-perfect from Framer extraction.
 *
 * Framer spec:
 *   - "Houdinni/Footer": x:5, y:4244, w:1190, h:441
 *   - "Desktop" inner: bg rgb(0,0,0), padding 80px 80px 16px, overflow hidden
 *   - "Infos": w:1030, padding 0px 24px 24px, overflow hidden
 *     - Logo Houdinni: 269x40 (SPAN)
 *     - WhatsApp button: 32x32 bg white, padding 6px, overflow hidden
 *     - Address: "C. de Serrano 41. Salamanca 28001", "Madrid, España"
 *     - Phone: "Tel: +34 671 80 77 47"
 *     - Email: "hola@houdinni.com"
 *     - All text: Editorial New Regular, 14px, weight 400, color white, letter-spacing 1.4px, line-height 16.8px, text-align right
 *   - "Logo" (Mandala): padding 12px 24px 16px
 *     - Legal links: 12px, letter-spacing 1.2px, line-height 14.4px, text-align center
 *     - Mandala logo: 196x38
 *   - "Copyright": 12px, letter-spacing 0.24px, line-height 14.4px, text-align center
 */
export function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: 'rgb(0, 0, 0)', width: '100%' }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1190px',
          padding: '80px 80px 16px',
          overflow: 'hidden',
        }}
      >
        {/* ── INFOS SECTION ── */}
        <div
          style={{
            padding: '0px 24px 24px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
          }}
        >
          {/* Left: Houdinni Logo */}
          <div style={{ position: 'relative', width: '269px', height: '40px', flexShrink: 0 }}>
            <Image
              src="/logo-houdinni-footer.png"
              alt="Houdinni"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right: WhatsApp icon + Contact info */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'flex-end',
            }}
          >
            {/* WhatsApp icon button — 32x32, bg white, padding 6px */}
            <a
              href="https://api.whatsapp.com/send?phone=34671807747"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '100px',
                width: '32px',
                height: '32px',
                padding: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0,
              }}
              aria-label="WhatsApp"
            >
              {/* WhatsApp icon image: 19x19 */}
              <div style={{ position: 'relative', width: '19px', height: '19px' }}>
                <Image
                  src="/whatsapp-icon.png"
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </a>

            {/* Address */}
            <p
              className="font-editorial"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgb(255, 255, 255)',
                letterSpacing: '1.4px',
                lineHeight: '16.8px',
                textAlign: 'right',
              }}
            >
              C. de Serrano 41. Salamanca 28001
            </p>
            <p
              className="font-editorial"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgb(255, 255, 255)',
                letterSpacing: '1.4px',
                lineHeight: '16.8px',
                textAlign: 'right',
              }}
            >
              Madrid, España
            </p>

            {/* Phone */}
            <p
              className="font-editorial"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgb(255, 255, 255)',
                letterSpacing: '1.4px',
                lineHeight: '16.8px',
                textAlign: 'right',
              }}
            >
              <a
                href="tel:+34671807747"
                style={{ color: 'rgb(179, 179, 179)' }}
              >
                Tel:
              </a>{' '}
              +34 671 80 77 47
            </p>

            {/* Email */}
            <p
              className="font-editorial"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgb(255, 255, 255)',
                letterSpacing: '1.4px',
                lineHeight: '16.8px',
                textAlign: 'right',
              }}
            >
              <a href="mailto:hola@houdinni.com">hola@houdinni.com</a>
            </p>
          </div>
        </div>

        {/* ── LOGO (MANDALA) + LEGAL LINKS SECTION ── */}
        <div
          style={{
            padding: '12px 24px 16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Left: Mandala Group logo — 196x38 */}
          <a
            href="https://mandalagroup.mx/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ position: 'relative', width: '196px', height: '38px', flexShrink: 0 }}
          >
            <Image
              src="/mandala-logo-footer.png"
              alt="Mandala Group"
              fill
              style={{ objectFit: 'cover' }}
            />
          </a>

          {/* Right: Legal links — centered text, 12px */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'center',
            }}
          >
            <Link
              href="/privacidad"
              className="font-editorial"
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgb(255, 255, 255)',
                letterSpacing: '1.2px',
                lineHeight: '14.4px',
                textAlign: 'center',
              }}
            >
              POLITICA DE PRIVACIDAD
            </Link>
            <Link
              href="/aviso-legal"
              className="font-editorial"
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgb(161, 161, 161)',
                letterSpacing: '1.2px',
                lineHeight: '14.4px',
                textAlign: 'center',
              }}
            >
              AVISO LEGAL
            </Link>
            <Link
              href="/cookies"
              className="font-editorial"
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgb(171, 171, 171)',
                letterSpacing: '1.2px',
                lineHeight: '14.4px',
                textAlign: 'center',
              }}
            >
              POLÍTICA DE COOKIES
            </Link>
            <Link
              href="/#contact"
              className="font-editorial"
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgb(255, 255, 255)',
                letterSpacing: '1.2px',
                lineHeight: '14.4px',
                textAlign: 'center',
              }}
            >
              CONTACTO
            </Link>
          </div>
        </div>

        {/* ── COPYRIGHT BAR ── */}
        <div
          style={{
            padding: '0px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p
            className="font-editorial"
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: 'rgb(255, 255, 255)',
              letterSpacing: '0.24px',
              lineHeight: '14.4px',
              textAlign: 'center',
            }}
          >
            Copyright ® 2025 Mandala Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
