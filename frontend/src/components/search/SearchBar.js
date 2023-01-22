export default function SearchBar() {
  return (
    <div className="w-98 bg-gray-2 py-3 px-5 rounded-full">
      <input
        type="text"
        placeholder="Search"
        className="w-full h-4 bg-transparent m-0 focus:outline-none placeholder:text-gray-6 text-black block"
      />
    </div>
  );
}
