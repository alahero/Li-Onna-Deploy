import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ShowCardProps {
  slug: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string | null;
  performer: string;
  ticketUrl: string;
  price: string;
  featured: boolean;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export function ShowCard({ title, date, time, description, image, performer, ticketUrl, price, featured }: ShowCardProps) {
  return (
    <article
      className={`group relative overflow-hidden transition-all duration-700 ${
        featured
          ? 'border border-brand-gold/40 hover:border-brand-gold/80 hover:shadow-gold-lg'
          : 'border border-white/8 hover:border-brand-gold/30 hover:shadow-gold'
      }`}
      style={{ background: 'linear-gradient(135deg, #0F0920 0%, #111111 100%)' }}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-semibold"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
              <polygon points="4,0 5,3 8,3 5.5,5 6.5,8 4,6 1.5,8 2.5,5 0,3 3,3" />
            </svg>
            Destacado
          </span>
        </div>
      )}

      {/* Image area */}
      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={80}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1A0F40 0%, #2D1B69 100%)',
            }}
          >
            {/* Placeholder magic wand SVG */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-30" aria-hidden="true">
              <path d="M8 40L28 20M28 20L34 14M28 20L22 14M28 20L34 26" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <circle cx="36" cy="12" r="4" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
              <circle cx="12" cy="38" r="2" fill="#D4AF37" opacity="0.5" />
              <circle cx="38" cy="36" r="1.5" fill="#D4AF37" opacity="0.4" />
              <circle cx="18" cy="10" r="1.5" fill="#D4AF37" opacity="0.4" />
            </svg>
          </div>
        )}
        {/* Image overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 40%, rgba(15,9,32,0.9) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date + time row */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs uppercase tracking-widest text-brand-gold/70"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {formatDate(date)}
          </span>
          {time && (
            <>
              <span className="w-1 h-1 rounded-full bg-brand-gold/40" aria-hidden="true" />
              <span
                className="text-xs text-brand-cream/50"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {time}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl text-brand-cream mb-2 leading-tight group-hover:text-brand-gold transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          {title}
        </h3>

        {/* Performer */}
        {performer && (
          <p
            className="text-brand-gold/60 text-sm mb-3 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            con {performer}
          </p>
        )}

        {/* Description */}
        <p
          className="text-brand-cream/50 text-sm leading-relaxed mb-5 line-clamp-3"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
        >
          {description}
        </p>

        {/* Footer: price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/8">
          {price && (
            <span
              className="text-brand-gold text-sm font-medium"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {price}
            </span>
          )}
          {ticketUrl ? (
            <Link
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline py-2 px-5 text-xs ml-auto"
            >
              Boletos
            </Link>
          ) : (
            <Link href="#reservaciones" className="btn-ghost py-2 px-5 text-xs ml-auto">
              Reservar
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
