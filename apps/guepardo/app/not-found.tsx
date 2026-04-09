import Link from 'next/link';

export const metadata = {
  title: '404 — GUEPARDO',
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
        backgroundColor: '#3d1010',
        color: 'rgb(253, 230, 186)',
        fontFamily: '"MADE TOMMY ExtraBold", Arial, sans-serif',
        textAlign: 'center',
        gap: '24px',
      }}
    >
      <h1 style={{ fontSize: 'clamp(64px, 12vw, 160px)', margin: 0, letterSpacing: '0.02em' }}>404</h1>
      <p style={{ fontSize: '18px', maxWidth: '480px', margin: 0, letterSpacing: '0.08em' }}>
        Esta página no está en la carta. Regresa al inicio y pide algo de beber.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '8px',
          padding: '14px 28px',
          border: '1px solid rgb(253, 230, 186)',
          borderRadius: '999px',
          color: 'rgb(253, 230, 186)',
          textDecoration: 'none',
          fontSize: '13px',
          letterSpacing: '0.2em',
        }}
      >
        VOLVER AL INICIO
      </Link>
    </main>
  );
}
