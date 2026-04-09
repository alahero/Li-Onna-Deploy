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
    console.error('[futur-festival] global error', error);
  }, [error]);

  return (
    <html lang="es-MX">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          backgroundColor: '#224366',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(56px, 12vw, 160px)', margin: 0, fontWeight: 900, letterSpacing: '-0.03em' }}>
          SEÑAL PERDIDA
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.85 }}>
          Ocurrió un error cargando el festival. Intenta recargar en unos segundos.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: '8px',
            padding: '14px 32px',
            border: '2px solid #ffffff',
            background: 'transparent',
            borderRadius: '999px',
            color: '#ffffff',
            cursor: 'pointer',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: '13px',
          }}
        >
          REINTENTAR
        </button>
      </body>
    </html>
  );
}
