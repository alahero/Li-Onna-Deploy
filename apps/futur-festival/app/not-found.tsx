import Link from 'next/link';

export const metadata = {
  title: '404 — FUTUR Festival',
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
        backgroundColor: '#224366',
        color: '#ffffff',
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
      }}
    >
      <h1 style={{ fontSize: 'clamp(80px, 16vw, 220px)', margin: 0, fontWeight: 900, letterSpacing: '-0.03em' }}>
        404
      </h1>
      <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.85 }}>
        Esta frecuencia está fuera del espectro. El futuro del sonido sigue sucediendo en la página principal.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '8px',
          padding: '14px 32px',
          border: '2px solid #ffffff',
          borderRadius: '999px',
          color: '#ffffff',
          textDecoration: 'none',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          fontSize: '13px',
        }}
      >
        VOLVER AL INICIO
      </Link>
    </main>
  );
}
