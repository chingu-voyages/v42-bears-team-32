export default function DonutChart({ percent = 0, label, className }) {
  if (0 >= percent || percent >= 100) {
    console.error("Invalid value: percent must be between 0 and 100");
    percent = 0;
  }

  const trackWidth = 12,
    radius = 50 - trackWidth,
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - percent) / 100);

  return (
    <div className={className}>
      <div className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] relative">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <span className="text-lg sm:text-2xl text-dark-3 font-bold">
            {percent}%
          </span>
          <span className="text-xs text-dark-3">{label}</span>
        </div>
        <div className="h-full w-full -rotate-90 absolute top-0 left-0">
          <svg
            className="svg-pi"
            viewBox="0 0 100 100"
            height="100%"
            width="100%"
          >
            <circle
              className="stroke-gray-1"
              cx="50"
              cy="50"
              fill="transparent"
              r={radius}
              strokeWidth={trackWidth}
            />
            <circle
              cx="50"
              cy="50"
              fill="transparent"
              r={radius}
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={trackWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
