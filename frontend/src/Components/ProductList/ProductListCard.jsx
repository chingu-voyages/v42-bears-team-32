import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
function ProductListCard({
  id,
  foodName,
  restaurantName,
  src,
  waitingTime,
  calories,
  tags,
  price,
}) {
  return (
    <Link to={`/food/${id}`} className="my-10">
      <div className="rounded-[20px] flex shadow-md bg-white w-[648px] h-[224px] overflow-hidden">
        <div className="w-[33%]">
          <img
            className="rounded-t-[20px]  hover:scale-110 hover:duration-1000 bg-cover bg-center w-full h-[224px]"
            src={src}
            alt={foodName}
          />
        </div>
        <div className="w-[66%] flex flex-col">
          <div className="flex justify-between px-4 py-2">
            <h5 className="text-dark-3 text-h3 font-semibold">{foodName}</h5>
            <p className="text-primary-5 text-h3 font-bold">{calories} Cal</p>
          </div>
          <div className="flex justify-between px-4">
            <h5 className="text-dark-3 text-h4 font-400">{restaurantName}</h5>
            <p className="text-dark-3 text-h4 font-400">{waitingTime} min</p>
          </div>
          <div className="px-4 py-2">
            <Rating />
          </div>
          <div className="px-4 py-2 flex space-x-2">
            {tags && tags.map((data) => <Tag tag={data} />)}
          </div>

          <div className="flex justify-between px-4 py-2">
            <h5 className="text-dark-3 text-h3 font-semibold">${price}</h5>
            <div>
              <a
                href="#"
                className="w-[120px] bg-[#618639] hover:bg-primary-5 md:px-8 px-4  py-2 rounded-[30px] text-[#fff]"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductListCard;
