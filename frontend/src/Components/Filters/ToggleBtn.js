export default function ToggleBtn({ label, selected, toggle, className }) {
  return (
    <button
      onClick={toggle}
      className={
        (selected ? "bg-primary-5 text-white" : "text-primary-5") +
        " border border-primary-5 rounded-lg py-3 px-3.5 text-sm leading-4"
      }
    >
      {label}
    </button>
  );
}
