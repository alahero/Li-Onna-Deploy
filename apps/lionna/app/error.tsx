'use client';

import { useEffect } from 'react';

/**
 * Límite de error del segmento raíz: captura fallos en páginas/componentes hijos
 * (no en el propio `layout.tsx`). Complementa `global-error.tsx`.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[lionna] error en segmento', error);
  }, [error]);

  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
        gap: '28px',
        backgroundColor: 'rgb(0, 91, 255)',
        color: '#ffffff',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', margin: 0, fontWeight: 500, letterSpacing: '-0.02em' }}>
        ごめんなさい
      </h1>
      <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.9 }}>
        Algo no salió bien al cargar esta parte. Puedes reintentar o volver más tarde.
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
    </main>
  );
}
