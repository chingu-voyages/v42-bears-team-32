import React from "react";
import Vegetarian from "../asset/Home/purpose/Vegetarian.png";
import Losing_weight from "../asset/Home/purpose/Losing_weight.png";
import Fitness from "../asset/Home/purpose/Fitness.png";

function Purpose() {
  return (
    <div className="lg:px-[150px] px-[25px] py-[10px] ">
      <p className="text-dark-2 lg:text-h1 text-h2 font-semibold py-[25px]">
        Purpose
      </p>
      <div className="flex justify-between">
        <div
          className={`shadow-md drop-shadow-sm lg:w-[360px] lg:h-[160px] w-[80px] h-[120px] rounded-[20px]`}
        >
          {/* <div className="relative">
            <img
              src={Vegetarian}
              alt=""
              className=" opacity-50 lg:w-[360px] lg:h-[160px] w-[40px]  h-[40px] rounded-[20px]"
            />
            <p className="absolute text-dark-2 lg:text-h3 text-h5 py-[25px]">
              See All
            </p>
          </div> */}
          <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              class="object-cover opacity-50 lg:w-[360px] lg:h-[160px] w-[40px]  h-[40px] rounded-[20px]"
              src={Losing_weight}
              alt="Losing weight"
            />

            <div class="absolute top-[25%] left-[25%] px-6 py-4">
              <h4 class="text-center text-xl font-semibold tracking-tight text-white">
                Losing Weight
              </h4>
            </div>
          </div>
        </div>
        <div
          className={`shadow-md drop-shadow-sm lg:w-[360px] lg:h-[160px] w-[80px] h-[120px] rounded-[20px]`}
        >
          <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              class="object-cover opacity-50 lg:w-[360px] lg:h-[160px] w-[40px]  h-[40px] rounded-[20px]"
              src={Fitness}
              alt="Flower and sky"
            />

            <div class="absolute top-[25%] left-[25%] px-6 py-4">
              <h4 class="text-center text-xl font-semibold tracking-tight text-white">
                Fitness
              </h4>
            </div>
          </div>
        </div>
        <div
          className={`shadow-md drop-shadow-sm lg:w-[360px] lg:h-[160px] w-[80px] h-[120px] rounded-[20px]`}
        >
          <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              class="object-cover opacity-50 lg:w-[360px] lg:h-[160px] w-[40px]  h-[40px] rounded-[20px]"
              src={Vegetarian}
              alt="Flower and sky"
            />

            <div class="absolute top-[25%] left-[25%] px-6 py-4">
              <h4 class="text-center text-xl font-semibold tracking-tight text-white">
                Vegetarian
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purpose;
