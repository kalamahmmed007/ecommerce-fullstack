const CheckoutSteps = ({ step }) => {
    const steps = ["Cart", "Shipping", "Payment", "Review", "Complete"];

    return (
        <div className="mb-6 flex justify-between">
            {steps.map((s, idx) => (
                <div key={idx} className="flex-1 text-center">
                    <div
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${idx <= step ? "bg-red-600 text-white" : "bg-gray-300 text-gray-600"
                            }`}
                    >
                        {idx + 1}
                    </div>
                    <span className={`${idx <= step ? "text-red-600" : "text-gray-500"}`}>{s}</span>
                </div>
            ))}
        </div>
    );
};

export default CheckoutSteps;
