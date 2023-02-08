import React from 'react';

import images from '../../constants/images';
import { FaTimes } from 'react-icons/fa';

import { removeItem } from '../../features/Orders/orderSlice';
import { useDispatch } from 'react-redux';
import QuantityPicker from '../QuantityPicker/QuantityCount';
const OrderListComponent = ({ id, name, img, price, quantity }) => {
  const dispatch = useDispatch();
  // console.log(quantity);
  return (
    <article className="flex  drop-shadow-lg shadow-gray-200 shadow-md rounded-xl ">
      <div className="flex w-full ">
        <img src={img} alt={name} className="w-40 mr-10 rounded-l-lg" />
        <div className="flex flex-col w-full gap-1 p-7">
          <div className="flex justify-between mr-3 items-center">
            <h5 className="text-dark-3 font-bold">{name}</h5>
            <span
              className="text-gray-5 text-3xl "
              onClick={() => dispatch(removeItem(id))}
            >
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
            <QuantityPicker id={id} quantity={quantity} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default OrderListComponent;
