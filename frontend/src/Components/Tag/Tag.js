import React from "react";

const Tag = ({ tag }) => {
  return (
    <div className="mt-8">
      <a
        href="#"
        className="px-6 pb-[1.5px] bg-primary-0 rounded-xl  border-primary-5 border-solid border-2"
      >
        {tag}
      </a>
    </div>
  );
};

export default Tag;
