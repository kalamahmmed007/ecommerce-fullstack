import ProductCard from "../Product/ProductCard";
import { newArrivals } from "../../data/homeData";

const NewArrivals = () => {
    return (
        <section className="px-4 py-12">
            <h2 className="mb-6 text-2xl font-bold">New Arrivals</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {newArrivals.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;
