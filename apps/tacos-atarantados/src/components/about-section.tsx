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
  const body = (aboutText || DEFAULT_ABOUT_TEXT).split('\n').filter(Boolean);

  return (
    <section
      id="quienes-somos"
      className="w-full bg-[#e6e6e6] px-4 py-8 sm:px-6 sm:py-10 min-[810px]:px-10 min-[810px]:py-12 lg:px-14 lg:py-14"
    >
      <div className="about-inner mx-auto grid w-full max-w-[1152px] grid-cols-1 min-[810px]:grid-cols-2 min-[810px]:items-stretch">
        {/* Columna imagen: móvil con ratio; escritorio estira a la altura del panel verde (sin aspect fijo) */}
        <div className="about-photo-col relative aspect-[4/5] w-full min-h-0 overflow-hidden min-[810px]:aspect-auto min-[810px]:h-full min-[810px]:self-stretch">
          <Image
            src="/images/quienes-somos-food.png"
            alt="Tacos Atarantados"
            fill
            className="object-cover"
            sizes="(max-width: 809px) calc(100vw - 2rem), 50vw"
          />
        </div>

        {/* Columna texto: min-w-0 evita desbordes raros en columnas grid angostas */}
        <div className="about-right-col flex min-h-0 w-full min-w-0 flex-col justify-center bg-[var(--verde)] px-6 py-9 text-white min-[810px]:px-6 min-[810px]:py-9 min-[1031px]:px-9 min-[1031px]:py-10 lg:px-12 lg:py-11">
          <h2 className="about-heading m-0 mb-4 w-full min-w-0 break-words uppercase min-[810px]:mb-5">
            {'\u00BF'}QUI{'\u00C9'}NES SOMOS?
          </h2>
          <div className="about-body flex min-w-0 flex-col gap-0">
            {body.map((line, i) => (
              <p key={i} style={{ margin: i === 0 ? '0 0 0.3em' : '0.4em 0 0.3em' }}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
