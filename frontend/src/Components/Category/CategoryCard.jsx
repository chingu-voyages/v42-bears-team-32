import React from "react";
function CategoryCard({ id, name, src, bg }) {
  return (
    <div className="shadow-lg w-[250px] h-[120px]">
      <div className={bg}>
        <div className="flex justify-around items-center p-6 rounded-[20px]">
          <img src={src} alt="" className="w-[80px] h-[80px]" />
          <h5 className="text-gray-700 text-lg leading-tight font-medium mb-2">
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
