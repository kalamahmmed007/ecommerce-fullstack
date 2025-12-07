import Card from '@/components/UI/Card';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
            <Card>
                <p className="leading-relaxed text-gray-700">
                    We value your privacy. All your personal information is kept secure and never shared
                    with third parties without your consent. For more details, please read the full privacy policy.
                </p>
            </Card>
        </div>
    );
};

export default PrivacyPolicy;
