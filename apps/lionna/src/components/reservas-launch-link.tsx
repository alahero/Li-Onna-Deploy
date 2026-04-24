'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo, Suspense, type CSSProperties } from 'react';

const CLAVE = 'reservas';

type ReservasLaunchLinkProps = {
  pillStyle: CSSProperties;
};

/**
 * Construye `?reservas=1` conservando el resto de la query, sin depender de onClick
 * (navegación con Next/Link, más fiable que estado local).
 */
function ReservasLaunchLinkConQuery({ pillStyle }: ReservasLaunchLinkProps) {
  const pathname = usePathname() ?? '/';
  const sp = useSearchParams();

  const href = useMemo(() => {
    const next = new URLSearchParams(sp.toString());
    next.set(CLAVE, '1');
    return `${pathname}?${next.toString()}`;
  }, [pathname, sp]);

  return (
    <Link
      href={href}
      scroll={false}
      style={pillStyle}
      prefetch={false}
      role="button"
    >
      RESERVAS
    </Link>
  );
}

/**
 * `useSearchParams` exige frontera Suspense; fallback con enlace mínimo a abrir reservas en inicio.
 */
export function ReservasLaunchLink(p: ReservasLaunchLinkProps) {
  return (
    <Suspense
      fallback={
        <a href={`/?${CLAVE}=1`} style={p.pillStyle} role="button">
          RESERVAS
        </a>
      }
    >
      <ReservasLaunchLinkConQuery {...p} />
    </Suspense>
  );
}
