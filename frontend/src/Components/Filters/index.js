import { useState } from "react";
import { ControlsIcon } from "../../assets/icons";

import SortFilter from "./SortFilter";
import CategoryFilter from "./CategoryFilter";
import CaloriesFilter from "./CaloriesFilter";
import RatingFilter from "./RatingFilter";
import AvailableFilter from "./AvailableFilter";

export default function Filters() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((open) => !open);
  };

  return (
    <div>
      <button
        onClick={toggle}
        className="bg-primary-1 text-dark-4 py-2 px-4 rounded-lg flex items-center gap-1 mb-2"
      >
        <ControlsIcon />
        <span className="block">Filters</span>
      </button>
      <div
        className={
          (open ? "" : "hidden") +
          " w-[32rem] p-5 bg-white rounded-lg flex flex-col gap-10 border border-gray-3 drop-shadow-lg"
        }
      >
        <SortFilter />
        <CategoryFilter />
        <CaloriesFilter />
        <RatingFilter />
        <AvailableFilter />
      </div>
    </div>
  );
}
