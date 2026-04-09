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
    console.error('[guepardo] global error', error);
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
          backgroundColor: '#3d1010',
          color: 'rgb(253, 230, 186)',
          fontFamily: '"MADE TOMMY ExtraBold", Arial, sans-serif',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(56px, 10vw, 120px)', margin: 0 }}>ALGO SALIÓ MAL</h1>
        <p style={{ fontSize: '16px', maxWidth: '480px', margin: 0, letterSpacing: '0.08em' }}>
          Tuvimos un problema cargando la página. Intenta de nuevo.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: '8px',
            padding: '14px 28px',
            border: '1px solid rgb(253, 230, 186)',
            background: 'transparent',
            borderRadius: '999px',
            color: 'rgb(253, 230, 186)',
            cursor: 'pointer',
            fontSize: '13px',
            letterSpacing: '0.2em',
          }}
        >
          REINTENTAR
        </button>
      </body>
    </html>
  );
}
