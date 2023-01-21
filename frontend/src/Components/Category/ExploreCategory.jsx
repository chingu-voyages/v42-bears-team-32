import React from "react";
import CategoryCard from "../Category/CategoryCard";
import vegetarian from "../../asset/Home/vegetarian.png";
import vegan from "../../asset/Home/vegan.png";
import low_carb from "../../asset/Home/low_carb.png";
import lean_protein from "../../asset/Home/lean_protein.png";

const categoryData = [
  {
    id: 0,
    src: vegetarian,
    name: "Vegetarian",
    bg: "bg-red-50",
  },
  {
    id: 1,
    src: vegan,
    name: "Vegan",
    bg: "bg-green-50",
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
    <div className="px-[150px] py-[50px]">
      <p className="text-xl font-weight-800 font-medium py-[25px]">
        Explore by Categories
      </p>

      <div className="flex justify-between">
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
