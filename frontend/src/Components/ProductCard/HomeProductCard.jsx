import React from "react";
import { Link } from "react-router-dom";
function HomeProductCard({
  id,
  foodName,
  restaurantName,
  src,
  waitingTime,
  calories,
}) {
  return (
    <Link to={`/food/${id}`}>
      <div className="rounded-[20px] shadow-md bg-white w-[250px] h-[210px]">
        <img
          className="rounded-t-[20px] w-[250px] h-[125px]"
          src={src}
          alt=""
        />

        <div className="flex justify-between px-4 py-2">
          <h5 className="text-dark-3 text-h3 font-700">{foodName}</h5>
          <p className="text-primary-5 text-h3 font-700">{calories} Cal</p>
        </div>
        <div className="flex justify-between px-4">
          <h5 className="text-dark-3 text-h4 font-400">{restaurantName}</h5>
          <p className="text-dark-3 text-h4 font-400 mb-2">{waitingTime} min</p>
        </div>
      </div>
    </Link>
  );
}

export default HomeProductCard;
