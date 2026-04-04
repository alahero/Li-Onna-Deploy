import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  heroImage: string | null;
  heroVideoUrl?: string | null;
  ctaText: string;
  ctaLink: string;
}

// Decorative floating particles
function Particles() {
  const particles = [
    { top: '15%', left: '8%', size: 1.5, delay: '0s', duration: '8s' },
    { top: '25%', left: '92%', size: 1, delay: '1.5s', duration: '10s' },
    { top: '60%', left: '5%', size: 2, delay: '2s', duration: '7s' },
    { top: '70%', left: '88%', size: 1.5, delay: '0.5s', duration: '9s' },
    { top: '40%', left: '50%', size: 1, delay: '3s', duration: '11s' },
    { top: '85%', left: '30%', size: 1.5, delay: '1s', duration: '8s' },
    { top: '10%', left: '65%', size: 1, delay: '2.5s', duration: '12s' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-brand-gold/40 animate-float"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

// Ornamental divider for the hero
function OrnamentalLine() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brand-gold/60" />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 2L11.8 7.2H17.3L12.8 10.4L14.6 15.6L10 12.4L5.4 15.6L7.2 10.4L2.7 7.2H8.2L10 2Z"
          fill="#D4AF37"
          opacity="0.8"
        />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brand-gold/60" />
    </div>
  );
}

export function HeroSection({ title, subtitle, heroImage, heroVideoUrl, ctaText, ctaLink }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background: video takes priority over image */}
      {heroVideoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
      ) : heroImage ? (
        <Image
          src={heroImage}
          alt="Houdinni — El Speakeasy Mágico"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      ) : (
        /* Fallback: pure CSS theatrical background */
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(45,27,105,0.6) 0%, transparent 55%),
              radial-gradient(ellipse at 70% 70%, rgba(128,0,32,0.4) 0%, transparent 45%),
              linear-gradient(180deg, #0B0B0B 0%, #0F0820 40%, #0B0B0B 100%)
            `,
          }}
        />
      )}

      {/* Dark overlay — theatrical blackout at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg,
              rgba(11,11,11,0.75) 0%,
              rgba(11,11,11,0.45) 35%,
              rgba(11,11,11,0.55) 65%,
              rgba(11,11,11,0.9) 100%
            )
          `,
        }}
      />

      {/* Curtain vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 80px 0 120px rgba(0,0,0,0.6), inset -80px 0 120px rgba(0,0,0,0.6)',
        }}
      />

      {/* Floating particles */}
      <Particles />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Pre-title badge */}
        <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
          <span className="block w-8 h-px bg-brand-gold/70" />
          <span
            className="text-xs uppercase tracking-mystical text-brand-gold/80"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Speakeasy & Shows de Magia
          </span>
          <span className="block w-8 h-px bg-brand-gold/70" />
        </div>

        {/* Main title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-cream animate-slide-up text-shadow-cream"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>

        {/* Ornamental divider */}
        <OrnamentalLine />

        {/* Subtitle */}
        <p
          className="text-base md:text-lg text-brand-cream/65 max-w-2xl mx-auto leading-relaxed animate-fade-in"
          style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, letterSpacing: '0.05em' }}
        >
          {subtitle}
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slow">
          <Link href={ctaLink} className="btn-primary">
            {ctaText}
          </Link>
          <Link href="#concepto" className="btn-ghost">
            Descubrir el Secreto
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float opacity-50">
          <span
            className="text-xs uppercase tracking-[0.3em] text-brand-cream/50"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Scroll
          </span>
          <svg width="1" height="32" viewBox="0 0 1 32" fill="none" aria-hidden="true">
            <line x1="0.5" y1="0" x2="0.5" y2="32" stroke="#D4AF37" strokeOpacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
