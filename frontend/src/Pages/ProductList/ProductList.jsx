import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoods } from "../../features/Food/foodSlice";

import ProductListCard from "../../Components/ProductList/ProductListCard";
function ProductList({ label }) {
  const food = useSelector((state) => state.food.foods.results);
  const dispatch = useDispatch();
  console.log("show best cuisine", food);
  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return (
    <div className="lg:px-[50px] px-[25px] py-[25px] ">
      <p className="text-dark-2 lg:text-h1 text-h2 font-semibold py-[25px]">
        {label}
      </p>

      <div className="flex justify-between flex-wrap space-x-[10px]">
        {food &&
          food.map((data) => (
            <ProductListCard
              id={data._id}
              key={data._id}
              foodName={data.name}
              restaurantName={data.restaurantName}
              src={data.imageUrl}
              waitingTime={data.deliveryTime}
              calories={data.calorie}
              tags={data.tags}
              price={data.price.$numberDecimal}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
