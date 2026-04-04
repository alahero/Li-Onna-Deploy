import Image from 'next/image';

// Spade card suit SVG — used as large decorative motif
function SpadeSVG() {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
    </svg>
  );
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string | null;
  ctaText: string;
  ctaLink: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Background image */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt="SPADE cocktail bar"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-40"
        />
      ) : (
        /* Fallback gradient when no image */
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-navy to-brand-black opacity-80" />
      )}

      {/* Dark overlay */}
      <div className="overlay-hero" />

      {/* Background texture */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Decorative large spade motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="text-brand-silver/[0.04] w-96 h-96 md:w-[560px] md:h-[560px]">
          <SpadeSVG />
        </div>
      </div>

      {/* Art deco corner ornaments */}
      <div className="absolute top-24 left-8 lg:left-16 w-12 h-12 border-t border-l border-brand-silver/20" />
      <div className="absolute top-24 right-8 lg:right-16 w-12 h-12 border-t border-r border-brand-silver/20" />
      <div className="absolute bottom-16 left-8 lg:left-16 w-12 h-12 border-b border-l border-brand-silver/20" />
      <div className="absolute bottom-16 right-8 lg:right-16 w-12 h-12 border-b border-r border-brand-silver/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow label */}
        <p className="section-subtitle mb-6 animate-fade-in">
          spade.mx &nbsp;·&nbsp; Premium Cocktail Bar
        </p>

        {/* Thin silver top rule */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-px bg-brand-silver/30" />
          <div className="text-brand-silver/40 text-xl">
            <SpadeSVG />
          </div>
          <div className="w-16 h-px bg-brand-silver/30" />
        </div>

        {/* Main title */}
        <h1
          className="display-title text-shadow-silver mb-6 animate-slide-up"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-brand-silver/70 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed mb-10 animate-fade-in">
          {subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={ctaLink} className="btn-primary min-w-[180px]">
            {ctaText}
          </a>
          <a href="#cocteleria" className="btn-silver min-w-[180px]">
            Ver Cócteles
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-brand-silver/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-silver/30 to-transparent" />
      </div>
    </section>
  );
}
