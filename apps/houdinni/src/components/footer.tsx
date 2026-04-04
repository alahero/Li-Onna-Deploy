import React from 'react';
import Link from 'next/link';

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

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, React.FC> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
};

const NAV_LINKS = [
  { label: 'El Concepto', href: '#concepto' },
  { label: 'Shows', href: '#shows' },
  { label: 'Menú', href: '#menu' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reservaciones', href: '#reservaciones' },
];

export function Footer({
  siteName = 'Houdinni',
  tagline = 'Donde la magia ocurre',
  socialLinks = [],
  phone,
  email,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-brand-gold/10"
      style={{
        background: 'linear-gradient(180deg, #0B0B0B 0%, #050510 100%)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), rgba(128,0,32,0.3), rgba(212,175,55,0.5), transparent)',
        }}
      />

      <div className="container-wide pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-brand-gold" aria-hidden="true">
                <path d="M15 4L20 9L9 20L4 15L15 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                className="text-xl text-brand-cream/90 tracking-[0.25em] uppercase"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                {siteName}
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-brand-cream/35 text-sm italic leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {tagline}
            </p>

            {/* Gold ornament */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-brand-gold/40" />
              <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold/50" />
              <div className="w-8 h-px bg-brand-gold/40" />
            </div>

            {/* Social links */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {socialLinks.map(({ platform, url }) => {
                  const Icon = SOCIAL_ICONS[platform.toLowerCase()];
                  if (!Icon || !url) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 border border-white/12 flex items-center justify-center text-brand-cream/40 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-300"
                      aria-label={platform}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Navigation column */}
          <div>
            <h3
              className="text-xs uppercase tracking-[0.2em] text-brand-gold/60 mb-5"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Navegar
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-cream/40 hover:text-brand-cream/80 transition-colors duration-300"
                    style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="text-xs uppercase tracking-[0.2em] text-brand-gold/60 mb-5"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Contacto
            </h3>
            <div className="flex flex-col gap-3">
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="text-sm text-brand-cream/40 hover:text-brand-gold transition-colors duration-300"
                  style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
                >
                  {phone}
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-brand-cream/40 hover:text-brand-gold transition-colors duration-300"
                  style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
                >
                  {email}
                </a>
              )}
              <Link
                href="#reservaciones"
                className="btn-outline py-2.5 px-5 text-xs inline-flex mt-2 max-w-fit"
              >
                Reservar
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/6"
        >
          <p
            className="text-xs text-brand-cream/20"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            &copy; {currentYear} {siteName}. Todos los derechos reservados.
          </p>
          <p
            className="text-xs text-brand-cream/15 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            La magia no se explica — se experimenta.
          </p>
        </div>
      </div>
    </footer>
  );
}
