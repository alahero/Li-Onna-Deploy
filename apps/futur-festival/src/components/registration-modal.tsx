'use client';

import { useState, useRef, useEffect } from 'react';

const FORM_ENDPOINT =
  'https://api.framer.com/forms/v1/forms/6c2dd0b7-0a55-485d-b373-6d14febfe722/submit';

// Country list for phone selector — MX default
const COUNTRIES = [
  { code: 'MX', flag: '🇲🇽', dialCode: '+52', name: 'Mexico' },
  { code: 'US', flag: '🇺🇸', dialCode: '+1', name: 'United States' },
  { code: 'CA', flag: '🇨🇦', dialCode: '+1', name: 'Canada' },
  { code: 'ES', flag: '🇪🇸', dialCode: '+34', name: 'Spain' },
  { code: 'AR', flag: '🇦🇷', dialCode: '+54', name: 'Argentina' },
  { code: 'CO', flag: '🇨🇴', dialCode: '+57', name: 'Colombia' },
  { code: 'CL', flag: '🇨🇱', dialCode: '+56', name: 'Chile' },
  { code: 'PE', flag: '🇵🇪', dialCode: '+51', name: 'Peru' },
  { code: 'BR', flag: '🇧🇷', dialCode: '+55', name: 'Brazil' },
  { code: 'GT', flag: '🇬🇹', dialCode: '+502', name: 'Guatemala' },
  { code: 'IT', flag: '🇮🇹', dialCode: '+39', name: 'Italy' },
  { code: 'FR', flag: '🇫🇷', dialCode: '+33', name: 'France' },
  { code: 'DE', flag: '🇩🇪', dialCode: '+49', name: 'Germany' },
  { code: 'GB', flag: '🇬🇧', dialCode: '+44', name: 'United Kingdom' },
];

interface Props {
  onClose: () => void;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function RegistrationModal({ onClose }: Props) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]); // MX default
  const [showDropdown, setShowDropdown] = useState(false);
  const [phone, setPhone] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const formRef = useRef<HTMLFormElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading' || status === 'success') return;

    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);

    // Build full phone with dial code
    const fullPhone = `${selectedCountry.dialCode} ${phone}`;

    const payload = {
      'First Name': data.get('firstName'),
      'Last Name': data.get('lastName'),
      Email: data.get('email'),
      Phone: fullPhone,
      'Birth Date': data.get('birthDate'),
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const buttonClass =
    'submit-btn' +
    (status === 'success' ? ' success' : '') +
    (status === 'error' ? ' error' : '');

  function getButtonText() {
    if (status === 'loading') return null;
    if (status === 'success') return "YOU'RE IN. SEE YOU IN THE FUTUR";
    if (status === 'error') return 'Something went wrong';
    return 'Submit';
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="modal-overlay"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal container */}
      <div className="modal-container" role="dialog" aria-modal="true">
        {/* Close button */}
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close"
          style={{ background: 'rgba(0,0,0,0.3)' }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="13"
              y2="13"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line
              x1="13"
              y1="1"
              x2="1"
              y2="13"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Form card */}
        <div className="form-card">
          <form ref={formRef} onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* First Name */}
            <div className="form-field">
              <input
                className="reg-input"
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            {/* Last Name */}
            <div className="form-field">
              <input
                className="reg-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            {/* Email */}
            <div className="form-field">
              <input
                className="reg-input"
                type="email"
                name="email"
                placeholder="Email"
                required
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            {/* Phone with country selector */}
            <div className="form-field">
              <div className="phone-input-wrapper" ref={dropdownRef} style={{ position: 'relative' }}>
                <button
                  type="button"
                  className="phone-country-btn"
                  onClick={() => setShowDropdown((v) => !v)}
                  disabled={status === 'loading' || status === 'success'}
                  aria-label="Select country"
                >
                  <span>{selectedCountry.flag}</span>
                  <span>{selectedCountry.dialCode}</span>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.5 }}>
                    <path d="M1 1L5 5L9 1" stroke="rgb(105,105,105)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <input
                  className="phone-number-input"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  disabled={status === 'loading' || status === 'success'}
                />
                {showDropdown && (
                  <div className="phone-dropdown">
                    {COUNTRIES.map((c) => (
                      <div
                        key={c.code}
                        className="phone-dropdown-item"
                        onClick={() => {
                          setSelectedCountry(c);
                          setShowDropdown(false);
                        }}
                      >
                        <span>{c.flag}</span>
                        <span style={{ flex: 1 }}>{c.name}</span>
                        <span style={{ color: '#888', fontSize: '12px' }}>{c.dialCode}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Birth Date */}
            <div className="form-field">
              <label className="form-label">Birth Date</label>
              <input
                className="reg-input-date"
                type="date"
                name="birthDate"
                required
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            {/* Privacy Checkbox */}
            <div className="form-field">
              <div className="privacy-checkbox-wrapper">
                <input
                  className="privacy-checkbox"
                  type="checkbox"
                  id="privacy-reg"
                  required
                  disabled={status === 'loading' || status === 'success'}
                />
                <label className="privacy-label" htmlFor="privacy-reg">
                  By clicking below to submit this form, you acknowledge that the information you
                  provide will be processed in accordance with our{' '}
                  <a href="/privacy">privacy policy.</a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={buttonClass}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? (
                <div className="btn-spinner" />
              ) : (
                getButtonText()
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
