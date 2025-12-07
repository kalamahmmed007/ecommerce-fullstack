import PriceRange from "./PriceRange";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import RatingFilter from "./RatingFilter";
import SortDropdown from "./SortDropdown";

const FilterSidebar = ({ filters, setFilters }) => {
    return (
        <aside className="w-64 border-r p-4">
            <PriceRange filters={filters} setFilters={setFilters} />
            <CategoryFilter filters={filters} setFilters={setFilters} />
            <BrandFilter filters={filters} setFilters={setFilters} />
            <ColorFilter filters={filters} setFilters={setFilters} />
            <SizeFilter filters={filters} setFilters={setFilters} />
            <RatingFilter filters={filters} setFilters={setFilters} />
            <SortDropdown filters={filters} setFilters={setFilters} />
        </aside>
    );
};

export default FilterSidebar;
