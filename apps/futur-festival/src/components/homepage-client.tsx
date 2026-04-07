'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RegistrationModal } from './registration-modal';
import { Hero } from './hero';
import { Navbar } from './navbar';
import { LineupSection } from './lineup-section';
import { TicketsSection } from './tickets-section';
import { ScheduleSection } from './schedule-section';
import { VenueSection } from './venue-section';
import { GallerySection } from './gallery-section';
import { FaqSection } from './faq-section';
import { Footer } from './footer';

interface Artist {
  name: string;
  slug: string;
  genre: string;
  country: string;
  image?: string;
  headliner: boolean;
  day: string;
  performanceTime?: string;
  stage?: string;
  socialUrl?: string;
}

interface ScheduleSet {
  artistName: string;
  startTime: string;
  endTime: string;
  headliner?: boolean;
}

interface Stage {
  stageName: string;
  sets: ScheduleSet[];
}

interface ScheduleDay {
  day: string;
  stages: Stage[];
}

interface GalleryItem {
  title: string;
  image?: string;
  edition: string;
  order: number;
}

interface FaqItem {
  question: string;
  answer: string;
  order: number;
}

interface TicketTier {
  name: string;
  price: string;
  description: string;
  features: string;
  soldOut: boolean;
  buyUrl?: string;
  featured?: boolean;
}

interface SponsorTier {
  tierName: string;
  logos: string[];
}

export interface HomepageClientProps {
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroVideoUrl?: string;
  heroImage?: string;
  ticketUrl?: string;
  festivalDate: string;
  festivalLocation: string;
  countdownTarget?: string;
  // Site
  siteName: string;
  tagline: string;
  social?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    twitter?: string;
    whatsapp?: string;
  };
  // Tickets
  ticketsTitle: string;
  ticketsDescription: string;
  ticketTiers: TicketTier[];
  // Venue
  venueName: string;
  venueAddress: string;
  venueDescription?: string;
  venueMapUrl?: string;
  venueImage?: string;
  // Sponsors
  sponsorsTitle: string;
  sponsorTiers: SponsorTier[];
  // Collections
  artists: Artist[];
  schedule: ScheduleDay[];
  gallery: GalleryItem[];
  faq: FaqItem[];
}

export function HomepageClient({
  heroTitle,
  heroSubtitle,
  heroCtaText,
  heroVideoUrl,
  heroImage,
  ticketUrl,
  festivalDate,
  festivalLocation,
  countdownTarget,
  siteName,
  tagline,
  social,
  ticketsTitle,
  ticketsDescription,
  ticketTiers,
  venueName,
  venueAddress,
  venueDescription,
  venueMapUrl,
  venueImage,
  sponsorsTitle,
  sponsorTiers,
  artists,
  schedule,
  gallery,
  faq,
}: HomepageClientProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // If ticketUrl is not set, show the pre-registration landing page
  if (!ticketUrl) {
    return (
      <>
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
                href="https://www.kappafuturfestival.it/en/?utm_source=website&utm_medium=mexico&utm_campaign=kffmx_preregistration"
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
                &copy; 2026 Movement Entertainment Srl
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

  // Full festival homepage with all sections
  return (
    <>
      <Navbar ticketUrl={ticketUrl} />

      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={heroCtaText}
        ticketUrl={ticketUrl}
        festivalDate={festivalDate}
        festivalLocation={festivalLocation}
        heroImage={heroImage}
        heroVideoUrl={heroVideoUrl}
        countdownTarget={countdownTarget}
      />

      <LineupSection artists={artists} />

      <TicketsSection
        title={ticketsTitle}
        description={ticketsDescription}
        tiers={ticketTiers}
      />

      <ScheduleSection schedule={schedule} />

      <VenueSection
        name={venueName}
        address={venueAddress}
        description={venueDescription}
        mapUrl={venueMapUrl}
        image={venueImage}
      />

      <GallerySection items={gallery} />

      <FaqSection items={faq} />

      <Footer
        siteName={siteName}
        tagline={tagline}
        social={social}
        sponsors={{
          title: sponsorsTitle,
          tiers: sponsorTiers,
        }}
        ticketUrl={ticketUrl}
      />
    </>
  );
}
