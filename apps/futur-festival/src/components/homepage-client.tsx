'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RegistrationModal } from './registration-modal';

export function HomepageClient() {
  const [modalOpen, setModalOpen] = useState(false);

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

      {/* Page container — positioned above background */}
      <div className="page-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero">

          {/* FIRST LINE — nav */}
          <motion.div
            className="first-line"
            initial={{ opacity: 0.001, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0.2, delay: 0, duration: 0.4 }}
          >
            <a
              href="https://kappafuturfestival.it"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              WHAT IS THE FUTUR
            </a>
            <span className="preset-nav" style={{ display: 'none' }} aria-hidden>
              {/* Mobile: MEXICO 2026, hidden on desktop via CSS */}
            </span>
            <h3
              className="preset-nav coming-to-mexico-desktop"
              style={{ margin: 0 }}
            >
              COMING TO MEXICO
            </h3>
            <h3
              className="preset-nav coming-to-mexico-mobile"
              style={{ margin: 0, display: 'none' }}
            >
              MEXICO 2026
            </h3>
          </motion.div>

          {/* CONTENT AREA — logo + button */}
          <div className="content-area">
            <motion.div
              initial={{ opacity: 0.001, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'tween',
                delay: 0.1,
                duration: 0.9,
                ease: [0.44, 0, 0.56, 1],
              }}
            >
              <Image
                src="/logo.png"
                alt="FUTUR Festival"
                width={600}
                height={199}
                className="futur-logo"
                priority
              />
            </motion.div>

            <motion.button
              className="register-button"
              onClick={() => setModalOpen(true)}
              initial={{ opacity: 0.001 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'spring', bounce: 0.2, delay: 0.7, duration: 0.9 }}
              aria-label="Register Now"
            >
              <span className="register-button-text">REGISTER NOW!</span>
            </motion.button>
          </div>

          {/* BASE LINE — footer */}
          <motion.div
            className="base-line"
            initial={{ opacity: 0.001, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0.2, delay: 0, duration: 0.4 }}
          >
            <h3 className="preset-nav" style={{ margin: 0 }}>
              © 2026 Movement Entertainment Srl
            </h3>
          </motion.div>
        </div>
      </div>

      {/* Modal portal */}
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0, duration: 0.3, ease: [0.5, 0, 0.88, 0.77], type: 'tween' } }}
          exit={{ opacity: 0, transition: { duration: 0, ease: [0, 0, 1, 1], type: 'tween' } }}
          style={{ position: 'fixed', inset: 0, zIndex: 100 }}
        >
          <RegistrationModal onClose={() => setModalOpen(false)} />
        </motion.div>
      )}

    </>
  );
}
