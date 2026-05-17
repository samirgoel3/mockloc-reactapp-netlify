import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login-page.css';

// ─── ICONS ───
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

// ─── SUB-COMPONENTS ───

const LeftPanel: React.FC = () => (
  <div className="login-left">
    <div className="login-left-bg" />
    <Link to="/" className="login-back-btn">
      <BackIcon /> Back to Home
    </Link>

    <div className="login-left-content">
      <h1 className="login-left-title">Master your location testing with <span>Mock Loc</span></h1>
      <p className="login-left-subtitle">
        The ultimate GPS location spoofer for developers, testers, and everyday users. Fake your location effortlessly.
      </p>

      <div className="login-highlights">
        {[
          { icon: '🌍', title: 'Global Spoofing', text: 'Set any GPS coordinates on the globe with a single tap. Complete control over your virtual position.' },
          { icon: '🗺️', title: 'Interactive Map', text: 'Browse a full interactive map and drop a pin exactly where you want your mock location to appear.' },
          { icon: '🛣️', title: 'Route Simulation', text: 'Create waypoints and simulate movement along a custom route with fully adjustable speed.' },
          { icon: '🔒', title: 'No Root Required', text: 'Works safely and securely through Android Developer Options without voiding your warranty.' },
        ].map((h, i) => (
          <div key={i} className="highlight-item">
            <div className="highlight-icon">{h.icon}</div>
            <div className="highlight-text">
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LoginForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => (
  <form className="login-form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
    <div className="input-wrapper">
      <input type="text" className="input-field" placeholder="Email or phone" required />
    </div>
    <div className="input-wrapper">
      <input type="password" className="input-field" placeholder="Password" required />
      <button type="button" className="input-icon-btn"><EyeIcon /></button>
    </div>
    <div className="login-divider">OR CONTINUE WITH</div>
    <button type="button" className="login-btn-google" onClick={onSubmit}>
      <GoogleIcon /> Sign in with Google
    </button>
    <button type="submit" className="login-btn-submit" style={{ marginTop: '24px' }}>
      Sign in
    </button>
  </form>
);

const SignUpForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => (
  <form className="login-form" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
    <div className="input-wrapper">
      <input type="text" className="input-field" placeholder="Username" required />
    </div>
    <div className="input-wrapper">
      <input type="email" className="input-field" placeholder="Email" required />
    </div>
    <div className="input-wrapper">
      <input type="text" className="input-field" placeholder="Company name" required />
    </div>
    <div className="input-wrapper">
      <input type="text" className="input-field" placeholder="WhatsApp (optional)" />
    </div>
    <div className="whatsapp-helper">
      <WhatsAppIcon />
      <p>Optional: helps us reach you for support or product updates.</p>
    </div>
    <div className="dev-box">
      <div className="dev-box__title">Are you a developer?</div>
      <div className="dev-box__options">
        <label className="radio-label"><input type="radio" name="isDev" value="yes" defaultChecked /> Yes</label>
        <label className="radio-label"><input type="radio" name="isDev" value="no" /> No</label>
      </div>
    </div>
    <div className="input-wrapper">
      <input type="password" className="input-field" placeholder="Password (6+ characters)" required />
      <button type="button" className="input-icon-btn"><EyeIcon /></button>
    </div>
    <button type="submit" className="login-btn-submit" style={{ marginTop: '16px' }}>
      Create account
    </button>
  </form>
);

const ComingSoonModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="login-modal-overlay" onClick={onClose}>
    <div className="login-modal" onClick={(e) => e.stopPropagation()}>
      <div className="login-modal-icon">🚧</div>
      <h3 className="login-modal-title">Coming Soon!</h3>
      <p className="login-modal-text">
        This feature is currently under development. Soon it will be available and you will be able to manage your mocking setup directly on this website as well!
      </p>
      <button className="login-modal-btn" onClick={onClose}>Got it</button>
    </div>
  </div>
);

// ─── MAIN COMPONENT ───

const LoginView: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="login-root">
      <LeftPanel />

      <div className="login-right">
        <div className="login-bg-accent" />
        
        {/* Mobile back button */}
        <Link to="/" className="login-back-btn" id="mobile-back" style={{ display: 'none' }}>
          <BackIcon />
        </Link>
        <style>{`@media (max-width: 900px) { #mobile-back { display: inline-flex !important; } }`}</style>

        <div className="login-logo-box">
          <div className="login-logo-composite">
            <img src="/mockloc-icon.png" alt="Mock Loc icon" className="login-logo-img" />
            <div className="login-logo-text">
              <span className="login-logo-main">Mock-Loc</span>
              <span className="login-logo-sub">Your Location Testing Buddy</span>
            </div>
          </div>
        </div>

        <div className="login-card">
          <div className="login-header">
            <div className="login-title-wrapper">
              <div className="login-title-indicator" />
              <h1 className="login-title">{isLogin ? 'Welcome back' : 'Create your account'}</h1>
            </div>
            <p className="login-subtitle">
              {isLogin ? 'Sign in to pick up where you left off' : 'A few details and you are ready to go'}
            </p>
          </div>

          <div className="login-tabs">
            <div className={`login-tab ${isLogin ? 'login-tab--active' : ''}`} onClick={() => setIsLogin(true)}>
              Log in
            </div>
            <div className={`login-tab ${!isLogin ? 'login-tab--active' : ''}`} onClick={() => setIsLogin(false)}>
              Sign up
            </div>
          </div>

          {isLogin ? (
            <LoginForm onSubmit={() => setShowPopup(true)} />
          ) : (
            <SignUpForm onSubmit={() => setShowPopup(true)} />
          )}
        </div>
      </div>

      {showPopup && <ComingSoonModal onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default LoginView;
