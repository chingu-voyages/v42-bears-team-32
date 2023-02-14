import { React, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = () => {
  const stars = [1, 2, 3, 4, 5];
  const [checked, setChecked] = useState(0);
  const [hover, setHover] = useState(undefined);

  const handleClick = (value) => {
    console.log(value);
    setChecked(value);
  };

  return (
    <div className="flex my-6">
      {stars.map((star, index) => {
        return (
          <div className="text-3xl key={index}">
            <FaStar
              className={
                (hover || checked) > index
                  ? 'text-[#FFE081] hover:text-[#FFE081] '
                  : 'text-[#DEE2E6]'
              }
              onClick={() => handleClick(index + 1)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
