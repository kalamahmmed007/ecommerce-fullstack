import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
    return (
        <div className="mb-4 flex items-center justify-between rounded border p-4 shadow">
            <div>
                <p className="font-bold">Order ID: {order.id}</p>
                <p>Status: <span className={`font-semibold ${order.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}>{order.status}</span></p>
                <p>Total: ${order.total.toFixed(2)}</p>
            </div>
            <Link to={`/profile/orders/${order.id}`} className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">View</Link>
        </div>
    );
};

export default OrderCard;
