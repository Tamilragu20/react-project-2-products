import './CategoryFilter.css';

function CategoryFilter({ categories, selectedCategory, onSelectCategory, counts }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter products by category">
      {categories.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            className={`filter-btn ${isActive ? 'is-active' : ''}`}
            onClick={() => onSelectCategory(category)}
            aria-pressed={isActive}
          >
            <span>{category}</span>
            <span className="filter-count">{counts[category] ?? 0}</span>
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
