'use client';

import { createContext, useContext } from 'react';

const ReservationBookingContext = createContext<string | null>(null);

/** URL del motor CoverManager; viene del layout (Keystatic) y la consume el Navbar. */
export function ReservationBookingProvider({
  url,
  children,
}: {
  url: string | null;
  children: React.ReactNode;
}) {
  const clean = url?.trim() ?? '';
  return (
    <ReservationBookingContext.Provider value={clean.length > 0 ? clean : null}>
      {children}
    </ReservationBookingContext.Provider>
  );
}

export function useReservationBookingUrl() {
  return useContext(ReservationBookingContext);
}
