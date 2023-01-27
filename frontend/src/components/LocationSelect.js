export default function LocationSelect() {
  return (
    <div className="bg-white py-2 px-4 rounded-[0.25rem] border-2 border-primary-3">
      <select name="location" className="bg-transparent text-black">
        <option value="volvo">New York</option>
        <option value="saab">Hong Kong</option>
        <option value="mercedes">Kolkatta</option>
        <option value="audi">NetherLands</option>
      </select>
    </div>
  );
}
