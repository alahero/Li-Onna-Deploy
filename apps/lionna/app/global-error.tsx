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
    console.error('[lionna] global error', error);
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
          backgroundColor: 'rgb(0, 91, 255)',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          gap: '28px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(56px, 10vw, 140px)', margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>
          ごめんなさい
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.9 }}>
          Algo no salió bien. Por favor, intenta de nuevo.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: '8px',
            padding: '14px 32px',
            border: '1.5px solid #ffffff',
            background: 'transparent',
            borderRadius: '999px',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Reintentar
        </button>
      </body>
    </html>
  );
}
