import Image from 'next/image';

export function Ticker() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        /* Marco más bajo que antes; en viewport angosto el clamp evita que quede demasiado chato */
        aspectRatio: '1200 / 480',
        minHeight: 'clamp(200px, 34vw + 44px, 480px)',
      }}
    >
      {/* Imagen de fondo a ancho completo */}
      <Image
        src="/images/ticker-bg.png"
        alt="Tacos Atarantados banner"
        fill
        sizes="100vw"
        /* Encuadre: anclado abajo para priorizar la parte inferior del arte con object-cover */
        className="object-cover object-bottom"
      />

      {/* Trompo centrado; tamaño acotado al marco más bajo */}
      <div className="absolute left-1/2 top-1/2 z-[2] flex aspect-square w-[min(220px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:w-[256px]">
        <Image
          src="/images/trompo-logo.png"
          alt="Trompo logo"
          width={304}
          height={304}
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  );
}
