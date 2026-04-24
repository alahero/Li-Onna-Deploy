'use client';

import { useCallback, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';

type ReservationDrawerProps = {
  abrir: boolean;
  alCerrar: () => void;
  /** Página pública de CoverManager (mismo enlace que “Abrir en nueva pestaña”) */
  urlReserva: string;
};

/**
 * Panel lateral (drawer) con iframe al widget de CoverManager.
 * Patrón equivalente al sitio en Framer: no podemos reutilizar su JS ofuscado;
 * se embebe la app de reservas vía URL configurada en CMS.
 */
export function ReservationDrawer({ abrir, alCerrar, urlReserva }: ReservationDrawerProps) {
  const idBase = useId();
  const idTituloPanel = `reservas-titulo${idBase.replace(/:/g, '')}`;
  const refPanel = useRef<HTMLElement | null>(null);
  const refCerrar = useRef<HTMLButtonElement | null>(null);
  const refGatilloAnterior = useRef<HTMLElement | null>(null);

  const cerrar = useCallback(() => {
    alCerrar();
  }, [alCerrar]);

  // Bloquear scroll del body mientras el panel esté abierto
  useEffect(() => {
    if (!abrir) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [abrir]);

  // Escape, foco atrapado básico
  useEffect(() => {
    if (!abrir) return;
    const activo = document.activeElement;
    if (activo instanceof HTMLElement) refGatilloAnterior.current = activo;
    requestAnimationFrame(() => refCerrar.current?.focus());

    const enTecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrar();
    };
    document.addEventListener('keydown', enTecla);
    return () => document.removeEventListener('keydown', enTecla);
  }, [abrir, cerrar]);

  useEffect(() => {
    if (abrir) return;
    const t = refGatilloAnterior.current;
    if (t && document.contains(t)) t.focus();
  }, [abrir]);

  if (typeof document === 'undefined' || !abrir) return null;

  return createPortal(
    <div
      className="reservas-capa"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 20_000,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
      }}
      role="presentation"
    >
      <button
        type="button"
        className="reservas-capa__backdrop"
        aria-label="Cerrar panel de reservas"
        onClick={cerrar}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.45)',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      />
      <nav
        id="reservas-panel"
        ref={refPanel}
        className="reservas-capa__panel"
        data-framer-name="Content"
        role="dialog"
        aria-modal="true"
        style={{
          position: 'relative',
          width: 'min(100vw, 400px)',
          maxWidth: '100%',
          height: '100dvh',
          background: '#fff',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
        tabIndex={-1}
        aria-labelledby={idTituloPanel}
      >
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 16px',
            borderBottom: '1px solid #E8E8E8',
            flexShrink: 0,
          }}
        >
          <h2
            id={idTituloPanel}
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 600,
              color: '#111',
            }}
          >
            Reservas
          </h2>
          <button
            type="button"
            ref={refCerrar}
            onClick={cerrar}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'transparent',
              border: 'none',
              color: 'rgb(0, 91, 255)',
              fontSize: 14,
              cursor: 'pointer',
              padding: '4px 8px',
            }}
            aria-label="Cerrar"
          >
            Cerrar
            <span aria-hidden>×</span>
          </button>
        </header>
        <div
          style={{
            flex: 1,
            minHeight: 0,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            background: '#fafafa',
          }}
        >
          {/*
            CoverManager: misma ruta pública del motor.
            Necesitamos ancho/altura reales; sin sandbox estricto para no romper pago/JS del widget.
          */}
          <iframe
            key={urlReserva}
            title="Reservas LI-ONNA (CoverManager)"
            src={urlReserva}
            allow="payment *; clipboard-write; fullscreen; geolocation *"
            loading="eager"
            style={{
              flex: 1,
              width: '100%',
              minHeight: 520,
              border: 'none',
            }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <footer
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
            padding: '10px 16px',
            borderTop: '1px solid #E8E8E8',
            fontSize: 12,
            flexShrink: 0,
          }}
        >
          <a
            href={urlReserva}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgb(0, 91, 255)' }}
          >
            Abrir en CoverManager
          </a>
          <button
            type="button"
            onClick={cerrar}
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: '6px 12px',
              fontSize: 12,
              cursor: 'pointer',
            }}
          >
            Cerrar
          </button>
        </footer>
      </nav>
    </div>,
    document.body
  );
}
