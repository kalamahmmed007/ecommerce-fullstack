import ProductCard from "../Product/ProductCard";

const SearchResults = ({ results }) => {
    if (!results.length) return <p className="py-10 text-center">No products found.</p>;

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {results.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default SearchResults;
