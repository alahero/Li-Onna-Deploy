import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sucursales',
  description: 'Encuentra la sucursal de Tacos Atarantados más cercana a ti.',
};

const MONTERREY_LOCATIONS = [
  {
    name: 'CUMBRES',
    sub: 'LEONES',
    address: 'Av. Paseo de los Leones 2235, Cumbres 2o. Sector Secc C, 64610 Monterrey, N.L.',
    phone: 'TEL. 81 4175 3684',
    uberEats: 'https://www.ubereats.com/mx/store/tacos-atarantados-cumbres/ZjX3b27RUieDWl0vCPVEvg?diningMode=DELIVERY',
  },
  {
    name: 'VASCONCELOS',
    sub: 'DEL VALLE',
    address: 'Av. José Vasconcelos 465-interior 7, Del Valle, 66220 San Pedro Garza García, N.L.',
    phone: 'TEL. 81 3955 7935 / TEL. 81 2710 7986',
    uberEats: 'https://www.ubereats.com/mx/store/tacos-atarantados-vasconcelos/PG6r9jpBXA69vRHATVBRIA?diningMode=DELIVERY',
  },
  {
    name: 'SAN JERÓNIMO',
    sub: 'PLAZA VÍA 2',
    address: 'Plaza Vía 2, Blvd. Rogelio Cantú Gómez 1000, San Jerónimo, Las Lajas, 64630 Monterrey, N.L.',
    phone: 'TEL. 81 4001 3622',
    uberEats: 'https://www.ubereats.com/mx/store/tacos-atarantados-san-jeronimo/r5Oj42dcVYCL1lqgkqDYhQ?diningMode=DELIVERY',
  },
  {
    name: 'ARMIDA',
    sub: 'VALLE ORIENTE',
    address: 'Zona Valle Oriente, Av. Cto. Frida Kahlo 303, Haciendas de La Sierra, 66278 San Pedro Garza García, N.L.',
    phone: 'TEL. 81 3715 5843',
    uberEats: 'https://www.ubereats.com/mx/store/tacos-atarantados-distrito-armida/9GKBkqToWxCjnYCd9P_oUQ?diningMode=DELIVERY',
  },
  {
    name: 'OMNIA',
    sub: 'CARRETERA NACIONAL',
    address: 'Carr. Nacional km 267, Col. El Uro, 64988 Monterrey, N.L.',
    phone: 'TEL. 81 3674 7668',
    uberEats: 'https://www.ubereats.com/mx/store/tacos-atarantados-omnia/jvNtUcf4WVe9QuafVwn8eQ?diningMode=DELIVERY',
  },
  {
    name: 'SAN NICOLÁS',
    sub: 'MANUEL L. BARRAGÁN',
    address: 'Plaza Vía 2, Blvd. Rogelio Cantú Gómez 1000, San Jerónimo, Las Lajas, 64630 Monterrey, N.L.',
    phone: 'TEL. 81 4175 3684',
    uberEats: 'https://www.ubereats.com/mx/store/tacos-atarantados-san-nicolas/tgS6O9W9VByJ0VMQHBwRpw?diningMode=DELIVERY',
  },
];

const CDMX_LOCATIONS = [
  {
    name: 'LAS PALMAS',
    address: 'Sierra Mojada 215, Lomas - Virreyes, Lomas de Chapultepec, Miguel Hidalgo, 11000 Ciudad de México, CDMX',
    phone: 'TEL. 55 2120 7201',
    uberEats: null,
  },
  {
    name: 'ROMA',
    address: 'Córdoba 113, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX',
    phone: 'TEL. 55 5584 0947',
    uberEats: null,
  },
];

const USA_LOCATIONS = [
  {
    name: 'WYNWOOD',
    address: '218 NW 25th St, Miami, FL 33127, Estados Unidos',
    phone: 'TEL. 000000000',
    uberEats: null,
  },
];

function LocationCard({
  name,
  sub,
  address,
  phone,
  uberEats,
}: {
  name: string;
  sub?: string;
  address: string;
  phone: string;
  uberEats: string | null;
}) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '2px solid #0c7528',
        borderRadius: '8px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: '"Gothic Regular", sans-serif',
            fontWeight: 400,
            fontSize: '22px',
            color: '#0c7528',
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {name}
        </h3>
        {sub && (
          <p
            style={{
              fontFamily: 'Oswald, sans-serif',
              fontWeight: 400,
              fontSize: '11px',
              color: '#0c7528',
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {sub}
          </p>
        )}
      </div>
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: '12px',
          color: '#000000',
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {address}
      </p>
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          fontSize: '21px',
          color: 'rgb(13, 116, 39)',
        }}
      >
        {phone}
      </span>
      {uberEats && (
        <Link
          href={uberEats}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#0c7528',
            color: '#ffffff',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '13px',
            padding: '8px 16px',
            borderRadius: '4px',
            textDecoration: 'none',
            alignSelf: 'flex-start',
          }}
        >
          Pedir en UberEats →
        </Link>
      )}
    </div>
  );
}

export default function SucursalesPage() {
  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh', background: '#ffffff' }}>
        {/* Background texture */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/sucursales-bg.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.08 }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Minimal nav bar for sub pages */}
          <header
            style={{
              position: 'relative',
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.95)',
              borderBottom: '2px solid #0c7528',
            }}
          >
            <Link href="/">
              <Image src="/images/logo.png" alt="Tacos Atarantados" width={170} height={46} style={{ objectFit: 'contain' }} />
            </Link>
          </header>

          <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px' }}>
            {/* Page header image */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <Image
                src="/images/sucursales-header.png"
                alt="Sucursales"
                width={939}
                height={260}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>

            {/* Mexico section */}
            <div style={{ marginBottom: '32px' }}>
              <Image
                src="/images/mexico-title.png"
                alt="México"
                width={400}
                height={111}
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '24px' }}
              />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '10px',
                  width: '100%',
                }}
              >
                {MONTERREY_LOCATIONS.map((loc) => (
                  <LocationCard key={loc.name} {...loc} />
                ))}
              </div>
            </div>

            {/* CDMX section */}
            <div style={{ marginBottom: '32px' }}>
              <Image
                src="/images/cdmx-title.png"
                alt="Ciudad de México"
                width={400}
                height={63}
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '24px' }}
              />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '10px',
                }}
              >
                {CDMX_LOCATIONS.map((loc) => (
                  <LocationCard key={loc.name} {...loc} />
                ))}
              </div>
            </div>

            {/* USA section */}
            <div>
              <h2
                style={{
                  fontFamily: '"Gothic Regular", sans-serif',
                  fontWeight: 400,
                  fontSize: '36px',
                  color: '#0c7528',
                  marginBottom: '24px',
                }}
              >
                USA
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '10px',
                }}
              >
                {USA_LOCATIONS.map((loc) => (
                  <LocationCard key={loc.name} {...loc} />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
