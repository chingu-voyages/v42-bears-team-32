import HeroImg from "../../asset/Home/HeroImage.svg";
import logo from "../../asset/logo.svg";

import { MdSearch } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="bg-primary-0 overflow-x-clip">
      <div className="relative px-6 py-10 sm:p-0 sm:h-[26rem] sm:flex sm:items-stretch sm:justify-start sm:max-w-max sm:m-auto">
        <div className="sm:p-8 sm:min-w-[28rem] flex flex-col justify-center">
          <div className="mb-5">
            <img src={logo} alt="EatingLight" className="max-w-lg w-full" />
          </div>
          <div className="mb-5">
            <span className="text-2xl sm:text-4xl text-primary-3 ">
              Lighten up your meals, lighten up your life
            </span>
          </div>
          <div className="bg-white border-2 border-primary-3 rounded-full flex items-center p-0 max-w-md">
            <div className="bg-transparent px-3 py-2">
              <select name="location" className="bg-transparent text-black">
                <option value="volvo">New York</option>
                <option value="saab">Hong Kong</option>
                <option value="mercedes">Kolkatta</option>
                <option value="audi">NetherLands</option>
              </select>
            </div>
            <div className="bg-gray-6 w-0.5 h-4"></div>
            <div className="px-3 py-2 flex items-center">
              <input
                type="text"
                className="bg-transparent w-full h-6 p-0 focus:outline-none placeholder:text-gray-6 text-black"
                placeholder="Search..."
              />
              <MdSearch className="h-6 w-6 text-gray-6" />
            </div>
          </div>
        </div>
        <div className="relative -mb-16">
          <img src={HeroImg} className="sm:w-[32rem] sm:max-w-none" />
        </div>
      </div>
    </div>
  );
}
