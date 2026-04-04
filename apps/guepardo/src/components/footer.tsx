import React from 'react';
import Link from 'next/link';
import { SocialIcons } from '@mg/ui-primitives';

interface SocialLink {
  platform: string;
  url: string;
}

interface FooterProps {
  siteName: string;
  tagline: string;
  socialLinks: SocialLink[];
  phone?: string;
  email?: string;
  address?: string;
}

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'VIP', href: '#vip' },
  { label: 'Ubicación', href: '#ubicacion' },
];

const currentYear = new Date().getFullYear();

export function Footer({
  siteName,
  tagline,
  socialLinks,
  phone,
  email,
  address,
}: FooterProps) {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20">
      {/* Main footer content */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-block mb-4 group">
              <span
                className="text-3xl uppercase tracking-[0.2em] text-brand-white group-hover:text-brand-gold transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {siteName}
              </span>
            </Link>
            <p className="text-brand-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              {tagline}
            </p>

            {/* Social links */}
            {socialLinks.length > 0 && (
              <div>
                <p className="text-brand-gold text-xs uppercase tracking-widest mb-3">
                  Síguenos
                </p>
                <SocialIcons
                  links={socialLinks}
                  className="gap-4"
                  iconClassName="text-brand-white/50 hover:text-brand-gold transition-colors duration-200"
                />
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-white/50 text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-brand-white/50 text-sm hover:text-brand-gold transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {phone}
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-brand-white/50 text-sm hover:text-brand-gold transition-colors duration-200 break-all"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {email}
                </a>
              )}
              {address && (
                <p className="flex items-start gap-2 text-brand-white/50 text-sm">
                  <svg className="w-3.5 h-3.5 flex-shrink-0 text-brand-gold mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {address}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-white/30 text-xs">
            &copy; {currentYear} {siteName}. Todos los derechos reservados.
          </p>
          <p className="text-brand-white/20 text-xs">
            guepardo.com.mx
          </p>
        </div>
      </div>
    </footer>
  );
}
