const RatingFilter = ({ filters, setFilters }) => {
    const ratings = [5, 4, 3, 2, 1];
    return (
        <div className="mb-4">
            <h4 className="mb-2 font-semibold">Rating</h4>
            {ratings.map((rate) => (
                <label key={rate} className="mb-1 block cursor-pointer">
                    <input
                        type="radio"
                        checked={filters.rating === rate}
                        onChange={() => setFilters({ ...filters, rating: rate })}
                    />
                    <span className="ml-2">{rate} Stars & Up</span>
                </label>
            ))}
        </div>
    );
};

export default RatingFilter;
