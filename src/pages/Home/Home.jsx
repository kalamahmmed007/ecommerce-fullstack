// src/pages/Home/Home.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroSection from "../../components/Home/HeroSection";
import HeroSlider from "../../components/Home/HeroSlider";
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import NewArrivals from "../../components/Home/NewArrivals";
import BestSellers from "../../components/Home/BestSellers";
import CategorySection from "../../components/Home/CategorySection";
import DealOfTheDay from "../../components/Home/DealOfTheDay";
import BrandSlider from "../../components/Home/BrandSlider";
import Testimonials from "../../components/Home/Testimonials";
import Newsletter from "../../components/Home/Newsletter";

import {
  fetchFeaturedProducts,
  fetchNewArrivals,
  fetchBestSellers,
} from "@/features/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { featured, newArrivals, bestSellers, loading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchFeaturedProducts());
    dispatch(fetchNewArrivals());
    dispatch(fetchBestSellers());
  }, [dispatch]);

  return (
    <div className="space-y-16">
      {/* Hero / Slider */}
      <HeroSlider />
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts products={featured} loading={loading} />

      {/* New Arrivals */}
      <NewArrivals products={newArrivals} loading={loading} />

      {/* Category Section */}
      <CategorySection />

      {/* Best Sellers */}
      <BestSellers products={bestSellers} loading={loading} />

      {/* Deal of the Day */}
      <DealOfTheDay />

      {/* Brand Slider */}
      <BrandSlider />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
