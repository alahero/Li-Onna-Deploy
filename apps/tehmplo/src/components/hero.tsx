interface HeroData {
  heroTitle?: string;
  heroSubtitle?: string;
  heroBackgroundImage?: string | null;
  heroVideoUrl?: string | null;
  ctaText?: string;
  ctaLink?: string | null;
  ctaSecondaryText?: string;
}

interface HeroProps {
  data?: HeroData | null;
}

export default function Hero({ data }: HeroProps) {
  const title = data?.heroTitle || 'ELEVATE YOUR TULUM EXPERIENCE';
  const subtitle = data?.heroSubtitle || 'Premium open-air jungle nightclub in the heart of Tulum';
  const ctaText = data?.ctaText || 'Reserve Your Table';
  const ctaLink = data?.ctaLink || '#viptables';
  const ctaSecondaryText = data?.ctaSecondaryText || 'View Events';
  const bgImage = data?.heroBackgroundImage;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black"
      aria-label="Hero"
    >
      {/* Background image / video layer */}
      {bgImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
          aria-hidden="true"
        />
      ) : (
        // Atmospheric fallback when no image
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-forest-deep via-brand-black to-brand-black" />
          {/* Decorative orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-forest-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-forest-green/5 rounded-full blur-3xl" />
        </div>
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-gradient-hero"
        aria-hidden="true"
      />

      {/* Bottom gradient to blend with next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent"
        aria-hidden="true"
      />

      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Eyebrow */}
        <p className="section-label animate-fade-in mb-8">
          Tulum, Mexico
        </p>

        {/* Main title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-brand-cream tracking-[0.12em] uppercase leading-[1.05] mb-6 animate-fade-in-up">
          {title.split(' ').map((word, i) =>
            word === 'YOUR' || word === 'TULUM' ? (
              <span key={i} className="text-gradient-gold">
                {word}{' '}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>

        {/* Gold divider */}
        <div className="gold-divider animate-fade-in" style={{ animationDelay: '0.3s' }} />

        {/* Subtitle */}
        <p
          className="font-body text-base md:text-lg text-brand-cream-muted tracking-widest max-w-2xl mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <a href={ctaLink} className="btn-gold text-sm px-10 py-4 w-full sm:w-auto text-center">
            {ctaText}
          </a>
          <a href="#events" className="btn-outline-cream text-sm px-10 py-4 w-full sm:w-auto text-center">
            {ctaSecondaryText}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-gold">
        <span className="font-body text-[10px] tracking-[0.4em] text-brand-gold/60 uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-gold/60 to-transparent" />
      </div>
    </section>
  );
}
