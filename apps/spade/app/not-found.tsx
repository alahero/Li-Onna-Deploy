import Link from 'next/link';

export const metadata = {
  title: '404 — SPADE',
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
        gap: '24px',
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      <h1 style={{ fontSize: 'clamp(80px, 14vw, 200px)', margin: 0, letterSpacing: '0.02em', fontWeight: 500 }}>
        404
      </h1>
      <p style={{ fontSize: '16px', maxWidth: '480px', margin: 0, opacity: 0.7, letterSpacing: '0.02em' }}>
        Esta página no está en la carta.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '8px',
          padding: '14px 28px',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '999px',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '12px',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        Volver al inicio
      </Link>
    </main>
  );
}
