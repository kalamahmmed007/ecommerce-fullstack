import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
    const { orderId } = useParams();
    const { orders } = useSelector((state) => state.user);
    const order = orders.find((o) => o.id === orderId);

    if (!order) return <p className="py-10 text-center">Order not found.</p>;

    return (
        <div className="space-y-4">
            <h2 className="mb-4 text-2xl font-bold">Order Details</h2>
            <p>Order ID: {order.id}</p>
            <p>Status: {order.status}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
            <h3 className="mt-4 font-semibold">Items:</h3>
            <ul className="space-y-2">
                {order.items.map((item) => (
                    <li key={item.id}>
                        {item.name} x {item.quantity} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderDetails;
