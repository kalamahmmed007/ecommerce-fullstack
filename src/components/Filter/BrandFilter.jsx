const BrandFilter = ({ filters, setFilters }) => {
    const brands = ["Nike", "Adidas", "Puma", "Reebok"];
    return (
        <div className="mb-4">
            <h4 className="mb-2 font-semibold">Brand</h4>
            {brands.map((brand) => (
                <label key={brand} className="mb-1 block cursor-pointer">
                    <input
                        type="checkbox"
                        checked={filters.brands?.includes(brand) || false}
                        onChange={() => {
                            const newBrands = filters.brands?.includes(brand)
                                ? filters.brands.filter((b) => b !== brand)
                                : [...(filters.brands || []), brand];
                            setFilters({ ...filters, brands: newBrands });
                        }}
                    />
                    <span className="ml-2">{brand}</span>
                </label>
            ))}
        </div>
    );
};

export default BrandFilter;
