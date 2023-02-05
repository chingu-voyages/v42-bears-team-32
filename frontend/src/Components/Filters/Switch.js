export default function Switch({ value = true, setValue, className }) {
  const onChange = (e) => {
    setValue(e.target.checked);
  };

  return (
    <div className={className}>
      <label for="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            checked={value}
            onChange={onChange}
            id="toggle"
            className="sr-only"
          />
          <div
            className={
              (value ? "bg-primary-5" : "bg-dark-3") + " w-12 h-6 rounded-full"
            }
          ></div>
          <div
            className={
              (value ? "right-1 bg-white" : "left-1 bg-primary-5") +
              " absolute  top-1 w-4 h-4 rounded-full"
            }
          ></div>
        </div>
      </label>
    </div>
  );
}
