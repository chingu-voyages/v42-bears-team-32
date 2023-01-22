import ExpandablePanel from "./ExpandablePanel";
import { GridIcon } from "../../assets/icons";
import ToggleBtn from "./ToggleBtn";
import { useState } from "react";

export default function CategoryFilters() {
  const [categoryFilters, setCategoryFilters] = useState({
    vegetarian: false,
    vegan: false,
    leanProtein: false,
    lowCarb: false,
  });

  const toggle = (key) => {
    setCategoryFilters((currentFilters) => {
      const newFilters = { ...currentFilters };
      newFilters[key] = !currentFilters[key];

      return newFilters;
    });
  };

  return (
    <ExpandablePanel
      icon={<GridIcon />}
      label="Category"
      className="text-dark-4"
    >
      <div className="flex gap-2 items-center justify-start">
        <ToggleBtn
          label="Vegetarian"
          selected={categoryFilters["vegetarian"]}
          toggle={() => {
            toggle("vegetarian");
          }}
        />
        <ToggleBtn
          label="Vegan"
          selected={categoryFilters["vegan"]}
          toggle={() => {
            toggle("vegan");
          }}
        />
        <ToggleBtn
          label="Lean-protein"
          selected={categoryFilters["leanProtein"]}
          toggle={() => {
            toggle("leanProtein");
          }}
        />
        <ToggleBtn
          label="Low-carb"
          selected={categoryFilters["lowCarb"]}
          toggle={() => {
            toggle("lowCarb");
          }}
        />
      </div>
    </ExpandablePanel>
  );
}
