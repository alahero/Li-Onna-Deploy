import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con LI-ONNA リオンナ — C. de Recoletos, 1, Salamanca, Madrid. Tel: +34 910 463 911.',
  openGraph: {
    title: 'Contacto — LI-ONNA リオンナ',
    description: 'C. de Recoletos, 1, Salamanca, 28001 Madrid. Tel: +34 910 463 911.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: '#F7F8F3', minHeight: '100vh' }}>
        {/* Split layout */}
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '90vh' }}>
          {/* Left: contact info + form */}
          <div
            className="contact-left"
            style={{ backgroundColor: '#F6F6F2', padding: '80px 60px', display: 'flex', flexDirection: 'column', gap: 40 }}
          >
            <h1
              className="contact-h1"
              style={{ fontFamily: 'EditorialNew, serif', fontWeight: 400, fontSize: 60, letterSpacing: '-0.04em', lineHeight: 1.2, color: '#000', margin: 0 }}
            >
              Contáctanos
            </h1>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <address style={{ fontStyle: 'normal', fontFamily: 'EditorialNew, serif', fontWeight: 400, fontSize: 16, letterSpacing: '0.02em', lineHeight: 1.6, color: '#000' }}>
                C. de Recoletos, 1, Salamanca<br />
                28001 Madrid, España
              </address>
              <a href="tel:+34910463911" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', color: '#005CFE', textDecoration: 'none' }}>
                +34 910 463 911
              </a>
              <a href="https://api.whatsapp.com/send?phone=34679836561" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', color: '#005CFE', textDecoration: 'none' }}>
                WhatsApp: +34 679 83 65 61
              </a>
              <a href="mailto:hola@lionna.es" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', color: '#005CFE', textDecoration: 'none' }}>
                hola@lionna.es
              </a>
              <a href="https://www.instagram.com/lionnaes" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', color: '#005CFE', textDecoration: 'none' }}>
                @lionnaes
              </a>
            </div>

            {/* Contact form */}
            <form
              style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}
              action="mailto:hola@lionna.es"
              method="post"
              encType="text/plain"
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <input type="text" name="nombre" placeholder="Nombre" required
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, borderRadius: 30, padding: '8px 16px', background: '#fff', border: '1px solid #E3E3E3', outline: 'none', color: '#000' }} />
                <input type="text" name="apellido" placeholder="Apellido"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, borderRadius: 30, padding: '8px 16px', background: '#fff', border: '1px solid #E3E3E3', outline: 'none', color: '#000' }} />
              </div>
              <input type="tel" name="telefono" placeholder="Teléfono"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, borderRadius: 30, padding: '8px 16px', background: '#fff', border: '1px solid #E3E3E3', outline: 'none', color: '#000' }} />
              <input type="email" name="email" placeholder="Email" required
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, borderRadius: 30, padding: '8px 16px', background: '#fff', border: '1px solid #E3E3E3', outline: 'none', color: '#000' }} />
              <button type="submit" style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em', background: 'rgb(0,92,254)', color: '#fff', borderRadius: 10, padding: '12px 24px', border: 'none', cursor: 'pointer', marginTop: 4 }}>
                Contáctanos
              </button>
              <p style={{ fontFamily: 'Inter, sans-serif', fontStyle: 'italic', fontSize: 10, color: '#8C8C8C', margin: 0 }}>
                *Al completar este formulario acceptas nuestro aviso de privacidad
              </p>
            </form>
          </div>

          {/* Right: restaurant photo */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: 500 }}>
            <Image
              src="/images/photo-contact.jpg"
              alt="LI-ONNA interior"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
              sizes="50vw"
            />
          </div>
        </div>

        {/* Google Maps */}
        <section style={{ width: '100%', height: 400 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8!2d-3.6918!3d40.4196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229128f2f7b6d%3A0x8c7f6ef39af3f1a6!2sC.%20de%20Recoletos%2C%201%2C%20Salamanca%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LI-ONNA ubicación en Google Maps"
          />
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1199px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1439px) {
          .contact-left { padding: 60px 40px !important; }
          .contact-h1 { font-size: 44px !important; }
        }
        @media (max-width: 809px) {
          .contact-left { padding: 40px 16px !important; }
          .contact-h1 { font-size: 36px !important; }
        }
      `}</style>
    </>
  );
}
