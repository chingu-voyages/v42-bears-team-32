import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoods } from "../../features/Food/foodSlice";

import HomeProductCard from "./HomeProductCard";
function Suggested({ label }) {
  const food = useSelector((state) => state.food.foods.results);
  const dispatch = useDispatch();
  console.log("show food", food);
  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return (
    <div className="lg:px-[150px] px-[25px] py-[25px] ">
      <p className="text-dark-2 lg:text-h1 text-h2 font-weight-700 py-[25px]">
        {label}
      </p>

      <div className="flex justify-between space-x-[10px] overflow-x-scroll">
        {food &&
          food.slice(2, 6).map((data) => (
            <HomeProductCard
              id={data._id}
              key={data._id}
              foodName={data.name}
              restaurantName={data.restaurantName}
              src={data.imageUrl}
              waitingTime={data.deliveryTime}
              //calories={data.calories}
            />
          ))}
      </div>
    </div>
  );
}

export default Suggested;
