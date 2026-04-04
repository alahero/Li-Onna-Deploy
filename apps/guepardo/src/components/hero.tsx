import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string | null;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image or fallback gradient */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt="Guepardo Nightclub"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-zinc-900 to-brand-black">
          {/* Decorative circles for depth */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-gold/3 blur-2xl" />
        </div>
      )}

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-black" />

      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-16 bg-gradient-to-b from-brand-gold/40 to-transparent"
            style={{
              left: `${15 + i * 14}%`,
              top: `${10 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.3 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold top accent line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-px bg-brand-gold opacity-60" />
          <span className="text-brand-gold text-xs uppercase tracking-[0.3em] font-medium">
            Nightclub — México
          </span>
          <span className="w-12 h-px bg-brand-gold opacity-60" />
        </div>

        {/* Main title */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-display tracking-wider text-brand-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif", textShadow: '0 0 60px rgba(201,168,76,0.2)' }}
        >
          {title}
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <span className="w-8 h-px bg-brand-gold" />
          <svg className="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="w-8 h-px bg-brand-gold" />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-brand-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-brand-gold-light hover:scale-105 active:scale-95 min-w-[180px]"
            style={{ boxShadow: '0 0 30px rgba(201,168,76,0.3)' }}
          >
            {ctaText}
          </Link>

          {secondaryCtaText && secondaryCtaLink && (
            <Link
              href={secondaryCtaLink}
              className="inline-flex items-center justify-center px-10 py-4 border border-brand-gold text-brand-gold font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-brand-gold hover:text-brand-black hover:scale-105 active:scale-95 min-w-[180px]"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-brand-white/50 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-white/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
