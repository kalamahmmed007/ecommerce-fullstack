import React from "react";
import ProductGrid from "../../components/Product/ProductGrid";
import FilterSidebar from "../../components/Filter/FilterSidebar";

const Shop = () => {
  return (
    <div className="flex gap-6">
      <FilterSidebar />
      <ProductGrid />
    </div>
  );
};

export default Shop;
