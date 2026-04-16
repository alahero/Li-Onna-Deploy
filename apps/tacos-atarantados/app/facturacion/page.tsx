'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { useState, FormEvent } from 'react';

export default function FacturacionPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div style={{ position: 'relative', minHeight: '100vh', background: '#ffffff' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <header
            style={{
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              borderBottom: '2px solid #0c7528',
            }}
          >
            <Link href="/">
              <Image src="/images/logo.png" alt="Tacos Atarantados" width={170} height={46} style={{ objectFit: 'contain' }} />
            </Link>
          </header>

          <main style={{ maxWidth: '640px', margin: '0 auto', padding: '60px 24px 80px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', fontFamily: '"Gothic Regular", sans-serif', fontSize: '32px', color: '#0c7528' }}>
                ¡Solicitud enviada! Recibirás tu factura pronto.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  background: '#f9f9f9',
                  border: '2px solid #0c7528',
                  padding: '40px',
                  borderRadius: '8px',
                }}
              >
                <Image
                  src="/images/nav-facturacion.png"
                  alt="FACTURACIÓN"
                  width={330}
                  height={106}
                  style={{ maxWidth: '100%', height: 'auto', alignSelf: 'center', display: 'block' }}
                />

                {[
                  { label: 'RFC', name: 'rfc', type: 'text', placeholder: 'RFC con homoclave' },
                  { label: 'RAZÓN SOCIAL', name: 'razon_social', type: 'text', placeholder: 'Nombre o empresa' },
                  { label: 'CORREO ELECTRÓNICO', name: 'email', type: 'email', placeholder: 'facturacion@empresa.com' },
                  { label: 'FOLIO / TICKET', name: 'folio', type: 'text', placeholder: 'Número de ticket' },
                  { label: 'FECHA DE COMPRA', name: 'fecha', type: 'date', placeholder: '' },
                  { label: 'MONTO TOTAL', name: 'monto', type: 'number', placeholder: '0.00' },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: '#0c7528' }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required
                      style={{
                        border: '1px solid #0c7528',
                        borderRadius: '4px',
                        padding: '10px 14px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: '#000000',
                        background: '#ffffff',
                        outline: 'none',
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                ))}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '13px', color: '#0c7528' }}>
                    USO CFDI
                  </label>
                  <select
                    name="uso_cfdi"
                    style={{
                      border: '1px solid #0c7528',
                      borderRadius: '4px',
                      padding: '10px 14px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#000000',
                      background: '#ffffff',
                      outline: 'none',
                    }}
                  >
                    <option value="G01">G01 - Adquisición de mercancias</option>
                    <option value="G03">G03 - Gastos en general</option>
                    <option value="D10">D10 - Pagos por servicios educativos</option>
                    <option value="S01">S01 - Sin efectos fiscales</option>
                  </select>
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#0c7528',
                    borderRadius: '3px',
                    border: 'none',
                    padding: '12px 32px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#ffffff',
                    alignSelf: 'center',
                    cursor: 'inherit',
                  }}
                >
                  SOLICITAR FACTURA
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
