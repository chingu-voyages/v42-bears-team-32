import React from "react";
import ExploreCategory from "../Components/Category/ExploreCategory";
import HeroSection from "../Components/Hero";
import TodayOffer from "../Components/ProductCard/TodayOffer";
import BestCuisine from "../Components/ProductCard/BestCuisine";
import Suggested from "../Components/ProductCard/Suggested";
import Purpose from "../Components/Purpose";

function Home() {
  return (
    <div>
      <HeroSection />
      <ExploreCategory />
      <TodayOffer label="Today's Offer" />
      <Purpose />
      <BestCuisine label="Best Cuisine" />
      <Suggested label="Suggested For You" />
    </div>
  );
}

export default Home;
