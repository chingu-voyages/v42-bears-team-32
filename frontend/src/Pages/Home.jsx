import React from "react";
import ExploreCategory from "../Components/Category/ExploreCategory";
import TodayOffer from "../Components/ProductCard/TodayOffer";

function Home() {
  return (
    <div>
      <p className="px-[150px]">Hero Section</p>
      <ExploreCategory />
      <TodayOffer />
    </div>
  );
}

export default Home;
