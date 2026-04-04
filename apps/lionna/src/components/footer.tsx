import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#menu', label: 'Menú' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/giftcards', label: 'Gift Cards' },
  { href: '/contact', label: 'Contacto' },
];

const legalLinks = [
  { href: '/legal/aviso-legal', label: 'Aviso Legal' },
  { href: '/legal/privacidad', label: 'Política de Privacidad' },
  { href: '/legal/cookies', label: 'Cookies' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-black border-t border-brand-gold/10 overflow-hidden">
      {/* Decorative top gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none" aria-hidden="true">
        <span
          className="japanese-text text-brand-gold/[0.025] font-light leading-none"
          style={{ fontSize: 'clamp(12rem, 30vw, 40rem)' }}
        >
          リ
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-display text-brand-cream text-2xl tracking-widest2">LI-ONNA</p>
              <p className="japanese-text text-brand-gold/50 text-xs tracking-widest mt-0.5">リオンナ</p>
            </div>

            <div className="gold-divider-left" />

            <p className="text-brand-cream/40 text-xs font-body leading-relaxed max-w-xs">
              Cocina japonesa con alma latina en el corazón de Barrio Salamanca, Madrid.
            </p>

            <address className="not-italic text-brand-cream/30 text-xs font-body leading-relaxed mt-2">
              C. de Recoletos, 1<br />
              Barrio Salamanca<br />
              28001 Madrid
            </address>
          </div>

          {/* Navigation column */}
          <div>
            <p className="section-subtitle mb-6 text-left">Navegar</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-brand-cream/40 hover:text-brand-cream text-xs uppercase tracking-widest font-body transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Grupo column */}
          <div>
            <p className="section-subtitle mb-6 text-left">Grupo</p>

            <div className="flex flex-col gap-3 mb-8">
              <a
                href="https://kampai.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/40 hover:text-brand-cream text-xs uppercase tracking-widest font-body transition-colors duration-300 w-fit"
              >
                Grupo Kampai
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/40 hover:text-brand-cream text-xs uppercase tracking-widest font-body transition-colors duration-300 w-fit"
              >
                Mandala Group
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/40 hover:text-brand-cream text-xs uppercase tracking-widest font-body transition-colors duration-300 w-fit"
              >
                Tanaka Hospitality
              </a>
            </div>

            {/* Social / reservations */}
            <div>
              <p className="section-subtitle mb-4 text-left">Reservas</p>
              <Link
                href="/#reservar"
                className="btn-gold text-[9px] px-5 py-2.5"
              >
                Reservar Mesa
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-gold/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-cream/20 text-xs font-body tracking-wide">
            &copy; {currentYear} LI-ONNA &mdash; Tanaka Hospitality S.L. Todos los derechos reservados.
          </p>

          <nav className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-cream/20 hover:text-brand-cream/50 text-[10px] uppercase tracking-widest font-body transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
