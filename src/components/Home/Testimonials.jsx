import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
    return (
        <section className="bg-gray-100 px-4 py-12">
            <h2 className="mb-6 text-center text-2xl font-bold">What Our Customers Say</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {testimonials.map((t) => (
                    <div key={t.id} className="rounded bg-white p-6 shadow">
                        <p className="mb-4 text-gray-600">"{t.feedback}"</p>
                        <h4 className="font-bold">{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.position}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
