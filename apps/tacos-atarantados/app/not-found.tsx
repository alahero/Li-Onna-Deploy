import Link from 'next/link';

export const metadata = {
  title: 'No encontramos esa página',
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
        backgroundColor: '#0c0c0c',
        color: '#ffffff',
      }}
    >
      <h1 style={{ fontSize: 'clamp(72px, 14vw, 180px)', margin: 0, lineHeight: 0.9 }}>404</h1>
      <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0 }}>
        Parece que esta página se echó un trompo y se fue. Regrésate a la taquería.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '8px',
          padding: '14px 32px',
          backgroundColor: '#ffd90a',
          color: '#111',
          borderRadius: '999px',
          textDecoration: 'none',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        Volver al inicio
      </Link>
    </main>
  );
}
