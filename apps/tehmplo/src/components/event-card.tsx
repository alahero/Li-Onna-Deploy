import Image from 'next/image';

export interface EventEntry {
  slug: string;
  entry: {
    title: string;
    date?: string | null;
    time?: string;
    description?: string;
    image?: string | null;
    djName?: string;
    djOrigin?: string;
    genre?: string;
    ticketUrl?: string | null;
    ticketPrice?: string;
    featured?: boolean;
    soldOut?: boolean;
  };
}

interface EventCardProps {
  event: EventEntry;
}

function formatEventDate(dateStr?: string | null): { day: string; month: string; year: string } {
  if (!dateStr) return { day: '--', month: '---', year: '----' };
  const date = new Date(dateStr + 'T00:00:00');
  return {
    day: date.toLocaleDateString('en-US', { day: '2-digit' }),
    month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    year: date.toLocaleDateString('en-US', { year: 'numeric' }),
  };
}

export default function EventCard({ event }: EventCardProps) {
  const { entry } = event;
  const { day, month, year } = formatEventDate(entry.date);
  const isPast = entry.date ? new Date(entry.date) < new Date() : false;

  return (
    <article
      className={`jungle-card group relative overflow-hidden flex flex-col ${
        entry.featured ? 'ring-1 ring-brand-gold/30' : ''
      } ${isPast ? 'opacity-60' : ''}`}
    >
      {/* Event image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-forest-deep">
        {entry.image ? (
          <Image
            src={entry.image}
            alt={entry.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-forest-deep to-brand-black">
            <span className="font-display text-5xl text-brand-gold/20 tracking-widest">
              {month}
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {entry.featured && !isPast && (
            <span className="inline-flex items-center px-2.5 py-1 bg-brand-gold text-brand-black font-body text-[10px] font-semibold tracking-widest uppercase">
              Featured
            </span>
          )}
          {entry.soldOut && (
            <span className="inline-flex items-center px-2.5 py-1 bg-brand-black/80 border border-brand-cream-muted/30 text-brand-cream-muted font-body text-[10px] tracking-widest uppercase">
              Sold Out
            </span>
          )}
          {isPast && (
            <span className="inline-flex items-center px-2.5 py-1 bg-brand-black/80 border border-brand-forest-green/30 text-brand-forest-light font-body text-[10px] tracking-widest uppercase">
              Past Event
            </span>
          )}
        </div>

        {/* Date badge */}
        <div className="absolute top-4 right-4 text-center bg-brand-black/80 backdrop-blur-sm border border-brand-gold/20 px-3 py-2">
          <span className="block font-display text-xl text-brand-gold leading-none">{day}</span>
          <span className="block font-body text-[9px] text-brand-cream-muted tracking-widest uppercase mt-0.5">{month}</span>
          <span className="block font-body text-[9px] text-brand-cream-muted/60 tracking-widest">{year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* DJ / Artist info */}
        {entry.djName && (
          <div className="mb-3">
            <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold uppercase mb-1">
              {entry.genre || 'Live Performance'}
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="font-display text-xl text-brand-cream tracking-wide">{entry.djName}</h3>
              {entry.djOrigin && (
                <span className="font-body text-xs text-brand-cream-muted/60">{entry.djOrigin}</span>
              )}
            </div>
          </div>
        )}

        <h2
          className={`font-body text-sm font-medium text-brand-cream-muted tracking-wider mb-2 ${entry.djName ? '' : 'font-display text-xl text-brand-cream tracking-wide'}`}
        >
          {entry.title}
        </h2>

        {entry.time && (
          <p className="font-body text-xs text-brand-forest-light tracking-widest mb-3">
            Doors {entry.time}
          </p>
        )}

        {entry.description && (
          <p className="font-body text-sm text-brand-cream-muted/70 leading-relaxed mb-4 line-clamp-2">
            {entry.description}
          </p>
        )}

        {/* Footer: price + ticket link */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-forest-green/20">
          {entry.ticketPrice && (
            <span className="font-body text-sm text-brand-amber font-medium">
              {entry.ticketPrice}
            </span>
          )}

          {entry.ticketUrl && !entry.soldOut && !isPast ? (
            <a
              href={entry.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto btn-gold text-[10px] py-2 px-5"
            >
              Get Tickets
            </a>
          ) : entry.soldOut ? (
            <span className="ml-auto font-body text-xs text-brand-cream-muted/50 tracking-widest uppercase">
              Sold Out
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
