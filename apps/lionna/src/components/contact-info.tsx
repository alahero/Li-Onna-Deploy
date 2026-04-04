interface ContactInfoProps {
  address?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  hoursHtml?: string;
  mapUrl?: string;
}

export function ContactInfo({
  address = 'C. de Recoletos, 1, Barrio Salamanca, 28001 Madrid',
  phone,
  whatsapp,
  email,
  hoursHtml,
  mapUrl,
}: ContactInfoProps) {
  const defaultHours = `
    <p><strong>Lunes a Jueves</strong> 13:30 – 16:00 / 20:30 – 23:30</p>
    <p><strong>Viernes y Sábado</strong> 13:30 – 16:30 / 20:30 – 00:00</p>
    <p><strong>Domingo</strong> 13:30 – 16:30 / Cerrado en cenas</p>
  `;

  return (
    <section className="py-28 px-6 md:px-12 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-subtle opacity-20" />

      {/* Decorative character */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 select-none pointer-events-none" aria-hidden="true">
        <span
          className="japanese-text text-brand-gold/[0.04] font-light leading-none"
          style={{ fontSize: 'clamp(8rem, 20vw, 24rem)' }}
        >
          所
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-6">Cómo Encontrarnos</p>
          <h1 className="section-title font-light mb-6">Contacto</h1>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-brand-gold/40" />
            <span className="japanese-text text-brand-gold/60 text-sm tracking-widest">場所</span>
            <span className="w-16 h-px bg-brand-gold/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-brand-gold/5">
          {/* Left column — contact details */}
          <div className="bg-brand-black p-10 md:p-14 space-y-10">
            {/* Address */}
            <div>
              <p className="section-subtitle mb-4">Dirección</p>
              <address className="not-italic font-display text-xl md:text-2xl text-brand-cream/80 tracking-wide leading-relaxed">
                {address}
              </address>
              {mapUrl && (
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-body hover:text-brand-gold-light transition-colors duration-300"
                >
                  <span>Cómo llegar</span>
                  <span aria-hidden="true">&#8599;</span>
                </a>
              )}
            </div>

            <div className="w-full h-px bg-brand-gold/10" />

            {/* Hours */}
            <div>
              <p className="section-subtitle mb-4">Horarios</p>
              <div
                className="font-body text-brand-cream/60 text-sm leading-loose [&_strong]:text-brand-cream [&_strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: hoursHtml ?? defaultHours }}
              />
            </div>

            <div className="w-full h-px bg-brand-gold/10" />

            {/* Contact links */}
            <div className="space-y-5">
              <p className="section-subtitle mb-2">Contacto</p>

              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-8 text-brand-gold/40 text-xs uppercase tracking-widest font-body group-hover:text-brand-gold transition-colors">Tel.</span>
                  <span className="font-body text-brand-cream/70 group-hover:text-brand-cream transition-colors duration-300 text-sm tracking-wide">
                    {phone}
                  </span>
                </a>
              )}

              {whatsapp && (
                <a
                  href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="w-8 text-brand-gold/40 text-xs uppercase tracking-widest font-body group-hover:text-brand-gold transition-colors">WA</span>
                  <span className="font-body text-brand-cream/70 group-hover:text-brand-cream transition-colors duration-300 text-sm tracking-wide">
                    {whatsapp}
                  </span>
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-8 text-brand-gold/40 text-xs uppercase tracking-widest font-body group-hover:text-brand-gold transition-colors">Email</span>
                  <span className="font-body text-brand-cream/70 group-hover:text-brand-cream transition-colors duration-300 text-sm tracking-wide">
                    {email}
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Right column — map */}
          <div className="bg-brand-charcoal/30 relative min-h-[400px] lg:min-h-0">
            {mapUrl ? (
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px', filter: 'grayscale(80%) invert(5%) contrast(90%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de LI-ONNA en Google Maps"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10">
                <span className="japanese-text text-brand-gold/10 text-8xl select-none" aria-hidden="true">地</span>
                <p className="text-brand-cream/30 text-xs uppercase tracking-widest font-body text-center">
                  C. de Recoletos, 1<br />Barrio Salamanca, Madrid
                </p>
              </div>
            )}

            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-gold/20 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-brand-gold/20 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-brand-gold/20 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-gold/20 pointer-events-none" />
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="text-center mt-16">
          <a href="/#reservar" className="btn-gold">
            Hacer una Reserva
          </a>
        </div>
      </div>
    </section>
  );
}
