import React from "react";
import { images } from "../../constants";
const Footer = () => {
  return (
    <footer className=" bottom-0 lg:px-20 px-10 py-10 bg-[#F5F5F5] w-full">
      <img
        src={images.logo}
        alt="EatingLight"
        className=" w-28 lg:w-40 mb-10"
      />
      <div className="flex gap-10 mb-10 text-sm tracking-widest">
        <p className="hover:underline hover:text-lime-700/90">
          ABOUT EATINGLIGHT
        </p>
        <p className="hover:text-lime-700/90">LEARN MORE</p>
      </div>
      <p className="text-sm text-gray-400">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. EATINGLIGHT team All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
