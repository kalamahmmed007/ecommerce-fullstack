import { useState } from 'react';
import { Tag, ShoppingBag } from 'lucide-react';

const CartSummary = ({ cartItems = [] }) => {
    const [promoCode, setPromoCode] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(null);

    // Calculate totals
    const subtotal = cartItems.reduce((acc, item) =>
        acc + (item.price * (item.quantity || 1)), 0
    );

    const shipping = subtotal > 500 ? 0 : 60;
    const discount = appliedPromo ? subtotal * 0.1 : 0;
    const tax = 0; // No tax for Bangladesh
    const total = subtotal + shipping - discount;

    const handleApplyPromo = () => {
        if (promoCode.toUpperCase() === 'SAVE10') {
            setAppliedPromo('SAVE10');
        } else {
            alert('Invalid promo code');
        }
    };

    const handleCheckout = () => {
        // Navigate to checkout page
        console.log('Proceeding to checkout...');
    };

    return (
        <div className="sticky top-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-gray-900">
                <ShoppingBag size={24} className="text-red-600" />
                Order Summary
            </h2>

            {/* Promo Code */}
            <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    Promo Code
                </label>
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Tag size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            placeholder="Enter code"
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-10 pr-4 text-gray-900 placeholder-gray-400 transition-colors focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                        />
                    </div>
                    <button
                        onClick={handleApplyPromo}
                        className="rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 font-medium text-gray-900 transition-colors hover:border-red-600 hover:bg-red-600 hover:text-white"
                    >
                        Apply
                    </button>
                </div>
                {appliedPromo && (
                    <p className="mt-2 flex items-center gap-1 text-sm text-green-500">
                        ✓ Promo code "{appliedPromo}" applied!
                    </p>
                )}
            </div>

            {/* Price Breakdown */}
            <div className="mb-6 space-y-3 border-b border-gray-200 pb-6">
                <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>৳{subtotal.toFixed(2)}</span>
                </div>

                {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-৳{discount.toFixed(2)}</span>
                    </div>
                )}

                <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-green-600' : ''}>
                        {shipping === 0 ? 'FREE' : `৳${shipping.toFixed(2)}`}
                    </span>
                </div>
            </div>

            {/* Total */}
            <div className="mb-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-red-600">
                    ৳{total.toFixed(2)}
                </span>
            </div>

            {/* Free Shipping Notice */}
            {shipping > 0 && (
                <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3">
                    <p className="text-sm text-gray-700">
                        Add <span className="font-semibold text-red-600">
                            ৳{(500 - subtotal).toFixed(2)}
                        </span> more for <span className="font-semibold text-green-600">FREE shipping</span>
                    </p>
                </div>
            )}

            {/* Checkout Button */}
            <button
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className="w-full rounded-lg bg-red-600 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-red-700 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-gray-300"
            >
                {cartItems.length === 0 ? 'Cart is Empty' : 'Proceed to Checkout'}
            </button>

            {/* Security Badge */}
            <div className="mt-4 text-center">
                <p className="flex items-center justify-center gap-1 text-xs text-gray-500">
                    🔒 Secure checkout powered by Stripe
                </p>
            </div>
        </div>
    );
};

export default CartSummary;