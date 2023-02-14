import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import SearchBar from '../search/SearchBar';
import { images } from '../../constants';

import { useSelector } from 'react-redux';

const Navbar = () => {
  const { quantity } = useSelector((store) => store.order);

  const [show, setShow] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setShow(!show);
  };
  useEffect(() => {
    let toggle = 'hidden  lg:block ';
    if (!show) {
      navRef.current.className = toggle;
    } else {
      navRef.current.className = '';
    }
  }, [show]);
  return (
    <nav className="flex bg-white relative lg:px-12 px-4  py-6 shadow-md justify-between">
      <Link to="/">
        <img
          src={images.logo}
          alt="EatingLight"
          className="w-28 lg:w-40 py-3 lg:py-2 mr-20"
        />
      </Link>
      <div className="text-center">
        <SearchBar />
      </div>

      <button
        className="ml-auto absolute right-6 text-3xl text-lime-500 top-7 z-20 lg:hidden"
        onClick={toggleNav}
      >
        {show ? <FaTimes /> : <FaBars />}
      </button>
      <div className="" ref={navRef}>
        <ul
          className="lg:p-0 lg:flex-row lg:bg-transparent lg:relative lg:h-auto absolute right-0 top-0 z-10
        flex  gap-8 text-white flex-col h-screen p-20   bg-gray-800/90 "
        >
          <Link
            href="#"
            className="px-6 py-2  bg-lime-400/90 rounded-md hover:bg-lime-500/70"
          >
            Sign Up
          </Link>
          <Link
            href="#"
            className="px-6 py-2 bg-transparent rounded-md border-solid border-lime-400 border-2 text-lime-500 hover:border-lime-500 "
          >
            Sign In
          </Link>
          <Link
            to="/orderdetails"
            className="px-6 py-2 bg-transparent relative"
          >
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
      </div>
    </nav>
  );
};

export default Navbar;
