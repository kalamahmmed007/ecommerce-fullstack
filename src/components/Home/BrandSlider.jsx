// src/components/Home/BrandSlider.jsx
import React from "react";

const BrandSlider = ({ brands = [] }) => {
    if (brands.length === 0) return null; // hide if no brands

    return (
        <section className="my-16">
            <h2 className="mb-6 text-2xl font-bold">Our Brands</h2>
            <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:grid-cols-6">
                {brands.map((brand, idx) => (
                    <div key={idx} className="flex items-center justify-center rounded-lg border bg-white p-4">
                        <img src={brand.logo} alt={brand.name} className="max-h-12 object-contain" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandSlider;
