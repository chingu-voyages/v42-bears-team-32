import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Summary = () => {
  const { totalPrice } = useSelector((store) => store.order);
  const subTotal = totalPrice.toFixed(2);

  const total = subTotal - 10 - 5;
  return (
    <article className=" p-10 shadow-sm rounded-2xl drop-shadow-lg bg-gray-0 ">
      <h4 className="mb-10 text-xl font-semibold text-dark-4">Summary</h4>
      <div className="flex flex-col gap-4 lg:gap-9 w-full">
        <div className="flex  justify-between text-dark-3 ">
          <p>Subtotal</p>
          <p className=" font-bold">${subTotal}</p>
        </div>
        <div className="flex  justify-between text-dark-3 ">
          <p>Delivery Charge</p>
          <p className=" font-bold">$5</p>
        </div>
        <div className="flex justify-between text-dark-3">
          <p>Discount</p>
          <p className="font-bold">$10</p>
        </div>
        <hr />
        <div className="flex justify-between text-dark-4 font-bold">
          <h4>Total</h4>
          <p>${total} </p>
        </div>
      </div>
    </article>
  );
};

export default Summary;
