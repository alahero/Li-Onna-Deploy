import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones — Tehmplo',
  description: 'Términos y Condiciones Generales de Tehmplo.com',
};

export default function TCPage() {
  return (
    <div
      style={{
        backgroundColor: '#0f0e0c',
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: '"Source Sans 3", sans-serif',
      }}
    >
      {/* Nav back */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          height: 60,
          backgroundColor: 'rgba(14, 15, 18, 0.95)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          zIndex: 6,
        }}
      >
        <Link
          href="/"
          style={{
            color: 'rgb(239, 128, 36)',
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          ← Regresar
        </Link>
      </header>

      <main
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: '60px 24px 100px',
        }}
      >
        <h1
          style={{
            fontFamily: '"Basteleur Moonlight", sans-serif',
            fontSize: 28,
            fontWeight: 300,
            color: '#ffffff',
            marginBottom: 8,
            lineHeight: 1.3,
            textTransform: 'uppercase',
          }}
        >
          Términos y Condiciones Generales de Tehmplo.com
        </h1>
        <p
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: 13,
            color: '#888888',
            marginBottom: 48,
          }}
        >
          Última actualización: 02 de Mayo de 2025
        </p>

        {[
          {
            heading: '1. ACCESO Y USO DEL SITIO WEB',
            content: `El acceso y uso del sitio web www.tehmplo.com implica la aceptación plena y sin reservas de los presentes Términos y Condiciones. Si no está de acuerdo con estos términos, deberá abstenerse de usar el sitio.`,
          },
          {
            heading: '2. IDENTIFICACIÓN DE LAS PARTES',
            content: `El sitio web Tehmplo.com es operado por Core Global Trans-Logistic SA de CV, con domicilio en C. Luigi Pirandello 5297, Col. Vallarta Universidad, 45110, Zapopan, Jalisco, México.`,
          },
          {
            heading: '3. GENERALIDADES',
            content: `La venta de boletos se realiza exclusivamente a través de Tickets.tehmplo.com y VivaTickets. No se reconocerán boletos adquiridos por canales no autorizados. Tehmplo se reserva el derecho de admisión.`,
          },
          {
            heading: '4. POLÍTICA DE REEMBOLSO Y TRANSFERENCIA',
            content: `No se realizan reembolsos bajo ninguna circunstancia. Se permite la transferencia del boleto a nombre de otra persona, siempre que se presente identificación oficial del comprador original. La transferencia debe solicitarse con al menos 48 horas de anticipación al evento.`,
          },
          {
            heading: '5. EVENTO, ARTISTAS Y HORARIOS SUJETOS A CAMBIOS',
            content: `Tehmplo se reserva el derecho de modificar la programación de artistas, horarios y actividades sin previo aviso. Dichos cambios no serán motivo de reembolso. En caso de cancelación total del evento, se notificará a los compradores por los medios oficiales.`,
          },
          {
            heading: '6. PROPIEDAD INTELECTUAL DE TEHMPLO',
            content: `Al ingresar al recinto, el asistente otorga a Tehmplo un derecho irrevocable, no exclusivo, mundial y libre de regalías para usar, reproducir, modificar, publicar y distribuir su imagen, voz y/o likeness captados durante el evento, en cualquier medio o formato, sin necesidad de compensación adicional.`,
          },
          {
            heading: '7. PROHIBICIÓN DE TRANSMISIONES EN VIVO',
            content: `Queda estrictamente prohibido realizar transmisiones en vivo (streaming) del evento a través de cualquier plataforma digital. El incumplimiento de esta disposición podrá derivar en la expulsión del recinto sin derecho a reembolso.`,
          },
          {
            heading: '8. ASUNCIÓN DE RIESGO, RENUNCIA Y LIMITACIÓN DE RESPONSABILIDAD',
            content: `El asistente reconoce y asume todos los riesgos inherentes a la participación en eventos masivos. Tehmplo no será responsable por lesiones, daños, pérdida de pertenencias ni cualquier otro perjuicio que pudiera sufrir el asistente durante el evento.`,
          },
          {
            heading: '9. CHECK-IN Y HORARIO',
            content: `El check-in estará disponible de 21:00 a 02:00 horas. El proceso de validación de boleto toma aproximadamente 15 minutos. Se recomienda llegar con tiempo suficiente para evitar contratiempos.`,
          },
          {
            heading: '10. FORMAS DE PAGO',
            content: `Se aceptan tarjetas de crédito y débito: Visa, MasterCard, Discover y American Express. Todos los precios están expresados en Pesos Mexicanos (MXN). No se aceptan pagos en moneda extranjera.`,
          },
          {
            heading: '11. PRODUCTOS ESPECIALES',
            content: `Los paquetes multi-función (del 31 de Diciembre de 2025 al 12 de Enero de 2026) están sujetos a términos específicos comunicados al momento de la compra. Consulte la descripción de cada paquete antes de adquirirlo.`,
          },
          {
            heading: '12. REQUERIMIENTOS DE ENTRADA',
            content: `Para ingresar al recinto es obligatorio:\n• Ser mayor de 18 años y presentar identificación oficial vigente.\n• Cumplir con el código de vestimenta establecido por Tehmplo.\n• No portar artículos prohibidos.\n• Tehmplo se reserva el derecho de negar el acceso a cualquier persona que no cumpla con los requisitos establecidos o cuyo comportamiento sea considerado inapropiado.`,
          },
          {
            heading: '13. ARTÍCULOS PROHIBIDOS',
            content: `Está prohibido ingresar con: armas de cualquier tipo, equipo profesional de grabación o fotografía, bolsas de gran tamaño (mayores a 20×15 cm), sustancias controladas o ilegales, bebidas o alimentos del exterior, y cualquier objeto que pueda representar un riesgo para la seguridad de los asistentes.`,
          },
        ].map((section) => (
          <section key={section.heading} style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontFamily: '"Austin Cyr Roman", serif',
                fontSize: 18,
                fontWeight: 400,
                color: 'rgb(239, 128, 36)',
                textTransform: 'uppercase',
                marginBottom: 10,
                letterSpacing: '0.05em',
              }}
            >
              {section.heading}
            </h2>
            <p
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: 14,
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: 1.8,
                opacity: 0.85,
                whiteSpace: 'pre-line',
              }}
            >
              {section.content}
            </p>
          </section>
        ))}

        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <p
            style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: 12,
              color: '#888888',
              textAlign: 'center',
            }}
          >
            © {new Date().getFullYear()} Tehmplo. Todos los derechos reservados. |{' '}
            <a href="mailto:hello@tehmplo.mx" style={{ color: '#ef8024', textDecoration: 'none' }}>
              hello@tehmplo.mx
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
