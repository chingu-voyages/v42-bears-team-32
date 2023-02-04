import React from 'react';

import images from '../../constants/images';
import { FaTimes } from 'react-icons/fa';
import Counter from '../../Components/QuantityPicker';

const OrderListComponent = ({ name, img, price }) => {
  return (
    <article className="flex  drop-shadow-lg shadow-gray-200 shadow-md rounded-xl ">
      <div className="flex w-full ">
        <img src={img} alt={name} className="w-40 mr-10 rounded-l-lg" />
        <div className="flex flex-col w-full gap-1 p-7">
          <div className="flex justify-between mr-3 items-center">
            <h5 className="text-dark-3 font-bold">{name}</h5>
            <span className="text-gray-5 text-3xl ">
              <FaTimes />
            </span>
          </div>
          <div className="flex gap-1 text-[12px]">
            <p className="text-dark-3">Resturant</p>
            <img className="w-1" src={images.ellipse} alt="." />
            <p className="text-[#909296]">20-30 min</p>
          </div>
          <div className="flex justify-between items-center">
            <p>{price}</p>
            <Counter />
          </div>
        </div>
      </div>
    </article>
  );
};

export default OrderListComponent;
