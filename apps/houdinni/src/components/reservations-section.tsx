import React from 'react';
import Link from 'next/link';

interface ReservationsSectionProps {
  title: string;
  description: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  bookingUrl: string;
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .92h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function ReservationsSection({
  title,
  description,
  whatsappNumber,
  phone,
  email,
  bookingUrl,
}: ReservationsSectionProps) {
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, me gustaría hacer una reservación en Houdinni.')}`
    : '';

  return (
    <section
      id="reservaciones"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0B0B0B 0%, #0F0820 40%, #180F3A 70%, #0B0B0B 100%)',
      }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(45,27,105,0.3) 0%, transparent 65%)',
        }}
      />

      {/* Theatrical curtain lines */}
      <div
        className="absolute inset-y-0 left-0 w-1 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(128,0,32,0.4), transparent)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(128,0,32,0.4), transparent)',
        }}
      />

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-xs uppercase tracking-mystical text-brand-gold/70 mb-4 block"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Acceso Exclusivo
          </span>
          <h2 className="section-title mb-4">{title || 'Solicita Tu Acceso'}</h2>
          <div className="gold-divider max-w-xs mx-auto">
            <span className="text-brand-gold/60 text-xs" aria-hidden="true">&#9670;</span>
          </div>
          {description && (
            <p
              className="text-brand-cream/55 text-sm max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300 }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Cards row */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* WhatsApp — primary */}
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 p-8 border border-brand-gold/30 hover:border-brand-gold/70 hover:shadow-gold transition-all duration-500"
              style={{ background: 'rgba(212,175,55,0.04)' }}
            >
              <div className="w-14 h-14 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/10 transition-colors duration-300">
                <WhatsAppIcon />
              </div>
              <div className="text-center">
                <div
                  className="text-brand-gold text-lg mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  WhatsApp
                </div>
                <div
                  className="text-brand-cream/50 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  Respuesta inmediata
                </div>
              </div>
              <span className="btn-primary w-full justify-center">
                Reservar por WhatsApp
              </span>
            </a>
          )}

          {/* External booking or contact info */}
          {bookingUrl ? (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-5 p-8 border border-white/10 hover:border-brand-gold/40 transition-all duration-500"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-brand-cream/60 group-hover:border-brand-gold/40 group-hover:text-brand-gold transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="text-center">
                <div
                  className="text-brand-cream text-lg mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  Reservación Online
                </div>
                <div
                  className="text-brand-cream/40 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  Disponibilidad en tiempo real
                </div>
              </div>
              <span className="btn-outline w-full justify-center">
                Ver Disponibilidad
              </span>
            </a>
          ) : (
            /* Contact info card */
            <div
              className="flex flex-col gap-4 p-8 border border-white/10"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <h3
                className="text-brand-cream/80 text-lg mb-2 text-center"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Contacto Directo
              </h3>

              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-brand-cream/55 hover:text-brand-gold transition-colors duration-300 group"
                >
                  <span className="text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300">
                    <PhoneIcon />
                  </span>
                  <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.875rem' }}>
                    {phone}
                  </span>
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-brand-cream/55 hover:text-brand-gold transition-colors duration-300 group"
                >
                  <span className="text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300">
                    <MailIcon />
                  </span>
                  <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.875rem' }}>
                    {email}
                  </span>
                </a>
              )}

              {!phone && !email && (
                <p
                  className="text-brand-cream/30 text-sm text-center italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Información de contacto próximamente...
                </p>
              )}
            </div>
          )}
        </div>

        {/* Atmospheric note */}
        <p
          className="text-center text-brand-cream/25 text-xs mt-12"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em' }}
        >
          El acceso a Houdinni es limitado. Se requiere reservación previa.
        </p>
      </div>
    </section>
  );
}
