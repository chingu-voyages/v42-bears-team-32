import React from 'react';
import { images } from '../../constants';
import cartItems from './CartItems';
import OrderListComponent from '../../Components/OrderList/OrderListComponent';
import Summary from '../../Summary/Summary';

const OrderDetailsPage = () => {
  console.log(cartItems);
  return (
    <section className="lg:mb-10 mt-10">
      <div className="mx-6 md:mx-10 my-4">
        <img
          className="w-8  mb-8 hover:scale-125 duration-100"
          src={images.backarrow}
          alt="Back"
          title="Back"
        />
        <div className="flex items-center gap-10 mb-14">
          <h2 className="text-4xl">Order Details</h2>
          <p className="text-dark-3 font-semibold">5 items</p>
        </div>
      </div>
      {/* Order list */}
      <div className="flex relative h-auto">
        <div className="flex flex-col w-full lg:w-1/2 mx-4 md:mx-12 gap-6 mb-96 lg:mb-0">
          {cartItems.map((item) => {
            return <OrderListComponent key={item.id} {...item} />;
          })}
        </div>
        {/*summary  */}
        <div
          className=" lg:w-2/5 fixed lg:right-0 lg:mr-12 
        lg:top-120 w-full bottom-0 "
        >
          <Summary />
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsPage;
