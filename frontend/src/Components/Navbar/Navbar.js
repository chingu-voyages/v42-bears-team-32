import React, { useEffect, useRef, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import SearchBar from '../search/SearchBar';
import { images } from '../../constants';

import { useSelector } from 'react-redux';

const Navbar = () => {
  const { quantity } = useSelector((store) => store.order);

  return (
    <nav className="flex bg-white relative lg:px-12 px-4  py-6 shadow-md justify-between">
      <Link to="/">
        <img
          src={images.logo}
          alt="EatingLight"
          className="w-28 lg:w-40 py-3 lg:py-2 mr-20"
        />
      </Link>
      <div className="text-center hidden lg:block">{/* <SearchBar /> */}</div>

      <ul
        className="  lg:bg-transparent  lg:h-auto  
        flex gap-2 lg:gap-8 text-white     "
      >
        <Link
          href="#"
          className="px-6 py-2  bg-lime-400/90 rounded-md hover:bg-lime-500/70 hidden lg:block"
        >
          Sign Up
        </Link>
        <Link
          href="#"
          className="px-6 py-2 bg-transparent rounded-md border-solid border-lime-400 border-2 text-lime-500 hover:border-lime-500 hidden lg:block"
        >
          Sign In
        </Link>
        <Link
          href="#"
          className=" text-3xl  text-lime-500 hover:border-lime-500 lg:hidden block pt-[0.38rem]"
        >
          <CgProfile />
        </Link>

        <Link to="/orderdetails" className="px-6 py-2 bg-transparent relative">
          <img src={images.cart} alt="cart" className="hover:scale-110" />
          <img
            src={images.cartWheel}
            alt="o"
            className="absolute right-12 lg:right-6"
          />
          <img src={images.cartWheel} alt="o" className="absolute left-8" />
          <span className="bg-red-600 absolute top-0 right-8 lg:right-2  px-2 rounded-xl hover:scale-110">
            {quantity}
          </span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
