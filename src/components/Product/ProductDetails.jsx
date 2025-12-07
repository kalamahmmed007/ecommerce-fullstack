import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Heart, ShoppingCart, Truck, Shield, RotateCcw, Share2, Minus, Plus } from 'lucide-react';

const ProductDetails = ({ product }) => {
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [isWishlisted, setIsWishlisted] = useState(false);

    const {
        id,
        title,
        description,
        price,
        originalPrice,
        discount,
        images = [],
        rating = 0,
        reviewCount = 0,
        inStock = true,
        stockCount = 10,
        sizes = [],
        colors = [],
        category,
        brand,
        sku,
        features = [],
    } = product;

    const handleQuantityChange = (action) => {
        if (action === 'increment' && quantity < stockCount) {
            setQuantity(quantity + 1);
        } else if (action === 'decrement' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        if (!inStock) return;
        if (sizes.length > 0 && !selectedSize) {
            alert('Please select a size');
            return;
        }
        if (colors.length > 0 && !selectedColor) {
            alert('Please select a color');
            return;
        }

        const cartItem = {
            ...product,
            quantity,
            selectedSize,
            selectedColor,
        };

        // dispatch(addToCart(cartItem));
        console.log('Added to cart:', cartItem);
    };

    const handleToggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        // dispatch(toggleWishlist(product));
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: description,
                url: window.location.href,
            });
        }
    };

    return (
        <div className="min-h-screen bg-neutral-900 py-8">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Left Column - Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative aspect-square overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800">
                            <img
                                src={images[selectedImage] || '/api/placeholder/600/600'}
                                alt={title}
                                className="h-full w-full object-cover"
                            />

                            {/* Badges */}
                            <div className="absolute left-4 top-4 flex flex-col gap-2">
                                {discount > 0 && (
                                    <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
                                        -{discount}% OFF
                                    </span>
                                )}
                                {!inStock && (
                                    <span className="rounded-full bg-neutral-700 px-3 py-1 text-sm font-semibold text-white">
                                        OUT OF STOCK
                                    </span>
                                )}
                            </div>

                            {/* Share Button */}
                            <button
                                onClick={handleShare}
                                className="absolute right-4 top-4 rounded-full bg-white/90 p-2 transition-colors hover:bg-red-600 hover:text-white"
                                aria-label="Share product"
                            >
                                <Share2 className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Thumbnail Images */}
                        {images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index
                                                ? 'border-red-600'
                                                : 'border-neutral-700 hover:border-neutral-600'
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${title} ${index + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="space-y-6">
                        {/* Category & Brand */}
                        <div className="flex items-center gap-2 text-sm">
                            {category && (
                                <span className="text-neutral-400">{category}</span>
                            )}
                            {category && brand && (
                                <span className="text-neutral-600">•</span>
                            )}
                            {brand && (
                                <span className="font-medium text-red-600">{brand}</span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-bold text-white md:text-4xl">
                            {title}
                        </h1>

                        {/* Rating & Reviews */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-red-600' : 'text-neutral-700'
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-medium text-white">{rating}</span>
                            </div>
                            <span className="text-neutral-400">|</span>
                            <span className="text-neutral-400">{reviewCount} Reviews</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-bold text-red-600">${price}</span>
                            {originalPrice && originalPrice > price && (
                                <>
                                    <span className="text-2xl text-neutral-500 line-through">
                                        ${originalPrice}
                                    </span>
                                    <span className="rounded-full bg-red-600/20 px-3 py-1 text-sm font-semibold text-red-600">
                                        Save ${(originalPrice - price).toFixed(2)}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Description */}
                        <p className="leading-relaxed text-neutral-300">
                            {description}
                        </p>

                        {/* Size Selection */}
                        {sizes.length > 0 && (
                            <div>
                                <label className="mb-3 block font-medium text-white">
                                    Size: {selectedSize && <span className="text-red-600">{selectedSize}</span>}
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-6 py-3 rounded-lg font-medium transition-all ${selectedSize === size
                                                    ? 'bg-red-600 text-white border-2 border-red-600'
                                                    : 'bg-neutral-800 text-white border-2 border-neutral-700 hover:border-red-600'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Color Selection */}
                        {colors.length > 0 && (
                            <div>
                                <label className="mb-3 block font-medium text-white">
                                    Color: {selectedColor && <span className="text-red-600">{selectedColor}</span>}
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-12 h-12 rounded-full border-4 transition-all ${selectedColor === color.name
                                                    ? 'border-red-600 scale-110'
                                                    : 'border-neutral-700 hover:border-neutral-600'
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                            aria-label={color.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity & Stock */}
                        <div className="flex items-center gap-6">
                            <div>
                                <label className="mb-3 block font-medium text-white">Quantity</label>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => handleQuantityChange('decrement')}
                                        className="rounded-lg bg-neutral-800 p-2 text-white transition-colors hover:bg-red-600 disabled:opacity-50"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className="h-5 w-5" />
                                    </button>
                                    <span className="w-12 text-center text-xl font-bold text-white">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => handleQuantityChange('increment')}
                                        className="rounded-lg bg-neutral-800 p-2 text-white transition-colors hover:bg-red-600 disabled:opacity-50"
                                        disabled={quantity >= stockCount}
                                    >
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {inStock && (
                                <div className="text-sm text-neutral-400">
                                    <span className="font-semibold text-red-600">{stockCount}</span> items available
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={!inStock}
                                className={`flex-1 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${inStock
                                        ? 'bg-red-600 text-white hover:bg-red-700'
                                        : 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                                    }`}
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>

                            <button
                                onClick={handleToggleWishlist}
                                className={`p-4 rounded-lg transition-all ${isWishlisted
                                        ? 'bg-red-600 text-white'
                                        : 'bg-neutral-800 text-white hover:bg-red-600'
                                    }`}
                                aria-label="Add to wishlist"
                            >
                                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid gap-4 border-t border-neutral-800 pt-6 md:grid-cols-3">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-neutral-800 p-3">
                                    <Truck className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Free Delivery</p>
                                    <p className="text-xs text-neutral-400">Orders over $50</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-neutral-800 p-3">
                                    <RotateCcw className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Easy Returns</p>
                                    <p className="text-xs text-neutral-400">30-day returns</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="rounded-lg bg-neutral-800 p-3">
                                    <Shield className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">Secure Payment</p>
                                    <p className="text-xs text-neutral-400">100% Protected</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        {sku && (
                            <div className="border-t border-neutral-800 pt-6 text-sm">
                                <span className="text-neutral-400">SKU: </span>
                                <span className="text-white">{sku}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;