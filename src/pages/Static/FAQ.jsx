import Card from '@/components/UI/Card';

const FAQ = () => {
    const faqs = [
        { question: 'How can I place an order?', answer: 'Simply browse products and click "Add to Cart".' },
        { question: 'What payment methods are available?', answer: 'Cash on delivery is available now. Card payments coming soon.' },
        { question: 'Can I return a product?', answer: 'Yes, check our return policy for details.' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <Card key={i}>
                        <p className="font-semibold">{faq.question}</p>
                        <p className="text-gray-700">{faq.answer}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
