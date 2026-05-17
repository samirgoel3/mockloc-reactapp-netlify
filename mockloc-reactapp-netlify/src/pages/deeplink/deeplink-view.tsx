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
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
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