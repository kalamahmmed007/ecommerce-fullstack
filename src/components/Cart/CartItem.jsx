import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity || 1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        // dispatch(updateCartQuantity({ id: item.id, quantity: newQuantity }));
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            // dispatch(updateCartQuantity({ id: item.id, quantity: newQuantity }));
        }
    };

    const handleRemove = () => {
        // dispatch(removeFromCart(item.id));
        console.log('Remove item:', item.id);
    };

    const handleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        // dispatch(addToWishlist(item));
    };

    const itemTotal = (item.price * quantity).toFixed(2);

    return (
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-md">
            <div className="flex gap-4">
                {/* Product Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 sm:h-28 sm:w-28">
                    <img
                        src={item.image || 'https://via.placeholder.com/150'}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>

                {/* Product Details */}
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                        <div className="mb-1 flex items-start justify-between gap-2">
                            <h3 className="line-clamp-2 text-base font-semibold text-gray-900 sm:text-lg">
                                {item.name}
                            </h3>
                            <button
                                onClick={handleWishlist}
                                className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${isWishlisted
                                        ? 'text-red-600 bg-red-50'
                                        : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                                    }`}
                                aria-label="Add to wishlist"
                            >
                                <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                            </button>
                        </div>

                        {item.variant && (
                            <p className="mb-1 text-sm text-gray-600">
                                Size: <span className="font-medium">{item.variant}</span>
                            </p>
                        )}

                        {item.color && (
                            <p className="text-sm text-gray-600">
                                Color: <span className="font-medium">{item.color}</span>
                            </p>
                        )}
                    </div>

                    {/* Price and Actions */}
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50">
                            <button
                                onClick={handleDecrement}
                                disabled={quantity <= 1}
                                className="rounded-l-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                                aria-label="Decrease quantity"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="min-w-[40px] px-4 text-center font-semibold text-gray-900">
                                {quantity}
                            </span>
                            <button
                                onClick={handleIncrement}
                                className="rounded-r-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                aria-label="Increase quantity"
                            >
                                <Plus size={16} />
                            </button>
                        </div>

                        {/* Price and Remove */}
                        <div className="flex items-center gap-3">
                            {/* Price */}
                            <div className="text-right">
                                <p className="text-lg font-bold text-red-600 sm:text-xl">
                                    ৳{itemTotal}
                                </p>
                                {quantity > 1 && (
                                    <p className="text-xs text-gray-500">
                                        ৳{item.price} each
                                    </p>
                                )}
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={handleRemove}
                                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600"
                                aria-label="Remove item"
                                title="Remove from cart"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Stock Status */}
                    {item.stock && item.stock < 5 && (
                        <div className="mt-2">
                            <p className="text-xs font-medium text-orange-600">
                                Only {item.stock} left in stock!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartItem;