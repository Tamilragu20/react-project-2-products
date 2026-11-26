import { useMemo, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { categories, productsData } from './data/productsData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedIds, setSavedIds] = useState([]);

  const categoryCounts = useMemo(() => {
    const counts = { All: productsData.length };
    for (const product of productsData) {
      counts[product.category] = (counts[product.category] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleToggleSave = (productId) => {
    setSavedIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="store-shell">
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={savedIds.length}
      />

      <main className="store-main">
        <div className="catalog-hero">
          <div>
            <span className="catalog-eyebrow">Inventory &amp; Catalog</span>
            <h1 className="catalog-title">Product Management Dashboard</h1>
            <p className="catalog-subtitle">
              Browse curated hardware, filter by category, and track saved inventory items.
            </p>
          </div>
          <span className="catalog-count">
            Showing {filteredProducts.length} of {productsData.length} items
          </span>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          counts={categoryCounts}
        />

        <ProductList
          products={filteredProducts}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onResetFilters={handleResetFilters}
        />
      </main>

      <Footer
        totalProducts={productsData.length}
        categoriesCount={categories.length - 1}
      />
    </div>
  );
}

export default App;
