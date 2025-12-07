import { useState, useEffect } from 'react';
import { FaTachometerAlt, FaBox, FaUsers, FaClipboardList, FaTags } from "react-icons/fa";
import { X, Home, ShoppingBag, Heart, User, Settings, LogOut, Package, History, CreditCard, HelpCircle, Tag, TrendingUp, Star } from 'lucide-react';

const Sidebar = ({
    isOpen,
    onClose,
    position = 'left',
    width = 'md'
}) => {
    const [activeItem, setActiveItem] = useState('home');

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Width configurations
    const widths = {
        sm: 'w-64',
        md: 'w-80',
        lg: 'w-96',
    };

    // Position configurations
    const positions = {
        left: {
            container: 'left-0',
            animation: isOpen ? 'translate-x-0' : '-translate-x-full',
        },
        right: {
            container: 'right-0',
            animation: isOpen ? 'translate-x-0' : 'translate-x-full',
        },
    };

    const menuItems = [
        { id: 'home', label: 'Home', icon: Home, path: '/' },
        { id: 'shop', label: 'Shop', icon: ShoppingBag, path: '/shop' },
        { id: 'trending', label: 'Trending', icon: TrendingUp, path: '/trending', badge: 'New' },
        { id: 'deals', label: 'Deals & Offers', icon: Tag, path: '/deals', badge: '30%' },
        { id: 'wishlist', label: 'Wishlist', icon: Heart, path: '/wishlist' },
        { id: 'orders', label: 'My Orders', icon: Package, path: '/orders' },
        { id: 'history', label: 'Order History', icon: History, path: '/history' },
    ];

    const accountItems = [
        { id: 'profile', label: 'My Profile', icon: User, path: '/profile' },
        { id: 'payment', label: 'Payment Methods', icon: CreditCard, path: '/payment' },
        { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
        { id: 'help', label: 'Help & Support', icon: HelpCircle, path: '/help' },
    ];

    const handleItemClick = (item) => {
        setActiveItem(item.id);
        // Navigate to item.path
        console.log('Navigate to:', item.path);
        onClose();
    };

    const handleLogout = () => {
        console.log('Logout');
        onClose();
    };

    if (!isOpen) return null;



    return (
        <>
            {/* Overlay */}
            <div
                className="animate-in fade-in fixed inset-0 z-40 bg-black/50 backdrop-blur-sm duration-200"
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 ${positions[position].container} ${widths[width]} h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${positions[position].animation}`}
            >
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                <ShoppingBag className="text-white" size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">ShopHub</h2>
                                <p className="text-xs text-gray-600">Your Shopping Destination</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                            aria-label="Close sidebar"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* User Info */}
                    <div className="border-b border-gray-200 bg-gradient-to-r from-red-50 to-white p-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                                <User className="text-gray-600" size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900">John Doe</h3>
                                <p className="text-sm text-gray-600">john.doe@email.com</p>
                            </div>
                            <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1">
                                <Star className="text-yellow-600" size={14} fill="currentColor" />
                                <span className="text-xs font-semibold text-yellow-700">Gold</span>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 overflow-y-auto p-4">
                        {/* Main Menu */}
                        <div className="mb-6">
                            <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Menu
                            </h3>
                            <ul className="space-y-1">
                                {menuItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => handleItemClick(item)}
                                            className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeItem === item.id
                                                ? 'bg-red-600 text-white shadow-md'
                                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <item.icon size={20} />
                                                <span className="font-medium">{item.label}</span>
                                            </div>
                                            {item.badge && (
                                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${activeItem === item.id
                                                    ? 'bg-white text-red-600'
                                                    : 'bg-red-100 text-red-600'
                                                    }`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Account Section */}
                        <div className="mb-6">
                            <h3 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Account
                            </h3>
                            <ul className="space-y-1">
                                {accountItems.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => handleItemClick(item)}
                                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeItem === item.id
                                                ? 'bg-red-600 text-white shadow-md'
                                                : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                                }`}
                                        >
                                            <item.icon size={20} />
                                            <span className="font-medium">{item.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* Footer */}
                    <div className="border-t border-gray-200 p-4">
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-red-600 transition-colors hover:bg-red-50"
                        >
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                        <p className="mt-3 text-center text-xs text-gray-500">
                            Version 1.0.0 • © 2024 ShopHub
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
};

// Category Sidebar (for filtering)
export const CategorySidebar = ({ isOpen, onClose, onFilterChange }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const categories = [
        'Electronics',
        'Fashion',
        'Home & Garden',
        'Sports',
        'Books',
        'Toys',
        'Beauty',
        'Automotive',
    ];

    const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E'];

    const handleCategoryToggle = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const handleBrandToggle = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((b) => b !== brand)
                : [...prev, brand]
        );
    };

    const handleApplyFilters = () => {
        onFilterChange?.({
            categories: selectedCategories,
            priceRange,
            brands: selectedBrands,
        });
        onClose();
    };

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setPriceRange([0, 10000]);
        setSelectedBrands([]);
    };

    if (!isOpen) return null;

    return (
        <>
            <div
                className="animate-in fade-in fixed inset-0 z-40 bg-black/50 backdrop-blur-sm duration-200"
                onClick={onClose}
            />

            <aside className="fixed left-0 top-0 z-50 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ease-in-out">
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 p-6">
                        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex-1 space-y-6 overflow-y-auto p-6">
                        {/* Categories */}
                        <div>
                            <h3 className="mb-3 font-semibold text-gray-900">Categories</h3>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <label key={category} className="flex cursor-pointer items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => handleCategoryToggle(category)}
                                            className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                                        />
                                        <span className="text-gray-700">{category}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <h3 className="mb-3 font-semibold text-gray-900">Price Range</h3>
                            <div className="flex items-center gap-3">
                                <input
                                    type="number"
                                    value={priceRange[0]}
                                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-600 focus:outline-none"
                                    placeholder="Min"
                                />
                                <span className="text-gray-500">-</span>
                                <input
                                    type="number"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-600 focus:outline-none"
                                    placeholder="Max"
                                />
                            </div>
                        </div>

                        {/* Brands */}
                        <div>
                            <h3 className="mb-3 font-semibold text-gray-900">Brands</h3>
                            <div className="space-y-2">
                                {brands.map((brand) => (
                                    <label key={brand} className="flex cursor-pointer items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandToggle(brand)}
                                            className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                                        />
                                        <span className="text-gray-700">{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="space-y-2 border-t border-gray-200 p-6">
                        <button
                            onClick={handleApplyFilters}
                            className="w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-700"
                        >
                            Apply Filters
                        </button>
                        <button
                            onClick={handleClearFilters}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;