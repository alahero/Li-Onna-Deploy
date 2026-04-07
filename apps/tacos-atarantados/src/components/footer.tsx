import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_SOCIAL_LINKS = [
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

interface FooterProps {
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  tiktokUrl?: string | null;
  twitterUrl?: string | null;
}

export function Footer({ facebookUrl, instagramUrl, tiktokUrl, twitterUrl }: FooterProps) {
  const socialLinks = DEFAULT_SOCIAL_LINKS.map((link) => {
    switch (link.platform) {
      case 'Facebook':
        return { ...link, url: facebookUrl || link.url };
      case 'Instagram':
        return { ...link, url: instagramUrl || link.url };
      case 'TikTok':
        return { ...link, url: tiktokUrl || link.url };
      case 'X':
        return { ...link, url: twitterUrl || link.url };
      default:
        return link;
    }
  });

  return (
    <footer className="w-full bg-white px-6 py-6 min-h-[337px] flex flex-col overflow-hidden">
      <div className="max-w-[1152px] mx-auto w-full flex flex-col gap-0">

        {/* TOP ROW: Logo mascot + Social links */}
        <div className="flex flex-row items-center h-[72px] overflow-hidden gap-0">
          {/* Footer mascot logo */}
          <div className="shrink-0 pr-[17px]">
            <Image
              src="/images/footer-mascot.png"
              alt="Tacos Atarantados"
              width={72}
              height={71}
              className="w-[72px] h-[71px] object-contain"
            />
          </div>

          {/* Social links */}
          <div className="footer-socials flex-1 flex flex-row items-center justify-around">
            {socialLinks.map((s) => (
              <Link
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 no-underline"
              >
                <Image
                  src={s.icon}
                  alt={s.platform}
                  width={s.iconW}
                  height={s.iconH}
                  className="object-cover"
                  style={{ width: s.iconW, height: s.iconH }}
                />
                <span className="font-['Inter'] font-bold text-[16px] leading-[19.2px] text-[#0c7528]">
                  {s.handle}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[72px] flex items-center overflow-hidden">
          <svg width="100%" height="2" viewBox="0 0 1152 2" preserveAspectRatio="none" fill="none">
            <line x1="0" y1="1" x2="1152" y2="1" stroke="#0c7528" strokeWidth="1" />
          </svg>
        </div>

        {/* Legal links + Partner logos */}
        <div className="footer-center-row h-[72px] flex flex-row items-center justify-between overflow-hidden gap-6">
          {/* Legal links */}
          <div className="flex flex-col gap-0">
            {[
              { label: 'POL\u00CDTICAS DE PRIVACIDAD', href: '/politicas-de-privacidad' },
              { label: 'POL\u00CDTICA DE COOKIES', href: '/politica-de-cookies' },
              { label: 'INFORMACI\u00D3N LEGAL', href: '/informacion-legal' },
              { label: 'CONTACTO', href: '/contacto' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-['Inter'] font-bold text-[13px] leading-[15.6px] text-[#0c7528] no-underline hover:underline"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Partner logos */}
          <div className="flex flex-row gap-[43px] items-center">
            <Link href="https://mandalagroup.mx/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/mandala-group.png"
                alt="Mandala Group"
                width={230}
                height={41}
                className="w-[230px] h-[41px] object-cover"
              />
            </Link>
            <Link href="https://www.instagram.com/grupo_buenasvibras/?hl=es" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/grupo-buenas-vibras.png"
                alt="Grupo Buenas Vibras"
                width={85}
                height={81}
                className="w-[85px] h-[81px] object-cover"
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="h-[72px] flex flex-row items-center justify-between overflow-hidden">
          <span className="font-['Inter'] font-bold text-[13px] leading-[15.6px] text-[#0c7528]">
            Copyright &reg; 2025 Mandala Group
          </span>
          <span className="font-['Inter'] font-bold text-[13px] leading-[15.6px] text-[#0c7528]">
            Copyright &reg; 2025 Grupo Buenas Vibras
          </span>
        </div>

      </div>
    </footer>
  );
}
