import { categories } from "../../data/categories";

const CategorySection = () => {
    return (
        <section className="px-4 py-12">
            <h2 className="mb-6 text-2xl font-bold">Shop by Category</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {categories.map((cat) => (
                    <div key={cat.id} className="group relative cursor-pointer">
                        <img src={cat.image} alt={cat.name} className="h-40 w-full rounded object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 transition-opacity group-hover:opacity-100">
                            <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
