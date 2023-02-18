import React from 'react';
function CategoryCard({ id, name, src, bg }) {
  return (
    <div
      className={`${bg} shadow-md drop-shadow-sm lg:w-[250px] lg:h-[120px] w-[80px] h-[120px] rounded-lg`}
    >
      <div className="flex flex-col lg:flex-row lg:justify-around  items-center p-6 rounded-[20px]">
        <img
          src={src}
          alt=""
          className="lg:w-[80px] w-[40px] lg:h-[80px] h-[40px]"
        />
        <h5 className="text-dark-3 lg:text-lg text-h4 leading-tight font-semibold mb-2 ">
          {name}
        </h5>
      </div>
    </div>
  );
}

export default CategoryCard;
