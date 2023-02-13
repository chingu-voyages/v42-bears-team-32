import { useState } from "react";
import { ChevronUpIcon } from "../../assets/icons";
import { ChevronDownIcon } from "../../assets/icons";
import ToggleBtn from "./ToggleBtn";

export default function FilterSelect({
  label,
  icon,
  options,
  selectedOption,
  setOption,
}) {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen((current) => !current);
  };

  const SelectButtons = Object.keys(options).map((option) => {
    const value = options[option];
    return (
      <ToggleBtn
        label={value}
        selected={selectedOption == value}
        toggle={() => {
          setOption(value);
        }}
      />
    );
  });

  return (
    <div>
      <button
        onClick={toggle}
        className="w-full flex items-center gap-1 mb-3 text-dark-4"
      >
        {icon}
        <span>{label}</span>
        {open ? (
          <ChevronUpIcon className="text-dark-3 ml-auto" />
        ) : (
          <ChevronDownIcon className="text-dark-3 ml-auto" />
        )}
      </button>
      <div className={open ? "" : "hidden"}>
        <div className="flex flex-wrap gap-2 items-center justify-start">
          {SelectButtons}
        </div>
      </div>
    </div>
  );
}
