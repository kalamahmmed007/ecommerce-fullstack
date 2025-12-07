import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { heroBanners } from "../../data/homeData";

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % heroBanners.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-96 w-full overflow-hidden rounded">
            {heroBanners.map((banner, index) => (
                <img
                    key={index}
                    src={banner.image}
                    alt={banner.title}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
                />
            ))}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 transform text-2xl text-white">
                <FaArrowLeft />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 transform text-2xl text-white">
                <FaArrowRight />
            </button>
        </div>
    );
};

export default HeroSlider;
