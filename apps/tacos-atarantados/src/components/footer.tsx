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
    handle: 'tacosatarantados',
    url: 'https://www.tiktok.com/@tacosatarantados?lang=es',
  },
  {
    platform: 'X',
    icon: '/images/social-twitter.png',
    iconW: 27,
    iconH: 25,
    handle: 'atarantados',
    url: 'https://x.com/atarantados',
  },
];

export function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: '#ffffff',
        padding: '24px',
        minHeight: '337px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>

        {/* TOP ROW: Logo + Socials */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '19px', flexWrap: 'wrap' }}>
          {/* Footer mascot logo */}
          <div style={{ width: '18%', minWidth: '80px', paddingRight: '17px' }}>
            <Image
              src="/images/footer-mascot.png"
              alt="Tacos Atarantados"
              width={80}
              height={80}
              style={{ width: '100%', height: 'auto', aspectRatio: '1.013' }}
            />
          </div>

          {/* Social links */}
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
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <Image
                src={s.icon}
                alt={s.platform}
                width={s.iconW}
                height={s.iconH}
                style={{ width: s.iconW, height: s.iconH, objectFit: 'contain' }}
              />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '13px',
                  color: '#0c7528',
                }}
              >
                {s.handle}
              </span>
            </Link>
          ))}
        </div>

        {/* MIDDLE ROW: SVG Line + Partner Logos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* SVG horizontal rule */}
          <svg width="100%" height="2" viewBox="0 0 1089 2" fill="none">
            <path d="M 0 0 L 1089 0" stroke="#0c7528" strokeWidth="2" fill="none" />
          </svg>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '43px', alignItems: 'center', padding: '0 41px', flexWrap: 'wrap' }}>
            {/* Mandala Group */}
            <Link href="https://mandalagroup.mx/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/mandala-group.png"
                alt="Mandala Group"
                width={230}
                height={41}
                style={{ width: '230px', height: '41px', objectFit: 'contain' }}
              />
            </Link>
            {/* Grupo Buenas Vibras */}
            <Link href="https://www.instagram.com/grupo_buenasvibras/?hl=es" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/grupo-buenas-vibras.png"
                alt="Grupo Buenas Vibras"
                width={85}
                height={81}
                style={{ width: '85px', height: '81px', objectFit: 'contain' }}
              />
            </Link>
          </div>
        </div>

        {/* BOTTOM ROW: Legal + Copyright */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          {/* Copyright */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '63px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: '#0c7528' }}>
              Copyright ® 2025 Mandala Group
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: '#0c7528' }}>
              Copyright ® 2025 Grupo Buenas Vibras
            </span>
          </div>

          {/* Legal links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
            {['POLÍTICAS DE PRIVACIDAD', 'POLÍTICA DE COOKIES', 'INFORMACIÓN LEGAL', 'CONTACTO'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '13px',
                  color: '#0c7528',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
