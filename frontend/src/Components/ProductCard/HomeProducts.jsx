import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoods } from "../../features/Food/foodSlice";

import HomeProductCard from "./HomeProductCard";
function HomeProducts({ label }) {
  const food = useSelector((state) => state.food.foods.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return (
    <div className="lg:px-[150px] px-[25px] py-[15px] ">
      <div className="flex justify-between items-center">
        <p className="text-dark-2 lg:text-h1 text-h2 font-semibold py-[25px]">
          {label}
        </p>
        <Link to="/foods">
          <p className="text-primary-7 lg:text-h5 text-h5 py-[25px]">See All</p>
        </Link>
      </div>

      <div className="flex justify-between space-x-[10px] overflow-x-scroll">
        {food &&
          food.map((data) => (
            <HomeProductCard
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

export default HomeProducts;
