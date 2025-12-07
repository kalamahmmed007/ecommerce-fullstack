import { useSelector } from "react-redux";

const OrderSummary = () => {
    const { items } = useSelector((state) => state.cart);
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="rounded border p-4 shadow">
            <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
            {items.map((item) => (
                <div key={item.id} className="mb-2 flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            ))}
            <hr className="my-2" />
            <p className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
            </p>
        </div>
    );
};

export default OrderSummary;
