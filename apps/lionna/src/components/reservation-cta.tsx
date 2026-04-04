interface ReservationCtaProps {
  title?: string;
  description?: string;
  bookingUrl?: string;
  phone?: string;
  whatsapp?: string;
}

export function ReservationCta({
  title = 'Reserva tu Mesa',
  description = 'Vive la experiencia LI-ONNA. Reserva con antelación para asegurar tu mesa en el corazón de Salamanca.',
  bookingUrl = '#',
  phone,
  whatsapp,
}: ReservationCtaProps) {
  return (
    <section id="reservar" className="relative py-28 px-6 md:px-12 overflow-hidden">
      {/* Rich dark background */}
      <div className="absolute inset-0 bg-brand-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-crimson/10 via-transparent to-brand-gold/5" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30" />

      {/* Decorative Japanese character */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        aria-hidden="true"
      >
        <span
          className="japanese-text text-brand-gold/[0.04] font-light leading-none"
          style={{ fontSize: 'clamp(10rem, 25vw, 30rem)' }}
        >
          予
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="section-subtitle mb-8">Reservaciones</p>

        <h2 className="section-title font-light mb-6">
          {title}
        </h2>

        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-12 h-px bg-brand-gold/40" />
          <span className="japanese-text text-brand-gold/50 text-sm">予約</span>
          <span className="w-12 h-px bg-brand-gold/40" />
        </div>

        <p className="text-brand-cream/60 font-body font-light text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
          {description}
        </p>

        {/* Primary CTA — CoverManager */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reservar Online
          </a>

          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              WhatsApp
            </a>
          )}
        </div>

        {/* Phone */}
        {phone && (
          <div className="flex items-center justify-center gap-3">
            <span className="text-brand-cream/30 text-xs uppercase tracking-widest font-body">
              O llámanos
            </span>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-brand-gold text-sm font-body tracking-widest hover:text-brand-gold-light transition-colors duration-300"
            >
              {phone}
            </a>
          </div>
        )}

        {/* Policy note */}
        <p className="mt-10 text-brand-cream/25 text-xs font-body tracking-wide">
          Las reservas se confirman por email o SMS &middot; Grupo Kampai / Tanaka Hospitality
        </p>
      </div>
    </section>
  );
}
