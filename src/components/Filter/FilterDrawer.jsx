import FilterSidebar from "./FilterSidebar";

const FilterDrawer = ({ isOpen, onClose, filters, setFilters }) => {
    return (
        <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            onClick={onClose}
        >
            <div
                className="h-full w-80 overflow-auto bg-white p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
        </div>
    );
};

export default FilterDrawer;
