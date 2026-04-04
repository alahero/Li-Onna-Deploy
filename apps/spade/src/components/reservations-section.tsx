interface ReservationsSectionProps {
  title: string;
  description: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  bookingUrl: string;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

export function ReservationsSection({
  title,
  description,
  whatsappNumber,
  phone,
  email,
  bookingUrl,
}: ReservationsSectionProps) {
  const waLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hola SPADE, me gustaría hacer una reservación.')}`
    : 'https://wa.me/521234567890';

  return (
    <section
      id="reservaciones"
      className="py-24 lg:py-36 bg-brand-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/15 via-brand-black to-brand-black pointer-events-none" />

      {/* Large decorative spade */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[700px] text-brand-silver/[0.015] pointer-events-none select-none">
        <svg viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <p className="section-subtitle mb-4">Reservaciones</p>
        <div className="silver-line mb-8" />

        <h2
          className="section-title mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>

        <p className="text-brand-silver/60 font-light max-w-lg mx-auto leading-relaxed mb-12">
          {description}
        </p>

        {/* Primary CTA — WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary gap-2.5 text-xs min-w-[220px]"
          >
            <WhatsAppIcon />
            Reservar por WhatsApp
          </a>
          {bookingUrl && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-silver min-w-[220px]"
            >
              Reservar en Línea
            </a>
          )}
        </div>

        {/* Contact info */}
        {(phone || email) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-brand-silver/40">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-sm hover:text-brand-silver transition-colors duration-200"
              >
                <PhoneIcon />
                {phone}
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm hover:text-brand-silver transition-colors duration-200"
              >
                <MailIcon />
                {email}
              </a>
            )}
          </div>
        )}

        {/* Decorative framed box */}
        <div className="mt-16 mx-auto max-w-xl border border-brand-silver/10 p-8 relative">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-brand-silver/20" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-brand-silver/20" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-brand-silver/20" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-brand-silver/20" />

          <p className="text-brand-silver/25 text-[10px] uppercase tracking-[0.3em] mb-4">
            Información de Reservaciones
          </p>
          <div className="space-y-2 text-sm text-brand-silver/40 font-light">
            <p>Reservaciones disponibles de Jueves a Domingo</p>
            <p>Grupos de 2 a 20 personas</p>
            <p>Menú especial para grupos y eventos privados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
