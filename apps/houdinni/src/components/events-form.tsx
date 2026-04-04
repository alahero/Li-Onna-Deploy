'use client';

import { useState } from 'react';

/**
 * Private Events Form — exact 7 fields from Framer (§10)
 * Endpoint: https://api.framer.com/forms/v1/forms/30fc42f8-d6c6-4282-8d5c-06e4961fcdcb/submit
 */

const FRAMER_ENDPOINT =
  'https://api.framer.com/forms/v1/forms/30fc42f8-d6c6-4282-8d5c-06e4961fcdcb/submit';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: '15px',
  fontWeight: 500,
  color: 'rgb(136, 136, 136)',
  display: 'block',
  marginBottom: '6px',
};

const INPUT_STYLE: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.15)',
  color: '#ffffff',
  padding: '12px 14px',
  fontSize: '14px',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export function EventsForm() {
  const [state, setState] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    const body: Record<string, string> = {};
    data.forEach((val, key) => {
      body[key] = val.toString();
    });

    try {
      const res = await fetch(FRAMER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setState('success');
        form.reset();
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div
        className="text-center"
        style={{ padding: '60px 24px', border: '1px solid rgba(0,153,255,0.3)' }}
      >
        <div
          className="font-druk text-houdinni-blue"
          style={{ fontSize: '2rem', marginBottom: '16px' }}
        >
          ¡RECIBIDO!
        </div>
        <p className="font-editorial text-white/70" style={{ fontSize: '14px', letterSpacing: '0.1em' }}>
          Nuestro equipo se pondrá en contacto contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Row 1: First Name + Last Name */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div>
          <label htmlFor="first-name" style={LABEL_STYLE}>First Name</label>
          <input
            id="first-name"
            name="First Name"
            type="text"
            required
            style={INPUT_STYLE}
            onFocus={(e) => (e.target.style.borderColor = '#0099ff')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
          />
        </div>
        <div>
          <label htmlFor="last-name" style={LABEL_STYLE}>Last Name</label>
          <input
            id="last-name"
            name="Last Name"
            type="text"
            required
            style={INPUT_STYLE}
            onFocus={(e) => (e.target.style.borderColor = '#0099ff')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
          />
        </div>
      </div>

      {/* Row 2: Phone + Email */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" style={LABEL_STYLE}>Phone</label>
          <input
            id="phone"
            name="Phone"
            type="tel"
            required
            style={INPUT_STYLE}
            onFocus={(e) => (e.target.style.borderColor = '#0099ff')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
          />
        </div>
        <div>
          <label htmlFor="email" style={LABEL_STYLE}>Email</label>
          <input
            id="email"
            name="Email"
            type="email"
            required
            style={INPUT_STYLE}
            onFocus={(e) => (e.target.style.borderColor = '#0099ff')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
          />
        </div>
      </div>

      {/* Row 3: Number of people + Day of event */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
        <div>
          <label htmlFor="num-people" style={LABEL_STYLE}>How many people do you expect to have?</label>
          <input
            id="num-people"
            name="Number of people"
            type="number"
            min="1"
            required
            style={INPUT_STYLE}
            onFocus={(e) => (e.target.style.borderColor = '#0099ff')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
          />
        </div>
        <div>
          <label htmlFor="event-day" style={LABEL_STYLE}>Day of the event</label>
          <input
            id="event-day"
            name="Day of event"
            type="date"
            required
            style={{ ...INPUT_STYLE, colorScheme: 'dark' }}
            onFocus={(e) => (e.target.style.borderColor = '#0099ff')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
          />
        </div>
      </div>

      {/* Row 4: What are you celebrating */}
      <div>
        <label htmlFor="celebration-type" style={LABEL_STYLE}>What are you celebrating?</label>
        <textarea
          id="celebration-type"
          name="Type of celebration"
          rows={4}
          required
          style={{
            ...INPUT_STYLE,
            resize: 'vertical',
            minHeight: '120px',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#0099ff')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.15)')}
        />
      </div>

      {/* Error state */}
      {state === 'error' && (
        <p
          className="font-editorial"
          style={{ color: '#ff4444', fontSize: '14px', letterSpacing: '0.05em' }}
        >
          Something went wrong. Please try again.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="font-druk text-houdinni-black hover:bg-houdinni-blue-light transition-colors disabled:opacity-50"
        style={{
          background: '#0099ff',
          padding: '16px 40px',
          fontSize: '14px',
          letterSpacing: '0.1em',
          border: 'none',
          cursor: state === 'submitting' ? 'not-allowed' : 'pointer',
          alignSelf: 'flex-start',
        }}
      >
        {state === 'submitting' ? 'ENVIANDO...' : 'SUBMIT'}
      </button>
    </form>
  );
}
