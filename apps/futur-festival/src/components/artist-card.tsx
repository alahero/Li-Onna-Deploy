import Image from 'next/image';
import { cn } from '@mg/shared-utils';

interface ArtistCardProps {
  name: string;
  genre: string;
  country: string;
  image?: string;
  headliner?: boolean;
  day?: string;
  performanceTime?: string;
  stage?: string;
  socialUrl?: string;
  className?: string;
}

const DAY_LABELS: Record<string, string> = {
  friday: 'VIE',
  saturday: 'SÁB',
  sunday: 'DOM',
};

export function ArtistCard({
  name,
  genre,
  country,
  image,
  headliner,
  day,
  performanceTime,
  stage,
  socialUrl,
  className,
}: ArtistCardProps) {
  const wrapperClassName = cn(
    'group relative overflow-hidden rounded-2xl border transition-all duration-500',
    headliner
      ? 'border-brand-purple/40 bg-brand-dark hover:border-brand-purple hover:shadow-neon-purple'
      : 'border-white/8 bg-white/3 hover:border-brand-cyan/30 hover:bg-brand-dark',
    className
  );

  const content = (
    <>
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-dark to-brand-black">
            <span className="font-display text-5xl font-black text-brand-purple/30">
              {name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />

        {/* Headliner badge */}
        {headliner && (
          <div className="absolute top-3 left-3 rounded-full bg-brand-purple px-3 py-1">
            <span className="font-display text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Headliner
            </span>
          </div>
        )}

        {/* Day badge */}
        {day && DAY_LABELS[day] && (
          <div className="absolute top-3 right-3 rounded-full border border-white/20 bg-brand-black/60 backdrop-blur-sm px-2.5 py-1">
            <span className="font-display text-[10px] font-bold tracking-widest text-white/70">
              {DAY_LABELS[day]}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            <span className="font-display text-[10px] uppercase tracking-widest text-white">Perfil</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3
          className={cn(
            'font-display font-black leading-tight mb-1 transition-colors duration-300',
            headliner
              ? 'text-xl text-white group-hover:text-brand-purple'
              : 'text-base text-white group-hover:text-brand-cyan'
          )}
        >
          {name}
        </h3>
        <p className="font-body text-xs text-white/50 mb-2">
          {genre} &nbsp;·&nbsp; {country}
        </p>
        {(performanceTime || stage) && (
          <div className="flex items-center gap-2 flex-wrap">
            {performanceTime && (
              <span className="inline-flex items-center gap-1 rounded-md bg-brand-purple/10 border border-brand-purple/20 px-2 py-0.5">
                <svg className="h-3 w-3 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-display text-[10px] font-semibold text-brand-purple">
                  {performanceTime}
                </span>
              </span>
            )}
            {stage && (
              <span className="font-display text-[10px] text-white/30 uppercase tracking-wider">
                {stage}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );

  if (socialUrl) {
    return (
      <a
        href={socialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClassName}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={wrapperClassName}>
      {content}
    </div>
  );
}
