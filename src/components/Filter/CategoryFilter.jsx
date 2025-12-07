const CategoryFilter = ({ filters, setFilters }) => {
    const categories = ["Shirts", "Pants", "Shoes", "Accessories"];
    return (
        <div className="mb-4">
            <h4 className="mb-2 font-semibold">Category</h4>
            {categories.map((cat) => (
                <label key={cat} className="mb-1 block cursor-pointer">
                    <input
                        type="checkbox"
                        checked={filters.categories?.includes(cat) || false}
                        onChange={() => {
                            const newCats = filters.categories?.includes(cat)
                                ? filters.categories.filter((c) => c !== cat)
                                : [...(filters.categories || []), cat];
                            setFilters({ ...filters, categories: newCats });
                        }}
                    />
                    <span className="ml-2">{cat}</span>
                </label>
            ))}
        </div>
    );
};

export default CategoryFilter;
