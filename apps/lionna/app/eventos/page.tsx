import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Eventos a tu medida en LI-ONNA — Cocina japonesa con alma latina, Madrid.',
  openGraph: {
    title: 'Eventos — LI-ONNA リオンナ',
    description: 'Eventos a tu medida. Celebra con nosotros en C. de Recoletos, 1, Madrid.',
  },
};

export default function EventosPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: '#F7F8F3', minHeight: '100vh' }}>
        {/* Hero */}
        <section
          className="eventos-hero"
          style={{
            backgroundColor: '#F6F6F2',
            padding: '120px 80px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <h1
            className="eventos-h1"
            style={{
              fontFamily: 'EditorialNew, serif',
              fontWeight: 400,
              fontSize: 60,
              letterSpacing: '-0.04em',
              lineHeight: 1.2,
              color: '#000',
              marginBottom: 24,
              margin: '0 0 24px 0',
            }}
          >
            Eventos a tu medida
          </h1>
          <p style={{
            fontFamily: 'EditorialNew, serif',
            fontWeight: 400,
            fontSize: 16,
            letterSpacing: '0.02em',
            lineHeight: 1.6,
            color: '#000',
            maxWidth: 560,
            margin: 0,
          }}>
            Organiza tu evento en LI-ONNA. Desde cenas privadas hasta celebraciones corporativas,
            creamos experiencias únicas en el corazón de Salamanca.
          </p>
        </section>

        {/* Events contact form */}
        <section
          className="eventos-contact"
          style={{
            backgroundColor: '#fff',
            padding: '80px',
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h2 style={{
              fontFamily: 'EditorialNew, serif',
              fontWeight: 500,
              fontSize: 34,
              letterSpacing: '0.01em',
              lineHeight: 1.2,
              color: '#000',
              margin: 0,
            }}>
              Contacta con nosotros
            </h2>
            <p style={{
              fontFamily: 'EditorialNew, serif',
              fontWeight: 400,
              fontSize: 16,
              letterSpacing: '0.02em',
              lineHeight: 1.4,
              color: '#000',
              margin: 0,
            }}>
              Escríbenos o llámanos para planificar tu evento a medida.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              <a href="mailto:eventos@lionnamadrid.es" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', color: '#005CFE', textDecoration: 'none' }}>
                eventos@lionnamadrid.es
              </a>
              <a href="tel:+34654177126" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', color: '#005CFE', textDecoration: 'none' }}>
                +34 654 17 71 26
              </a>
            </div>
          </div>

          <form
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            action="mailto:eventos@lionnamadrid.es"
            method="post"
            encType="text/plain"
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input type="text" name="nombre" placeholder="Nombre" required
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, borderRadius: 30, padding: '6px 16px', background: '#fff', border: '1px solid #E3E3E3', outline: 'none', color: '#000' }} />
              <input type="text" name="apellido" placeholder="Apellido"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, borderRadius: 30, padding: '6px 16px', background: '#fff', border: '1px solid #E3E3E3', outline: 'none', color: '#000' }} />
            </div>
            <input type="tel" name="telefono" placeholder="Teléfono"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, borderRadius: 30, padding: '6px 16px', background: '#fff', border: '1px solid #E3E3E3', outline: 'none', color: '#000' }} />
            <input type="email" name="email" placeholder="Email" required
              style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, borderRadius: 30, padding: '6px 16px', background: '#fff', border: '1px solid #E3E3E3', outline: 'none', color: '#000' }} />
            <button type="submit" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', background: 'rgb(0,92,254)', color: '#fff', borderRadius: 10, padding: '12px 24px', border: 'none', cursor: 'pointer', marginTop: 4 }}>
              Submit
            </button>
            <p style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontSize: 10, color: '#8C8C8C', textAlign: 'center', margin: 0 }}>
              *Al completar este formulario acceptas nuestro aviso de privacidad
            </p>
          </form>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1439px) {
          .eventos-hero { padding: 120px 24px 80px !important; }
          .eventos-contact { padding: 80px 24px !important; }
        }
        @media (max-width: 809px) {
          .eventos-hero { padding: 60px 16px 40px !important; }
          .eventos-h1 { font-size: 36px !important; }
          .eventos-contact { padding: 40px 16px !important; }
        }
      `}</style>
    </>
  );
}
