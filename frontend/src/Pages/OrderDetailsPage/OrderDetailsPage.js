import React from 'react';
import { images } from '../../constants';
import cartItems from './CartItems';
import OrderListComponent from '../../Components/OrderList/OrderListComponent';
const OrderDetailsPage = () => {
  console.log(cartItems);
  return (
    <section>
      <div className="mx-10 my-4">
        <img
          className="w-8  mb-8 hover:scale-125 duration-100"
          src={images.backarrow}
          alt="Back"
        />
        <div className="flex items-center gap-10">
          <h2 className="text-4xl">Order Details</h2>
          <p className="text-dark-3 font-semibold">5 items</p>
        </div>
      </div>
      {/* Order list */}
      <div className="flex flex-col w-1/2 mx-12 gap-6 ">
        {cartItems.map((item) => {
          return <OrderListComponent key={item.id} {...item} />;
        })}
        {/*summary  */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default OrderDetailsPage;
