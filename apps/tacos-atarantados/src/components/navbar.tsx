'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '90px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 50,
          overflow: 'hidden',
        }}
      >
        {/* Logo centered */}
        <Link href="/" style={{ position: 'absolute', top: '47%', left: '47%', transform: 'translate(-50%,-50%)' }}>
          <Image
            src="/images/logo.png"
            alt="Tacos Atarantados"
            width={170}
            height={46}
            style={{ width: '170px', height: '46px', objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Taco cursor icon right side */}
        <div style={{ position: 'absolute', top: 'calc(50% - 14.5px)', left: 'calc(53.87% - 25.5px)' }}>
          <Image
            src="/images/taco-cursor-nav.png"
            alt=""
            width={51}
            height={29}
            style={{ width: '51px', height: '29px' }}
          />
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            cursor: 'inherit',
          }}
        >
          <span style={{ display: 'block', width: '28px', height: '3px', background: '#0c7528', borderRadius: '2px' }} />
          <span style={{ display: 'block', width: '28px', height: '3px', background: '#0c7528', borderRadius: '2px' }} />
          <span style={{ display: 'block', width: '28px', height: '3px', background: '#0c7528', borderRadius: '2px' }} />
        </button>
      </nav>

      {/* FULL-SCREEN NAV OVERLAY */}
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(12,117,40,0.97)',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'inherit',
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {/* Logo in overlay */}
          <Link href="/" onClick={() => setOpen(false)} style={{ marginBottom: '32px' }}>
            <Image
              src="/images/logo.png"
              alt="Tacos Atarantados"
              width={200}
              height={54}
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }}
            />
          </Link>

          {/* Nav Grid — image-based buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '7px',
              maxWidth: '723px',
              width: '100%',
              padding: '0 16px',
            }}
          >
            {/* Row 1 */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '19px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/sucursales" target="_blank" rel="noopener" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-sucursales.png" alt="SUCURSALES" width={320} height={103} style={{ width: '320px', height: '103px', objectFit: 'contain', maxWidth: '100%' }} />
              </Link>
              <Link href="/#quienesomos1-1" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-quienes-somos.png" alt="¿QUIÉNES SOMOS?" width={349} height={124} style={{ width: '349px', height: '124px', objectFit: 'contain', maxWidth: '100%' }} />
              </Link>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/merch" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-merch.png" alt="MERCH" width={234} height={101} style={{ width: '234px', height: '101px', objectFit: 'contain', maxWidth: '100%' }} />
              </Link>
              <Image src="/images/nav-gif.gif" alt="" width={123} height={122} unoptimized style={{ width: '123px', height: '122px' }} />
              <Link href="/menu-mex" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-menu.png" alt="MENÚ" width={272} height={117} style={{ width: '272px', height: '117px', objectFit: 'contain', maxWidth: '100%' }} />
              </Link>
            </div>

            {/* Row 3 */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', padding: '8px 0 28px' }}>
              <Link href="/contacto" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-contacto.png" alt="CONTACTO" width={321} height={101} style={{ width: '321px', height: '101px', objectFit: 'contain', maxWidth: '100%' }} />
              </Link>
              <Link href="/facturacion" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-facturacion.png" alt="FACTURACIÓN" width={330} height={106} style={{ width: '330px', height: '106px', objectFit: 'contain', maxWidth: '100%' }} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
