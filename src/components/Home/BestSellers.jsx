import ProductCard from "../Product/ProductCard";
import { bestSellers } from "../../data/homeData";

const BestSellers = () => {
    return (
        <section className="bg-gray-50 px-4 py-12">
            <h2 className="mb-6 text-2xl font-bold">Best Sellers</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
