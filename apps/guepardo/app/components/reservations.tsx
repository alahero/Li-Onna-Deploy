'use client';

import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useMemo, useRef, useState } from 'react';

interface ReservationsSectionProps {
  reservationUrl: string;
  reservationsBgImage?: string | null;
  guepardoBannerImage?: string | null;
}

type IframeResizerOptions = {
  autoResize?: boolean;
  checkOrigin?: string[];
  heightCalculationMethod?: string;
  log?: boolean;
  scrolling?: boolean;
  warningTimeout?: number;
};

declare global {
  interface Window {
    iFrameResize?: (
      options: IframeResizerOptions,
      target: string | HTMLIFrameElement
    ) => void;
  }
}

export function ReservationsSection({
  reservationUrl,
  reservationsBgImage,
  guepardoBannerImage,
}: ReservationsSectionProps) {
  const bgSrc = reservationsBgImage || '/images/reservations-bg.png';
  const bannerSrc = guepardoBannerImage || '/images/guepardo-banner.png';
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [resizerReady, setResizerReady] = useState(false);
  const allowedOrigins = useMemo(() => {
    const origins = new Set<string>(['https://www.covermanager.com']);
    try {
      origins.add(new URL(reservationUrl).origin);
    } catch {}
    return Array.from(origins);
  }, [reservationUrl]);

  useEffect(() => {
    const iframeEl = iframeRef.current as
      | (HTMLIFrameElement & {
          iFrameResizer?: { removeListeners?: () => void };
        })
      | null;

    if (!resizerReady || !iframeEl || typeof window.iFrameResize !== 'function') {
      return;
    }

    iframeEl.iFrameResizer?.removeListeners?.();

    window.iFrameResize(
      {
        autoResize: true,
        checkOrigin: allowedOrigins,
        heightCalculationMethod: 'max',
        log: false,
        scrolling: false,
        warningTimeout: 10000,
      },
      iframeEl
    );

    return () => {
      iframeEl.iFrameResizer?.removeListeners?.();
    };
  }, [allowedOrigins, resizerReady]);

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
          ref={iframeRef}
          id="restaurante-guepardo"
          className="reservations-iframe"
          title="Reservas"
          src={reservationUrl}
          allow="payment"
          frameBorder={0}
          scrolling="no"
          style={{
            border: 'none',
            display: 'block',
            minHeight: '720px',
            width: '100%',
            overflow: 'hidden',
          }}
        />
      </div>
      {/* Mismo host que el iframe: pareado con el widget CoverManager (ver diseño Framer / CM) */}
      <Script
        src="https://www.covermanager.com/js/iframeResizer/iframeResizer.min.js"
        strategy="afterInteractive"
        onLoad={() => setResizerReady(true)}
      />

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
