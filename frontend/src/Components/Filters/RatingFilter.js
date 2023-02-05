import ExpandablePanel from "./ExpandablePanel";
import { StarIcon } from "../../assets/icons";
import ToggleBtn from "./ToggleBtn";
import { useState } from "react";

export default function RatingFilter() {
  const [ratingFilters, setRatingFilters] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const toggle = (key) => {
    setRatingFilters((currentFilters) => {
      const newFilters = { ...currentFilters };
      newFilters[key] = !currentFilters[key];

      return newFilters;
    });
  };

  return (
    <ExpandablePanel icon={<StarIcon />} label="Rating" className="text-dark-4">
      <div className="flex gap-2 items-center justify-start">
        <ToggleBtn
          label="4+"
          selected={ratingFilters["option1"]}
          toggle={() => {
            toggle("option1");
          }}
        />
        <ToggleBtn
          label="3+"
          selected={ratingFilters["option2"]}
          toggle={() => {
            toggle("option2");
          }}
        />
        <ToggleBtn
          label="2+"
          selected={ratingFilters["option3"]}
          toggle={() => {
            toggle("option3");
          }}
        />
        <ToggleBtn
          label="1+"
          selected={ratingFilters["option4"]}
          toggle={() => {
            toggle("option4");
          }}
        />
      </div>
    </ExpandablePanel>
  );
}
