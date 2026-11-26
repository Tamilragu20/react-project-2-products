import './ProductCard.css';

function ProductCard({ product, isSaved, onToggleSave }) {
  const { name, category, price, rating, stock, image, description } = product;

  return (
    <article className="product-card">
      <div className="product-media">
        <img src={image} alt={name} className="product-image" />
        <span className="product-category">{category}</span>
      </div>

      <div className="product-body">
        <div className="product-meta">
          <span className="product-rating">Rating {rating.toFixed(1)}</span>
          <span className="product-stock">{stock} in stock</span>
        </div>

        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>

        <div className="product-footer">
          <span className="product-price">${price.toFixed(2)}</span>
          <button
            type="button"
            className={`save-btn ${isSaved ? 'is-saved' : ''}`}
            onClick={() => onToggleSave(product.id)}
          >
            {isSaved ? 'Saved' : 'Add to List'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
