import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@mg/shared-utils';

interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string | null;
  djName: string;
  djGenre: string;
  ticketUrl: string;
  ticketPrice: string;
  featured: boolean;
  status: string;
}

interface EventsSectionProps {
  events: Event[];
}

function EventCard({ event }: { event: Event }) {
  const formattedDate = event.date
    ? formatDate(event.date, { weekday: 'long', month: 'long', day: 'numeric' })
    : 'Fecha por confirmar';

  const isPast = event.status === 'past';
  const isCancelled = event.status === 'cancelled';

  return (
    <article
      className={`group relative bg-brand-dark border transition-all duration-300 overflow-hidden flex flex-col ${
        event.featured
          ? 'border-brand-gold/50 hover:border-brand-gold'
          : 'border-white/10 hover:border-brand-gold/40'
      } ${isPast || isCancelled ? 'opacity-60' : ''}`}
    >
      {/* Featured badge */}
      {event.featured && !isPast && !isCancelled && (
        <div className="absolute top-3 left-3 z-10 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-bold px-3 py-1">
          Destacado
        </div>
      )}

      {/* Status badge */}
      {(isPast || isCancelled) && (
        <div
          className={`absolute top-3 right-3 z-10 text-xs uppercase tracking-widest font-bold px-3 py-1 ${
            isCancelled
              ? 'bg-red-900/80 text-red-300'
              : 'bg-black/60 text-white/50'
          }`}
        >
          {isCancelled ? 'Cancelado' : 'Pasado'}
        </div>
      )}

      {/* Image */}
      <div className="relative h-52 bg-zinc-900 overflow-hidden">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-brand-black">
            {/* Placeholder icon */}
            <svg
              className="w-16 h-16 text-brand-gold/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
        )}
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Date + time */}
        <div className="flex items-center gap-2 mb-3">
          <svg
            className="w-3.5 h-3.5 text-brand-gold flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-brand-gold text-xs uppercase tracking-widest">
            {formattedDate}
            {event.time && ` · ${event.time}`}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl uppercase tracking-wider text-brand-white mb-2 group-hover:text-brand-gold transition-colors duration-300"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {event.title}
        </h3>

        {/* DJ info */}
        {event.djName && (
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-brand-gold flex-shrink-0" />
            <div>
              <span className="text-brand-white/80 text-sm font-medium">
                {event.djName}
              </span>
              {event.djGenre && (
                <span className="text-brand-gray text-xs ml-2">
                  · {event.djGenre}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        {event.description && (
          <p className="text-brand-white/50 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {event.description}
          </p>
        )}

        {/* Footer: price + ticket link */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          {event.ticketPrice ? (
            <span className="text-brand-gold text-sm font-medium">
              {event.ticketPrice}
            </span>
          ) : (
            <span className="text-brand-gray text-xs">Entrada: Consultar</span>
          )}

          {event.ticketUrl && !isPast && !isCancelled ? (
            <Link
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-brand-gold border border-brand-gold/50 px-4 py-2 hover:bg-brand-gold hover:text-brand-black transition-all duration-200"
            >
              Boletos
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          ) : (
            <span className="text-brand-gray text-xs uppercase tracking-widest">
              {isPast ? 'Evento pasado' : isCancelled ? '' : 'Próximamente'}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function EventsSection({ events }: EventsSectionProps) {
  const upcomingEvents = events
    .filter((e) => e.status !== 'past' && e.status !== 'cancelled')
    .sort((a, b) => {
      if (b.featured !== a.featured) return b.featured ? 1 : -1;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  const pastEvents = events
    .filter((e) => e.status === 'past')
    .slice(0, 3);

  const hasEvents = upcomingEvents.length > 0 || pastEvents.length > 0;

  return (
    <section id="eventos" className="py-24 bg-brand-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-4">
            Agenda
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest text-brand-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Próximos Eventos
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-8 h-px bg-brand-gold" />
            <span className="w-2 h-2 bg-brand-gold rotate-45 inline-block" />
            <span className="w-8 h-px bg-brand-gold" />
          </div>
        </div>

        {/* Events grid */}
        {hasEvents ? (
          <>
            {upcomingEvents.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            )}

            {/* Past events */}
            {pastEvents.length > 0 && (
              <div className="mt-12">
                <h3 className="text-brand-gray text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
                  <span className="w-6 h-px bg-brand-gray/40" />
                  Eventos Pasados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.slug} event={event} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="text-center py-20 border border-white/10">
            <svg
              className="w-16 h-16 text-brand-gold/20 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
            <p className="text-brand-gray uppercase tracking-widest text-sm">
              Próximos eventos en camino
            </p>
            <p className="text-brand-white/30 text-xs mt-2">
              Síguenos en redes para no perderte nada
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
