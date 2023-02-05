import { useState } from "react";
import { ControlsIcon } from "../../assets/icons";

import FilterSelect from "./FilterSelect";

import { SortDownIcon } from "../../assets/icons";
import { GridIcon } from "../../assets/icons";
import { FireIcon } from "../../assets/icons";

export default function Filters() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((open) => !open);
  };

  const filterOptions = {
    sort: {
      PICKEDFORYOU: "Picked for you",
      MOSTPOPULAR: "Most popular",
      RATING: "Rating",
      DELIVERYTIME: "Delivery time",
    },
    category: {
      VEGETARIAN: "Vegetarian",
      VEGAN: "Vegan",
      LEANPROTEIN: "Lean protein",
      LOWCARB: "Low-carb",
    },
    calories: {
      OPTION1: "0 - 200 Cal",
      OPTION2: "201 - 500 Cal",
      OPTION3: "500+ Cal",
    },
    price: {
      OPTION1: "$",
      OPTION2: "$$",
      OPTION3: "$$$",
      OPTION4: "$$$$",
    },
  };

  const [selectedFilters, setSelectedFilters] = useState({
    sort: null,
    category: null,
    calories: null,
    price: null,
    availableOnly: false,
  });

  const setFilterOption = (option, value) => {
    setSelectedFilters((currentState) => {
      const newState = { ...currentState };

      newState[option] = value;
      return newState;
    });
  };

  const clearFilters = () => {
    setSelectedFilters((currentState) => ({
      sort: null,
      category: null,
      calories: null,
      price: null,
      availableOnly: false,
    }));
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
          " w-screen max-w-[32rem] p-5 bg-white rounded-lg flex flex-col gap-10 border border-gray-3 drop-shadow-lg"
        }
      >
        <FilterSelect
          label={"Sort"}
          icon={<SortDownIcon />}
          options={filterOptions.sort}
          selectedOption={selectedFilters.sort}
          setOption={(value) => {
            setFilterOption("sort", value);
          }}
        />
        <FilterSelect
          label={"Category"}
          icon={<GridIcon />}
          options={filterOptions.category}
          selectedOption={selectedFilters.category}
          setOption={(value) => {
            setFilterOption("category", value);
          }}
        />
        <FilterSelect
          label={"Calories"}
          icon={<FireIcon />}
          options={filterOptions.calories}
          selectedOption={selectedFilters.calories}
          setOption={(value) => {
            setFilterOption("calories", value);
          }}
        />
        <FilterSelect
          label={"Price"}
          icon={<div>$</div>}
          options={filterOptions.price}
          selectedOption={selectedFilters.price}
          setOption={(value) => {
            setFilterOption("price", value);
          }}
        />
        <div className="text-dark-4">
          <label htmlFor="available">
            <input
              type="checkbox"
              name="available"
              id="available"
              className="accent-primary-5"
              checked={selectedFilters.availableOnly}
              onChange={({ target }) => {
                setFilterOption("availableOnly", target.checked);
              }}
            />
            <span className="ml-2">Only show available meals</span>
          </label>
        </div>
        <div className="flex flex-wrap justify-between">
          <button className="text-sm text-primary-5" onClick={clearFilters}>
            Clear
          </button>
          <button className="bg-primary-7 py-3 px-14 rounded-full text-white">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
