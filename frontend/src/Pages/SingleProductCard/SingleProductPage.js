import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { images } from '../../constants';
import Rating from '../../Components/Rating/Rating';
import Tag from '../../Components/Tag/Tag';
import AddToCart from '../../Components/AddToCart/AddToCart';
import Counter from '../../Components/QuantityPicker';
import CaloriePercent from '../../Components/CaloriePercent';

const SingleProductPage = () => {
  const [food, setFood] = useState();

  const id = useParams().id;
  const fetchDetails = async () => {
    const res = await axios
      .get(`https://food-app-api-gypb.onrender.com/api/v1/foods/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setFood(data);
    });
  }, [id]);

  console.log(id, food);

  return (
    <section className="h-auto lg:h-auto flex flex-col m-6 ">
      <img
        className="w-8 mx-10 my-4 hover:scale-125 duration-100"
        src={images.backarrow}
        alt="Back"
      />
      {food && (
        <div className="flex flex-col lg:flex-row lg:m-10">
          <div className="lg:w-[60%] w-full">
            <img
              src={food.imageUrl}
              alt="food"
              className="mb-8 w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col  lg:px-16 gap-4 ">
            <div className="flex justify-between font-bold">
              <h3 className="text-4xl text-[#373A40]">{food.name}</h3>
              <p className="text-2xl text-[#8ABE53]">{food.calorie} Cal</p>
            </div>
            <div className="flex gap-1">
              <p className="text-[#5C5F66]">{food?.restaurantName}</p>
              <img className="w-1" src={images.ellipse} alt="." />
              <p className="text-[#909296]">{food?.deliveryTime} min</p>
            </div>
            {food.ingredients.map((data) => (
              <div className="flex">
                <p className="text-[#909296]">{data}</p>
              </div>
            ))}

            <span className="hidden lg:block">
              <Rating />
              {food.tags && food.tags.map((data) => <Tag tag={data} />)}
            </span>
            <div className="flex justify-between w-full flex-col gap-10">
              <p className="text-primary-5 font-bold text-[24px]">
                ${food.price.$numberDecimal}
              </p>
              <div className="flex justify-between items-center">
                <Counter id={id} />
                <AddToCart />
              </div>
            </div>
            <div className="block lg:hidden ">
              <Rating />
              {food.tags && food.tags.map((data) => <Tag tag={data} />)}
            </div>
            <div className="flex my-6">
              <CaloriePercent
                carbs={food.carbs}
                fats={food.fat}
                protein={food.protein}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleProductPage;
