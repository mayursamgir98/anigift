import { useState } from 'react';

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card">
      <div className="img-wrap">
        <div className="product-emoji">{product.emoji}</div>
        {product.badge && (
          <span className={`badge ${product.badge}`}>
            {product.badge === 'hot' ? '🔥 Hot' : '✨ New'}
          </span>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="series">{product.series}</div>
        <span className="price">${product.price.toFixed(2)}</span>
        {product.oldPrice && (
          <span className="old-price">${product.oldPrice.toFixed(2)}</span>
        )}
      </div>
      <button
        className="quick-add"
        title="Add to Cart"
        onClick={handleAdd}
        style={added ? { background: 'linear-gradient(135deg, #00c853, #00e676)' } : {}}
      >
        <i className={`fas ${added ? 'fa-check' : 'fa-cart-plus'}`}></i>
      </button>
    </div>
  );
}
