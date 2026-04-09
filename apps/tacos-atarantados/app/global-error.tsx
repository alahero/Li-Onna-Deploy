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
    console.error('[tacos-atarantados] global error', error);
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
          backgroundColor: '#0c0c0c',
          color: '#ffffff',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(56px, 10vw, 120px)', margin: 0, lineHeight: 0.9 }}>
          ¡QUÉ TRANZA!
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0 }}>
          Se nos atarantó la página. Dale una patada y vuelve a intentarlo.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: '8px',
            padding: '14px 32px',
            backgroundColor: '#ffd90a',
            color: '#111',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: '14px',
          }}
        >
          Reintentar
        </button>
      </body>
    </html>
  );
}
