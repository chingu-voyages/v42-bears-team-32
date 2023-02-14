export default function SearchBar() {
  return (
    <div className="lg:w-98  w-22 lg:mr-0 mr-24 max-w-full bg-gray-2 py-3 px-5 rounded-full text-base">
      <input
        type="search"
        placeholder="Search"
        className="w-full h-4 text-center bg-transparent m-0 focus:outline-none placeholder:text-gray-6 text-black hidden lg:block"
      />
    </div>
  );
}
