import React, { useEffect } from 'react';
import { images } from '../../constants';
import Rating from '../../Components/Rating/Rating';
import { useDispatch, useSelector } from 'react-redux';

const SingleProductPage = () => {
  return (
    <section className="h-screen flex flex-col m-6">
      <img
        className="w-8 mx-10 my-4 hover:scale-125 duration-100"
        src={images.backarrow}
        alt="Back"
      />
      <div className="flex m-10">
        <img src={images.food} alt="food" />
        <div className="flex flex-col w-screen px-16 gap-4">
          <div className="flex justify-between font-bold">
            <h3 className="text-4xl text-[#373A40]">Food</h3>
            <p className="text-2xl text-[#8ABE53]">500Cal</p>
          </div>
          <div className="flex gap-1">
            <p className="text-[#5C5F66]">Resturant</p>
            <img className="w-1" src={images.ellipse} alt="." />
            <p className="text-[#909296]">20-30 min</p>
          </div>
          <p className="text-[#909296]">
            Grilled Chicken, Romaine Lettuce, Croutons, Parmesan Cheese, Caeser
            Dressing, Flour Wrap
          </p>
          <Rating />
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
