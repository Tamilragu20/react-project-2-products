import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, savedIds, onToggleSave, onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="empty-catalog">
        <h3>No matching products found</h3>
        <p>Try choosing another category or clearing your search filter.</p>
        <button type="button" className="reset-btn" onClick={onResetFilters}>
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <section className="product-grid" aria-label="Product Catalog">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSaved={savedIds.includes(product.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </section>
  );
}

export default ProductList;
