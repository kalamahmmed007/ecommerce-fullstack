const PriceRange = ({ filters, setFilters }) => {
    return (
        <div className="mb-4">
            <h4 className="mb-2 font-semibold">Price</h4>
            <input
                type="range"
                min="0"
                max="1000"
                value={filters.price || 0}
                onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                className="w-full"
            />
            <p>Up to ${filters.price || 0}</p>
        </div>
    );
};

export default PriceRange;
