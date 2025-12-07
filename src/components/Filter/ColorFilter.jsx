const ColorFilter = ({ filters, setFilters }) => {
    const colors = ["Red", "Blue", "Green", "Black"];
    return (
        <div className="mb-4">
            <h4 className="mb-2 font-semibold">Color</h4>
            {colors.map((color) => (
                <label key={color} className="mb-1 block cursor-pointer">
                    <input
                        type="checkbox"
                        checked={filters.colors?.includes(color) || false}
                        onChange={() => {
                            const newColors = filters.colors?.includes(color)
                                ? filters.colors.filter((c) => c !== color)
                                : [...(filters.colors || []), color];
                            setFilters({ ...filters, colors: newColors });
                        }}
                    />
                    <span className="ml-2">{color}</span>
                </label>
            ))}
        </div>
    );
};

export default ColorFilter;
