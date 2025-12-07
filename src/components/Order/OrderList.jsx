import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";

const OrderList = () => {
    const { orders } = useSelector((state) => state.user);

    if (!orders.length) return <p className="py-10 text-center">No orders found.</p>;

    return (
        <div>
            {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
            ))}
        </div>
    );
};

export default OrderList;
