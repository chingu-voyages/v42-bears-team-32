import React from "react";
import ExploreCategory from "../Components/Category/ExploreCategory";
import HomeProducts from "../Components/ProductCard/HomeProducts";
import { todayOfferData } from "../constants/data.js";
import { bestCuisineData } from "../constants/data.js";
import { suggestedFoodData } from "../constants/data.js";

function Home() {
  return (
    <div>
      <p className="px-[150px]">Hero Section</p>
      <ExploreCategory />
      <HomeProducts data={todayOfferData} label="Today's Offer" />
      <HomeProducts data={bestCuisineData} label="Best Cuisine" />
      <HomeProducts data={suggestedFoodData} label="Suggested For You" />
    </div>
  );
}

export default Home;
