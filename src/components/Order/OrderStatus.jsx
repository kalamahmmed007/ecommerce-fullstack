const OrderStatus = ({ status }) => {
    const statusColor = {
        Pending: "text-yellow-500",
        Processing: "text-blue-500",
        Shipped: "text-purple-500",
        Delivered: "text-green-500",
        Cancelled: "text-red-500",
    };

    return <span className={`font-bold ${statusColor[status]}`}>{status}</span>;
};

export default OrderStatus;
