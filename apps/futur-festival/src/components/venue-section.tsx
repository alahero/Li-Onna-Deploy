import React from 'react';
import Image from 'next/image';

interface VenueSectionProps {
  name: string;
  address: string;
  description?: string;
  mapUrl?: string;
  image?: string;
  transportInfo?: unknown;
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-white/8 last:border-0">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-0.5">
          {label}
        </p>
        <p className="font-body text-sm text-white/80">{value}</p>
      </div>
    </div>
  );
}

export function VenueSection({
  name,
  address,
  description,
  mapUrl,
  image,
}: VenueSectionProps) {
  return (
    <section id="venue" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-pink/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.02em] text-white">
            VENUE
          </h2>
          <div className="mx-auto mt-4 divider-neon w-24" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: info */}
          <div>
            <h3 className="font-display text-3xl font-black text-white mb-2">{name}</h3>
            {description && (
              <p className="font-body text-white/60 leading-relaxed mb-8">{description}</p>
            )}

            <div className="glass-purple rounded-2xl p-6">
              <InfoRow
                icon={
                  <svg className="h-5 w-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                }
                label="Dirección"
                value={address}
              />
              {mapUrl && (
                <div className="pt-4">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-[0.15em] text-brand-cyan transition-all duration-300 hover:bg-brand-cyan hover:text-brand-black hover:shadow-neon-cyan"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    Ver en Google Maps
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right: image / map embed */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-square">
            {image ? (
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : mapUrl ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-dark gap-4">
                <div className="h-20 w-20 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center">
                  <svg className="h-10 w-10 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <p className="font-display text-sm text-white/50 uppercase tracking-widest">{name}</p>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs font-semibold text-brand-cyan hover:underline"
                >
                  Abrir en Google Maps →
                </a>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-dark to-brand-black">
                <span className="font-display text-6xl font-black text-brand-purple/20">
                  {name.slice(0, 1)}
                </span>
              </div>
            )}

            {/* Corner accents */}
            <div className="absolute top-0 left-0 h-6 w-6 border-t-2 border-l-2 border-brand-purple rounded-tl-xl pointer-events-none" />
            <div className="absolute top-0 right-0 h-6 w-6 border-t-2 border-r-2 border-brand-cyan rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-brand-cyan rounded-bl-xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-brand-purple rounded-br-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
