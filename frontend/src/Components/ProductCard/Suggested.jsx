import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoods } from "../../features/Food/foodSlice";
import { Link } from "react-router-dom";

import HomeProductCard from "./HomeProductCard";
function Suggested({ label }) {
  const food = useSelector((state) => state.food.foods.results);
  const dispatch = useDispatch();
  console.log("show food suggest", food);
  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return (
    <div className="lg:px-[150px] px-[25px] py-[10px] ">
      <div className="flex justify-between items-center">
        <p className="text-dark-2 lg:text-h1 text-h2 font-semibold py-[25px]">
          {label}
        </p>
        <Link to="/foods">
          <p className="text-primary-7 lg:text-h5 text-h5 py-[25px]">See All</p>
        </Link>
      </div>

      <div className="flex justify-between space-x-[10px] overflow-x-scroll hideScroll ">
        {food &&
          food
            .slice(2, 6)
            .map((data) => (
              <HomeProductCard
                id={data._id}
                key={data._id}
                foodName={data.name}
                restaurantName={data.restaurantName}
                src={data.imageUrl}
                waitingTime={data.deliveryTime}
                calories={data.calorie}
              />
            ))}
      </div>
    </div>
  );
}

export default Suggested;
