import React from "react";
import OrderDetails from "../../components/Order/OrderDetails";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
    const { orderId } = useParams();
    return <OrderDetails orderId={orderId} />;
};

export default OrderDetailsPage;
