'use client';

import Image from 'next/image';

interface ReservationsSectionProps {
  reservationUrl: string;
  reservationsBgImage?: string | null;
  guepardoBannerImage?: string | null;
}

export function ReservationsSection({
  reservationUrl,
  reservationsBgImage,
  guepardoBannerImage,
}: ReservationsSectionProps) {
  const bgSrc = reservationsBgImage || '/images/reservations-bg.png';
  const bannerSrc = guepardoBannerImage || '/images/guepardo-banner.png';
  return (
    <section
      style={{
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        height: 'min-content',
        justifyContent: 'flex-start',
        overflow: 'clip',
        padding: '0px',
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Background image — absolute fill */}
      <Image
        src={bgSrc}
        alt=""
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
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
          src={bannerSrc}
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
          src={bannerSrc}
          alt="GUEPARDO"
          width={653}
          height={275}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* CoverManager: altura con vh para evitar scroll anidado dentro del iframe */}
      <div
        className="reservations-widget-wrap"
        style={{
          flex: 'none',
          height: 'auto',
          minWidth: '300px',
          mixBlendMode: 'multiply',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <iframe
          id="restaurante-guepardo"
          title="Reservas"
          src={reservationUrl}
          allow="payment"
          frameBorder={0}
          scrolling="no"
          style={{
            border: 'none',
            display: 'block',
            height: '1100px',
            width: '100%',
            overflow: 'hidden',
          }}
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
          src={bannerSrc}
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
          src={bannerSrc}
          alt=""
          width={653}
          height={275}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </section>
  );
}
