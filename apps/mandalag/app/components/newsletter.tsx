'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';

interface NewsletterProps {
  heading?: string;
  description: string;
  image: string;
  emailPlaceholder?: string;
  buttonText: string;
  submitUrl?: string;
  successMessage?: string;
  errorMessage?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter({
  heading = 'Newsletter',
  description,
  image,
  emailPlaceholder = 'your@email.com',
  buttonText,
  submitUrl,
  successMessage = '¡Gracias por suscribirte!',
  errorMessage = 'Hubo un problema. Intenta de nuevo.',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    // If no submit URL is configured, treat it as a dry-run so marketing
    // can see the form works but no request is fired until they plug in
    // a real Mailchimp/Brevo/Resend endpoint.
    if (!submitUrl) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      style={{
        backgroundColor: '#525252',
        width: '100%',
        display: 'flex',
        flexFlow: 'column',
        placeContent: 'center',
        alignItems: 'center',
        gap: '40px',
        padding: '100px 180px 0 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          gap: '146px',
          width: '100%',
          maxWidth: '1500px',
          alignItems: 'flex-start',
        }}
      >
        {/* Left: Image + text */}
        <div style={{ flex: '1 0 0', display: 'flex', flexFlow: 'row', gap: '20px', alignItems: 'flex-start', paddingRight: '20px' }}>
          <div style={{ position: 'relative', height: '300px', width: '200px', flexShrink: 0 }}>
            <Image src={image} alt="" fill style={{ objectFit: 'contain' }} />
          </div>
          <p className="font-inter" style={{ fontSize: '15px', lineHeight: '2em', letterSpacing: '-0.01em', color: '#fff', flex: '1 0 0' }}>
            {description}
          </p>
        </div>

        {/* Right: Form */}
        <form onSubmit={handleSubmit} style={{ flex: '1 0 0', display: 'flex', flexFlow: 'column', gap: '10px' }}>
          <span className="font-figtree" style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>
            {heading}
          </span>
          <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              disabled={status === 'loading'}
              style={{
                flex: '1 0 0',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                backgroundColor: 'transparent',
                padding: '10px 14px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#fff',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="font-figtree"
              style={{
                borderRadius: '13px',
                border: '1px solid #d9d9d9',
                backgroundColor: 'transparent',
                padding: '10px 20px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#fff',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                lineHeight: '1.5em',
                opacity: status === 'loading' ? 0.6 : 1,
              }}
            >
              {status === 'loading' ? '...' : buttonText}
            </button>
          </div>

          {status === 'success' ? (
            <p
              role="status"
              className="font-inter"
              style={{ fontSize: '13px', color: '#9fe79f', margin: 0, marginTop: '4px' }}
            >
              {successMessage}
            </p>
          ) : null}
          {status === 'error' ? (
            <p
              role="alert"
              className="font-inter"
              style={{ fontSize: '13px', color: '#ff8a8a', margin: 0, marginTop: '4px' }}
            >
              {errorMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
