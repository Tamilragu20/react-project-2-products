import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

function Footer({ totalProducts, categoriesCount }) {
  return (
    <footer className="store-footer">
      <div className="store-footer-inner">
        <div>
          <strong className="footer-brand">AuraGear Product Management</strong>
          <p className="footer-note">
            Managing {totalProducts} curated products across {categoriesCount} active categories.
          </p>
        </div>
        <span className="footer-copy">
          &copy; {CURRENT_YEAR} AuraGear Catalog. Built with React &amp; Vite.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
