import Image from 'next/image';

/**
 * Brand Manifesto — 4 pillars + Streets banner + DJ booth sections.
 * Exact copy from Framer design extraction §8.
 */

const MANIFESTO = [
  {
    key: 'community',
    headline: 'COMMUNITY',
    body: 'AUTHENTICITY, COMMUNITY, AND IRREVERENCE. CRAFTING A COMMUNITY OF LOUD MUSIC-LOVERS FREAKS.',
  },
  {
    key: 'sanctuary',
    headline: 'SANCTUARY',
    body: "IN THIS SANCTUARY YOU'RE ENCOURAGED TO MAKE IT YOUR OWN, TO TAKE OVER THE WALLS, EXPRESS YOURSELF, AND FIND INTERESTING PEOPLE.",
  },
  {
    key: 'music',
    headline: 'MUSIC WORSHIP',
    body: 'WHERE DISRUPTIVE ARTS, KILLER MUSIC, AND A BIG MIDDLE FINGER TO MAINSTREAM SOCIETY COLLIDE. WE WORSHIP TOP-NOTCH HIP-HOP, ROCK LEGENDS, CULT MOVIES, AND THE ROOTS OF ELECTRONIC MUSIC.',
  },
  {
    key: 'charming',
    headline: 'CHARMING VS BORING',
    body: "WE DITCH THE WHOLE GOOD VS. EVIL THING; INSTEAD WE SPLIT PEOPLE INTO EITHER CHARMING OR BORING. WE CREATE A VIBE FILLED WITH INTERESTING, CULTURED, SOCIAL PEOPLE WITH IMPECCABLE TASTE IN MUSIC.",
  },
];

const DJ_SECTIONS = [
  {
    key: 'booth',
    headline: 'DJ BOOTH',
    body: "AT THE CORE OF OUR SHRINE IS THE DJ BOOTH, THE HEARTBEAT OF THE PLACE. EVERY NIGHT, IT'S ALL ABOUT TAKING OUR GUESTS' SOUL TO HIGHER REALMS AND PUSHING MADRID'S SOCIAL SCENE TO NEW HEIGHTS.",
    image: '/gallery/photo-1.png',
  },
  {
    key: 'sound',
    headline: 'SOUND SYSTEM',
    body: "WITH SPECTACULAR LIGHTS, BOOMING FUNKTION ONE SOUND SYSTEM, AND THE CULTURE OOZING FROM OUR DECOR, WE'RE HERE TO RAISE THE BAR FOR EVERYONE AT HOUDINNI'S NIGHTS.",
    image: '/gallery/photo-2.png',
  },
];

export function ConceptSection() {
  return (
    <>
      {/* ── Brand Manifesto: 4 pillars ── */}
      <section
        id="manifesto"
        className="relative bg-houdinni-black"
        style={{ padding: '80px 0' }}
      >
        {/* Mobile background */}
        <div
          className="absolute inset-0 tablet:hidden z-0"
          style={{ backgroundImage: 'url(/gallery/mobile-manifesto-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18 }}
        />

        <div
          className="relative z-10 mx-auto"
          style={{ maxWidth: '1200px', padding: '0 24px' }}
        >
          {/* Section label */}
          <div className="mb-16 text-center">
            <span className="font-array text-houdinni-cyan text-xs uppercase tracking-widest">
              HOUDINNI MADRID
            </span>
            <h2
              className="font-druk text-white mt-4"
              style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', letterSpacing: '0.02em' }}
            >
              WHO WE ARE
            </h2>
            {/* Accent bar */}
            <div
              className="mx-auto mt-4"
              style={{ background: '#3388ff', height: '7px', width: '485px', maxWidth: '100%', overflow: 'clip' }}
            />
          </div>

          {/* 4-pillar grid */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 desktop:gap-16">
            {MANIFESTO.map((item) => (
              <div key={item.key} className="flex flex-col gap-4">
                <h3
                  className="font-druk text-houdinni-blue-light"
                  style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
                >
                  {item.headline}
                </h3>
                <p
                  className="font-kanit text-white/80 leading-relaxed"
                  style={{ fontSize: '14px', letterSpacing: '0.03em' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE STREETS ARE CALLIN' ── */}
      <section
        className="relative bg-houdinni-black overflow-hidden"
        style={{ padding: '48px 0' }}
      >
        <div className="streets-banner-wrap">
          <Image
            src="/streets-callin.png"
            alt="THE STREETS ARE CALLIN'"
            width={1966}
            height={391}
            className="w-full object-contain"
            quality={90}
          />
        </div>
        </section>

      {/* ── DJ Booth + Sound System ── */}
      <section
        className="bg-houdinni-black"
        style={{ padding: '80px 0' }}
      >
        <div
          className="mx-auto flex flex-col gap-24"
          style={{ maxWidth: '1200px', padding: '0 24px' }}
        >
          {DJ_SECTIONS.map((item, i) => (
            <div
              key={item.key}
              className={`flex flex-col tablet:flex-row items-center gap-12 ${i % 2 === 1 ? 'tablet:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div
                className="relative shrink-0 overflow-hidden w-full tablet:w-[480px]"
                style={{ height: '360px' }}
              >
                <Image
                  src={item.image}
                  alt={item.headline}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-6 flex-1">
                {/* Cyan accent */}
                <div
                  style={{
                    background: '#99eeff',
                    height: '4px',
                    width: '80px',
                  }}
                />
                <h3
                  className="font-druk text-white"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                >
                  {item.headline}
                </h3>
                <p
                  className="font-kanit text-white/70 leading-relaxed"
                  style={{ fontSize: '14px', letterSpacing: '0.03em' }}
                >
                  {item.body}
                </p>
                {/* Chinese branding */}
                <p
                  className="font-array text-houdinni-cyan/60 text-xs"
                  style={{ letterSpacing: '0.2em' }}
                >
                  一 會兒你看見我 一 會兒你看不見我
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
