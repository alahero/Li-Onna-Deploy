'use client';

import { useCallback, Suspense } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useReservationBookingUrl } from '@/components/reservation-booking-provider';
import { ReservationDrawer } from '@/components/reservation-drawer';

const CLAVE = 'reservas';

function ReservasQueryOverlayInner() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const urlReserva = useReservationBookingUrl();

  const abierto = (sp.get(CLAVE) === '1' || sp.get(CLAVE) === 'abrir') && Boolean(urlReserva);

  const cerrar = useCallback(() => {
    const next = new URLSearchParams(sp.toString());
    next.delete(CLAVE);
    const q = next.toString();
    router.replace(q ? `${pathname}?${q}` : pathname, { scroll: false });
  }, [pathname, router, sp]);

  if (!urlReserva) {
    return null;
  }

  return (
    <ReservationDrawer
      abrir={abierto}
      alCerrar={cerrar}
      urlReserva={urlReserva}
    />
  );
}

/**
 * Panel alineado con `?reservas=1` (no depende de useState en el nav).
 * Debe ir dentro de `ReservationBookingProvider`.
 */
export function ReservasQueryOverlay() {
  return (
    <Suspense fallback={null}>
      <ReservasQueryOverlayInner />
    </Suspense>
  );
}
