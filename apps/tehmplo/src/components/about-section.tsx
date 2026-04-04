interface Pillar {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

interface AboutData {
  title?: string;
  description?: string;
  pillars?: readonly Pillar[];
}

interface AboutSectionProps {
  data?: AboutData | null;
}

const defaultPillars: readonly Pillar[] = [
  {
    title: 'Experience',
    description:
      'Nestled within the lush jungle of Tulum, every detail of Tehmplo is crafted to transport you. From the open-air architecture to the sacred cenote aesthetics, you are immersed in something truly otherworldly.',
    icon: '✦',
  },
  {
    title: 'Music',
    description:
      'Our curated program features the world\'s most respected selectors — from Berlin\'s underground to Ibiza\'s finest. Organic house, afro rhythms, and melodic techno fill the jungle air from dusk until dawn.',
    icon: '◈',
  },
  {
    title: 'Hospitality',
    description:
      'At Tehmplo, you are not just a guest — you are family. Our team of dedicated hosts ensures every visit is personal, memorable, and effortless. Excellence is not a policy; it is our nature.',
    icon: '⟡',
  },
];

export default function AboutSection({ data }: AboutSectionProps) {
  const title = data?.title || 'THE TEHMPLO EXPERIENCE';
  const description =
    data?.description ||
    'Nestled within the lush jungle of Tulum, Tehmplo is more than a nightclub — it is a sanctuary where ancient energy meets contemporary sound.';
  const pillars: readonly Pillar[] =
    data?.pillars && data.pillars.length > 0 ? data.pillars : defaultPillars;

  return (
    <div className="relative bg-brand-black py-24 lg:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-jungle opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-forest-green/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-forest-green/30 to-transparent" />
        {/* Large decorative orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-forest-green/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">{title}</h2>
          <div className="gold-divider" />
          <p className="font-body text-sm md:text-base text-brand-cream-muted/70 tracking-wider max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-brand-forest-green/10">
          {pillars.slice(0, 3).map((pillar, i) => (
            <div
              key={i}
              className="group relative bg-brand-black p-10 lg:p-14 text-center hover:bg-brand-forest-deep/30 transition-colors duration-500"
            >
              {/* Vertical connector line — only between items on mobile */}
              {i < pillars.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-px md:hidden" />
              )}

              {/* Icon */}
              <div className="mb-6">
                <span
                  className="inline-block font-body text-3xl text-brand-gold group-hover:scale-110 transition-transform duration-500"
                  aria-hidden="true"
                >
                  {pillar.icon || '✦'}
                </span>
              </div>

              {/* Number */}
              <p className="font-body text-[10px] tracking-[0.4em] text-brand-forest-light uppercase mb-4">
                {String(i + 1).padStart(2, '0')}
              </p>

              {/* Title */}
              <h3 className="font-display text-2xl text-brand-cream tracking-widest uppercase mb-4">
                {pillar.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-brand-gold/40 mx-auto mb-6 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p className="font-body text-sm text-brand-cream-muted/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent mx-auto mb-8" />
          <blockquote className="font-display text-xl md:text-2xl lg:text-3xl text-brand-cream/70 italic tracking-wide leading-relaxed">
            &ldquo;Where the jungle breathes and music echoes through ancient trees.&rdquo;
          </blockquote>
          <p className="font-body text-xs tracking-[0.3em] text-brand-gold/60 uppercase mt-6">
            Carretera Tulum-Boca Paila, Km 5.5
          </p>
        </div>
      </div>
    </div>
  );
}
