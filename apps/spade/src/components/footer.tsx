interface SocialLink {
  platform: string;
  url: string;
}

interface FooterProps {
  siteName?: string;
  tagline?: string;
  socialLinks?: SocialLink[];
  phone?: string;
  email?: string;
}

function SpadeLogo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C12 2 3 8.5 3 14a4.5 4.5 0 0 0 7.5 3.35C10 19 9 21 7 22h10c-2-1-3-3-3.5-4.65A4.5 4.5 0 0 0 21 14C21 8.5 12 2 12 2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.18 8.18 0 004.78 1.53V6.84a4.85 4.85 0 01-1.01-.15z" />
    </svg>
  );
}

function TwitterXIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon />,
  facebook: <FacebookIcon />,
  tiktok: <TikTokIcon />,
  twitter: <TwitterXIcon />,
};

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cócteles', href: '#cocteleria' },
  { label: 'Menú', href: '#menu' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reservar', href: '#reservaciones' },
];

export function Footer({
  siteName = 'SPADE',
  tagline = 'Premium Cocktail Bar',
  socialLinks = [],
  phone = '',
  email = '',
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-silver/[0.08]">
      {/* Top decorative rule */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-silver/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-brand-silver">
                <SpadeLogo />
              </div>
              <span
                className="text-lg tracking-[0.3em] text-brand-white font-light uppercase"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {siteName}
              </span>
            </div>
            <p className="text-brand-silver/40 text-xs uppercase tracking-widest mb-5">
              {tagline}
            </p>
            <p className="text-brand-silver/30 text-xs leading-relaxed font-light">
              Un espacio donde el arte del cóctel se encuentra con una
              noche que no olvidarás.
            </p>

            {/* Social links */}
            {socialLinks.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-silver/30 hover:text-brand-silver transition-colors duration-200"
                    aria-label={s.platform}
                  >
                    {SOCIAL_ICON_MAP[s.platform] ?? null}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-brand-silver/40 mb-5">
              Navegación
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-silver/40 text-sm hover:text-brand-silver transition-colors duration-200 font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-brand-silver/40 mb-5">
              Contacto
            </p>
            <div className="space-y-3 text-brand-silver/40 text-sm font-light">
              <p>México</p>
              <p>spade.mx</p>
              {phone && (
                <a href={`tel:${phone}`} className="block hover:text-brand-silver transition-colors">
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="block hover:text-brand-silver transition-colors">
                  {email}
                </a>
              )}
              <div className="pt-2">
                <a
                  href="#reservaciones"
                  className="text-brand-emerald/70 text-[11px] uppercase tracking-widest hover:text-brand-emerald transition-colors"
                >
                  Reservar Mesa &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-brand-silver/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-silver/20 text-[11px]">
            &copy; {year} {siteName}. Todos los derechos reservados.
          </p>
          <p className="text-brand-silver/15 text-[11px]">
            spade.mx
          </p>
        </div>
      </div>
    </footer>
  );
}
