import ExpandablePanel from "./ExpandablePanel";
import { FireIcon } from "../../assets/icons";
import ToggleBtn from "./ToggleBtn";
import { useState } from "react";

export default function CaloriesFilter() {
  const [caloriesFilters, setCaloriesFilters] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const toggle = (key) => {
    setCaloriesFilters((currentFilters) => {
      const newFilters = { ...currentFilters };
      newFilters[key] = !currentFilters[key];

      return newFilters;
    });
  };

  return (
    <ExpandablePanel
      icon={<FireIcon />}
      label="Calories"
      className="text-dark-4"
    >
      <div className="flex gap-2 items-center justify-start">
        <ToggleBtn
          label="0 - 200 cal"
          selected={caloriesFilters["option1"]}
          toggle={() => {
            toggle("option1");
          }}
        />
        <ToggleBtn
          label="201 - 500  Cal"
          selected={caloriesFilters["option2"]}
          toggle={() => {
            toggle("option2");
          }}
        />
        <ToggleBtn
          label="501+  Cal"
          selected={caloriesFilters["option3"]}
          toggle={() => {
            toggle("option3");
          }}
        />
      </div>
    </ExpandablePanel>
  );
}
