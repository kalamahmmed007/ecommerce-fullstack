import ProductCard from "./ProductCard";

const RelatedProducts = ({ products }) => {
    return (
        <div>
            <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
