import './Navbar.css';

function Navbar({ searchQuery, onSearchChange, cartCount }) {
  return (
    <header className="store-navbar">
      <div className="navbar-inner">
        <div className="store-brand">
          <span className="store-mark">AG</span>
          <div>
            <span className="store-name">AuraGear</span>
            <span className="store-sub">Product Management</span>
          </div>
        </div>

        <div className="navbar-controls">
          <input
            type="search"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            aria-label="Search products"
          />

          <div className="cart-pill" aria-label={`Saved items: ${cartCount}`}>
            <span>Saved</span>
            <span className="cart-badge">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
