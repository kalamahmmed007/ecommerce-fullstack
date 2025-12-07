const SizeFilter = ({ filters, setFilters }) => {
    const sizes = ["S", "M", "L", "XL"];
    return (
        <div className="mb-4">
            <h4 className="mb-2 font-semibold">Size</h4>
            {sizes.map((size) => (
                <label key={size} className="mb-1 block cursor-pointer">
                    <input
                        type="checkbox"
                        checked={filters.sizes?.includes(size) || false}
                        onChange={() => {
                            const newSizes = filters.sizes?.includes(size)
                                ? filters.sizes.filter((s) => s !== size)
                                : [...(filters.sizes || []), size];
                            setFilters({ ...filters, sizes: newSizes });
                        }}
                    />
                    <span className="ml-2">{size}</span>
                </label>
            ))}
        </div>
    );
};

export default SizeFilter;
