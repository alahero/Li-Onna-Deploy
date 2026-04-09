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
    console.error('[tehmplo] global error', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          backgroundColor: '#0f0e0c',
          color: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          gap: '24px',
        }}
      >
        <h1 style={{ fontSize: 'clamp(56px, 10vw, 140px)', margin: 0, fontWeight: 500 }}>
          LOST IN THE JUNGLE
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '520px', margin: 0, opacity: 0.8 }}>
          Something went wrong. Try again in a moment.
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
            fontSize: '13px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
