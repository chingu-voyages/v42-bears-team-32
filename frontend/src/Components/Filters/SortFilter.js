import ExpandablePanel from "./ExpandablePanel";
import { SortDownIcon } from "../../assets/icons";
import ToggleBtn from "./ToggleBtn";
import { useState } from "react";

export default function SortFilter() {
  const [sortFilters, setSortFilters] = useState({
    pickedForYou: false,
    mostPopular: false,
    rating: false,
    deliveryTime: false,
  });

  const toggle = (key) => {
    setSortFilters((currentFilters) => {
      const newFilters = { ...currentFilters };
      newFilters[key] = !currentFilters[key];

      return newFilters;
    });
  };

  return (
    <ExpandablePanel
      icon={<SortDownIcon />}
      label="Sort"
      className="text-dark-4"
    >
      <div className="flex gap-2 items-center justify-start">
        <ToggleBtn
          label="Picked for you"
          selected={sortFilters["pickedForYou"]}
          toggle={() => {
            toggle("pickedForYou");
          }}
        />
        <ToggleBtn
          label="Most popular"
          selected={sortFilters["mostPopular"]}
          toggle={() => {
            toggle("mostPopular");
          }}
        />
        <ToggleBtn
          label="Rating"
          selected={sortFilters["rating"]}
          toggle={() => {
            toggle("rating");
          }}
        />
        <ToggleBtn
          label="Delivery time"
          selected={sortFilters["deliveryTime"]}
          toggle={() => {
            toggle("deliveryTime");
          }}
        />
      </div>
    </ExpandablePanel>
  );
}
