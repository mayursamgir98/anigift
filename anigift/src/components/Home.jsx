import ProductCard from './ProductCard';
import { trending, featured } from '../data/products';

export default function Home({ onNavigate }) {
  return (
    <section className="section active" id="home">
      <div className="hero">
        <div className="float-items">
          <div className="float-item">🎌</div>
          <div className="float-item">🌟</div>
          <div className="float-item">🗡️</div>
          <div className="float-item">👘</div>
          <div className="float-item">🏯</div>
          <div className="float-item">🌸</div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">✦ Premium Anime Collectibles</div>
          <h1>
            Bring Your Favorite<br />
            <span className="gradient-text">Characters to Life</span>
          </h1>
          <p>
            Discover an exclusive collection of handcrafted anime statues, portrait art, and gift items.
            Each piece is a tribute to the worlds you love.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => onNavigate('signup')}>
              Start Collecting <i className="fas fa-arrow-right" style={{ marginLeft: 8 }}></i>
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('login')}>
              Sign In <i className="fas fa-user" style={{ marginLeft: 8 }}></i>
            </button>
          </div>
        </div>
      </div>

      <div className="features-strip">
        {[
          { icon: 'fa-trophy', title: 'Premium Quality', desc: 'Hand-painted resin statues with museum-grade detailing and vibrant finishes.' },
          { icon: 'fa-bolt', title: 'Limited Editions', desc: 'Each piece is a numbered limited run. Once they\'re gone, they\'re gone forever.' },
          { icon: 'fa-gem', title: 'Authentic License', desc: 'Officially licensed merchandise from top anime studios worldwide.' },
        ].map((f, i) => (
          <div className="feature-card" key={i}>
            <i className={`fas ${f.icon}`}></i>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">🔥 <span>Trending Now</span></h2>
      <div className="products-grid">
        {trending.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      <h2 className="section-title">⭐ <span>Featured Collection</span></h2>
      <div className="products-grid">
        {featured.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
