'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[houdinni] global error', error);
  }, [error]);

  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          backgroundColor: '#050505',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(56px, 10vw, 140px)', margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>
          THE TRICK FAILED
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.8 }}>
          Hubo un problema con la magia. Intenta otra vez.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: '8px',
            padding: '14px 32px',
            border: '1px solid rgba(255,255,255,0.3)',
            background: 'transparent',
            borderRadius: '999px',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '12px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Reintentar
        </button>
      </body>
    </html>
  );
}
