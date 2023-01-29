import React from "react";
import { Link } from "react-router-dom";
import thumbnail from "../../asset/Home/Thumbnail.png";
import Price from "../Price";
function ProductCard() {
  return (
    <Link to="/singleproduct">
      <div className="flex rounded-[20px] shadow-lg bg-white w-[648px] h-[224px]">
        <a href="#!">
          <img
            className="rounded-l-[20px] max-w-[220px] h-[224px]"
            src={thumbnail}
            alt=""
          />
        </a>
        <div>
          <div className="flex justify-between  px-4 py-2 max-w-full w-[428px]">
            <h5 className="text-dark-3 text-h3 font-700">Food Name nnnnnn</h5>
            <p className="text-primary-5 text-h3 font-700">500 Cal</p>
          </div>
          <div className="flex justify-between px-4 py-2">
            <h5 className="text-dark-3 text-h4 font-400">restaurant name</h5>
            <p className="text-dark-3 text-h4 font-400 mb-2">20 -30 min</p>
          </div>
          <div className="flex px-4 py-2">
            <h5 className="text-dark-3 text-h4 font-400">rating</h5>
          </div>
          <div className="flex px-4 py-2">
            <h5 className="text-dark-3 text-h4 font-400">tag</h5>
          </div>
          <div className="flex justify-between">
            <div className="flex px-4 py-2">
              <Price price={300} />
            </div>
            <div className="flex px-4 py-2">
              <h5 className="text-dark-3 text-h4 font-400">
                add to cart button
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
