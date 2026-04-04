import React from 'react';
import { SocialIcons } from '@mg/ui-primitives';

interface SponsorTier {
  tierName: string;
  logos: string[];
}

interface FooterProps {
  siteName?: string;
  tagline?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    twitter?: string;
    whatsapp?: string;
  };
  sponsors?: {
    title?: string;
    tiers?: SponsorTier[];
  };
  ticketUrl?: string;
}

const NAV_LINKS = [
  { label: 'Lineup', href: '#lineup' },
  { label: 'Boletos', href: '#tickets' },
  { label: 'Horarios', href: '#schedule' },
  { label: 'Venue', href: '#venue' },
  { label: 'Galería', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

export function Footer({ siteName, tagline, social, sponsors, ticketUrl }: FooterProps) {
  const socialLinks = social
    ? Object.entries(social)
        .filter(([, url]) => url)
        .map(([platform, url]) => ({ platform, url: url! }))
    : [];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/8 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />

      {/* Sponsors */}
      {sponsors?.tiers && sponsors.tiers.length > 0 && (
        <div className="border-b border-white/8 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-6 text-center font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              {sponsors.title ?? 'Patrocinadores'}
            </p>
            <div className="space-y-6">
              {sponsors.tiers.map((tier, i) => (
                <div key={i}>
                  <p className="mb-3 text-center font-display text-[9px] uppercase tracking-[0.25em] text-white/20">
                    {tier.tierName}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    {tier.logos.map((logo, j) =>
                      logo ? (
                        <div
                          key={j}
                          className="h-8 w-24 relative grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-300"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={logo} alt={`Sponsor ${j + 1}`} className="h-full w-full object-contain" />
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-start">
          {/* Brand */}
          <div>
            <div className="font-display text-3xl font-black tracking-[-0.02em] text-white mb-3">
              FUTUR<span className="text-brand-purple">.</span>
            </div>
            {tagline && (
              <p className="font-body text-sm text-white/40 leading-relaxed mb-4">{tagline}</p>
            )}
            {socialLinks.length > 0 && (
              <SocialIcons
                links={socialLinks}
                iconClassName="text-white/40 hover:text-brand-purple transition-colors"
              />
            )}
          </div>

          {/* Nav */}
          <div>
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-brand-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 mb-4">
              Únete
            </p>
            <p className="font-body text-sm text-white/50 mb-5">
              No te pierdas la experiencia más futurista del año.
            </p>
            {ticketUrl && (
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:shadow-neon-purple hover:scale-105"
              >
                Comprar Boletos
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/25">
            &copy; {currentYear} {siteName ?? 'FUTUR Festival'}. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-white/20">
            futurfestival.mx &nbsp;·&nbsp; Ciudad de México
          </p>
        </div>
      </div>
    </footer>
  );
}
