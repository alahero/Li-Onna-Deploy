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
    console.error('[spade] global error', error);
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
          backgroundColor: '#000000',
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(56px, 10vw, 140px)', margin: 0, letterSpacing: '0.02em', fontWeight: 500 }}>
          ERROR
        </h1>
        <p style={{ fontSize: '16px', maxWidth: '480px', margin: 0, opacity: 0.7 }}>
          Algo salió mal. Por favor, recarga la página.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: '8px',
            padding: '14px 28px',
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
