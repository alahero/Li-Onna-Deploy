import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    platform: 'Facebook',
    icon: '/images/social-facebook.png',
    iconW: 20,
    iconH: 20,
    handle: 'tacosatarantados',
    url: 'https://www.facebook.com/TacosAtarantados/?locale=es_LA',
  },
  {
    platform: 'Instagram',
    icon: '/images/social-instagram.png',
    iconW: 25,
    iconH: 25,
    handle: 'tacosatarantados',
    url: 'https://www.instagram.com/tacosatarantados/?hl=es',
  },
  {
    platform: 'TikTok',
    icon: '/images/social-tiktok.png',
    iconW: 23,
    iconH: 26,
    handle: 'atarantados',
    url: 'https://www.tiktok.com/@tacosatarantados?lang=es',
  },
  {
    platform: 'X',
    icon: '/images/social-twitter.png',
    iconW: 27,
    iconH: 25,
    handle: 'tacosatarantados',
    url: 'https://x.com/atarantados',
  },
];

export function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: 'rgb(255, 255, 255)',
        padding: '24px',
        minHeight: '337px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1152px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '0px' }}>

        {/* TOP ROW: Logo mascot + Social links — Framer: h=72 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '72px',
            overflow: 'hidden',
            gap: '0px',
          }}
        >
          {/* Footer mascot logo — Framer: 72x71, padding-right=17px, objectFit=contain */}
          <div style={{ flexShrink: 0, paddingRight: '17px' }}>
            <Image
              src="/images/footer-mascot.png"
              alt="Tacos Atarantados"
              width={72}
              height={71}
              style={{ width: '72px', height: '71px', objectFit: 'contain' }}
            />
          </div>

          {/* Social links — evenly distributed across remaining space */}
          <div
            className="footer-socials"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            {socialLinks.map((s) => (
              <Link
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src={s.icon}
                  alt={s.platform}
                  width={s.iconW}
                  height={s.iconH}
                  style={{ width: s.iconW, height: s.iconH, objectFit: 'cover' }}
                />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '19.2px',
                    color: 'rgb(12, 117, 40)',
                  }}
                >
                  {s.handle}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CENTER ROW 1: Horizontal divider — Framer: y=3098, h=72 */}
        <div
          style={{
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <svg width="100%" height="2" viewBox="0 0 1152 2" preserveAspectRatio="none" fill="none">
            <line x1="0" y1="1" x2="1152" y2="1" stroke="rgb(12, 117, 40)" strokeWidth="1" />
          </svg>
        </div>

        {/* CENTER ROW 2: Legal links + Partner logos — Framer: y=3171, h=72 */}
        <div
          className="footer-center-row"
          style={{
            height: '72px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
            gap: '24px',
          }}
        >
          {/* Legal links column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            {['POL\u00CDTICAS DE PRIVACIDAD', 'POL\u00CDTICA DE COOKIES', 'INFORMACI\u00D3N LEGAL', 'CONTACTO'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '13px',
                  lineHeight: '15.6px',
                  color: 'rgb(12, 117, 40)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Partner logos */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '43px', alignItems: 'center' }}>
            <Link href="https://mandalagroup.mx/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/mandala-group.png"
                alt="Mandala Group"
                width={230}
                height={41}
                style={{ width: '230px', height: '41px', objectFit: 'cover' }}
              />
            </Link>
            <Link href="https://www.instagram.com/grupo_buenasvibras/?hl=es" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/grupo-buenas-vibras.png"
                alt="Grupo Buenas Vibras"
                width={85}
                height={81}
                style={{ width: '85px', height: '81px', objectFit: 'cover' }}
              />
            </Link>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright — Framer: y=3243, h=72 */}
        <div
          style={{
            height: '72px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', lineHeight: '15.6px', color: 'rgb(12, 117, 40)' }}>
            Copyright &reg; 2025 Mandala Group
          </span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', lineHeight: '15.6px', color: 'rgb(12, 117, 40)' }}>
            Copyright &reg; 2025 Grupo Buenas Vibras
          </span>
        </div>

      </div>
    </footer>
  );
}
