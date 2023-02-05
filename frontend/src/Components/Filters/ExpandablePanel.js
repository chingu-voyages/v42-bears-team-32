import { useState } from "react";
import { ChevronUpIcon } from "../../assets/icons";
import { ChevronDownIcon } from "../../assets/icons";

export default function ExpandablePanel({ label, icon, className, children }) {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen((current) => !current);
  };

  return (
    <div className={className}>
      <button onClick={toggle} className="w-full flex items-center gap-1 mb-3">
        {icon}
        <span className="text-dark-4">{label}</span>
        {open ? (
          <ChevronUpIcon className="text-dark-3 ml-auto" />
        ) : (
          <ChevronDownIcon className="text-dark-3 ml-auto" />
        )}
      </button>
      <div className={open ? "" : "hidden"}>{children}</div>
    </div>
  );
}
