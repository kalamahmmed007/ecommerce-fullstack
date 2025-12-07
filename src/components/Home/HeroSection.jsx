import HeroSlider from "./HeroSlider";

const HeroSection = () => {
    return (
        <section className="w-full">
            <HeroSlider />
            <div className="py-8 text-center">
                <h1 className="text-4xl font-bold">Welcome to Our Store!</h1>
                <p className="mt-2 text-gray-600">Find the best products at unbeatable prices</p>
            </div>
        </section>
    );
};

export default HeroSection;
