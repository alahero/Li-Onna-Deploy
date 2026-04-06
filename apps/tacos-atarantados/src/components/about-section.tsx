import Image from 'next/image';
import Link from 'next/link';

export function AboutSection() {
  return (
    <Link
      href="/#quienesomos1-1"
      id="quienesomos1-1"
      style={{
        display: 'block',
        width: '100%',
        background: 'rgb(255, 255, 255)',
        padding: '24px',
        textDecoration: 'none',
        overflow: 'hidden',
      }}
    >
      <div
        className="about-inner"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1152px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          gap: '0px',
        }}
      >
        {/* Left: food photo with text overlay */}
        <div
          className="about-photo-col"
          style={{
            position: 'relative',
            width: '50%',
            flexShrink: 0,
            aspectRatio: '576 / 658',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/quienes-somos-food.png"
            alt="Tacos Atarantados"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 810px) 100vw, 50vw"
          />

          {/* Text overlay on the photo */}
          <div
            className="about-text-overlay"
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              right: '40px',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <h2
              style={{
                fontFamily: '"Gothic Regular", sans-serif',
                fontWeight: 400,
                fontSize: '47px',
                lineHeight: '56.4px',
                color: 'rgb(255, 255, 255)',
                margin: 0,
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
                color: 'rgb(255, 255, 255)',
                textAlign: 'justify',
                display: 'flex',
                flexDirection: 'column',
                gap: '0px',
              }}
            >
              <p style={{ margin: '0 0 0.3em' }}>Nacimos en Monterrey y eso se nota.</p>
              <p style={{ margin: '0 0 0.3em' }}>Somos tacos norte&ntilde;os, bien servidos y hechos con car&aacute;cter.</p>
              <p style={{ margin: '0 0 0.3em' }}>El trompo es nuestra bandera y la mesa es nuestro punto de encuentro.</p>
              <p style={{ margin: '0.8em 0 0.3em' }}>Pero no solo somos sabor.</p>
              <p style={{ margin: '0 0 0.3em' }}>Somos atenci&oacute;n c&aacute;lida, trato cercano y mesas donde siempre hay espacio para uno m&aacute;s.</p>
              <p style={{ margin: '0.8em 0 0.3em' }}>Creemos en las salsas que transforman el taco. En la variedad que te invita a probar, combinar y regresar por otra ronda</p>
              <p style={{ margin: '0.8em 0 0.3em' }}>En Atarantados te atendemos como en casa, pero comiendo mejor.</p>
              <p style={{ margin: '0 0 0.3em' }}>Aqu&iacute; no hay complicaciones, solo buena comida, buena vibra y ganas de repetir.</p>
              <p style={{ margin: '0.8em 0 0.3em' }}>Porque cuando el taco est&aacute; bien servido, la felicidad esta garantizada.</p>
            </div>
          </div>
        </div>

        {/* Right: empty white space (matches Framer layout) */}
        <div
          className="about-right-col"
          style={{
            flex: 1,
          }}
        />
      </div>
    </Link>
  );
}
