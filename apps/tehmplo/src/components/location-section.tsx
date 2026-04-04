interface LocationData {
  address?: string;
  mapUrl?: string | null;
  mapDirectionsUrl?: string | null;
  phone?: string;
  email?: string;
  travelTimes?: readonly { from: string; duration: string; method?: string }[];
  openingHours?: string;
}

interface LocationSectionProps {
  data?: LocationData | null;
}

export default function LocationSection({ data }: LocationSectionProps) {
  const mapsUrl =
    'https://www.google.com/maps?ll=20.16939,-87.455675&z=16&t=m&hl=es-419&gl=MX&mapclient=embed&cid=15257279752080205533';

  const embedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.15213160337!2d-87.4556748!3d20.1693903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd1f4128f7f1f%3A0xd3bcbf19158026dd!2sTehmplo!5e0!3m2!1ses-419!2smx!4v1743720471638!5m2!1ses-419!2smx';

  return (
    <section
      id="location"
      style={{
        position: 'relative',
        minHeight: 574,
        width: '100%',
        overflow: 'hidden',
        scrollMarginTop: 64,
        backgroundColor: '#0f0e0c',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/location-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15, 14, 12, 0.75)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 24px',
        }}
      >
        {/* Desktop: flex row with map on left, info on right */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 48,
          }}
          className="lg:flex-row"
        >
          {/* Left side — Google Maps embed */}
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                width: '100%',
                maxWidth: 512,
                height: 370,
                overflow: 'hidden',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <iframe
                src={embedUrl}
                width="512"
                height="370"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tehmplo on Google Maps"
              />
            </div>
          </div>

          {/* Right side — info */}
          <div style={{ flex: 1 }}>
            {/* GETTING THERE heading */}
            <h2
              style={{
                fontFamily: '"Austin Cyr Roman", serif',
                fontSize: 38,
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: '1em',
                marginBottom: 20,
                textTransform: 'uppercase',
              }}
            >
              GETTING THERE
            </h2>

            {/* Address italic */}
            <p
              style={{
                fontFamily: '"Austin Cyr Italic", serif',
                fontSize: 22,
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#ffffff',
                lineHeight: '1em',
                marginBottom: 8,
              }}
            >
              Parcela, Carretera Tulum - Boca Paila 1678-Km. 5.5,
            </p>
            <p
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: 20,
                fontWeight: 500,
                color: '#ffffff',
                lineHeight: '1em',
                marginBottom: 32,
              }}
            >
              77780 Tulum, Q.R.
            </p>

            {/* OPEN IN MAPS button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: '"Source Sans 3", sans-serif',
                fontSize: 19,
                fontWeight: 400,
                color: '#ffffff',
                letterSpacing: '0.14em',
                lineHeight: '1.5em',
                border: '2px solid #ef8024',
                borderRadius: 5,
                width: 267,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                marginBottom: 36,
                textTransform: 'uppercase',
                transition: 'background-color 0.2s ease',
              }}
            >
              OPEN IN MAPS
            </a>

            {/* Distance grid */}
            <div>
              {/* Header row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr 1fr',
                  marginBottom: 8,
                }}
              >
                <div />
                <p
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: 17,
                    fontWeight: 500,
                    color: '#ffffff',
                    letterSpacing: '0.14em',
                    lineHeight: '1.5em',
                    textTransform: 'uppercase',
                  }}
                >
                  FROM HOTEL ZONE
                </p>
                <p
                  style={{
                    fontFamily: '"Source Sans 3", sans-serif',
                    fontSize: 17,
                    fontWeight: 500,
                    color: '#ffffff',
                    letterSpacing: '0.14em',
                    lineHeight: '1.5em',
                    textTransform: 'uppercase',
                  }}
                >
                  FROM ALDEA ZAMA
                </p>
              </div>

              {[
                { label: 'DRIVE:', hotelZone: '15 MIN.', aldeaZama: '20 MIN.' },
                { label: 'BIKE RIDE:', hotelZone: '08 MIN.', aldeaZama: '15 MIN.' },
                { label: 'WALK:', hotelZone: '40 MIN.', aldeaZama: '60 MIN.' },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr 1fr',
                    marginBottom: 4,
                  }}
                >
                  <p
                    style={{
                      fontFamily: '"Source Sans 3", sans-serif',
                      fontSize: 17,
                      fontWeight: 500,
                      color: '#ffffff',
                      letterSpacing: '0.14em',
                      lineHeight: '1.5em',
                    }}
                  >
                    {row.label}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Source Sans 3", sans-serif',
                      fontSize: 17,
                      color: '#ffffff',
                      letterSpacing: '0.14em',
                      lineHeight: '1.5em',
                    }}
                  >
                    {row.hotelZone}
                  </p>
                  <p
                    style={{
                      fontFamily: '"Source Sans 3", sans-serif',
                      fontSize: 17,
                      color: '#ffffff',
                      letterSpacing: '0.14em',
                      lineHeight: '1.5em',
                    }}
                  >
                    {row.aldeaZama}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
