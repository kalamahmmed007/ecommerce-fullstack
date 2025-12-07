import ProductCard from "../Product/ProductCard";
import { featuredProducts } from "../../data/homeData";

const FeaturedProducts = () => {
    return (
        <section className="px-4 py-12">
            <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
