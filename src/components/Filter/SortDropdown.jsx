const SortDropdown = ({ filters, setFilters }) => {
    return (
        <div className="mb-4">
            <h4 className="mb-2 font-semibold">Sort By</h4>
            <select
                value={filters.sort || ""}
                onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                className="w-full rounded border p-2"
            >
                <option value="">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: High to Low</option>
            </select>
        </div>
    );
};

export default SortDropdown;
