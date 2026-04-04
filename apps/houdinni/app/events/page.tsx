import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { EventsForm } from '@/components/events-form';
import { MarqueeTicker } from '@/components/marquee-ticker';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eventos Privados | Houdinni',
  description: 'Organiza tu evento privado en Houdinni Madrid. Contacta con nuestro equipo.',
};

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '34px' }}>
        {/* Hero background */}
        <section className="relative min-h-[60vh] flex items-end" style={{ paddingBottom: '60px' }}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/events-hero.png"
              alt="Eventos Privados Houdinni"
              fill
              className="object-cover object-center"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div
            className="relative z-10 mx-auto"
            style={{ maxWidth: '1200px', padding: '0 24px', width: '100%' }}
          >
            <span className="font-array text-houdinni-cyan text-xs uppercase tracking-widest block mb-4">
              HOUDINNI MADRID
            </span>
            <h1
              className="font-druk text-white"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '0.02em' }}
            >
              EVENTOS PRIVADOS
            </h1>
            <div
              style={{
                background: '#3388ff',
                height: '7px',
                width: '485px',
                maxWidth: '100%',
                marginTop: '12px',
                overflow: 'clip',
              }}
            />
          </div>
        </section>

        {/* Marquee */}
        <MarqueeTicker
          background="#0099ff"
          color="#ffffff"
          speed="normal"
          text="EVENTOS PRIVADOS // CELEBRACIONES // HOUDINNI MADRID // PRIVATE EVENTS // CELEBRA CON NOSOTROS // INFORMACION LEGAL"
        />

        {/* Events banner */}
        <section className="bg-houdinni-black" style={{ padding: '48px 0' }}>
          <Image
            src="/events-banner.png"
            alt="Eventos Houdinni"
            width={2145}
            height={737}
            className="w-full object-contain"
            quality={85}
          />
        </section>

        {/* Form section */}
        <section
          className="relative bg-houdinni-black"
          style={{ padding: '80px 0 120px' }}
        >
          {/* Photo background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/events-photo.png"
              alt=""
              fill
              className="object-cover object-center opacity-20"
              quality={75}
            />
          </div>

          <div
            className="relative z-10 mx-auto"
            style={{ maxWidth: '720px', padding: '0 24px' }}
          >
            {/* Section label */}
            <div style={{ marginBottom: '48px', textAlign: 'center' }}>
              <h2
                className="font-druk text-white"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '12px' }}
              >
                SOLICITA TU EVENTO
              </h2>
              <p
                className="font-editorial text-white/60"
                style={{ fontSize: '14px', letterSpacing: '0.1em' }}
              >
                Completa el formulario y nuestro equipo se pondrá en contacto contigo.
              </p>
            </div>

            <EventsForm />
          </div>
        </section>

        {/* Events strip */}
        <section className="bg-houdinni-black overflow-hidden" style={{ padding: '48px 0' }}>
          <Image
            src="/events-strip.png"
            alt=""
            width={1937}
            height={236}
            className="w-full object-contain"
            quality={85}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
