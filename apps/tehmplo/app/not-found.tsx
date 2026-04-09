import Link from 'next/link';

export const metadata = {
  title: '404 — Tehmplo',
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
        color: '#ffffff',
      }}
      className="bg-tehmplo-bg"
    >
      <h1 style={{ fontSize: 'clamp(80px, 14vw, 200px)', margin: 0, letterSpacing: '-0.02em', fontWeight: 500 }}>
        404
      </h1>
      <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.8 }}>
        You wandered off the jungle path. Return to the temple.
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
