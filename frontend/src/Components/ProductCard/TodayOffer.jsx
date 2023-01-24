import React from "react";

import HomeProductCard from "./HomeProductCard";
import thumbnail from "../../asset/Home/Thumbnail.png";

const productData = [
  {
    id: 0,
    src: thumbnail,
    foodName: "Food One",
    calories: 500,
    restaurantName: "AAA",
    waitingTime: "20 - 30",
  },
  {
    id: 1,
    src: thumbnail,
    foodName: "Food Two",
    calories: 600,
    restaurantName: "BBB",
    waitingTime: "20 - 30",
  },
  {
    id: 2,
    src: thumbnail,
    foodName: "Food Three",
    calories: 500,
    restaurantName: "CCC",
    waitingTime: "20 - 30",
  },
  {
    id: 3,
    src: thumbnail,
    foodName: "Food Four",
    calories: 500,
    restaurantName: "DDD",
    waitingTime: "20 - 30",
  },
];
function TodayOffer() {
  return (
    <div className="px-[150px] py-[50px] pb-[300px]">
      <p className="text-dark-2 text-h1 font-weight-700 py-[25px]">
        Today's Offer
      </p>

      <div className="flex justify-between">
        {productData &&
          productData.map((data) => (
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

export default TodayOffer;
