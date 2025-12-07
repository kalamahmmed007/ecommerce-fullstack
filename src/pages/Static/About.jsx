const About = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-8 text-center text-4xl font-bold">About ShopHub</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="mb-6 text-xl text-gray-600">
                        Welcome to ShopHub, your number one source for all things shopping.
                        We're dedicated to giving you the very best products, with a focus on
                        quality, customer service, and uniqueness.
                    </p>

                    <h2 className="mb-4 mt-8 text-2xl font-bold">Our Story</h2>
                    <p className="mb-4 text-gray-700">
                        Founded in 2024, ShopHub has come a long way from its beginnings.
                        When we first started out, our passion for providing the best shopping
                        experience drove us to start our own business.
                    </p>

                    <h2 className="mb-4 mt-8 text-2xl font-bold">Our Mission</h2>
                    <p className="mb-4 text-gray-700">
                        We hope you enjoy our products as much as we enjoy offering them to you.
                        If you have any questions or comments, please don't hesitate to contact us.
                    </p>

                    <div className="mt-8 rounded-lg bg-primary-50 p-6">
                        <h3 className="mb-4 text-xl font-bold">Why Choose Us?</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="mr-2 text-primary-600">✓</span>
                                Wide selection of quality products
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-primary-600">✓</span>
                                Competitive prices
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-primary-600">✓</span>
                                Fast and reliable shipping
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-primary-600">✓</span>
                                Excellent customer service
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;