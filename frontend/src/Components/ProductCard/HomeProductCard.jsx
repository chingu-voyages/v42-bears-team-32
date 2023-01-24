import React from "react";
import { Link } from "react-router-dom";
function HomeProductCard({
  foodName,
  restaurantName,
  src,
  waitingTime,
  calories,
}) {
  return (
    <Link to="/singleproduct">
      <div className="rounded-[20px] shadow-lg bg-white w-[265px] h-[210px]">
        <a href="#!">
          <img
            className="rounded-t-[20px] w-[265px] h-[125px]"
            src={src}
            alt=""
          />
        </a>
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
