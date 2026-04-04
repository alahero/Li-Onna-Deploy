interface TravelTime {
  readonly from: string;
  readonly duration: string;
  readonly method?: string;
}

interface LocationData {
  address?: string;
  mapUrl?: string | null;
  mapDirectionsUrl?: string | null;
  phone?: string;
  email?: string;
  travelTimes?: readonly TravelTime[];
  openingHours?: string;
}

interface LocationSectionProps {
  data?: LocationData | null;
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

const defaultTravelTimes: readonly TravelTime[] = [
  { from: 'Tulum Town Center', duration: '10 min', method: 'car' },
  { from: 'Tulum Beach Hotels', duration: '5 min', method: 'car' },
  { from: 'Cancun Airport', duration: '2 hrs', method: 'car' },
  { from: 'Playa del Carmen', duration: '1 hr', method: 'car' },
];

export default function LocationSection({ data }: LocationSectionProps) {
  const address = data?.address || 'Carretera Tulum-Boca Paila Km 5.5, Tulum, Quintana Roo, Mexico';
  const mapUrl = data?.mapUrl;
  const mapDirectionsUrl =
    data?.mapDirectionsUrl ||
    'https://maps.google.com/?q=Carretera+Tulum-Boca+Paila+Km+5.5+Tulum';
  const phone = data?.phone || '+52 984 123 4567';
  const email = data?.email || 'hello@tehmplo.mx';
  const openingHours = data?.openingHours || 'Thursday – Sunday\n10:00 PM – 5:00 AM';
  const travelTimes: readonly TravelTime[] =
    data?.travelTimes && data.travelTimes.length > 0 ? data.travelTimes : defaultTravelTimes;

  const hourLines = openingHours.split('\n').filter(Boolean);

  return (
    <div className="relative bg-brand-dark-alt py-24 lg:py-32 overflow-hidden">
      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label">Find Us</p>
          <h2 className="section-title">LOCATION</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info panel */}
          <div className="space-y-10">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-brand-forest-green/30 text-brand-gold">
                <MapPinIcon />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold uppercase mb-2">
                  Address
                </p>
                <p className="font-body text-sm text-brand-cream-muted leading-relaxed">
                  {address}
                </p>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-body text-xs text-brand-forest-light tracking-widest uppercase hover:text-brand-gold transition-colors duration-300 underline underline-offset-4"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-brand-forest-green/30 text-brand-gold">
                <ClockIcon />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold uppercase mb-2">
                  Opening Hours
                </p>
                {hourLines.map((line, i) => (
                  <p key={i} className="font-body text-sm text-brand-cream-muted">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-brand-forest-green/30 text-brand-gold">
                <PhoneIcon />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold uppercase mb-2">
                  Phone
                </p>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="font-body text-sm text-brand-cream-muted hover:text-brand-gold transition-colors duration-300"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-brand-forest-green/30 text-brand-gold">
                <EnvelopeIcon />
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold uppercase mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="font-body text-sm text-brand-cream-muted hover:text-brand-gold transition-colors duration-300"
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Travel times */}
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold uppercase mb-5">
                Getting Here
              </p>
              <div className="grid grid-cols-2 gap-3">
                {travelTimes.map((tt, i) => (
                  <div
                    key={i}
                    className="bg-brand-black border border-brand-forest-green/20 px-4 py-3"
                  >
                    <p className="font-body text-xs text-brand-cream-muted/60 mb-1 truncate">
                      {tt.from}
                    </p>
                    <p className="font-display text-lg text-brand-amber">{tt.duration}</p>
                    {tt.method && (
                      <p className="font-body text-[10px] text-brand-forest-light/70 tracking-wider uppercase mt-0.5">
                        by {tt.method}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[4/3] bg-brand-forest-deep border border-brand-forest-green/30 overflow-hidden">
              {mapUrl ? (
                <iframe
                  src={mapUrl}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tehmplo location on map"
                  allowFullScreen
                />
              ) : (
                // Placeholder when no embed URL
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="text-brand-gold/30">
                    <MapPinIcon />
                  </div>
                  <p className="font-body text-xs text-brand-cream-muted/30 tracking-widest uppercase text-center px-8">
                    Carretera Tulum-Boca Paila<br />Km 5.5, Tulum
                  </p>
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold text-xs py-2 px-6 mt-2"
                  >
                    Open in Google Maps
                  </a>
                </div>
              )}
            </div>

            {/* Coordinates tag */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="font-body text-[10px] text-brand-forest-light tracking-widest uppercase">
                20.1878° N, 87.4691° W — Tulum, Mexico
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
