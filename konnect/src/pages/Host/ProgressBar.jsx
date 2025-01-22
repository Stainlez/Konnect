import React from "react";

const CircularProgressBar = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          className="transform rotate-90"
          width="200"
          height="200"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#00C1A3"
            strokeWidth="17"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-semibold text-[#00C1A3]">
            {percentage}%
          </span>
        </div>
      </div>
      <div className="flex items-center mt-4 w-full text-sm">
        {/* <div className="flex items-center">
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
          <span>Pending</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          <span>In Progress</span>
        </div> */}
        <div className="flex mx-auto items-center">
          <span className="w-2 h-2 bg-[#00C1A3] rounded-full mr-2"></span>
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
