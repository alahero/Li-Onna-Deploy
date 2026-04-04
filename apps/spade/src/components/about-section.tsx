import Image from 'next/image';

interface AboutSectionProps {
  title: string;
  description: unknown;
  image: string | null;
}

export function AboutSection({ title, description: _description, image }: AboutSectionProps) {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            {/* Art deco frame */}
            <div className="absolute -inset-3 border border-brand-silver/10 pointer-events-none" />
            <div className="absolute -inset-6 border border-brand-silver/[0.05] pointer-events-none" />

            <div className="relative aspect-[4/5] overflow-hidden bg-brand-dark-card">
              {image ? (
                <Image
                  src={image}
                  alt="SPADE — Nuestra Historia"
                  fill
                  className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                /* Placeholder when no image */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-dark-card to-brand-navy/30">
                  <div className="text-brand-silver/10 w-48 h-48">
                    <svg viewBox="0 0 100 120" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 5C50 5 5 38 5 65a25 25 0 0 0 40.5 19.5C43 92 40 104 32 110h36c-8-6-11-18-13.5-25.5A25 25 0 0 0 95 65C95 38 50 5 50 5z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-emerald/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-emerald/40" />
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="section-subtitle mb-4">Nuestra Historia</p>
            <div className="silver-line ml-0 mb-8 w-10" />

            <h2
              className="section-title mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h2>

            <div className="space-y-5 text-brand-silver/60 font-light leading-relaxed">
              <p>
                SPADE nació de una obsesión por la artesanía y el ritual. En el corazón de
                México, creamos un espacio donde cada cóctel cuenta una historia, donde el
                tiempo se detiene y cada noche se convierte en una experiencia singular.
              </p>
              <p>
                Nuestros bartenders son artistas que combinan técnicas clásicas con
                ingredientes locales de temporada, creando composiciones que sorprenden
                el paladar y deleitan los sentidos.
              </p>
              <p>
                El ambiente sofisticado del espacio — con sus notas de art déco, madera
                oscura y acero pulido — es el escenario perfecto para una noche
                verdaderamente memorable.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <a href="#cocteleria" className="btn-outline-emerald">
                Ver Cócteles
              </a>
              <a
                href="#reservaciones"
                className="text-xs uppercase tracking-[0.2em] text-brand-silver/50 hover:text-brand-silver transition-colors"
              >
                Reservar &rarr;
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-silver/10 pt-8">
              {[
                { value: '60+', label: 'Cócteles' },
                { value: '5★', label: 'Calificación' },
                { value: '2019', label: 'Desde' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl text-brand-white font-light mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-widest text-brand-silver/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
