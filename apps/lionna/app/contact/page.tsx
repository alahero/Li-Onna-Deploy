import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';

/** Embed oficial del pin «Li-Onna» (mismo que en `brand-statement`). */
const MAPA_EMBED_LIONNA =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.285086796682!2d-3.693635823492879!3d40.422375955294875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289b5c5b6e91%3A0x74b5e4fbeff1ec02!2sLi-Onna!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta con LI-ONNA リオンナ — C. de Recoletos, 1, Salamanca, Madrid. Tel: +34 679 836 561.',
  openGraph: {
    title: 'Contacto — LI-ONNA リオンナ',
    description: 'C. de Recoletos, 1, Salamanca, 28001 Madrid. Tel: +34 679 836 561.',
  },
};

const estiloCampo: CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
  borderRadius: 12,
  padding: '12px 16px',
  background: '#fff',
  border: '1px solid #E3E3E3',
  outline: 'none',
  color: '#000',
  width: '100%',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-main">
        {/* Hero: gradiente azul → blanco, foto con márgenes y relación de aspecto tipo pantalla */}
        <section className="contact-hero" aria-labelledby="contacto-hero-titulo">
          <div className="contact-hero-frame">
            <Image
              src="/images/photo-contact.jpg"
              alt="Mesa con platos LI-ONNA"
              fill
              priority
              sizes="(max-width: 809px) 95vw, min(1280px, calc(100vw - 48px))"
              className="contact-hero-img"
            />
            <h1 id="contacto-hero-titulo" className="contact-hero-title">
              Contacto
            </h1>
          </div>
        </section>

        {/* Bloque central: datos a la izquierda, formulario a la derecha */}
        <section className="contact-body">
          <div className="contact-two-col">
            <div className="contact-info-col">
              <div className="contact-block">
                <h2 className="contact-label">Dirección</h2>
                <p className="contact-value">
                  C. de Recoletos, 1, Salamanca
                  <br />
                  28001 Madrid, España
                </p>
              </div>
              <div className="contact-block">
                <h2 className="contact-label">Teléfono</h2>
                <a href="tel:+34679836561" className="contact-link">
                  +34 679 836 561
                </a>
              </div>
              <div className="contact-block">
                <h2 className="contact-label">Email</h2>
                <a href="mailto:hola@lionna.es" className="contact-link">
                  hola@lionna.es
                </a>
              </div>
              <div className="contact-block">
                <h2 className="contact-label">Instagram</h2>
                <a
                  href="https://www.instagram.com/lionnaes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  www.instagram.com/lionnaes
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              <form
                className="contact-form"
                action="mailto:hola@lionna.es"
                method="post"
                encType="text/plain"
              >
                <div className="contact-form-row">
                  <input type="text" name="nombre" placeholder="Nombre" required style={estiloCampo} />
                  <input type="text" name="apellido" placeholder="Apellido" style={estiloCampo} />
                </div>
                <input type="email" name="email" placeholder="Correo" required style={estiloCampo} />
                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  required
                  rows={5}
                  style={{ ...estiloCampo, resize: 'vertical', minHeight: 120, borderRadius: 12 }}
                />
                <button type="submit" className="contact-submit">
                  Contáctanos
                </button>
                <p className="contact-disclaimer">
                  *Al completar este formulario aceptas nuestro aviso de privacidad
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Mapa */}
        <section className="contact-map-section">
          <iframe
            src={MAPA_EMBED_LIONNA}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', minHeight: 420 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de LI-ONNA en Google Maps"
          />
        </section>
      </main>

      <Footer />

      <style>{`
        .contact-main {
          min-height: 100vh;
          background: #fff;
        }

        .contact-hero {
          background: linear-gradient(180deg, rgb(0, 91, 255) 0%, rgb(230, 238, 255) 42%, #ffffff 100%);
          padding: clamp(20px, 4vw, 56px);
          padding-top: clamp(16px, 3vw, 40px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Marco con relación 16:9 (pantalla ancha); en vertical se aproxima a la pantalla móvil */
        .contact-hero-frame {
          position: relative;
          width: min(1280px, calc(100vw - 48px), calc(75vh * 16 / 9));
          aspect-ratio: 16 / 9;
          max-height: min(75vh, 880px);
          margin: 0 auto;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 40, 120, 0.18);
        }

        .contact-hero-img {
          object-fit: cover;
          object-position: 50% 45%;
        }

        .contact-hero-title {
          position: absolute;
          left: clamp(16px, 3vw, 40px);
          bottom: clamp(16px, 3vw, 40px);
          margin: 0;
          font-family: 'Odesta', serif;
          font-weight: 500;
          font-size: clamp(2.75rem, 8vw, 162px);
          line-height: 0.95;
          color: #fff;
          letter-spacing: 0.02em;
          text-shadow: 0 4px 32px rgba(0, 0, 0, 0.35);
          pointer-events: none;
          z-index: 2;
        }

        .contact-body {
          background: #fff;
          padding: clamp(48px, 6vw, 88px) clamp(20px, 4vw, 64px) clamp(56px, 7vw, 96px);
        }

        .contact-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 72px);
          max-width: 1120px;
          margin: 0 auto;
          align-items: start;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .contact-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-label {
          margin: 0;
          font-family: 'EditorialNew', serif;
          font-weight: 500;
          font-size: 18px;
          letter-spacing: 0.02em;
          color: #111;
        }

        .contact-value {
          margin: 0;
          font-family: 'EditorialNew', serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 1.55;
          letter-spacing: 0.02em;
          color: #1a1a1a;
        }

        .contact-link {
          font-family: 'EditorialNew', serif;
          font-weight: 500;
          font-size: 19px;
          letter-spacing: 0.02em;
          color: #005cfe;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .contact-form-card {
          background: #ecece8;
          border-radius: 16px;
          padding: clamp(20px, 3vw, 28px);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .contact-submit {
          font-family: 'EditorialNew', serif;
          font-weight: 500;
          font-size: 17px;
          letter-spacing: 0.04em;
          background: rgb(0, 92, 254);
          color: #fff;
          border-radius: 12px;
          padding: 14px 24px;
          border: none;
          cursor: pointer;
          margin-top: 4px;
          width: 100%;
        }

        .contact-submit:hover {
          opacity: 0.92;
        }

        .contact-disclaimer {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: 13px;
          color: #8c8c8c;
          margin: 0;
          line-height: 1.4;
        }

        .contact-map-section {
          width: 100%;
          height: min(520px, 55vh);
          min-height: 380px;
          background: #e8ecf0;
        }

        .contact-map-section iframe {
          width: 100%;
          height: 100%;
          min-height: 380px;
        }

        @media (max-width: 900px) {
          .contact-two-col {
            grid-template-columns: 1fr;
          }
          .contact-hero-frame {
            width: min(calc(100vw - 32px), calc(60vh * 16 / 9));
            max-height: 60vh;
          }
        }

        @media (max-width: 600px) {
          .contact-form-row {
            grid-template-columns: 1fr;
          }
          .contact-hero-frame {
            width: calc(100vw - 32px);
            aspect-ratio: 9 / 16;
            max-height: min(68vh, 640px);
          }
        }
      `}</style>
    </>
  );
}
