import Image from 'next/image';

interface Location {
  name: string;
  slug: string;
  address: string;
  phone: string;
  whatsapp: string;
  mapUrl: string | null;
  hours: string;
  image: string | null;
}

interface LocationsSectionProps {
  locations: Location[];
}

const PLACEHOLDER_LOCATIONS: Location[] = [
  {
    name: 'Sucursal Centro',
    slug: 'centro',
    address: 'Av. Insurgentes Norte 123, Col. Centro, CDMX',
    phone: '55 1234 5678',
    whatsapp: '5512345678',
    mapUrl: 'https://maps.google.com',
    hours: 'Lun–Dom: 12:00pm – 2:00am',
    image: null,
  },
  {
    name: 'Sucursal Polanco',
    slug: 'polanco',
    address: 'Presidente Masaryk 456, Polanco, CDMX',
    phone: '55 9876 5432',
    whatsapp: '5598765432',
    mapUrl: 'https://maps.google.com',
    hours: 'Lun–Dom: 1:00pm – 1:00am',
    image: null,
  },
  {
    name: 'Sucursal Coyoacán',
    slug: 'coyoacan',
    address: 'Francisco Sosa 789, Coyoacán, CDMX',
    phone: '55 5555 4444',
    whatsapp: '5555554444',
    mapUrl: 'https://maps.google.com',
    hours: 'Mar–Dom: 2:00pm – 12:00am',
    image: null,
  },
];

export function LocationsSection({ locations }: LocationsSectionProps) {
  const displayLocations = locations.length > 0 ? locations : PLACEHOLDER_LOCATIONS;

  return (
    <section
      id="sucursales"
      className="py-20 bg-white relative overflow-hidden"
      aria-labelledby="locations-heading"
    >
      {/* Top wave from dark section */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-brand-dark"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 mt-10">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
            <span aria-hidden="true">📍</span>
            <span>Dónde Encontrarnos</span>
          </div>
          <h2
            id="locations-heading"
            className="section-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nuestras Sucursales
          </h2>
          <p className="section-subtitle text-center">
            Visítanos en cualquiera de nuestras ubicaciones y disfruta del mejor sabor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayLocations.map((location) => (
            <article
              key={location.slug}
              className="card-base group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-red/10 to-brand-orange/20">
                {location.image ? (
                  <Image
                    src={location.image}
                    alt={`Sucursal ${location.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-30" aria-hidden="true">🏪</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <h3
                  className="text-xl font-display text-brand-dark"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {location.name}
                </h3>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5" aria-hidden="true">📍</span>
                    <span>{location.address}</span>
                  </div>
                  {location.hours && (
                    <div className="flex items-start gap-2">
                      <span className="flex-shrink-0" aria-hidden="true">🕐</span>
                      <span>{location.hours}</span>
                    </div>
                  )}
                  {location.phone && (
                    <div className="flex items-center gap-2">
                      <span aria-hidden="true">📞</span>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="hover:text-brand-red transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  {location.mapUrl && (
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-semibold bg-brand-dark text-white py-2 px-3 rounded-xl hover:bg-brand-red transition-colors"
                      aria-label={`Ver ${location.name} en mapa`}
                    >
                      Ver Mapa
                    </a>
                  )}
                  {location.whatsapp && (
                    <a
                      href={`https://wa.me/52${location.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-semibold bg-green-500 text-white py-2 px-3 rounded-xl hover:bg-green-600 transition-colors"
                      aria-label={`WhatsApp ${location.name}`}
                    >
                      <span aria-hidden="true">💬</span> WhatsApp
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
