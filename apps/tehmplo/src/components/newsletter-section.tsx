'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [form, setForm] = useState({ name: '', lastName: '', email: '', cellphone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      style={{
        width: '100%',
        minHeight: 456,
        background: 'linear-gradient(180deg, #000000 0%, rgb(6, 19, 28) 107%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        gap: 40,
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: '"Source Sans 3", sans-serif',
            fontSize: 18,
            fontWeight: 400,
            color: 'rgb(239, 128, 36)',
            letterSpacing: '2.52px',
            lineHeight: '1em',
            marginBottom: 8,
            textTransform: 'uppercase',
          }}
        >
          NEWSLETTER
        </p>
        <h2
          style={{
            fontSize: 39,
            lineHeight: '1em',
            color: '#ffffff',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ fontFamily: '"Basteleur Moonlight", sans-serif', fontWeight: 400 }}>
            JOIN{' '}
          </span>
          <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontStyle: 'italic', fontWeight: 400 }}>
            THE{' '}
          </span>
          <span style={{ fontFamily: '"Austin Cyr Italic", serif', fontStyle: 'italic', fontWeight: 400 }}>
            REAL{' '}
          </span>
          <span style={{ fontFamily: '"Basteleur Moonlight", sans-serif', fontWeight: 400 }}>
            TULUM
          </span>
        </h2>
      </div>

      {/* Form card */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#212121',
            borderRadius: 12,
            width: '100%',
            maxWidth: 454,
            minHeight: 281,
            padding: 20,
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {/* 2×2 grid of fields */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
            }}
          >
            {[
              { label: 'NAME', name: 'name', type: 'text', placeholder: 'Your name', labelFont: '"Source Sans 3", sans-serif' },
              { label: 'LAST NAME', name: 'lastName', type: 'text', placeholder: 'Your last name', labelFont: '"Source Sans 3", sans-serif' },
              { label: 'EMAIL', name: 'email', type: 'email', placeholder: 'your@email.com', labelFont: 'Inter, sans-serif' },
              { label: 'CELLPHONE', name: 'cellphone', type: 'tel', placeholder: '+52 000 000 0000', labelFont: 'Inter, sans-serif' },
            ].map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  style={{
                    display: 'block',
                    fontFamily: field.labelFont,
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#ffffff',
                    marginBottom: 6,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    background: 'rgba(186, 186, 186, 0)',
                    border: 'none',
                    borderBottom: '1px solid rgba(0,0,0,0.6)',
                    borderRadius: 10,
                    padding: '8px 4px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#999999',
                    lineHeight: '1.2em',
                    outline: 'none',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Subscribe button */}
          <button
            type="submit"
            style={{
              width: 411,
              maxWidth: '100%',
              height: 39,
              background: '#ef8024',
              border: 'none',
              borderRadius: 5,
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: 15,
              fontWeight: 400,
              color: '#ffffff',
              letterSpacing: '2.1px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              alignSelf: 'center',
              transition: 'opacity 0.2s ease',
            }}
          >
            SUBSCRIBE
          </button>

          {/* Legal text */}
          <p
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: 11,
              color: 'rgb(136, 136, 136)',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            By signing up, I agree to Tehmplo&apos;s{' '}
            <a
              href="/tc"
              style={{ color: '#ef8024', textDecoration: 'underline' }}
            >
              Terms of Use
            </a>{' '}
            and{' '}
            <a
              href="/tc"
              style={{ color: '#ef8024', textDecoration: 'underline' }}
            >
              Privacy Policy
            </a>
            .
          </p>
        </form>
      ) : (
        <div
          style={{
            background: '#212121',
            borderRadius: 12,
            width: '100%',
            maxWidth: 454,
            padding: 40,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: '"Austin Cyr Roman", serif',
              fontSize: 24,
              color: '#ef8024',
              marginBottom: 12,
            }}
          >
            Thank you!
          </p>
          <p
            style={{
              fontFamily: '"Source Sans 3", sans-serif',
              fontSize: 14,
              color: '#ffffff',
              opacity: 0.7,
            }}
          >
            You have been added to the Tehmplo newsletter.
          </p>
        </div>
      )}
    </section>
  );
}
