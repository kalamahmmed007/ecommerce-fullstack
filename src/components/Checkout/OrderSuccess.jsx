const OrderSuccess = ({ orderId }) => {
    return (
        <div className="py-20 text-center">
            <h2 className="mb-4 text-2xl font-bold">Thank you for your order!</h2>
            <p className="mb-4">Your order ID is <span className="font-bold">{orderId}</span></p>
            <a href="/shop" className="text-blue-600 hover:underline">Continue Shopping</a>
        </div>
    );
};

export default OrderSuccess;
