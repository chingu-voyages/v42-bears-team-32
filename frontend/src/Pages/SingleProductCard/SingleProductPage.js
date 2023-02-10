import React, { useEffect } from 'react';
import { images } from '../../constants';
import Rating from '../../Components/Rating/Rating';
import Tag from '../../Components/Tag/Tag';
import AddToCart from '../../Components/AddToCart/AddToCart';
import Counter from '../../Components/QuantityPicker';
import CaloriePercent from '../../Components/CaloriePercent';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFoods, fetchSingleFood } from '../../store/foodSlice';

const SingleProductPage = () => {
  // const food = useSelector((state) => state.food);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchFoods());
  //   dispatch(fetchSingleFood("63d97518ddcda581178bf70e"));
  // }, [dispatch]);

  // console.log(food);

  return (
    <section className="h-auto lg:h-screen flex flex-col m-6">
      <img
        className="w-8 mx-10 my-4 hover:scale-125 duration-100"
        src={images.backarrow}
        alt="Back"
      />
      <div className="flex flex-col lg:flex-row lg:m-10">
        <img src={images.food} alt="food" className="mb-8" />
        <div className="flex flex-col lg:w-screen lg:px-16 gap-4 ">
          <div className="flex justify-between font-bold">
            <h3 className="text-4xl text-[#373A40]">Food</h3>
            <p className="text-2xl text-[#8ABE53]">500 Cal</p>
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
          <span className="hidden lg:block">
            <Rating />
            <Tag />
          </span>
          <div className="flex justify-between w-full flex-col gap-10">
            <p className="text-primary-5 font-bold text-[24px]">${'10.00'}</p>
            <div className="flex justify-between items-center">
              <Counter />
              <AddToCart />
            </div>
          </div>
          <div className="block lg:hidden ">
            <Rating />
            <Tag />
          </div>
          <div className="flex my-6">
            <CaloriePercent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
