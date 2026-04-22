'use client';

import { useState, useRef, useEffect, useId, useLayoutEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const IDIOMAS: { clave: string; etiqueta: string }[] = [
  { clave: 'es', etiqueta: 'Spanish' },
  { clave: 'en', etiqueta: 'English' },
  { clave: 'pt', etiqueta: 'Portuguese' },
  { clave: 'fr', etiqueta: 'French' },
];

const ALMACEN_IDIOMA = 'lionna-footer-idioma';

/** ms; debe coincidir con la transición CSS del panel. */
const DURACION_CIERRE_MS = 220;

function IconoGlobo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

type PosicionFija = { arriba: number; derecha: number; minAncho: number };

/**
 * Botón con lista de idiomas (portal + fixed para no recortar por overflow del footer).
 * Transición suave al abrir/cerrar.
 */
export function FooterLanguageSelector() {
  const [abierto, setAbierto] = useState(false);
  const [elegido, setElegido] = useState(0);
  const [montarPanel, setMontarPanel] = useState(false);
  const [panelListo, setPanelListo] = useState(false);
  const [pos, setPos] = useState<PosicionFija | null>(null);
  const [nodoBody, setNodoBody] = useState<HTMLElement | null>(null);

  const contenedorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const listId = useId();
  const timerCierreRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setNodoBody(document.body);
  }, []);

  useEffect(() => {
    try {
      const guardado = localStorage.getItem(ALMACEN_IDIOMA);
      if (guardado) {
        const i = IDIOMAS.findIndex((d) => d.clave === guardado);
        if (i >= 0) setElegido(i);
      }
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  const calcularPos = useCallback(() => {
    const el = contenedorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      arriba: r.bottom + 8,
      derecha: Math.max(8, window.innerWidth - r.right),
      minAncho: Math.max(160, r.width),
    });
  }, []);

  useLayoutEffect(() => {
    if (!abierto) return;
    setPanelListo(false);
    setMontarPanel(true);
    calcularPos();
    // Doble rAF: un frame retrasado deja de pintar en estado inicial (opacidad 0) y dispara transición
    const id1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPanelListo(true));
    });
    return () => cancelAnimationFrame(id1);
  }, [abierto, calcularPos]);

  useLayoutEffect(() => {
    if (!abierto) return;
    const onRecalc = () => calcularPos();
    window.addEventListener('resize', onRecalc);
    window.addEventListener('scroll', onRecalc, true);
    return () => {
      window.removeEventListener('resize', onRecalc);
      window.removeEventListener('scroll', onRecalc, true);
    };
  }, [abierto, calcularPos]);

  // Al pedir cierre: anima salida y luego desmonta el panel
  useEffect(() => {
    if (abierto) {
      if (timerCierreRef.current) {
        clearTimeout(timerCierreRef.current);
        timerCierreRef.current = null;
      }
      return;
    }
    if (!montarPanel) return;
    setPanelListo(false);
    timerCierreRef.current = setTimeout(() => {
      setMontarPanel(false);
      setPos(null);
    }, DURACION_CIERRE_MS);
    return () => {
      if (timerCierreRef.current) clearTimeout(timerCierreRef.current);
    };
  }, [abierto, montarPanel]);

  const cerrarSiClicFuera = useCallback(
    (e: MouseEvent) => {
      const t = e.target as Node;
      if (contenedorRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setAbierto(false);
    },
    []
  );

  const cerrarSiEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setAbierto(false);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    document.addEventListener('mousedown', cerrarSiClicFuera);
    return () => document.removeEventListener('mousedown', cerrarSiClicFuera);
  }, [abierto, cerrarSiClicFuera]);

  useEffect(() => {
    if (!abierto) return;
    document.addEventListener('keydown', cerrarSiEscape);
    return () => document.removeEventListener('keydown', cerrarSiEscape);
  }, [abierto, cerrarSiEscape]);

  const idioma = IDIOMAS[elegido]!;

  const alElegir = (indice: number) => {
    setElegido(indice);
    setAbierto(false);
    try {
      localStorage.setItem(ALMACEN_IDIOMA, IDIOMAS[indice]!.clave);
    } catch {
      /* noop */
    }
  };

  const estiloPill: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: 20,
    padding: '8px 16px',
    cursor: 'pointer',
    background: 'transparent',
    color: '#fff',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    fontSize: 13,
  };

  const transicion = 'opacity 0.2s ease, transform 0.2s ease';

  const menu =
    montarPanel && nodoBody && pos ? (
      <ul
        ref={menuRef}
        id={listId}
        role="listbox"
        aria-label="Idioma"
        style={{
          position: 'fixed',
          top: pos.arriba,
          right: pos.derecha,
          zIndex: 10_000,
          margin: 0,
          padding: '8px 0',
          listStyle: 'none',
          minWidth: pos.minAncho,
          background: 'rgb(24, 24, 24)',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          transition: transicion,
          opacity: panelListo ? 1 : 0,
          transform: panelListo ? 'translateY(0) scale(1)' : 'translateY(-6px) scale(0.98)',
          willChange: 'opacity, transform',
        }}
      >
        {IDIOMAS.map((item, i) => (
          <li key={item.clave} role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={i === elegido}
              onClick={() => alElegir(i)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '10px 16px',
                border: 'none',
                background: i === elegido ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontSize: 13,
                fontWeight: 400,
                cursor: 'pointer',
              }}
            >
              {item.etiqueta}
            </button>
          </li>
        ))}
      </ul>
    ) : null;

  return (
    <div ref={contenedorRef} style={{ position: 'relative' }}>
      <button
        type="button"
        style={estiloPill}
        aria-haspopup="listbox"
        aria-expanded={abierto}
        aria-controls={montarPanel ? listId : undefined}
        onClick={() => setAbierto((v) => !v)}
      >
        <IconoGlobo />
        <span>{idioma.etiqueta}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden
          style={{ transform: abierto ? 'rotate(180deg)' : undefined, transition: 'transform 0.2s ease' }}
        >
          <path d="M1 1l4 4 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {nodoBody && createPortal(menu, nodoBody)}
    </div>
  );
}
