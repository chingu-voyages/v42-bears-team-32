import React from "react";

import HomeProductCard from "./HomeProductCard";
function HomeProducts({ data, label }) {
  return (
    <div className="px-[150px] py-[25px]">
      <p className="text-dark-2 text-h1 font-weight-700 py-[25px]">{label}</p>

      <div className="flex justify-between">
        {data &&
          data.map((data) => (
            <HomeProductCard
              key={data.id}
              foodName={data.foodName}
              restaurantName={data.restaurantName}
              src={data.src}
              waitingTime={data.waitingTime}
              calories={data.calories}
            />
          ))}
      </div>
    </div>
  );
}

export default HomeProducts;
