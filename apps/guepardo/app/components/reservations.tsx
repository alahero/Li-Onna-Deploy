'use client';

import Image from 'next/image';

interface ReservationsSectionProps {
  reservationUrl: string;
}

export function ReservationsSection({ reservationUrl }: ReservationsSectionProps) {
  return (
    <section
      style={{
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: 'min-content',
        justifyContent: 'space-around',
        overflow: 'clip',
        padding: '0px',
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Background image — absolute fill */}
      <Image
        src="/images/reservations-bg.png"
        alt=""
        fill
        sizes="100vw"
        style={{
          objectFit: 'fill',
          borderRadius: 'inherit',
          zIndex: 0,
        }}
      />

      {/* Top GUEPARDO circular banner — Desktop only */}
      <div
        className="hidden-mobile"
        style={{
          aspectRatio: '2.3745 / 1',
          height: '117px',
          mixBlendMode: 'hard-light',
          overflow: 'visible',
          position: 'relative',
          width: '277px',
          zIndex: 1,
        }}
      >
        <Image
          src="/images/guepardo-banner.png"
          alt="GUEPARDO"
          width={653}
          height={275}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Mobile: left half banner */}
      <div
        className="hidden-desktop"
        style={{
          aspectRatio: '2.3745 / 1',
          height: '59px',
          mixBlendMode: 'hard-light',
          overflow: 'visible',
          position: 'relative',
          width: '139px',
          zIndex: 1,
          order: 0,
        }}
      >
        <Image
          src="/images/guepardo-banner.png"
          alt="GUEPARDO"
          width={653}
          height={275}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* CoverManager Reservation Widget */}
      <div
        style={{
          flex: 'none',
          height: 'auto',
          minWidth: '300px',
          mixBlendMode: 'multiply',
          position: 'relative',
          width: '50%',
          zIndex: 1,
        }}
      >
        <iframe
          id="restaurante-guepardo"
          title="Reservas"
          src={reservationUrl}
          allow="payment"
          frameBorder={0}
          height={550}
          width="100%"
          style={{ display: 'block', border: 'none' }}
        />
      </div>

      {/* Mobile: right half banner (rotated 180deg) */}
      <div
        className="hidden-desktop"
        style={{
          aspectRatio: '2.3745 / 1',
          height: '58px',
          mixBlendMode: 'hard-light',
          overflow: 'visible',
          position: 'relative',
          width: '138px',
          zIndex: 1,
          order: 4,
          transform: 'rotate(180deg)',
        }}
      >
        <Image
          src="/images/guepardo-banner.png"
          alt=""
          width={653}
          height={275}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Bottom GUEPARDO circular banner (rotated) — Desktop only */}
      <div
        className="hidden-mobile"
        style={{
          aspectRatio: '2.3745 / 1',
          height: '117px',
          mixBlendMode: 'hard-light',
          overflow: 'visible',
          position: 'relative',
          width: '277px',
          zIndex: 1,
          transform: 'rotate(180deg)',
        }}
      >
        <Image
          src="/images/guepardo-banner.png"
          alt=""
          width={653}
          height={275}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
