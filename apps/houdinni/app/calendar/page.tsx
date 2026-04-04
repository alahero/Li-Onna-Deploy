import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MarqueeTicker } from '@/components/marquee-ticker';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calendario | Houdinni',
  description: 'Próximos eventos en Houdinni Madrid. Consulta nuestro calendario y compra tus entradas.',
};

export default function CalendarPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '34px' }}>
        {/* Hero */}
        <section className="relative" style={{ minHeight: '50vh', display: 'flex', alignItems: 'flex-end', paddingBottom: '60px' }}>
          {/* Desktop hero bg */}
          <div className="absolute inset-0 z-0 hidden tablet:block">
            <Image
              src="/calendar-hero.png"
              alt="Calendario Houdinni"
              fill
              className="object-cover object-top"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          {/* Mobile hero bg */}
          <div className="absolute inset-0 z-0 tablet:hidden">
            <Image
              src="/calendar-bg-mobile.png"
              alt=""
              fill
              className="object-cover object-top"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div
            className="relative z-10 mx-auto w-full"
            style={{ maxWidth: '1200px', padding: '0 24px' }}
          >
            <span className="font-array text-houdinni-cyan text-xs uppercase tracking-widest block mb-4">
              PRÓXIMOS EVENTOS
            </span>
            <h1
              className="font-druk text-white"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '0.02em' }}
            >
              CALENDARIO
            </h1>
            <div
              style={{
                background: '#3388ff',
                height: '7px',
                width: '485px',
                maxWidth: '100%',
                marginTop: '12px',
              }}
            />
          </div>
        </section>

        {/* Marquee */}
        <MarqueeTicker
          background="#000000"
          color="#ffffff"
          speed="normal"
          text="PRÓXIMOS EVENTOS // CALENDAR // HOUDINNI MADRID // BETICAL 23 OCT // BENJA 06 NOV // OKIO - ASIAN STREET MARKET // COMPRA TUS ENTRADAS EN TICKETS.HOUDINNI.COM"
        />

        {/* Framer Events widget — scroll anchor: vZ1hwO0ep */}
        <section
          id="trigger"
          className="bg-houdinni-black"
          style={{ padding: '80px 24px', minHeight: '60vh' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Section header */}
            <div style={{ marginBottom: '48px', textAlign: 'center' }}>
              <h2
                className="font-druk text-white"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', marginBottom: '16px' }}
              >
                UPCOMING EVENTS
              </h2>
              <p
                className="font-editorial text-white/50"
                style={{ fontSize: '14px', letterSpacing: '0.1em' }}
              >
                Compra tus entradas en{' '}
                <a
                  href="https://tickets.houdinni.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-houdinni-blue hover:text-houdinni-blue-light transition-colors"
                >
                  tickets.houdinni.com
                </a>
              </p>
            </div>

            {/* Events listing — static + tickets CTA */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {[
                { name: 'BETICAL', date: '23 OCT', time: '23:00', tag: 'PRÓXIMAMENTE' },
                { name: 'BENJA', date: '06 NOV', time: '23:00', tag: 'PRÓXIMAMENTE' },
                { name: 'OKIO — ASIAN STREET MARKET', date: 'TBA', time: 'TBA', tag: 'PRÓXIMAMENTE' },
              ].map((event, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 32px',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span
                      className="font-druk text-white"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                    >
                      {event.name}
                    </span>
                    <span
                      className="font-editorial text-white/40"
                      style={{ fontSize: '12px', letterSpacing: '0.1em' }}
                    >
                      {event.date} — {event.time}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span
                      className="font-array text-houdinni-cyan text-xs uppercase"
                      style={{ letterSpacing: '0.15em' }}
                    >
                      {event.tag}
                    </span>
                    <a
                      href="https://tickets.houdinni.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-druk text-houdinni-black hover:bg-houdinni-blue-light transition-colors"
                      style={{
                        background: '#0099ff',
                        padding: '8px 20px',
                        fontSize: '11px',
                        letterSpacing: '0.1em',
                      }}
                    >
                      ENTRADAS
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a
                href="https://tickets.houdinni.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-druk text-houdinni-black hover:bg-houdinni-blue-light transition-colors inline-block"
                style={{
                  background: '#0099ff',
                  padding: '16px 48px',
                  fontSize: '14px',
                  letterSpacing: '0.1em',
                }}
              >
                VER TODOS LOS EVENTOS
              </a>
            </div>
          </div>
        </section>

        {/* Events ticker marquee */}
        <MarqueeTicker
          background="#000000"
          color="#0099ff"
          speed="fast"
          text="BETICAL 23 OCT // BENJA 06 NOV // OKIO - ASIAN STREET MARKET // HOUDINNI OR NOWHERE // MUSIC IS THE ANSWER"
        />
      </main>
      <Footer />
    </>
  );
}
