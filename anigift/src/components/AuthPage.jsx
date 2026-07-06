import { useState } from 'react';

export default function AuthPage({ mode, onNavigate }) {
  const [loading, setLoading] = useState(false);
  const isLogin = mode === 'login';

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert(isLogin
        ? '✅ Welcome back! Login successful (demo).'
        : '🎉 Account created successfully! Welcome to AniGift (demo).');
      setLoading(false);
      onNavigate('home');
    }, 1500);
  };

  return (
    <section className={`section active`} id={mode}>
      <div className="auth-section">
        <div className="auth-container">
          <div className="auth-visual">
            <div className="big-icon">{isLogin ? '🎎' : '🎉'}</div>
            <h2>{isLogin ? 'Welcome Back' : 'Join AniGift'}</h2>
            <p>{isLogin ? 'Continue your collection journey' : 'Start your anime collection today'}</p>
          </div>
          <div className="auth-form-wrap">
            <h3>{isLogin ? 'Login' : 'Create Account'}</h3>
            <p className="subtitle">
              {isLogin ? 'Sign in to access your collection' : 'Fill in the details to get started'}
            </p>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="form-group">
                  <label>Username</label>
                  <div className="input-wrap">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Choose a username" required />
                  </div>
                </div>
              )}
              <div className="form-group">
                <label>Email</label>
                <div className="input-wrap">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="input-wrap">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder={isLogin ? 'Enter your password' : 'Create a password'} required />
                </div>
              </div>
              {!isLogin && (
                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="input-wrap">
                    <i className="fas fa-shield"></i>
                    <input type="password" placeholder="Confirm your password" required />
                  </div>
                </div>
              )}
              <div className="form-options">
                {isLogin ? (
                  <>
                    <label><input type="checkbox" defaultChecked /> Remember me</label>
                    <a href="#">Forgot password?</a>
                  </>
                ) : (
                  <label><input type="checkbox" required /> I agree to the <a href="#">Terms & Conditions</a></label>
                )}
              </div>
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? (
                  <><i className="fas fa-spinner fa-spin" style={{ marginRight: 8 }}></i> {isLogin ? 'Signing In...' : 'Creating Account...'}</>
                ) : (
                  <><i className={`fas ${isLogin ? 'fa-arrow-right-to-bracket' : 'fa-user-plus'}`} style={{ marginRight: 8 }}></i> {isLogin ? 'Sign In' : 'Create Account'}</>
                )}
              </button>
              <div className="auth-switch">
                {isLogin ? (
                  <>Don't have an account? <a onClick={() => onNavigate('signup')}>Sign Up</a></>
                ) : (
                  <>Already have an account? <a onClick={() => onNavigate('login')}>Sign In</a></>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
