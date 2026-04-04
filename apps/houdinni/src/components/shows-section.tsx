import React from 'react';
import { ShowCard, ShowCardProps } from './show-card';

interface ShowsSectionProps {
  shows: ShowCardProps[];
}

export function ShowsSection({ shows }: ShowsSectionProps) {
  const featuredShows = shows.filter((s) => s.featured);
  const regularShows = shows.filter((s) => !s.featured);
  const orderedShows = [...featuredShows, ...regularShows];

  return (
    <section
      id="shows"
      className="section-padding relative overflow-hidden bg-brand-black"
    >
      {/* Background: subtle top/bottom gradients */}
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(13,9,32,0.4), transparent)' }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(13,9,32,0.4), transparent)' }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="text-xs uppercase tracking-mystical text-brand-gold/70 mb-4 block"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Próximas Presentaciones
          </span>
          <h2 className="section-title mb-4">
            Shows &amp; Espectáculos
          </h2>
          <div className="gold-divider max-w-xs mx-auto">
            <span className="text-brand-gold/60 text-xs" aria-hidden="true">&#9670;</span>
          </div>
          <p
            className="text-brand-cream/50 text-sm max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
          >
            Cada noche es diferente. Cada show, único. Descubre los espectáculos que hemos
            preparado para desafiar tus sentidos.
          </p>
        </div>

        {/* Shows grid */}
        {orderedShows.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderedShows.map((show) => (
              <ShowCard key={show.slug} {...show} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div
              className="text-brand-cream/20 text-lg mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
            >
              Los próximos shows están siendo preparados...
            </div>
            <p
              className="text-brand-cream/30 text-sm"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Regresa pronto o únete a nuestra lista de espera.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        {orderedShows.length > 0 && (
          <div className="text-center mt-12">
            <p
              className="text-brand-cream/40 text-sm mb-4"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
            >
              ¿Quieres asegurar tu lugar antes de que se agoten?
            </p>
            <a href="#reservaciones" className="btn-outline">
              Hacer una Reservación
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
