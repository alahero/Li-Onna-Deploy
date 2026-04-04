interface VipPackage {
  readonly name: string;
  readonly description: string;
  readonly minSpend: string;
  readonly features: string;
  readonly highlighted: boolean;
}

interface VipData {
  title?: string;
  description?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  packages?: readonly VipPackage[];
}

interface VipSectionProps {
  data?: VipData | null;
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function VipSection({ data }: VipSectionProps) {
  const title = data?.title || 'VIP TABLES';
  const description =
    data?.description ||
    'Elevate your night with an exclusive VIP table experience. Personalized service, premium bottle selection, and the best views of the stage.';
  const whatsappNumber = data?.whatsappNumber || '529841234567';
  const whatsappMessage =
    data?.whatsappMessage || 'Hola! Me gustaría reservar una mesa VIP en Tehmplo.';
  const packages: readonly VipPackage[] = data?.packages || [
    {
      name: 'Jungle Table',
      description: 'Perfect for small groups seeking the Tehmplo experience.',
      minSpend: '$5,000 MXN',
      features: 'Table for 4 guests\nPremium bottle service\nDedicated host\nPriority entry',
      highlighted: false,
    },
    {
      name: 'Temple Suite',
      description: 'Our flagship VIP experience with the most exclusive positioning.',
      minSpend: '$12,000 MXN',
      features:
        'Table for 8 guests\n2 Premium bottles\nDedicated host & server\nPriority entry\nWelcome bottle of champagne\nBest view of the stage',
      highlighted: true,
    },
    {
      name: 'Canopy Lounge',
      description: 'Semi-private lounge area nestled in the jungle canopy.',
      minSpend: '$8,000 MXN',
      features:
        'Lounge seating for 6\nPremium bottle service\nDedicated host\nPriority entry\nPersonal fan cooling',
      highlighted: false,
    },
  ];

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="relative bg-brand-dark py-24 lg:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-forest-green/5 rounded-full blur-3xl" />
        <div className="absolute right-0 top-1/3 w-80 h-80 bg-brand-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-label">Exclusive Access</p>
          <h2 className="section-title">{title}</h2>
          <div className="gold-divider" />
          <p className="font-body text-sm text-brand-cream-muted/70 tracking-wider max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {packages.map((pkg, i) => {
            const featureList = pkg.features
              ? pkg.features.split('\n').filter(Boolean)
              : [];

            return (
              <div
                key={i}
                className={`relative flex flex-col p-8 border transition-all duration-500 ${
                  pkg.highlighted
                    ? 'border-brand-gold/60 bg-gradient-to-b from-brand-forest-deep/60 to-brand-dark shadow-2xl shadow-brand-gold/10 scale-[1.02]'
                    : 'border-brand-forest-green/30 bg-brand-black hover:border-brand-gold/30'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 bg-brand-gold text-brand-black font-body text-[10px] font-semibold tracking-widest uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`font-display text-xl tracking-widest uppercase mb-2 ${
                      pkg.highlighted ? 'text-brand-gold' : 'text-brand-cream'
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p className="font-body text-xs text-brand-cream-muted/60 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-brand-forest-green/20">
                  <p className="font-body text-[10px] tracking-[0.3em] text-brand-gold/70 uppercase mb-1">
                    Minimum Spend
                  </p>
                  <p
                    className={`font-display text-3xl tracking-wide ${
                      pkg.highlighted ? 'text-brand-gold' : 'text-brand-amber'
                    }`}
                  >
                    {pkg.minSpend}
                  </p>
                </div>

                {featureList.length > 0 && (
                  <ul className="flex-1 space-y-3 mb-8">
                    {featureList.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 w-1 h-1 rounded-full flex-shrink-0 ${
                            pkg.highlighted ? 'bg-brand-gold' : 'bg-brand-forest-light'
                          }`}
                        />
                        <span className="font-body text-xs text-brand-cream-muted/70 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2.5 py-3 px-6 font-body text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                    pkg.highlighted
                      ? 'bg-brand-gold text-brand-black hover:bg-brand-gold-light'
                      : 'border border-brand-forest-green/50 text-brand-cream-muted hover:border-brand-gold hover:text-brand-gold'
                  }`}
                >
                  <WhatsAppIcon />
                  Book via WhatsApp
                </a>
              </div>
            );
          })}
        </div>

        {/* General WhatsApp CTA */}
        <div className="text-center border border-brand-forest-green/20 bg-brand-black py-12 px-8">
          <p className="font-body text-xs tracking-[0.3em] text-brand-gold uppercase mb-4">
            Not sure which package is right for you?
          </p>
          <p className="font-body text-sm text-brand-cream-muted/70 max-w-md mx-auto mb-8 leading-relaxed">
            Our team will personally guide you to the perfect Tehmplo experience. Reach out and
            we&apos;ll take care of everything.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-outline-gold text-xs py-3"
          >
            <WhatsAppIcon />
            Chat with our Concierge
          </a>
        </div>
      </div>
    </div>
  );
}
