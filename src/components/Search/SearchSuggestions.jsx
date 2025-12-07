const SearchSuggestions = ({ suggestions, onSelect }) => {
    if (!suggestions.length) return null;

    return (
        <ul className="absolute z-10 mt-1 w-full rounded border bg-white shadow-lg">
            {suggestions.map((s, idx) => (
                <li
                    key={idx}
                    onClick={() => onSelect(s)}
                    className="cursor-pointer p-2 hover:bg-gray-100"
                >
                    {s}
                </li>
            ))}
        </ul>
    );
};

export default SearchSuggestions;
