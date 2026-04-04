import Image from 'next/image';

interface Event {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string | null;
  djOrPerformer: string;
  ticketUrl: string;
  coverCharge: string;
}

interface EventsSectionProps {
  events: Event[];
}

function formatEventDate(dateStr: string): { day: string; month: string; year: string } {
  if (!dateStr) return { day: '--', month: '---', year: '----' };
  try {
    const d = new Date(dateStr + 'T00:00:00');
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleDateString('es-MX', { month: 'short' }).toUpperCase();
    const year = d.getFullYear().toString();
    return { day, month, year };
  } catch {
    return { day: '--', month: '---', year: '----' };
  }
}

export function EventsSection({ events }: EventsSectionProps) {
  const hasEvents = events.length > 0;

  return (
    <section
      id="eventos"
      className="py-24 lg:py-32 bg-brand-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Agenda</p>
          <div className="silver-line mb-6" />
          <h2
            className="section-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Próximos Eventos
          </h2>
          <p className="mt-4 text-brand-silver/50 max-w-lg mx-auto text-sm font-light">
            Veladas únicas con los mejores artistas y DJs. Vive la experiencia completa.
          </p>
        </div>

        {hasEvents ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const { day, month, year } = formatEventDate(event.date);
              return (
                <article
                  key={event.slug}
                  className="group relative bg-brand-dark-card border border-brand-silver/[0.06] hover:border-brand-silver/20 transition-all duration-400 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/30 to-brand-dark-card flex items-center justify-center">
                        <div className="text-brand-silver/[0.07] w-16 h-20">
                          <svg viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />

                    {/* Date badge */}
                    <div className="absolute top-3 right-3 bg-brand-black/80 backdrop-blur-sm border border-brand-silver/20 px-3 py-1.5 text-center min-w-[52px]">
                      <p className="text-brand-white text-xl font-light leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                        {day}
                      </p>
                      <p className="text-brand-silver/60 text-[10px] uppercase tracking-widest mt-0.5">
                        {month}
                      </p>
                      <p className="text-brand-silver/40 text-[9px] leading-none">
                        {year}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {event.djOrPerformer && (
                      <p className="text-brand-emerald text-[10px] uppercase tracking-[0.2em] mb-2">
                        {event.djOrPerformer}
                      </p>
                    )}
                    <h3
                      className="text-brand-white font-light text-lg leading-snug mb-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-brand-silver/50 text-xs leading-relaxed line-clamp-2 mb-4">
                        {event.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      {event.coverCharge && (
                        <span className="text-brand-silver/50 text-xs">
                          Cover: {event.coverCharge}
                        </span>
                      )}
                      {event.ticketUrl ? (
                        <a
                          href={event.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-emerald text-[11px] uppercase tracking-widest hover:text-brand-emerald-dark transition-colors"
                        >
                          Boletos &rarr;
                        </a>
                      ) : (
                        <a
                          href="#reservaciones"
                          className="text-brand-silver/40 text-[11px] uppercase tracking-widest hover:text-brand-silver transition-colors"
                        >
                          Reservar &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="relative border border-brand-silver/[0.07] p-16 text-center">
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-silver/20" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-silver/20" />
            <p className="text-brand-silver/20 uppercase tracking-widest text-sm mb-2">
              Próximos eventos
            </p>
            <p className="text-brand-silver/10 text-xs">
              Agrega eventos desde el CMS para que aparezcan aquí
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <a href="#reservaciones" className="btn-silver">
            Reservar para un Evento
          </a>
        </div>
      </div>
    </section>
  );
}
