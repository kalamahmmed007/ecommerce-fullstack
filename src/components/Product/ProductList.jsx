import { useState } from 'react';
import { Grid, List, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductList = ({ products = [], isLoading = false }) => {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('featured');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        categories: [],
        priceRange: { min: 0, max: 1000 },
        brands: [],
        sizes: [],
        colors: [],
        rating: 0,
        inStock: false,
    });

    // Sample filter options
    const filterOptions = {
        categories: ['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Beauty'],
        brands: ['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: [
            { name: 'Black', hex: '#000000' },
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Red', hex: '#DC2626' },
            { name: 'Blue', hex: '#2563EB' },
            { name: 'Green', hex: '#16A34A' },
        ],
    };

    const sortOptions = [
        { value: 'featured', label: 'Featured' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'newest', label: 'Newest First' },
        { value: 'rating', label: 'Highest Rated' },
    ];

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => {
            if (filterType === 'categories' || filterType === 'brands' || filterType === 'sizes') {
                const currentValues = prev[filterType];
                const newValues = currentValues.includes(value)
                    ? currentValues.filter(v => v !== value)
                    : [...currentValues, value];
                return { ...prev, [filterType]: newValues };
            }
            if (filterType === 'colors') {
                const currentValues = prev.colors;
                const newValues = currentValues.includes(value)
                    ? currentValues.filter(v => v !== value)
                    : [...currentValues, value];
                return { ...prev, colors: newValues };
            }
            if (filterType === 'rating') {
                return { ...prev, rating: value };
            }
            if (filterType === 'inStock') {
                return { ...prev, inStock: !prev.inStock };
            }
            return prev;
        });
    };

    const clearFilters = () => {
        setFilters({
            categories: [],
            priceRange: { min: 0, max: 1000 },
            brands: [],
            sizes: [],
            colors: [],
            rating: 0,
            inStock: false,
        });
    };

    const activeFilterCount =
        filters.categories.length +
        filters.brands.length +
        filters.sizes.length +
        filters.colors.length +
        (filters.rating > 0 ? 1 : 0) +
        (filters.inStock ? 1 : 0);

    // Sample products for demo
    const sampleProducts = products.length > 0 ? products : [
        {
            id: 1,
            title: 'Premium Wireless Headphones',
            price: 199.99,
            originalPrice: 299.99,
            discount: 33,
            image: '/api/placeholder/400/400',
            rating: 4.5,
            reviewCount: 128,
            inStock: true,
            isNew: true,
        },
        {
            id: 2,
            title: 'Smart Fitness Watch',
            price: 149.99,
            originalPrice: 199.99,
            discount: 25,
            image: '/api/placeholder/400/400',
            rating: 4.8,
            reviewCount: 342,
            inStock: true,
        },
        {
            id: 3,
            title: 'Leather Laptop Bag',
            price: 89.99,
            image: '/api/placeholder/400/400',
            rating: 4.3,
            reviewCount: 89,
            inStock: true,
        },
        {
            id: 4,
            title: 'Portable Bluetooth Speaker',
            price: 79.99,
            originalPrice: 129.99,
            discount: 38,
            image: '/api/placeholder/400/400',
            rating: 4.6,
            reviewCount: 256,
            inStock: false,
        },
        {
            id: 5,
            title: 'Wireless Gaming Mouse',
            price: 59.99,
            image: '/api/placeholder/400/400',
            rating: 4.7,
            reviewCount: 412,
            inStock: true,
            isNew: true,
        },
        {
            id: 6,
            title: 'USB-C Hub Adapter',
            price: 39.99,
            originalPrice: 59.99,
            discount: 33,
            image: '/api/placeholder/400/400',
            rating: 4.4,
            reviewCount: 178,
            inStock: true,
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-900">
            <div className="mx-auto max-w-7xl px-4 py-8">
                {/* Header */}
                <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                        <h1 className="mb-2 text-3xl font-bold text-white">All Products</h1>
                        <p className="text-neutral-400">
                            Showing {sampleProducts.length} products
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Sort Dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="cursor-pointer appearance-none rounded-lg border border-neutral-700 bg-neutral-800 py-3 pl-4 pr-10 text-white transition-colors hover:border-red-600 focus:border-red-600 focus:outline-none"
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex rounded-lg bg-neutral-800 p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded transition-colors ${viewMode === 'grid'
                                        ? 'bg-red-600 text-white'
                                        : 'text-neutral-400 hover:text-white'
                                    }`}
                                aria-label="Grid view"
                            >
                                <Grid className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded transition-colors ${viewMode === 'list'
                                        ? 'bg-red-600 text-white'
                                        : 'text-neutral-400 hover:text-white'
                                    }`}
                                aria-label="List view"
                            >
                                <List className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="relative flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-3 text-white transition-colors hover:bg-red-600"
                        >
                            <SlidersHorizontal className="h-5 w-5" />
                            <span>Filters</span>
                            {activeFilterCount > 0 && (
                                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                                    {activeFilterCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Filters Sidebar */}
                    <aside
                        className={`${showFilters ? 'block' : 'hidden'
                            } lg:block w-full lg:w-64 flex-shrink-0`}
                    >
                        <div className="sticky top-4 rounded-lg bg-neutral-800 p-6">
                            <div className="mb-6 flex items-center justify-between">
                                <h2 className="text-xl font-bold text-white">Filters</h2>
                                {activeFilterCount > 0 && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm font-medium text-red-600 hover:text-red-500"
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>

                            <div className="space-y-6">
                                {/* Categories */}
                                <div>
                                    <h3 className="mb-3 font-semibold text-white">Categories</h3>
                                    <div className="space-y-2">
                                        {filterOptions.categories.map(category => (
                                            <label key={category} className="group flex cursor-pointer items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.categories.includes(category)}
                                                    onChange={() => handleFilterChange('categories', category)}
                                                    className="h-4 w-4 rounded border-neutral-600 text-red-600 focus:ring-red-600 focus:ring-offset-neutral-800"
                                                />
                                                <span className="text-neutral-300 transition-colors group-hover:text-white">
                                                    {category}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div>
                                    <h3 className="mb-3 font-semibold text-white">Price Range</h3>
                                    <div className="space-y-3">
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            value={filters.priceRange.max}
                                            onChange={(e) => setFilters(prev => ({
                                                ...prev,
                                                priceRange: { ...prev.priceRange, max: parseInt(e.target.value) }
                                            }))}
                                            className="w-full accent-red-600"
                                        />
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-neutral-400">${filters.priceRange.min}</span>
                                            <span className="font-semibold text-white">${filters.priceRange.max}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Brands */}
                                <div>
                                    <h3 className="mb-3 font-semibold text-white">Brands</h3>
                                    <div className="space-y-2">
                                        {filterOptions.brands.map(brand => (
                                            <label key={brand} className="group flex cursor-pointer items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={filters.brands.includes(brand)}
                                                    onChange={() => handleFilterChange('brands', brand)}
                                                    className="h-4 w-4 rounded border-neutral-600 text-red-600 focus:ring-red-600 focus:ring-offset-neutral-800"
                                                />
                                                <span className="text-neutral-300 transition-colors group-hover:text-white">
                                                    {brand}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Rating */}
                                <div>
                                    <h3 className="mb-3 font-semibold text-white">Minimum Rating</h3>
                                    <div className="space-y-2">
                                        {[4, 3, 2, 1].map(rating => (
                                            <button
                                                key={rating}
                                                onClick={() => handleFilterChange('rating', rating)}
                                                className={`flex items-center gap-2 w-full p-2 rounded transition-colors ${filters.rating === rating
                                                        ? 'bg-red-600/20 border border-red-600'
                                                        : 'hover:bg-neutral-700'
                                                    }`}
                                            >
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`w-4 h-4 ${i < rating ? 'text-red-600' : 'text-neutral-600'
                                                                }`}
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-sm text-neutral-300">& Up</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* In Stock */}
                                <div>
                                    <label className="group flex cursor-pointer items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={filters.inStock}
                                            onChange={() => handleFilterChange('inStock')}
                                            className="h-4 w-4 rounded border-neutral-600 text-red-600 focus:ring-red-600 focus:ring-offset-neutral-800"
                                        />
                                        <span className="text-neutral-300 transition-colors group-hover:text-white">
                                            In Stock Only
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Products Grid/List */}
                    <main className="flex-1">
                        {isLoading ? (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="animate-pulse overflow-hidden rounded-lg bg-neutral-800">
                                        <div className="aspect-square bg-neutral-700" />
                                        <div className="space-y-3 p-4">
                                            <div className="h-4 w-3/4 rounded bg-neutral-700" />
                                            <div className="h-4 w-1/2 rounded bg-neutral-700" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div
                                className={
                                    viewMode === 'grid'
                                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                                        : 'space-y-4'
                                }
                            >
                                {sampleProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}

                        {!isLoading && sampleProducts.length === 0 && (
                            <div className="py-16 text-center">
                                <p className="text-lg text-neutral-400">No products found</p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 rounded-lg bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProductList;