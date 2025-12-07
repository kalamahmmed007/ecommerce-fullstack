const OrderTracking = ({ status }) => {
    const steps = ["Pending", "Processing", "Shipped", "Out for Delivery", "Delivered"];

    return (
        <div className="mb-6 flex justify-between">
            {steps.map((step, idx) => (
                <div key={idx} className="flex-1 text-center">
                    <div
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${steps.indexOf(status) >= idx ? "bg-red-600 text-white" : "bg-gray-300 text-gray-600"
                            }`}
                    >
                        {idx + 1}
                    </div>
                    <span className={`${steps.indexOf(status) >= idx ? "text-red-600" : "text-gray-500"}`}>{step}</span>
                </div>
            ))}
        </div>
    );
};

export default OrderTracking;
