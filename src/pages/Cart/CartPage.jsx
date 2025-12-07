import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { ArrowLeft } from 'lucide-react';
import CartItem from '@/components/Cart/CartItem';
import CartSummary from '@/components/Cart/CartSummary';
import EmptyCart from '@/components/Cart/EmptyCart';
import Loader from '@/components/UI/Loader';

const CartPage = () => {
    const { items, isLoading, loadCart } = useCart();

    useEffect(() => {
        loadCart();
    }, []);

    if (isLoading) return <Loader fullScreen />;

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="mb-2 text-3xl font-bold">Shopping Cart</h1>
                    <Link
                        to="/shop"
                        className="flex items-center gap-2 text-primary-600 hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Continue Shopping
                    </Link>
                </div>
            </div>

            {items.length === 0 ? (
                <EmptyCart />
            ) : (
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <h2 className="mb-4 text-xl font-bold">
                                Cart Items ({items.length})
                            </h2>
                            <div className="divide-y">
                                {items.map((item) => (
                                    <CartItem key={item._id} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <CartSummary />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;