import React from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../../components/Product/ProductGrid";
import FilterSidebar from "../../components/Filter/FilterSidebar";

const CategoryPage = () => {
    const { categoryId } = useParams();

    return (
        <div className="flex gap-6">
            <FilterSidebar categoryId={categoryId} />
            <ProductGrid categoryId={categoryId} />
        </div>
    );
};

export default CategoryPage;
