import Card from '@/components/UI/Card';

const ShippingInfo = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Shipping Information</h1>
            <Card>
                <p className="leading-relaxed text-gray-700">
                    We deliver nationwide. Orders are processed within 1-2 business days.
                    Shipping times vary depending on your location.
                    You will receive a tracking number once your order is shipped.
                </p>
            </Card>
        </div>
    );
};

export default ShippingInfo;
