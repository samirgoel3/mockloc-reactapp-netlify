import React, { useEffect } from 'react';
import '../home/home-page.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.mocker.mockloc';

const ParticleField: React.FC = () => (
  <div className="particle-field" aria-hidden="true">
    {Array.from({ length: 24 }).map((_, i) => (
      <span key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
    ))}
  </div>
);

const PlayIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76a2 2 0 0 0 2.05-.21L18.1 14.1l-3.28-3.28L3.18 23.76zm17.28-13.1a1.99 1.99 0 0 0 0-3.32L17.3 5.5 13.88 8.92l3.3 3.3 3.28-1.56zM2.01 1.07A2 2 0 0 0 1 2.86v18.28c0 .79.43 1.48 1.01 1.79l.1.06 10.23-10.23v-.24L2.11 1.01l-.1.06zm11.87 10.75 3.42-3.42-3.42-3.42-3.28 3.28v.28l3.28 3.28z" />
  </svg>
);

const DeeplinkView: React.FC = () => {
  
  // Auto-redirect to the app if a deeplink was triggered
  useEffect(() => {
    // You could put your automatic deeplink redirect logic here if needed
    // e.g., window.location.href = "mockloc://app";
  }, []);

  return (
    <div className="ml-root">
      {/* ── NAV ── */}
      <nav className="ml-nav ml-nav--scrolled" role="navigation">
        <div className="ml-nav__inner">
          <div className="ml-nav__brand">
            <img src="/mockloc-icon.png" alt="Mock Loc app icon" className="ml-nav__logo" />
            <span className="ml-nav__name">Mock Loc</span>
          </div>
        </div>
      </nav>

      {/* ── HERO / DEEPLINK REDIRECT ── */}
      <section className="ml-hero" style={{ minHeight: '100vh', padding: '160px 24px 80px' }}>
        <ParticleField />
        <div className="ml-hero__glow ml-hero__glow--1" aria-hidden="true" />
        <div className="ml-hero__glow ml-hero__glow--2" aria-hidden="true" />
        <div className="ml-hero__glow ml-hero__glow--3" aria-hidden="true" />

        <div className="ml-hero__content" style={{ textAlign: 'center', margin: '0 auto', flex: 'unset', width: '100%' }}>
          <img 
            src="/mockloc-icon.png" 
            alt="Mock Loc" 
            className="ml-map-preview__icon" 
            style={{ width: '120px', height: '120px', margin: '0 auto 32px' }}
          />

          <h1 className="ml-hero__title" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
            Opening <span className="ml-hero__title--gradient">Mock Loc...</span>
          </h1>

          <p className="ml-hero__subtitle" style={{ margin: '0 auto 48px' }}>
            You are being redirected to the Mock Loc app. If nothing happens, you can download the app below.
          </p>

          <div className="ml-hero__actions" style={{ justifyContent: 'center' }}>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-btn ml-btn--primary ml-btn--lg"
            >
              <PlayIcon size={22} />
              Get the App on Play Store
            </a>
          </div>
        </div>
      </section>
      
      {/* ── FOOTER ── */}
      <footer className="ml-footer" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <div className="ml-container">
          <div className="ml-footer__inner" style={{ justifyContent: 'center' }}>
            <p className="ml-footer__copy">
              © {new Date().getFullYear()} Mock Loc · GPS Location Spoofer for Android
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeeplinkView;