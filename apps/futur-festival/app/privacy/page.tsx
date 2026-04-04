import Image from 'next/image';

export const metadata = {
  title: 'Aviso de Privacidad — FUTUR Festival',
  description: 'Aviso de Privacidad de FUTUR Festival México. CORE GLOBAL TRANS-LOGISTIC SA de CV.',
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#000000' }}>

      {/* Sticky Navbar */}
      <nav className="privacy-nav">
        <a href="/" aria-label="FUTUR Festival — Inicio">
          <Image
            src="/favicon-square.png"
            alt="FUTUR Festival"
            width={47}
            height={47}
            style={{ objectFit: 'contain', width: '47px', height: '47px' }}
          />
        </a>
      </nav>

      {/* Content */}
      <div
        className="privacy-content"
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '60px 200px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <h1
          style={{
            fontFamily: '"NT Dapper Bold", "NT Dapper Bold Placeholder", sans-serif',
            fontSize: '35px',
            fontWeight: 700,
            lineHeight: '1.2em',
            color: 'rgb(0, 0, 0)',
            marginBottom: '20px',
          }}
        >
          AVISO DE PRIVACIDAD.
        </h1>

        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6', marginBottom: '12px' }}>
          <strong>CORE GLOBAL TRANS-LOGISTIC SA de CV</strong>, con nombre comercial{' '}
          <strong>Mandala Group y/o FuturFestival Mexico</strong>, con domicilio en{' '}
          <strong>Calle Luigi Pirandello #5297, Zapopan, Jalisco, 45110</strong>, es responsable
          del tratamiento de sus datos personales conforme a la{' '}
          <strong>
            Ley Federal de Protección de Datos Personales en Posesión de los Particulares
            (LFPDPPP)
          </strong>
          .
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          1. DATOS PERSONALES QUE SE RECABAN
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Recabamos los siguientes datos personales: Nombre, Fecha de nacimiento, Teléfono, Correo
          electrónico. Adicionalmente, mediante el uso de Cookies y tecnologías de seguimiento,
          podemos recopilar: dirección IP, tipo de sesión, información del dispositivo y preferencias
          de navegación.
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          2. FINALIDADES DEL TRATAMIENTO DE DATOS
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Sus datos personales serán utilizados para las siguientes finalidades primarias:
        </p>
        <ul style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6', paddingLeft: '24px' }}>
          <li>Registro e identificación de asistentes al festival.</li>
          <li>Comunicación de información relevante sobre el evento.</li>
          <li>Gestión de boletos y acceso al festival.</li>
        </ul>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Finalidades secundarias (mercadotecnia y publicidad):
        </p>
        <ul style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6', paddingLeft: '24px' }}>
          <li>Envío de comunicaciones de marketing y promociones.</li>
          <li>Realización de encuestas de satisfacción.</li>
          <li>Recomendaciones personalizadas de artistas y eventos.</li>
          <li>Invitaciones a futuros eventos.</li>
        </ul>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          3. TRANSFERENCIAS DE DATOS PERSONALES
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Sus datos podrán ser compartidos con:
        </p>
        <ul style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6', paddingLeft: '24px' }}>
          <li>Centros de consumo y proveedores de servicios del festival.</li>
          <li>Socios comerciales y patrocinadores del evento.</li>
          <li>Autoridades competentes cuando sea requerido por ley.</li>
          <li>Empresas de seguridad para garantizar el acceso al evento.</li>
        </ul>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          4. CONSERVACIÓN DE DATOS
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Los datos de identificación y contacto serán conservados por un período de{' '}
          <strong>5 años</strong> a partir de su recolección. Los datos con fines publicitarios se
          conservarán hasta que usted solicite su cancelación.
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          5. MEDIDAS DE SEGURIDAD
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus
          datos personales, incluyendo: acceso restringido, cifrado de datos, registros electrónicos
          y controles de acceso físico.
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          6. DERECHOS ARCO
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Usted tiene derecho a <strong>Acceder</strong>, <strong>Rectificar</strong>,{' '}
          <strong>Cancelar</strong> u <strong>Oponerse</strong> al tratamiento de sus datos
          personales (Derechos ARCO). Para ejercer estos derechos, envíe su solicitud al correo:{' '}
          <a
            href="mailto:privacidad@mandalagroup.mx"
            style={{ color: '#0099ff', textDecoration: 'none' }}
          >
            privacidad@mandalagroup.mx
          </a>
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          7. REVOCACIÓN DEL CONSENTIMIENTO
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          En cualquier momento puede revocar su consentimiento para el tratamiento de sus datos
          personales para las <strong>finalidades secundarias</strong>. Esta revocación no afectará
          las finalidades primarias necesarias para la prestación del servicio. Para solicitar la
          revocación, contacte a:{' '}
          <a
            href="mailto:privacidad@mandalagroup.mx"
            style={{ color: '#0099ff', textDecoration: 'none' }}
          >
            privacidad@mandalagroup.mx
          </a>
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          8. LIMITACIÓN DEL USO Y DIVULGACIÓN
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Para limitar el uso o divulgación de sus datos personales, puede presentar su petición a:{' '}
          <a
            href="mailto:privacidad@mandalagroup.mx"
            style={{ color: '#0099ff', textDecoration: 'none' }}
          >
            privacidad@mandalagroup.mx
          </a>
          . Le informaremos sobre el resultado de su solicitud en un plazo no mayor a 20 días
          hábiles.
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          9. USO DE COOKIES Y TECNOLOGÍAS DE SEGUIMIENTO
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Este sitio web utiliza cookies, web beacons y píxeles de seguimiento para mejorar su
          experiencia de navegación y recopilar datos estadísticos. Puede deshabilitar el uso de
          cookies a través de la configuración de su navegador, sin embargo, esto puede afectar
          algunas funcionalidades del sitio.
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          10. MODIFICACIONES AL AVISO DE PRIVACIDAD
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Nos reservamos el derecho de efectuar modificaciones o actualizaciones al presente aviso
          de privacidad. Estas modificaciones serán publicadas en nuestro sitio web{' '}
          <a href="https://futurfestival.mx" style={{ color: '#0099ff', textDecoration: 'none' }}>
            futurfestival.mx
          </a>
          .
        </p>

        <h2 style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '18px', marginTop: '24px', marginBottom: '8px' }}>
          11. ACEPTACIÓN DEL AVISO DE PRIVACIDAD
        </h2>
        <p style={{ fontFamily: '"Inter", sans-serif', lineHeight: '1.6' }}>
          Al utilizar nuestro sitio web, realizar la compra de un boleto, proporcionar sus datos de
          manera voluntaria o marcar la casilla de aceptación en nuestros formularios, usted
          reconoce haber leído y aceptado los términos del presente Aviso de Privacidad.
        </p>

        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            color: '#888888',
            fontSize: '13px',
            marginTop: '32px',
            borderTop: '1px solid #e5e5e5',
            paddingTop: '16px',
          }}
        >
          Última actualización: FEBRERO 2026
        </p>
      </div>

    </div>
  );
}
