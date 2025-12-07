import { dealOfTheDay } from "../../data/homeData";
import ProductCard from "../Product/ProductCard";

const DealOfTheDay = () => {
    return (
        <section className="bg-yellow-50 px-4 py-12">
            <h2 className="mb-6 text-2xl font-bold">Deal of the Day</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {dealOfTheDay.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default DealOfTheDay;
