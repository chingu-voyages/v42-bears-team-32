import { MdAdd } from 'react-icons/md';
import { MdHorizontalRule } from 'react-icons/md';

export default function QuantityPicker({ quantity, setQuantity }) {
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={decrement}
        className="h-10 w-10 text-2xl text-primary-7 leading-4 rounded-lg bg-primary-0 hover:bg-slate-200"
      >
        -
      </button>
      <span className="text-dark-3 font-semibold">{quantity}</span>
      <button
        onClick={increment}
        className="h-10 w-10 text-2xl text-white leading-4 rounded-lg bg-primary-7 hover:bg-primary-5"
      >
        +
      </button>
    </div>
  );
}
