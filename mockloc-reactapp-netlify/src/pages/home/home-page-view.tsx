import React, { useEffect, useState } from 'react';
import './home-page.css';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.mocker.mockloc';

const features = [
  {
    icon: '📍',
    title: 'Instant Location Spoofing',
    desc: 'Set any GPS coordinates on the globe with a single tap. Full control over your virtual position.',
  },
  {
    icon: '🗺️',
    title: 'Interactive Map',
    desc: 'Browse a full interactive map and drop a pin exactly where you want your mock location to appear.',
  },
  {
    icon: '🛣️',
    title: 'Route Simulation',
    desc: 'Create waypoints and simulate movement along a custom route at adjustable speed.',
  },
  {
    icon: '📋',
    title: 'Saved Locations',
    desc: 'Save your favourite spots and switch between them instantly without re-entering coordinates.',
  },
  {
    icon: '🔒',
    title: 'No Root Required',
    desc: 'Works entirely through Android Developer Options — no root or special permissions needed.',
  },
  {
    icon: '⚡',
    title: 'Lightweight & Fast',
    desc: 'Minimal battery impact and blazing-fast location updates keep your experience smooth.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Enable Developer Options',
    desc: "Go to Settings → About Phone → tap Build Number 7 times to unlock Developer Options.",
  },
  {
    num: '02',
    title: 'Select Mock Loc as Mock App',
    desc: "In Developer Options, tap \"Select mock location app\" and choose Mock Loc from the list.",
  },
  {
    num: '03',
    title: 'Pick Your Location & Go',
    desc: "Open Mock Loc, search or drop a pin anywhere on the map, tap Start — your GPS is now spoofed!",
  },
];

/* Floating particles */
const ParticleField: React.FC = () => (
  <div className="particle-field" aria-hidden="true">
    {Array.from({ length: 24 }).map((_, i) => (
      <span key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
    ))}
  </div>
);

/* Play Store SVG badge */
const PlayIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
  </svg>
);

const HomePageView: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="ml-root">

      {/* ── NAV ── */}
      <nav className={`ml-nav${scrolled ? ' ml-nav--scrolled' : ''}`} role="navigation">
        <div className="ml-nav__inner">
          <div className="ml-nav__brand">
            <img src="/mockloc-icon.png" alt="Mock Loc app icon" className="ml-nav__logo" />
            <span className="ml-nav__name">Mock Loc</span>
          </div>
          <a
            id="nav-cta"
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-btn ml-btn--sm ml-btn--primary"
          >
            <PlayIcon size={15} />
            Get on Play Store
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="ml-hero">
        <ParticleField />
        <div className="ml-hero__glow ml-hero__glow--1" aria-hidden="true" />
        <div className="ml-hero__glow ml-hero__glow--2" aria-hidden="true" />
        <div className="ml-hero__glow ml-hero__glow--3" aria-hidden="true" />

        <div className="ml-hero__content">
          <div className="ml-hero__badge">📡 GPS Location Spoofer · No Root Needed</div>

          <h1 className="ml-hero__title">
            Be Anywhere<br />
            <span className="ml-hero__title--gradient">in the World</span>
          </h1>

          <p className="ml-hero__subtitle">
            Mock Loc lets you fake your GPS location on any Android device instantly.
            Perfect for developers, testers, and privacy-conscious users.
          </p>

          <div className="ml-hero__actions">
            <a
              id="hero-cta-primary"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-btn ml-btn--primary ml-btn--lg"
            >
              <PlayIcon size={22} />
              Download Free on Play Store
            </a>
            <a href="#how-it-works" className="ml-btn ml-btn--ghost ml-btn--lg" id="hero-cta-howto">
              How It Works ↓
            </a>
          </div>

          <div className="ml-hero__stats">
            <div className="ml-stat">
              <span className="ml-stat__num">10K+</span>
              <span className="ml-stat__label">Downloads</span>
            </div>
            <div className="ml-stat__divider" />
            <div className="ml-stat">
              <span className="ml-stat__num">4.5★</span>
              <span className="ml-stat__label">Rating</span>
            </div>
            <div className="ml-stat__divider" />
            <div className="ml-stat">
              <span className="ml-stat__num">Free</span>
              <span className="ml-stat__label">To Use</span>
            </div>
          </div>
        </div>

        {/* ── Phone Mockup ── */}
        <div className="ml-hero__visual" aria-hidden="true">
          <div className="ml-phone-mockup">
            <div className="ml-phone-mockup__frame">
              <div className="ml-phone-mockup__screen">
                <div className="ml-map-preview">
                  <div className="ml-map-preview__grid" />
                  {/* Pulse ring behind pin */}
                  <div className="ml-map-preview__pulse" />
                  {/* 📍 Pin */}
                  <div className="ml-map-preview__pin">📍</div>
                  <div className="ml-map-preview__coords">28.6139° N, 77.2090° E</div>
                  <div className="ml-map-preview__label">New Delhi, India</div>
                  <div className="ml-map-preview__status">
                    <span className="ml-dot ml-dot--green" />
                    Location Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="ml-section ml-features">
        <div className="ml-container">
          <div className="ml-section__header">
            <span className="ml-section__tag">Features</span>
            <h2 className="ml-section__title">Everything You Need</h2>
            <p className="ml-section__subtitle">
              A complete toolkit for GPS location management, designed for simplicity and power.
            </p>
          </div>
          <div className="ml-features__grid">
            {features.map((f, i) => (
              <article key={i} className="ml-feature-card" id={`feature-card-${i}`}>
                <div className="ml-feature-card__icon" role="img" aria-label={f.title}>{f.icon}</div>
                <h3 className="ml-feature-card__title">{f.title}</h3>
                <p className="ml-feature-card__desc">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="ml-section ml-how">
        <div className="ml-container">
          <div className="ml-section__header">
            <span className="ml-section__tag">Setup Guide</span>
            <h2 className="ml-section__title">Get Started in 3 Steps</h2>
            <p className="ml-section__subtitle">No root. No hassle. Fake GPS in under 2 minutes.</p>
          </div>
          <div className="ml-steps">
            {steps.map((s, i) => (
              <div key={i} className="ml-step" id={`step-${i + 1}`}>
                <div className="ml-step__num">{s.num}</div>
                <div className="ml-step__body">
                  <h3 className="ml-step__title">{s.title}</h3>
                  <p className="ml-step__desc">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="ml-step__connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="ml-cta-banner">
        <div className="ml-container">
          <div className="ml-cta-banner__inner">
            <div className="ml-cta-banner__glow" aria-hidden="true" />
            <img
              src="/mockloc-icon.png"
              alt="Mock Loc app icon"
              className="ml-cta-banner__icon"
            />
            <h2 className="ml-cta-banner__title">Ready to spoof your location?</h2>
            <p className="ml-cta-banner__sub">
              Free download · No root required · Works on all Android devices
            </p>
            <a
              id="cta-banner-download"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-btn ml-btn--primary ml-btn--lg"
            >
              <PlayIcon size={22} />
              Download on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ml-footer">
        <div className="ml-container">
          <div className="ml-footer__inner">
            <div className="ml-footer__brand">
              <img src="/mockloc-icon.png" alt="Mock Loc" className="ml-footer__logo" />
              <span className="ml-footer__name">Mock Loc</span>
            </div>
            <p className="ml-footer__copy">
              © {new Date().getFullYear()} Mock Loc · GPS Location Spoofer for Android
            </p>
            <div className="ml-footer__links">
              <a href="/app-ads.txt" className="ml-footer__link" id="footer-app-ads">
                app-ads.txt
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-footer__link"
                id="footer-playstore"
              >
                Play Store
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePageView;