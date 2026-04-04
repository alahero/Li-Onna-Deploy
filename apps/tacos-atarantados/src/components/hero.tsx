import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string | null;
  ctaText: string;
  ctaLink: string;
}

export function HeroSection({ title, subtitle, image, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark"
      aria-label="Hero section"
    >
      {/* Background image or gradient */}
      {image ? (
        <Image
          src={image}
          alt="Tacos Atarantados - Hero"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
      ) : (
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #E63946 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FFB703 0%, transparent 40%), radial-gradient(circle at 60% 80%, #FB8500 0%, transparent 40%)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Diagonal stripe accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #FFB703 0px, #FFB703 2px, transparent 2px, transparent 40px)',
        }}
        aria-hidden="true"
      />

      {/* Decorative floating elements */}
      <div className="absolute top-32 left-10 text-6xl opacity-20 animate-bounce-slow select-none" aria-hidden="true">
        🌮
      </div>
      <div
        className="absolute bottom-32 right-10 text-5xl opacity-20 select-none"
        style={{ animation: 'bounce 2.5s infinite' }}
        aria-hidden="true"
      >
        🌶️
      </div>
      <div
        className="absolute top-1/2 right-1/4 text-4xl opacity-10 select-none"
        style={{ animation: 'pulse 4s infinite' }}
        aria-hidden="true"
      >
        🫔
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Tag line badge */}
        <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/40 text-brand-yellow px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-8">
          <span aria-hidden="true">🔥</span>
          <span>Auténticos Tacos Mexicanos</span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title.split(' ').map((word, i) => (
            <span key={i} className={i % 3 === 1 ? 'text-brand-yellow' : 'text-white'}>
              {word}{' '}
            </span>
          ))}
        </h1>

        <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={ctaLink} className="btn-primary text-lg !px-8 !py-4">
            <span aria-hidden="true">🌮</span>
            {ctaText}
          </Link>
          <Link href="#sucursales" className="btn-outline !text-white !border-white hover:!bg-white hover:!text-brand-dark text-lg !px-8 !py-4">
            <span aria-hidden="true">📍</span>
            Ver Sucursales
          </Link>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '10+', label: 'Sucursales' },
            { value: '50+', label: 'Platillos' },
            { value: '★ 4.9', label: 'Calificación' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-display text-brand-yellow" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </p>
              <p className="text-white/60 text-sm font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#FFF8E7"
          />
        </svg>
      </div>
    </section>
  );
}
