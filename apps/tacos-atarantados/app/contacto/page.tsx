'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { useState, FormEvent } from 'react';

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Full-bleed hero background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Nav */}
          <header
            style={{
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <Link href="/">
              <Image src="/images/logo.png" alt="Tacos Atarantados" width={170} height={46} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </Link>
          </header>

          <main style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 24px 80px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', color: '#ffffff', fontFamily: '"Gothic Regular", sans-serif', fontSize: '32px' }}>
                ¡Gracias! Nos pondremos en contacto pronto.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  background: 'rgba(12, 117, 40, 0.85)',
                  padding: '40px',
                  borderRadius: '8px',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h1
                  style={{
                    fontFamily: '"Gothic Regular", sans-serif',
                    fontWeight: 400,
                    fontSize: '32px',
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  DATOS DE CONTACTO
                </h1>

                {/* NOMBRE */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ffffff' }}>
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Jane Smith"
                    required
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.4)',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#ffffff',
                      outline: 'none',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* E-MAIL */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ffffff' }}>
                    E-MAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@framer.com"
                    required
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.4)',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#ffffff',
                      outline: 'none',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* MENSAJE */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '15px', color: '#ffffff' }}>
                    MENSAJE
                  </label>
                  <textarea
                    name="mensaje"
                    placeholder="¡Hola!"
                    rows={5}
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.4)',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#ffffff',
                      outline: 'none',
                      width: '100%',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {/* Honeypot fields (hidden) */}
                <input type="text" name="website" style={{ display: 'none' }} tabIndex={-1} />
                <input type="text" name="company" style={{ display: 'none' }} tabIndex={-1} />

                {/* ENVIAR button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '3px',
                    border: 'none',
                    padding: '12px 32px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#0c7528',
                    alignSelf: 'flex-start',
                    cursor: 'inherit',
                  }}
                >
                  ENVIAR
                </button>
              </form>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
