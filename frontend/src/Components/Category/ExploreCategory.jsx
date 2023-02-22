import React from "react";

import CategoryCard from "./CategoryCard.jsx";
import vegetarian from "../../asset/Home/Vegetarian.png";
import vegan from "../../asset/Home/Vegan.png";
import low_carb from "../../asset/Home/LowCrab.png";
import lean_protein from "../../asset/Home/LeanProtein.png";

const categoryData = [
  {
    id: 0,
    src: vegetarian,
    name: "Vegetarian",
    bg: "bg-green-50",
  },
  {
    id: 1,
    src: vegan,
    name: "Vegan",
    bg: "bg-red-50",
  },
  {
    id: 2,
    src: lean_protein,
    name: "Lean Protein",
    bg: "bg-yellow-50",
  },
  {
    id: 3,
    src: low_carb,
    name: "Low Crab",
    bg: "bg-orange-50",
  },
];
function ExploreCategory() {
  return (
    <div className="lg:px-[150px] px-[25px] pt-[50px]">
      <p className="sm:pr-[25px] text-dark-2 lg:text-h1 sm:text-h4  py-[25px] font-semibold">
        Explore by Categories
      </p>

      <div className="flex justify-between space-x-2">
        {categoryData &&
          categoryData.map((data) => (
            <CategoryCard
              key={data.id}
              name={data.name}
              src={data.src}
              bg={data.bg}
            />
          ))}
      </div>
    </div>
  );
}

export default ExploreCategory;
