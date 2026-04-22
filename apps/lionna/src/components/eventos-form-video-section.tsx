import type { CSSProperties } from 'react';

const FONDO = 'rgb(246, 246, 242)';

/** Misma escala 22px que en Framer (kta4qq / cuerpo del enlace) y .text-ticker en globals. */
const estiloLineaContacto: CSSProperties = {
  fontFamily: '"Editorial New Regular", EditorialNew, serif',
  fontWeight: 400,
  fontSize: 22,
  letterSpacing: '-0.88px',
  lineHeight: '30.8px',
  color: '#000',
};

const labelClass =
  "mb-1.5 block font-['Inter',sans-serif] text-[12px] font-medium tracking-wide text-[#3a3a3a]";

const inputClass =
  "w-full rounded-xl border border-[#e0e0dc] bg-[#ecece8] px-4 py-2.5 font-['Inter',sans-serif] text-[14px] text-[#111] placeholder:text-[#8a8a88] outline-none transition focus:border-[#005CFE] focus:ring-1 focus:ring-[#005CFE]/30";

/**
 * Sección unificada: copy + formulario a la izquierda y video en bucle a la derecha.
 */
export function EventosFormVideoSection() {
  return (
    <section
      className="eventos-form-video"
      style={{ backgroundColor: FONDO, position: 'relative', overflow: 'hidden' }}
      aria-label="Eventos a tu medida: formulario y contacto"
    >
      <div
        className="mx-auto flex w-full max-w-[1280px] flex-col items-stretch gap-10 px-4 sm:px-8 md:px-12 lg:flex-row lg:items-center lg:gap-14 lg:px-16 xl:gap-20"
        style={{ paddingTop: 'clamp(3.5rem, 8vw, 6rem)', paddingBottom: 'clamp(3.5rem, 8vw, 6.5rem)' }}
      >
        <div className="min-w-0 flex-1 lg:max-w-[min(100%,520px)]">
          <h2
            className="eventos-form-video__title m-0"
            style={{
              fontFamily: "'Odesta', serif",
              fontWeight: 400,
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.15,
              color: '#000',
            }}
          >
            Eventos a tu medida
          </h2>
          <p
            className="mt-3 max-w-[32rem]"
            style={{
              fontFamily: 'EditorialNew, serif',
              fontWeight: 400,
              fontSize: 16,
              letterSpacing: '0.02em',
              lineHeight: 1.55,
              color: '#000',
            }}
          >
            Sea cual sea el motivo de tu encuentro, cuenta con LI-ONNA
          </p>

          <form
            className="mt-8 flex flex-col gap-4"
            action="mailto:eventos@lionnamadrid.es"
            method="post"
            encType="text/plain"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
              <div>
                <label htmlFor="ev-nombre" className={labelClass}>
                  Nombre
                </label>
                <input
                  id="ev-nombre"
                  className={inputClass}
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                  autoComplete="given-name"
                />
              </div>
              <div>
                <label htmlFor="ev-apellido" className={labelClass}>
                  Apellido
                </label>
                <input
                  id="ev-apellido"
                  className={inputClass}
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  autoComplete="family-name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="ev-tel" className={labelClass}>
                Teléfono
              </label>
              <input
                id="ev-tel"
                className={inputClass}
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="ev-email" className={labelClass}>
                Email
              </label>
              <input
                id="ev-email"
                className={inputClass}
                type="email"
                name="email"
                placeholder="Email"
                required
                autoComplete="email"
              />
            </div>
            <button
              type="submit"
              className="mt-1 w-full rounded-xl border-0 py-3.5 font-['Inter',sans-serif] text-[15px] font-medium tracking-wide text-white transition hover:opacity-90"
              style={{ background: '#1a1a1a' }}
            >
              Enviar
            </button>
            <p
              className="text-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'italic',
                fontSize: 10,
                color: '#8C8C8C',
                margin: 0,
                marginTop: 4,
              }}
            >
              *Al completar este formulario aceptas nuestro{' '}
              <a href="/politica-de-privacidad" className="text-[#005CFE] underline">
                aviso de privacidad
              </a>
            </p>
          </form>

          {/* Misma jerarquía Framer: h3 «Contactos» (Medium 34px) + h4 para cada línea (Editorial New Regular) */}
          <div className="eventos-contactos mt-10 flex w-full max-w-md flex-col items-start text-left">
            <h3 className="text-h3 m-0 text-left text-[#000]">Contactos</h3>
            <h4 className="m-0 mt-3 w-full" style={estiloLineaContacto}>
              Mail:{' '}
              <a
                href="mailto:eventos@lionnamadrid.es"
                className="text-inherit no-underline decoration-transparent hover:opacity-80"
                style={estiloLineaContacto}
              >
                eventos@lionnamadrid.es
              </a>
            </h4>
            <h4 className="m-0 mt-1.5 w-full" style={estiloLineaContacto}>
              Tel:{' '}
              <a
                href="tel:+34654177126"
                className="text-inherit no-underline decoration-transparent hover:opacity-80"
                style={estiloLineaContacto}
              >
                +34 654 17 71 26
              </a>
            </h4>
          </div>
        </div>

        <div
          className="relative w-full min-h-[min(50vh,420px)] flex-1 lg:min-h-[min(80vh,720px)] lg:max-w-[min(100%,480px)]"
        >
          <div
            className="relative h-full w-full overflow-hidden rounded-2xl bg-black/5 shadow-lg"
            style={{ aspectRatio: '9 / 16', maxHeight: 'min(80vh, 720px)' }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: '50% 50%' }}
              autoPlay
              loop
              muted
              playsInline
              aria-label="Vídeo del interior del bar y la barra en LI-ONNA"
            >
              <source src="/videos/eventos-bar-loop.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
