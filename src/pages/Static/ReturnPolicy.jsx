import Card from '@/components/UI/Card';

const ReturnPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Return Policy</h1>
            <Card>
                <p className="leading-relaxed text-gray-700">
                    We accept returns within 14 days of delivery. Products must be unused and in original packaging.
                    Refunds will be processed within 5 business days after receiving the returned item.
                    For full details, please contact our support team.
                </p>
            </Card>
        </div>
    );
};

export default ReturnPolicy;
