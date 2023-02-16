import React from 'react';
import { Link } from 'react-router-dom';
function HomeProductCard({
  id,
  foodName,
  restaurantName,
  src,
  waitingTime,
  calories,
}) {
  return (
    <Link to={`/food/${id}`} className="my-10">
      <div className="rounded-[20px] shadow-md bg-white w-[280px] h-[280px] overflow-hidden">
        <div className="h-[65%]">
          <img
            className="rounded-t-[20px]  hover:scale-110 hover:duration-1000 bg-cover bg-center w-full h-full"
            src={src}
            alt={foodName}
          />
        </div>
        <div className="h-[30%]">
          <div className="flex justify-between px-4 py-2">
            <h5 className="text-dark-3 text-h3 font-semibold">{foodName}</h5>
            <p className="text-primary-5 text-h3 font-bold">{calories} Cal</p>
          </div>
          <div className="flex justify-between px-4">
            <h5 className="text-dark-3 text-h4 font-400">{restaurantName}</h5>
            <p className="text-dark-3 text-h4 font-400 mb-2">
              {waitingTime} min
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomeProductCard;
