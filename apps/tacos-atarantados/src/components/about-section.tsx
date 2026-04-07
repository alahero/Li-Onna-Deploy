import Image from 'next/image';

const DEFAULT_ABOUT_TEXT = `Nacimos en Monterrey y eso se nota.
Somos tacos norteños, bien servidos y hechos con carácter.
El trompo es nuestra bandera y la mesa es nuestro punto de encuentro.

Pero no solo somos sabor.
Somos atención cálida, trato cercano y mesas donde siempre hay espacio para uno más.

Creemos en las salsas que transforman el taco. En la variedad que te invita a probar, combinar y regresar por otra ronda

En Atarantados te atendemos como en casa, pero comiendo mejor.
Aquí no hay complicaciones, solo buena comida, buena vibra y ganas de repetir.

Porque cuando el taco está bien servido, la felicidad esta garantizada.`;

interface AboutSectionProps {
  aboutText?: string | null;
}

export function AboutSection({ aboutText }: AboutSectionProps) {
  return (
    <section
      id="quienes-somos"
      className="w-full bg-white"
    >
      <div className="about-inner relative w-full max-w-[1152px] mx-auto flex flex-row gap-0">
        {/* Left: food photo with text overlay */}
        <div
          className="about-photo-col relative w-1/2 shrink-0 overflow-hidden"
          style={{ aspectRatio: '576 / 658' }}
        >
          <Image
            src="/images/quienes-somos-food.png"
            alt="Tacos Atarantados"
            fill
            className="object-cover"
            sizes="(max-width: 810px) 100vw, 50vw"
          />

          {/* Text overlay on the photo */}
          <div className="about-text-overlay absolute bottom-10 left-10 right-10 z-[2] flex flex-col gap-2">
            <h2
              className="m-0"
              style={{
                fontFamily: '"Gothic Regular", sans-serif',
                fontWeight: 400,
                fontSize: '47px',
                lineHeight: '56.4px',
                color: '#ffffff',
              }}
            >
              {'\u00BF'}Qui{'\u00E9'}nes
              <br />
              somos?
            </h2>
            <div
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: '15.6px',
                color: '#ffffff',
                textAlign: 'justify',
              }}
              className="flex flex-col gap-0"
            >
              {(aboutText || DEFAULT_ABOUT_TEXT).split('\n').filter(Boolean).map((line, i) => (
                <p key={i} style={{ margin: i === 0 ? '0 0 0.3em' : '0.4em 0 0.3em' }}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right: empty white space (matches Framer layout) */}
        <div className="about-right-col flex-1" />
      </div>
    </section>
  );
}
