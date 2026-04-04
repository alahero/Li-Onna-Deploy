interface OrderSectionProps {
  title: string;
  description: string;
  deliveryUrl: string | null;
  uberEatsUrl: string | null;
  rappiUrl: string | null;
  didiFoodUrl: string | null;
}

interface DeliveryPlatform {
  name: string;
  emoji: string;
  url: string | null;
  bgColor: string;
  textColor: string;
  description: string;
}

export function OrderSection({
  title,
  description,
  deliveryUrl,
  uberEatsUrl,
  rappiUrl,
  didiFoodUrl,
}: OrderSectionProps) {
  const platforms: DeliveryPlatform[] = [
    {
      name: 'Uber Eats',
      emoji: '🟢',
      url: uberEatsUrl,
      bgColor: 'bg-[#06C167]',
      textColor: 'text-white',
      description: 'Entrega en 30 min',
    },
    {
      name: 'Rappi',
      emoji: '🧡',
      url: rappiUrl,
      bgColor: 'bg-[#FF441F]',
      textColor: 'text-white',
      description: 'Delivery express',
    },
    {
      name: 'DiDi Food',
      emoji: '🟠',
      url: didiFoodUrl,
      bgColor: 'bg-[#FF8200]',
      textColor: 'text-white',
      description: 'Rápido y seguro',
    },
  ].filter((p) => p.url !== null);

  const hasDeliveryDirect = deliveryUrl !== null;

  return (
    <section
      id="pedidos"
      className="py-20 bg-brand-cream relative overflow-hidden"
      aria-labelledby="order-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(60deg, #E63946 0px, #E63946 2px, transparent 2px, transparent 50px)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
            <span aria-hidden="true">🛵</span>
            <span>Pide a Domicilio</span>
          </div>
          <h2
            id="order-heading"
            className="section-title"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h2>
          <p className="section-subtitle text-center">{description}</p>
        </div>

        {/* Direct delivery CTA */}
        {hasDeliveryDirect && (
          <div className="mb-8">
            <a
              href={deliveryUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn-primary justify-center text-xl !py-5 !rounded-2xl"
            >
              <span aria-hidden="true">🌮</span>
              Pedir Directamente
              <span aria-hidden="true">→</span>
            </a>
          </div>
        )}

        {/* Platform separator */}
        {platforms.length > 0 && (
          <>
            {hasDeliveryDirect && (
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="text-gray-400 text-sm font-medium">o pide en</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.bgColor} ${platform.textColor} rounded-2xl p-6 text-center font-bold shadow-lg hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-200 block group`}
                  aria-label={`Pedir en ${platform.name}`}
                >
                  <span className="text-4xl mb-3 block group-hover:animate-bounce-slow" aria-hidden="true">
                    {platform.emoji}
                  </span>
                  <span className="text-xl block">{platform.name}</span>
                  <span className="text-sm opacity-80 block mt-1">{platform.description}</span>
                </a>
              ))}
            </div>
          </>
        )}

        {/* When no links are set yet — placeholder UI */}
        {platforms.length === 0 && !hasDeliveryDirect && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Uber Eats', emoji: '🟢', bg: 'bg-[#06C167]', desc: 'Entrega en 30 min' },
              { name: 'Rappi', emoji: '🧡', bg: 'bg-[#FF441F]', desc: 'Delivery express' },
              { name: 'DiDi Food', emoji: '🟠', bg: 'bg-[#FF8200]', desc: 'Rápido y seguro' },
            ].map((p) => (
              <div
                key={p.name}
                className={`${p.bg} text-white rounded-2xl p-6 text-center font-bold shadow-lg opacity-80`}
                aria-label={`${p.name} - Próximamente`}
              >
                <span className="text-4xl mb-3 block" aria-hidden="true">{p.emoji}</span>
                <span className="text-xl block">{p.name}</span>
                <span className="text-sm opacity-80 block mt-1">{p.desc}</span>
              </div>
            ))}
          </div>
        )}

        {/* WhatsApp fallback */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-3">¿Preguntas o pedidos por WhatsApp?</p>
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-colors shadow-md"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
