import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tarjetas Regalo',
  description: 'Regala una experiencia en LI-ONNA リオンナ — Cocina japonesa con alma latina en Madrid.',
  openGraph: {
    title: 'Tarjetas Regalo — LI-ONNA リオンナ',
    description: 'Gift Card — Cocina japonesa con alma latina.',
  },
};

export default function GiftCardsPage() {
  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: '#F7F8F3', minHeight: '100vh' }}>
        {/* Blue hero */}
        <section
          className="giftcards-hero"
          style={{
            backgroundColor: '#005BFF',
            padding: '120px 80px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Japanese watermark */}
          <p aria-hidden style={{
            fontFamily: 'Odesta, serif', fontWeight: 600, fontSize: 80, letterSpacing: '0.02em',
            color: 'rgba(255,255,255,0.12)', lineHeight: 1, position: 'absolute', top: 40, right: 80,
            userSelect: 'none', pointerEvents: 'none', margin: 0,
          }}>
            リオンナ
          </p>
          <p style={{ fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 13, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', margin: '0 0 16px 0' }}>
            LI-ONNA —
          </p>
          <h1
            className="giftcards-h1"
            style={{ fontFamily: 'EditorialNew, serif', fontWeight: 400, fontSize: 60, letterSpacing: '-0.04em', lineHeight: 1.2, color: '#fff', margin: '0 0 24px 0' }}
          >
            Cocina japonesa<br />con alma latina
          </h1>
          <p style={{ fontFamily: 'EditorialNew, serif', fontWeight: 400, fontSize: 16, letterSpacing: '0.02em', lineHeight: 1.5, color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: 0 }}>
            Regala una experiencia gastronómica única. Tarjetas regalo para disfrutar de la
            fusión japonesa-latina en el corazón de Salamanca.
          </p>
        </section>

        {/* Gift card purchase */}
        <section
          className="giftcards-content"
          style={{
            backgroundColor: '#F6F6F2',
            padding: '80px 80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 48,
          }}
        >
          {/* Gift card visual */}
          <div style={{
            width: '100%', maxWidth: 480, background: '#005BFF', borderRadius: 12,
            padding: 40, display: 'flex', flexDirection: 'column', gap: 16,
            position: 'relative', overflow: 'hidden', minHeight: 280,
          }}>
            <p aria-hidden style={{
              fontFamily: 'Odesta, serif', fontWeight: 600, fontSize: 120, letterSpacing: '0.02em',
              color: 'rgba(255,255,255,0.07)', lineHeight: 1, position: 'absolute', bottom: -20, right: 20,
              userSelect: 'none', pointerEvents: 'none', margin: 0,
            }}>
              リ
            </p>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Image src="/images/logo-navbar.png" alt="LI-ONNA" width={607} height={89}
                style={{ width: 120, height: 'auto', filter: 'brightness(0) invert(1)' }} />
            </div>
            <div style={{ flex: 1, position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 8 }}>
              <p style={{ fontFamily: 'Odesta, serif', fontWeight: 600, fontSize: 28, letterSpacing: '0.02em', color: '#fff', margin: 0 }}>
                リオンナ
              </p>
              <p style={{ fontFamily: 'EditorialNew, serif', fontWeight: 400, fontSize: 13, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                Gift Card — 100€ PRONTO
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center', width: '100%', maxWidth: 480 }}>
            <a
              href="https://www.covermanager.com/eco/buy_products/restaurante-li-onna/spanish"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em',
                background: 'rgb(0,92,254)', color: '#fff', borderRadius: 10, padding: '14px 32px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
                width: '100%', border: 'none',
              }}
            >
              Comprar Tarjeta Regalo — 100€ PRONTO
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=34679836561"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'EditorialNew, serif', fontWeight: 500, fontSize: 14, letterSpacing: '0.04em',
                color: '#005CFE', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +34 679 836 561
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 1439px) {
          .giftcards-hero { padding: 120px 24px 80px !important; }
          .giftcards-content { padding: 80px 24px !important; }
        }
        @media (max-width: 809px) {
          .giftcards-hero { padding: 60px 16px 40px !important; }
          .giftcards-h1 { font-size: 36px !important; }
          .giftcards-content { padding: 40px 16px !important; }
        }
      `}</style>
    </>
  );
}
