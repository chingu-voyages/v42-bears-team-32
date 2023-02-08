import DonutChart from './DonutChart';
// import "react-circular-progressbar/dist/styles.css";

export default function CaloriePercent({
  carbs = 40,
  protein = 49,
  fats = 10,
}) {
  return (
    <div className="flex items-center gap-5 sm:gap-24">
      <DonutChart className="text-red-1" percent={carbs} label="Carbs" />
      <DonutChart className="text-blue-1" percent={protein} label="Protein" />
      <DonutChart className="text-yellow-2" percent={fats} label="Fats" />
    </div>
  );
}
