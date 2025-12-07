import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        onSearch(query.trim());
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center overflow-hidden rounded border">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 p-2 outline-none"
            />
            <button type="submit" className="bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
