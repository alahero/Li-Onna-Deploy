import Image from 'next/image';

interface AboutSectionProps {
  title: string;
  description: unknown; // markdoc output
  image: string | null;
}

export function AboutSection({ title, description, image }: AboutSectionProps) {
  return (
    <section
      id="nosotros"
      className="py-20 bg-brand-dark relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, #FFB703 0px, #FFB703 2px, transparent 2px, transparent 30px)',
        }}
        aria-hidden="true"
      />
      <div className="absolute bottom-10 left-10 text-8xl opacity-5 select-none" aria-hidden="true">
        🌮
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-brand-yellow/30"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-brand-orange/30 to-brand-red/30 shadow-2xl">
                {image ? (
                  <Image
                    src={image}
                    alt="Nuestra historia - Tacos Atarantados"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <span className="text-8xl" aria-hidden="true">🌮</span>
                    <span className="text-brand-yellow/60 text-lg font-medium">
                      Desde 2010
                    </span>
                  </div>
                )}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow rounded-2xl px-5 py-4 shadow-xl text-brand-dark text-center">
                <p className="text-3xl font-display leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                  15+
                </p>
                <p className="text-xs font-bold uppercase tracking-wider mt-1">
                  Años de<br />Sabor
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
              <span aria-hidden="true">❤️</span>
              <span>Nuestra Historia</span>
            </div>

            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-display text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h2>

            {description ? (
              <div className="prose prose-lg prose-invert prose-p:text-white/75 prose-headings:text-white max-w-none">
                {/* Markdoc renders as raw content — handle as string if needed */}
                <p className="text-white/75 text-lg leading-relaxed">
                  {String(description)}
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-white/75 text-lg leading-relaxed">
                <p>
                  Todo comenzó en un pequeño puesto en la calle con una receta familiar. Hoy,
                  Tacos Atarantados es sinónimo de calidad y sabor en toda la ciudad.
                </p>
                <p>
                  Usamos las mejores tortillas hechas a mano, carnes seleccionadas y salsas
                  artesanales preparadas cada día con recetas que hemos perfeccionado durante
                  más de 15 años.
                </p>
              </div>
            )}

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { icon: '🌽', label: 'Ingredientes frescos' },
                { icon: '👨‍🍳', label: 'Recetas auténticas' },
                { icon: '❤️', label: 'Hecho con amor' },
              ].map((val) => (
                <div
                  key={val.label}
                  className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:border-brand-yellow/40 transition-colors"
                >
                  <span className="text-3xl block mb-2" aria-hidden="true">{val.icon}</span>
                  <p className="text-white/70 text-xs font-semibold">{val.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
