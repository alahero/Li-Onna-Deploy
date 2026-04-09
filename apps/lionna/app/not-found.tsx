import Link from 'next/link';

export const metadata = {
  title: '404 — LI-ONNA',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
        gap: '28px',
        backgroundColor: 'rgb(0, 91, 255)',
        color: '#ffffff',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <h1 style={{ fontSize: 'clamp(80px, 15vw, 200px)', margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>
        404
      </h1>
      <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.9 }}>
        Esta página no está en el menú. Vuelve al inicio para descubrir nuestra cocina.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '8px',
          padding: '14px 32px',
          border: '1.5px solid #ffffff',
          borderRadius: '999px',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '13px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Volver al inicio
      </Link>
    </main>
  );
}
