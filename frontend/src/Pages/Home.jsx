import React from "react";
import ExploreCategory from "../Components/Category/ExploreCategory"
import HomeProducts from "../Components/ProductCard/HomeProducts";
import ProductCard from "../Components/ProductCard/ProductCard";
import { todayOfferData } from "../constants/data.js";
import { bestCuisineData } from "../constants/data.js";
import { suggestedFoodData } from "../constants/data.js";
import HeroSection from "../Components/Hero";

function Home() {
  return (
    <div>
      <HeroSection />
      <ExploreCategory />
      <HomeProducts data={todayOfferData} label="Today's Offer" />
      <HomeProducts data={bestCuisineData} label="Best Cuisine" />
      <HomeProducts data={suggestedFoodData} label="Suggested For You" />
    </div>
  );
}

export default Home;
