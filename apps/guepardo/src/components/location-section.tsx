import React from 'react';
import Link from 'next/link';

interface LocationSectionProps {
  address: string;
  city: string;
  mapUrl: string;
  mapDirectionsUrl: string;
  phone: string;
  email: string;
  hours: string;
  parkingInfo: string;
}

function InfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-brand-gold text-xs uppercase tracking-widest mb-1">
          {label}
        </p>
        <div className="text-brand-white/70 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function LocationSection({
  address,
  city,
  mapUrl,
  mapDirectionsUrl,
  phone,
  email,
  hours,
  parkingInfo,
}: LocationSectionProps) {
  const hoursLines = hours.split('\n').filter(Boolean);

  return (
    <section id="ubicacion" className="py-24 bg-brand-dark">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-4">
            Visítanos
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest text-brand-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Ubicación
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-8 h-px bg-brand-gold" />
            <span className="w-2 h-2 bg-brand-gold rotate-45 inline-block" />
            <span className="w-8 h-px bg-brand-gold" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Map */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-80 lg:h-96 bg-zinc-900 border border-white/10 overflow-hidden">
              {mapUrl ? (
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación de Guepardo"
                  className="absolute inset-0"
                />
              ) : (
                /* Map placeholder */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <svg
                    className="w-16 h-16 text-brand-gold/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <p className="text-brand-gray text-xs uppercase tracking-widest">
                    Mapa próximamente
                  </p>
                </div>
              )}

              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-gold pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-gold pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-gold pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-gold pointer-events-none" />
            </div>

            {/* Directions button */}
            {mapDirectionsUrl && (
              <Link
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 border border-brand-gold/50 text-brand-gold text-xs uppercase tracking-widest font-medium hover:bg-brand-gold hover:text-brand-black transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Cómo llegar
              </Link>
            )}
          </div>

          {/* Right: Info */}
          <div className="order-1 lg:order-2 flex flex-col gap-7">
            {/* Address */}
            <InfoItem
              label="Dirección"
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              }
            >
              <address className="not-italic">
                {address}
                {city && (
                  <>
                    <br />
                    <span className="text-brand-white/50">{city}</span>
                  </>
                )}
              </address>
            </InfoItem>

            {/* Hours */}
            <InfoItem
              label="Horarios"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            >
              {hoursLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </InfoItem>

            {/* Phone */}
            {phone && (
              <InfoItem
                label="Teléfono"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                }
              >
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {phone}
                </a>
              </InfoItem>
            )}

            {/* Email */}
            {email && (
              <InfoItem
                label="Correo"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                }
              >
                <a
                  href={`mailto:${email}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {email}
                </a>
              </InfoItem>
            )}

            {/* Parking */}
            {parkingInfo && (
              <InfoItem
                label="Estacionamiento"
                icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                  </svg>
                }
              >
                {parkingInfo}
              </InfoItem>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
