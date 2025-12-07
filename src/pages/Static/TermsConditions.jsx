import Card from '@/components/UI/Card';

const TermsConditions = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Terms & Conditions</h1>
            <Card>
                <p className="leading-relaxed text-gray-700">
                    By using our website, you agree to follow our terms and conditions.
                    All purchases are subject to availability and our policies.
                    Please read all terms carefully before making a purchase.
                </p>
            </Card>
        </div>
    );
};

export default TermsConditions;
