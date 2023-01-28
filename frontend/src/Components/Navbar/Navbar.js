import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import SearchBar from '../search/SearchBar';

import { images } from '../../constants';


const Navbar = () => {
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
      <a href="/">
        <img
          src={images.logo}
          alt="EatingLight"
          className="w-28 lg:w-40 py-3 lg:py-2 mr-20"
        />
      </a>
      <div className="text-center">
        <SearchBar />
      </div>

      <button
        className="ml-auto absolute right-10 text-3xl text-lime-500 top-7 z-20 lg:hidden"
        onClick={toggleNav}
      >
        {show ? <FaTimes /> : <FaBars />}
      </button>
      <div className="" ref={navRef}>
        <ul
          className="lg:p-0 lg:flex-row lg:bg-transparent lg:relative lg:h-auto absolute right-0 top-0 z-10
        flex  gap-8 text-white flex-col h-screen p-20   bg-gray-800/70 "
        >
          <a
            href="#"
            className="px-6 py-2  bg-lime-400/90 rounded-md hover:bg-lime-500/70"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="px-6 py-2 bg-transparent rounded-md border-solid border-lime-400 border-2 text-lime-500 hover:border-lime-500 "
          >
            Sign In
          </a>
          <a href="#" className="px-6 py-2 bg-transparent ">
            <img src={images.cart} alt="cart" className="hover:scale-110" />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
