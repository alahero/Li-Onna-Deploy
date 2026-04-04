import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export function Hero({
  title = 'Hola, Madrid',
  subtitle = 'Cocina japonesa con alma latina',
  imageSrc,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image or gradient */}
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="LI-ONNA restaurant interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black" />
      )}

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-brand-black/30" />

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40" />

      {/* Decorative Japanese characters — large watermark */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none select-none overflow-hidden">
        <span
          className="japanese-text text-brand-gold/5 font-light leading-none"
          style={{ fontSize: 'clamp(8rem, 20vw, 24rem)' }}
          aria-hidden="true"
        >
          リオンナ
        </span>
      </div>

      {/* Vertical ornament lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent hidden lg:block" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow — Japanese */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="ornament-diamond" aria-hidden="true" />
          <p className="japanese-text text-brand-gold text-base md:text-lg tracking-widest2 animate-fade-in">
            リオンナ
          </p>
          <span className="ornament-diamond" aria-hidden="true" />
        </div>

        {/* Main headline */}
        <h1
          className="font-display text-brand-cream font-light text-shadow-gold animate-slide-up"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)', lineHeight: 1.05, letterSpacing: '0.05em' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <div className="mt-6 animate-slide-up-delay">
          <p className="text-brand-cream/70 font-body font-light text-lg md:text-xl tracking-widest uppercase">
            {subtitle}
          </p>
        </div>

        {/* Divider ornament */}
        <div className="my-10 flex items-center justify-center gap-4">
          <span className="w-16 h-px bg-brand-gold/40" />
          <span className="ornament-diamond" aria-hidden="true" />
          <span className="w-16 h-px bg-brand-gold/40" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-slow">
          <Link href="/#reservar" className="btn-primary">
            Reservar Mesa
          </Link>
          <Link href="/#menu" className="btn-gold">
            Ver Carta
          </Link>
        </div>

        {/* Location tag */}
        <div className="mt-12 text-brand-cream/40 text-xs tracking-widest uppercase font-body">
          C. de Recoletos, 1 &mdash; Barrio Salamanca &mdash; Madrid
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-slow">
        <span className="text-brand-cream/30 text-[9px] uppercase tracking-widest font-body">
          Descubrir
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold/40 to-transparent" />
      </div>
    </section>
  );
}
