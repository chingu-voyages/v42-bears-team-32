import ExpandablePanel from "./ExpandablePanel";
import { CheckIcon } from "../../assets/icons";
import Switch from "./Switch";
import { useState } from "react";

export default function AvailableFilter() {
  const [available, setAvailable] = useState(true);

  return (
    <ExpandablePanel
      icon={<CheckIcon />}
      label="Available"
      className="text-dark-4"
    >
      <div className="flex gap-2 items-center justify-start">
        <Switch value={available} setValue={setAvailable} />
      </div>
    </ExpandablePanel>
  );
}
