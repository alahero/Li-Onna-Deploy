import React from 'react';
import Link from 'next/link';

interface VipPackage {
  name: string;
  description: string;
  price: string;
  includes: string;
  highlighted: boolean;
}

interface VipSectionProps {
  title: string;
  description: string;
  whatsappLink: string;
  whatsappButtonText: string;
  packages: VipPackage[];
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PackageCard({ pkg, index }: { pkg: VipPackage; index: number }) {
  const includesList = pkg.includes
    ? pkg.includes.split(',').map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <div
      className={`relative flex flex-col p-8 transition-all duration-300 ${
        pkg.highlighted
          ? 'bg-brand-dark border-2 border-brand-gold scale-[1.02] shadow-[0_0_40px_rgba(201,168,76,0.15)]'
          : 'bg-brand-black border border-white/10 hover:border-brand-gold/30'
      }`}
    >
      {/* Highlighted badge */}
      {pkg.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-bold px-4 py-1 whitespace-nowrap">
          Más Popular
        </div>
      )}

      {/* Package tier number */}
      <div className="text-brand-gold/20 text-6xl font-bold absolute top-4 right-6 leading-none select-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Name */}
      <h3
        className={`text-3xl uppercase tracking-widest mb-2 ${
          pkg.highlighted ? 'text-brand-gold' : 'text-brand-white'
        }`}
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {pkg.name}
      </h3>

      {/* Price */}
      <div className="mb-4">
        <span className="text-4xl font-bold text-brand-white">{pkg.price}</span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-brand-gold/20 mb-5" />

      {/* Description */}
      <p className="text-brand-white/60 text-sm mb-5 leading-relaxed">
        {pkg.description}
      </p>

      {/* Includes list */}
      {includesList.length > 0 && (
        <ul className="flex flex-col gap-2.5 mb-8 flex-1">
          {includesList.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-brand-white/70">
              <svg
                className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="mt-auto">
        <a
          href="https://wa.me/521234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 py-3 text-sm uppercase tracking-widest font-bold transition-all duration-300 ${
            pkg.highlighted
              ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-light'
              : 'border border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-brand-black'
          }`}
        >
          <WhatsAppIcon />
          Reservar {pkg.name}
        </a>
      </div>
    </div>
  );
}

export function VipSection({
  title,
  description,
  whatsappLink,
  whatsappButtonText,
  packages,
}: VipSectionProps) {
  return (
    <section id="vip" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/3 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-4">
            Exclusivo
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest text-brand-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {title}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4 mb-6">
            <span className="w-8 h-px bg-brand-gold" />
            <span className="w-2 h-2 bg-brand-gold rotate-45 inline-block" />
            <span className="w-8 h-px bg-brand-gold" />
          </div>
          <p className="text-brand-white/60 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Packages grid */}
        {packages.length > 0 ? (
          <div
            className={`grid gap-6 mb-16 ${
              packages.length === 1
                ? 'grid-cols-1 max-w-md mx-auto'
                : packages.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            } items-start`}
          >
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.name} pkg={pkg} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-white/10 mb-16">
            <p className="text-brand-gray text-sm uppercase tracking-widest">
              Paquetes disponibles próximamente
            </p>
          </div>
        )}

        {/* Main WhatsApp CTA */}
        <div className="text-center">
          <p className="text-brand-white/40 text-sm mb-6 uppercase tracking-widest">
            ¿Tienes dudas? Contáctanos directamente
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#1fb958] hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,211,102,0.2)]"
          >
            <WhatsAppIcon />
            {whatsappButtonText}
          </Link>
          <p className="text-brand-white/30 text-xs mt-4">
            Respuesta inmediata · Disponible toda la semana
          </p>
        </div>
      </div>
    </section>
  );
}
