import Image from 'next/image';
import Link from 'next/link';

export interface EventItem {
  slug: string;
  title: string;
  date?: string;
  description?: string;
  imageSrc?: string;
  recurring?: boolean;
  ticketUrl?: string;
}

interface EventsListProps {
  events?: EventItem[];
  showHeading?: boolean;
}

const PLACEHOLDER_EVENTS: EventItem[] = [
  {
    slug: 'noches-de-jazz-latino',
    title: 'Noches de Jazz Latino',
    date: '2026-04-12',
    description: 'Cada sábado, jazz en vivo con influencias latinas y japonesas. La banda residente de LI-ONNA toma el escenario.',
    recurring: true,
  },
  {
    slug: 'menu-omakase-primavera',
    title: 'Menú Omakase de Primavera',
    date: '2026-04-20',
    description: 'Experiencia omakase de 12 tiempos con productos de temporada. El chef propone, tú disfrutas. Plazas muy limitadas.',
    recurring: false,
  },
  {
    slug: 'maridaje-sake-ribera',
    title: 'Maridaje Sake & Ribera del Duero',
    date: '2026-05-03',
    description: 'Una sesión única donde el sake premium japonés dialoga con los grandes vinos de Ribera del Duero. Conducido por nuestros sumilleres.',
    recurring: false,
  },
];

function formatDate(dateStr?: string): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export function EventsList({ events, showHeading = true }: EventsListProps) {
  const displayEvents = events && events.length > 0 ? events : PLACEHOLDER_EVENTS;

  return (
    <section className="relative py-28 px-6 md:px-12 bg-brand-black">
      <div className="absolute inset-0 bg-grid-subtle opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {showHeading && (
          <div className="text-center mb-16">
            <p className="section-subtitle mb-6">Agenda</p>
            <h2 className="section-title font-light mb-6">Próximos Eventos</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-16 h-px bg-brand-gold/40" />
              <span className="japanese-text text-brand-gold/60 text-sm tracking-widest">予定</span>
              <span className="w-16 h-px bg-brand-gold/40" />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-0">
          {displayEvents.map((event, index) => (
            <article
              key={event.slug}
              className="group relative flex flex-col md:flex-row gap-0 border-b border-brand-gold/10 hover:border-brand-gold/20 transition-colors duration-500"
            >
              {/* Number / index */}
              <div className="hidden md:flex w-20 flex-shrink-0 items-start pt-8 justify-center">
                <span className="font-display text-4xl text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-500 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Image */}
              <div className="relative w-full md:w-48 h-36 md:h-auto flex-shrink-0 overflow-hidden bg-brand-charcoal">
                {event.imageSrc ? (
                  <Image
                    src={event.imageSrc}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="japanese-text text-brand-gold/10 text-5xl select-none" aria-hidden="true">
                      祭
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 py-8 px-6 md:px-10">
                {/* Date & recurring badge */}
                <div className="flex items-center gap-4 mb-3">
                  {event.date && (
                    <time
                      dateTime={event.date}
                      className="text-brand-gold text-xs uppercase tracking-widest font-body capitalize"
                    >
                      {formatDate(event.date)}
                    </time>
                  )}
                  {event.recurring && (
                    <span className="text-[9px] uppercase tracking-widest text-brand-crimson font-body border border-brand-crimson/40 px-2 py-0.5">
                      Recurrente
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-brand-cream tracking-wide mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {event.title}
                </h3>

                {event.description && (
                  <p className="text-brand-cream/50 text-sm font-body font-light leading-relaxed max-w-lg">
                    {event.description}
                  </p>
                )}

                {/* Ticket link */}
                {event.ticketUrl && (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-body hover:text-brand-gold-light transition-colors duration-300"
                  >
                    <span>Conseguir Entradas</span>
                    <span aria-hidden="true">&#8599;</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16">
          <Link href="/#reservar" className="btn-primary">
            Reservar para un Evento
          </Link>
        </div>
      </div>
    </section>
  );
}
