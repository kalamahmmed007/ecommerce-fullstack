import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { orderApi } from '@/api/orderApi';
import Button from '@/components/UI/Button';
import Card from '@/components/UI/Card';
import toast from 'react-hot-toast';
import { formatPrice } from '@/utils/formatters';

const PaymentSuccess = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const orderId = searchParams.get('orderId');

    useEffect(() => {
        if (!orderId) {
            navigate('/');
            return;
        }

        const fetchOrder = async () => {
            try {
                const res = await orderApi.getOrder(orderId);
                setOrder(res.data);
            } catch (error) {
                toast.error(error.message || 'Failed to fetch order');
                navigate('/');
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId, navigate]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-xl">Loading your order...</p>
            </div>
        );
    }

    if (!order) {
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Card>
                <h1 className="mb-4 text-center text-3xl font-bold text-green-600">
                    Order Placed Successfully!
                </h1>
                <p className="mb-6 text-center text-gray-700">
                    Thank you for your purchase, {order.shippingAddress.fullName}!
                </p>

                <div className="mb-6 border-t pt-4">
                    <h2 className="mb-2 text-xl font-semibold">Order Summary</h2>
                    <div className="max-h-60 space-y-3 overflow-y-auto">
                        {order.items.map((item) => (
                            <div key={item.product._id} className="flex gap-3">
                                <img
                                    src={item.product.images[0]}
                                    alt={item.product.name}
                                    className="h-16 w-16 rounded object-cover"
                                />
                                <div className="flex-1">
                                    <p className="line-clamp-2 text-sm font-medium">
                                        {item.product.name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Qty: {item.quantity}
                                    </p>
                                </div>
                                <p className="font-semibold">
                                    {formatPrice(item.price * item.quantity)}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex justify-between text-xl font-bold">
                        <span>Total Paid</span>
                        <span className="text-primary-600">{formatPrice(order.totalAmount)}</span>
                    </div>
                </div>

                <div className="text-center">
                    <Button onClick={() => navigate('/')} size="lg">
                        Continue Shopping
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default PaymentSuccess;
