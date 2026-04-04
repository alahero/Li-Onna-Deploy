'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Fixed 34px nav bar — exact Framer spec: position fixed, top 0, z-index 1, height 34px */}
      <nav
        className="fixed left-0 right-0 top-0 z-50 bg-houdinni-nav"
        style={{ height: '34px' }}
      >
        <div
          className="flex items-center justify-between h-full px-4 tablet:px-8 mx-auto"
          style={{ maxWidth: '1440px' }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center h-full py-1 shrink-0">
            <Image
              src="/logo-white.png"
              alt="Houdinni"
              width={180}
              height={28}
              className="object-contain h-6 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden tablet:flex items-center gap-6">
            <Link
              href="https://mandalagroup.menu/es/houdinni"
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial text-xs uppercase tracking-widest text-white hover:text-houdinni-blue transition-colors"
            >
              Menú
            </Link>
            <Link
              href="/calendar"
              className="font-editorial text-xs uppercase tracking-widest text-white hover:text-houdinni-blue transition-colors"
            >
              Calendario
            </Link>
            <Link
              href="/events"
              className="font-editorial text-xs uppercase tracking-widest text-white hover:text-houdinni-blue transition-colors"
            >
              Privados
            </Link>
            <a
              href="https://tickets.houdinni.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-editorial text-xs uppercase tracking-widest text-white hover:text-houdinni-blue transition-colors"
            >
              Tickets
            </a>
            <Link
              href="/#contact"
              className="font-editorial text-xs uppercase tracking-widest text-white hover:text-houdinni-blue transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Social icons (desktop right) */}
          <div className="hidden tablet:flex items-center gap-2">
            <a
              href="https://www.instagram.com/houdinni.madrid/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#050505" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://maps.app.goo.gl/boeQqsrXHHfuHfTW9"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="Google Maps"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="tablet:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-200 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-all duration-200 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-houdinni-nav flex flex-col items-center justify-center gap-8 tablet:hidden"
          style={{ paddingTop: '34px' }}
        >
          <button
            className="absolute top-2 right-4 text-white text-3xl leading-none"
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
          >
            ×
          </button>
          {[
            { label: 'MENÚ', href: 'https://mandalagroup.menu/es/houdinni', external: true },
            { label: 'CALENDARIO', href: '/calendar', external: false },
            { label: 'PRIVADOS', href: '/events', external: false },
            { label: 'TICKETS', href: 'https://tickets.houdinni.com', external: true },
            { label: 'CONTACTO', href: '/#contact', external: false },
          ].map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-druk text-2xl text-white hover:text-houdinni-blue transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="font-druk text-2xl text-white hover:text-houdinni-blue transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          {/* Social row mobile */}
          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.instagram.com/houdinni.madrid/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#050505" stroke="none"/>
              </svg>
            </a>
            <a href="https://maps.app.goo.gl/boeQqsrXHHfuHfTW9" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Google Maps">
              <svg viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=34671807747" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="#050505" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
