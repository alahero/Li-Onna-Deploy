import Image from 'next/image';

export function Ticker() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        /* Altura mínima: en viewport angosto el ratio 1200/623 queda demasiado bajo y cover recorta el arte */
        aspectRatio: '1200 / 623',
        minHeight: 'clamp(260px, 52vw + 72px, 640px)',
      }}
    >
      {/* Imagen de fondo a ancho completo */}
      <Image
        src="/images/ticker-bg.png"
        alt="Tacos Atarantados banner"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Trompo centrado; en móvil más chico para no desbordar el alto útil */}
      <div className="absolute left-1/2 top-1/2 z-[2] flex aspect-square w-[min(272px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 items-center justify-center md:w-[304px]">
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
