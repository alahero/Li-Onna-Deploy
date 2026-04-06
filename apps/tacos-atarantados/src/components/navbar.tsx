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
        {/* Logo centered — Framer: x=508, y=19, 170x46 on 1200px width */}
        <Link href="/" style={{ position: 'absolute', top: '19px', left: '50%', transform: 'translateX(-50%)' }}>
          <Image
            src="/images/logo.png"
            alt="Tacos Atarantados"
            width={170}
            height={46}
            style={{ width: '170px', height: '46px', objectFit: 'cover' }}
            priority
          />
        </Link>

        {/* Taco cursor icon — Framer: x=1067, y=31, 51x29 (right side) */}
        <div style={{ position: 'absolute', top: '31px', right: '82px' }}>
          <Image
            src="/images/taco-cursor-nav.png"
            alt=""
            width={51}
            height={29}
            style={{ width: '51px', height: '29px', objectFit: 'cover' }}
          />
        </div>

        {/* Hamburger button — mobile only (<810px) */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="hamburger-btn"
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            padding: '8px',
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
            aria-label="Cerrar menu"
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
            &#x2715;
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
              gap: '0px',
              maxWidth: '868px',
              width: '100%',
              padding: '0 16px',
            }}
          >
            {/* Row 1 */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/sucursales" target="_blank" rel="noopener" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-sucursales.png" alt="SUCURSALES" width={384} height={124} style={{ width: '320px', height: '103px', objectFit: 'cover', maxWidth: '100%' }} />
              </Link>
              <Link href="/#quienesomos1-1" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-quienes-somos.png" alt="QUIENES SOMOS" width={419} height={149} style={{ width: '349px', height: '124px', objectFit: 'cover', maxWidth: '100%' }} />
              </Link>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/merch" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-merch.png" alt="MERCH" width={310} height={121} style={{ width: '260px', height: '101px', objectFit: 'cover', maxWidth: '100%' }} />
              </Link>
              <Image src="/images/nav-gif.gif" alt="" width={148} height={146} unoptimized style={{ width: '123px', height: '122px' }} />
              <Link href="/menu-mex" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-menu.png" alt="MENU" width={326} height={140} style={{ width: '272px', height: '117px', objectFit: 'cover', maxWidth: '100%' }} />
              </Link>
            </div>

            {/* Row 3 */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contacto" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-contacto.png" alt="CONTACTO" width={385} height={121} style={{ width: '321px', height: '101px', objectFit: 'cover', maxWidth: '100%' }} />
              </Link>
              <Link href="/facturacion" onClick={() => setOpen(false)} className="nav-btn">
                <Image src="/images/nav-facturacion.png" alt="FACTURACION" width={396} height={127} style={{ width: '330px', height: '106px', objectFit: 'cover', maxWidth: '100%' }} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
