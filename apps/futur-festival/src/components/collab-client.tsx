'use client';

import { useState } from 'react';
import Image from 'next/image';

const FORM_ENDPOINT =
  'https://api.framer.com/forms/v1/forms/1a134124-d3e8-4832-9912-4c0701004a97/submit';

const ROLES = [
  { value: 'Influencer', label: 'Influencer' },
  { value: 'Content Creator', label: 'Content Creator' },
  { divider: true, key: 'd1' },
  { value: 'Agency', label: 'Agency' },
  { value: 'DJ', label: 'DJ' },
  { divider: true, key: 'd2' },
  { value: 'Photographer', label: 'Photographer' },
  { value: 'Filmmaker', label: 'Filmmaker' },
  { value: 'Press / Media', label: 'Press / Media' },
  { value: 'Fan Page', label: 'Fan Page' },
  { divider: true, key: 'd3' },
  { value: 'Volunteer / Staff', label: 'Volunteer / Staff' },
  { value: 'Supplier', label: 'Supplier' },
  { value: 'Sponsor / Brand', label: 'Sponsor / Brand' },
  { divider: true, key: 'd4' },
  { value: 'Other', label: 'Other' },
] as const;

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function CollabClient() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading' || status === 'success') return;

    setStatus('loading');
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      Name: data.get('Name'),
      Email: data.get('Email'),
      Cellphone: data.get('Cellphone'),
      Location: data.get('Location'),
      Message: data.get('Message'),
      Links: data.get('Links'),
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const btnClass =
    'submit-btn-collab' +
    (status === 'success' ? ' success' : '') +
    (status === 'error' ? ' error' : '');

  function getButtonText() {
    if (status === 'loading') return null;
    if (status === 'success') return 'Thank you';
    if (status === 'error') return 'Something went wrong';
    return 'Submit';
  }

  const disabled = status === 'loading' || status === 'success';

  return (
    <>
      {/* Background fills entire viewport */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          backgroundColor: '#224366',
        }}
      >
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          aria-hidden
        />
      </div>

      {/* Page container */}
      <div className="page-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero" style={{ justifyContent: 'space-between' }}>

          {/* TOP BAR — Logo */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              height: '48px',
              padding: '0 10px',
            }}
          >
            <a href="/" aria-label="Back to homepage">
              <Image
                src="/logo.png"
                alt="FUTUR Festival"
                width={273}
                height={28}
                style={{ objectFit: 'contain', width: '273px', height: 'auto' }}
                priority
              />
            </a>
          </div>

          {/* MAIN CONTENT — form + text */}
          <div
            className="collab-content"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '77px',
              width: '100%',
              padding: '10px',
              flex: 1,
            }}
          >
            {/* LEFT — Form card */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                width: '387px',
                minWidth: '387px',
                flexShrink: 0,
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* Name */}
                <div>
                  <label className="collab-label">Name</label>
                  <input
                    className="collab-input"
                    type="text"
                    name="Name"
                    placeholder="Name and last name"
                    disabled={disabled}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="collab-label">Email</label>
                  <input
                    className="collab-input"
                    type="email"
                    name="Email"
                    placeholder="your@mail.com"
                    disabled={disabled}
                  />
                </div>

                {/* Cellphone */}
                <div>
                  <label className="collab-label">Cellphone</label>
                  <input
                    className="collab-input"
                    type="tel"
                    name="Cellphone"
                    placeholder="Phone Number"
                    disabled={disabled}
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="collab-label">Your role</label>
                  <select
                    className="collab-input"
                    name="Location"
                    required
                    defaultValue=""
                    disabled={disabled}
                    style={{
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 12px center',
                      paddingRight: '32px',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" disabled>Select…</option>
                    <option value="Influencer">Influencer</option>
                    <option value="Content Creator">Content Creator</option>
                    <option value="Agency">Agency</option>
                    <option value="DJ">DJ</option>
                    <option value="Photographer">Photographer</option>
                    <option value="Filmmaker">Filmmaker</option>
                    <option value="Press / Media">Press / Media</option>
                    <option value="Fan Page">Fan Page</option>
                    <option value="Volunteer / Staff">Volunteer / Staff</option>
                    <option value="Supplier">Supplier</option>
                    <option value="Sponsor / Brand">Sponsor / Brand</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="collab-label">Your message</label>
                  <textarea
                    className="collab-textarea"
                    name="Message"
                    placeholder="How you want to collaborate"
                    disabled={disabled}
                  />
                </div>

                {/* Link */}
                <div>
                  <label className="collab-label">Link</label>
                  <input
                    className="collab-input"
                    type="url"
                    name="Links"
                    placeholder="Portfolio, demo reel, profile, etc."
                    disabled={disabled}
                  />
                </div>

                {/* Privacy note */}
                <p
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgb(136,136,136)',
                    margin: 0,
                  }}
                >
                  By submitting this form, you acknowledge that the information you provide will be
                  processed in accordance with our{' '}
                  <a href="/privacy" style={{ color: 'rgb(136,136,136)', textDecoration: 'underline' }}>
                    privacy policy.
                  </a>
                </p>

                {/* Submit button */}
                <button
                  type="submit"
                  className={btnClass}
                  disabled={disabled}
                >
                  {status === 'loading' ? (
                    <div className="btn-spinner" />
                  ) : (
                    getButtonText()
                  )}
                </button>
              </form>
            </div>

            {/* RIGHT — Text content */}
            <div
              className="collab-text-right"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                flex: 1,
              }}
            >
              <h1 className="preset-h1" style={{ margin: 0 }}>
                JOIN THE FUTUR.
              </h1>
              <h3
                className="preset-nav"
                style={{ margin: 0 }}
              >
                ARE YOU INTERESTED IN COLLABORATING WITH US?
                <br />
                SEND US A MESSAGE.
                <br />
                <span className="collab-review-desktop">
                  WE&apos;LL REVIEW ALL APPLICATIONS AND GET BACK TO YOU AS SOON AS POSSIBLE.
                </span>
              </h3>
            </div>
          </div>

          {/* BASE LINE */}
          <div className="base-line">
            <h3 className="preset-nav" style={{ margin: 0 }}>
              © 2026 Movement Entertainment Srl
            </h3>
          </div>
        </div>
      </div>

    </>
  );
}
