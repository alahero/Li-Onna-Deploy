import Link from 'next/link';

export const metadata = {
  title: '404 — Mandala Group',
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
        backgroundColor: '#0e0e0f',
        color: '#ffffff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h1 style={{ fontSize: 'clamp(80px, 14vw, 200px)', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>
        404
      </h1>
      <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.75 }}>
        This experience hasn&apos;t been crafted yet. Return to the main page to explore our world.
      </p>
      <Link
        href="/"
        style={{
          marginTop: '8px',
          padding: '14px 32px',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '999px',
          color: '#ffffff',
          textDecoration: 'none',
          fontSize: '13px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
