import { useState, useEffect } from 'react';
import { orderApi } from '@/api/orderApi';
import { formatPrice, formatDate } from '@/utils/formatters';
import Badge from '@/components/UI/Badge';
import Card from '@/components/UI/Card';
import Loader from '@/components/UI/Loader';
import toast from 'react-hot-toast';

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await orderApi.getAllOrders({ limit: 50 });
            setOrders(response.data.orders);
        } catch (error) {
            toast.error('Failed to fetch orders');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await orderApi.updateOrderStatus(orderId, newStatus);
            toast.success('Order status updated');
            fetchOrders();
        } catch (error) {
            toast.error('Failed to update order status');
        }
    };

    if (loading) return <Loader fullScreen />;

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Orders</h1>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-3 text-left">Order ID</th>
                                <th className="px-4 py-3 text-left">Customer</th>
                                <th className="px-4 py-3 text-left">Date</th>
                                <th className="px-4 py-3 text-left">Total</th>
                                <th className="px-4 py-3 text-left">Status</th>
                                <th className="px-4 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <p className="font-medium">#{order._id.slice(-8)}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <p className="font-medium">{order.user?.name}</p>
                                        <p className="text-sm text-gray-600">{order.user?.email}</p>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        {formatDate(order.createdAt)}
                                    </td>
                                    <td className="px-4 py-3 font-semibold">
                                        {formatPrice(order.totalAmount)}
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={
                                            order.status === 'delivered' ? 'success' :
                                                order.status === 'cancelled' ? 'danger' :
                                                    'warning'
                                        }>
                                            {order.status}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3">
                                        <select
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className="rounded border px-3 py-1 text-sm"
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="processing">Processing</option>
                                            <option value="shipped">Shipped</option>
                                            <option value="delivered">Delivered</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default AdminOrders;