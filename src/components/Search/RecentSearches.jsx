const RecentSearches = ({ searches, onSelect }) => {
    if (!searches.length) return null;

    return (
        <div className="mt-2">
            <h4 className="mb-1 text-sm text-gray-500">Recent Searches:</h4>
            <div className="flex flex-wrap gap-2">
                {searches.map((s, idx) => (
                    <span
                        key={idx}
                        onClick={() => onSelect(s)}
                        className="cursor-pointer rounded bg-gray-200 px-2 py-1 text-gray-700 hover:bg-gray-300"
                    >
                        {s}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RecentSearches;
