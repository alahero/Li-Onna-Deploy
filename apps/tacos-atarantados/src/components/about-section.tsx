import Image from 'next/image';

export function AboutSection() {
  return (
    <section
      id="quienesomos1-1"
      style={{
        width: '100%',
        background: '#ffffff',
        padding: '60px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: photo collage */}
        <div
          style={{
            flex: '1 1 400px',
            position: 'relative',
            minHeight: '500px',
          }}
        >
          {/* Main food photo — slightly rotated */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '60%', transform: 'rotate(-2deg)', zIndex: 3 }}>
            <Image
              src="/images/quienes-somos-food.png"
              alt="Tacos Atarantados"
              width={400}
              height={346}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            />
          </div>
          {/* Interior photo — offset right, different rotation */}
          <div style={{ position: 'absolute', top: '80px', right: 0, width: '55%', transform: 'rotate(1.5deg)', zIndex: 2 }}>
            <Image
              src="/images/quienes-somos-interior.png"
              alt="Interior Tacos Atarantados"
              width={350}
              height={176}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            />
          </div>
          {/* Detail photo — bottom left, rotated */}
          <div style={{ position: 'absolute', bottom: 0, left: '10%', width: '45%', transform: 'rotate(3deg)', zIndex: 4 }}>
            <Image
              src="/images/quienes-somos-detail.png"
              alt="Detalle tacos"
              width={250}
              height={229}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px', boxShadow: '0 8px 32px rgba(0,0,0,0.22)' }}
            />
          </div>
        </div>

        {/* Right: text */}
        <div
          style={{
            flex: '1 1 340px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            paddingTop: '32px',
          }}
        >
          <h2
            style={{
              fontFamily: '"Gothic Regular", sans-serif',
              fontWeight: 400,
              fontSize: '47px',
              color: '#0c7528',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            ¿Quiénes somos?
          </h2>
          <div
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 400,
              fontSize: '12px',
              color: '#000000',
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <p>Nacimos en Monterrey y eso se nota.</p>
            <p>Somos tacos norteños, bien servidos y hechos con carácter.</p>
            <p>El trompo es nuestra bandera y la mesa es nuestro punto de encuentro.</p>
            <p>Pero no solo somos sabor.</p>
            <p>Somos atención cálida, trato cercano y mesas donde siempre hay espacio para uno más.</p>
            <p>
              Creemos en las salsas que transforman el taco. En la variedad que te invita a probar,
              combinar y regresar por otra ronda. Porque en el norte el taco no está completo sin
              una salsa a su altura.
            </p>
            <p>En Atarantados te atendemos como en casa, pero comiendo mejor.</p>
            <p>Aquí no hay complicaciones, solo buena comida, buena vibra y ganas de repetir.</p>
            <p>Porque cuando el taco está bien servido, la felicidad esta garantizada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
