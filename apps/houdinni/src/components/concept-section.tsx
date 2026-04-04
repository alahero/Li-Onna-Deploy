import React from 'react';
import Image from 'next/image';

interface ConceptSectionProps {
  title: string;
  tagline: string;
  description: string;
  image: string | null;
}

function MagicSymbol() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-brand-gold/50"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
      <path
        d="M24 8L26.4 16.8H35.7L28.6 22.1L31 30.9L24 25.6L17 30.9L19.4 22.1L12.3 16.8H21.6L24 8Z"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}

export function ConceptSection({ title, tagline, description, image }: ConceptSectionProps) {
  return (
    <section
      id="concepto"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0B0B0B 0%, #0D0920 50%, #0B0B0B 100%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,27,105,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(128,0,32,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            {/* Symbol + pre-label */}
            <div className="flex items-center gap-4 mb-6">
              <MagicSymbol />
              <span
                className="text-xs uppercase tracking-mystical text-brand-gold/70"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                El Concepto
              </span>
            </div>

            {/* Title */}
            <h2 className="section-title mb-4">
              {title}
            </h2>

            {/* Tagline */}
            {tagline && (
              <p
                className="text-brand-gold/80 text-lg mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
              >
                &ldquo;{tagline}&rdquo;
              </p>
            )}

            {/* Gold divider */}
            <div className="gold-divider mb-8">
              <span className="text-brand-gold text-xs" aria-hidden="true">&#10022;</span>
            </div>

            {/* Description */}
            <div
              className="text-brand-cream/65 leading-relaxed text-base space-y-4"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
            >
              {description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Atmospheric detail */}
            <div className="mt-10 flex items-start gap-6">
              {[
                { label: 'Shows', detail: 'Cada semana' },
                { label: 'Cócteles', detail: 'De autor' },
                { label: 'Capacidad', detail: 'Aforo limitado' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div
                    className="text-brand-gold text-2xl mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-brand-cream/40 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none">
              {/* Decorative border frame */}
              <div className="absolute -inset-3 border border-brand-gold/15 pointer-events-none z-10" />
              <div className="absolute -inset-6 border border-brand-gold/8 pointer-events-none z-10" />

              {/* Image or placeholder */}
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  quality={85}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #1A0F40 0%, #2D1B69 50%, #1A0F40 100%)',
                  }}
                >
                  <div className="text-center opacity-40">
                    <MagicSymbol />
                    <p
                      className="mt-4 text-xs uppercase tracking-widest text-brand-gold/60"
                      style={{ fontFamily: "'Raleway', sans-serif" }}
                    >
                      Imagen del Concepto
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom vignette on image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(11,11,11,0.7) 100%)',
                }}
              />
            </div>

            {/* Floating accent dot */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
