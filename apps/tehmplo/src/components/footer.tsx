interface SiteSettings {
  social?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    twitter?: string;
    whatsapp?: string;
  };
}

interface LocationData {
  email?: string;
  phone?: string;
  address?: string;
}

interface FooterProps {
  siteSettings?: SiteSettings | null;
  location?: LocationData | null;
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer({ siteSettings, location }: FooterProps) {
  const email = location?.email || 'hello@tehmplo.mx';
  const address = location?.address || 'Carretera Tulum-Boca Paila Km 5.5, Tulum, Mexico';
  const social = siteSettings?.social;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-black border-t border-brand-forest-green/20">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h2 className="font-display text-3xl tracking-[0.25em] text-brand-cream uppercase mb-4">
              Tehmplo
            </h2>
            <div className="w-8 h-px bg-brand-gold mb-5" />
            <p className="font-body text-xs text-brand-cream-muted/50 tracking-wider leading-relaxed max-w-xs">
              Premium open-air jungle nightclub in the heart of Tulum, Mexico. Where ancient
              energy meets contemporary sound.
            </p>

            {/* Social icons */}
            {social && (
              <div className="flex items-center gap-4 mt-8">
                {social.instagram && (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cream-muted/40 hover:text-brand-gold transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                )}
                {social.tiktok && (
                  <a
                    href={social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cream-muted/40 hover:text-brand-gold transition-colors duration-300"
                    aria-label="TikTok"
                  >
                    <TikTokIcon />
                  </a>
                )}
                {social.facebook && (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cream-muted/40 hover:text-brand-gold transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <FacebookIcon />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold uppercase mb-6">
              Navigate
            </p>
            <nav className="flex flex-col gap-4">
              {[
                { label: 'Events', href: '#events' },
                { label: 'VIP Tables', href: '#viptables' },
                { label: 'About', href: '#about' },
                { label: 'Location', href: '#location' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-brand-cream-muted/50 tracking-wider hover:text-brand-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold uppercase mb-6">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${email}`}
                className="font-body text-sm text-brand-cream-muted/50 tracking-wider hover:text-brand-gold transition-colors duration-300"
              >
                {email}
              </a>
              {location?.phone && (
                <a
                  href={`tel:${location.phone.replace(/\s/g, '')}`}
                  className="font-body text-sm text-brand-cream-muted/50 tracking-wider hover:text-brand-gold transition-colors duration-300"
                >
                  {location.phone}
                </a>
              )}
              <p className="font-body text-xs text-brand-cream-muted/30 leading-relaxed">
                {address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-forest-green/15 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] text-brand-cream-muted/25 tracking-wider">
            &copy; {currentYear} Tehmplo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="font-body text-[11px] text-brand-cream-muted/25 tracking-wider hover:text-brand-cream-muted/50 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-body text-[11px] text-brand-cream-muted/25 tracking-wider hover:text-brand-cream-muted/50 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
