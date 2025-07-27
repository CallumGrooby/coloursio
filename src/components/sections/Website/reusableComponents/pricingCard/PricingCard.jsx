import React from "react";

export const PricingCard = ({ title, isFirst = false }) => {
  return (
    <div
      className={`
      grow max-w-sm aspect-square flex flex-col justify-between px-6 py-4 
      rounded-2xl shadow-sm border border-accent
      ${isFirst ? "bg-primary text-white" : "bg-white"}
    `}
    >
      <h1
        className={`text-xl font-bold ${
          isFirst ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h1>

      <div className="flex flex-row justify-between items-center mt-4">
        <h1 className={isFirst ? "text-gray-100" : "text-gray-700"}>
          £0.00 / month
        </h1>
        <button className="size-8 text-center text-2xl rounded-full flex justify-center items-center bg-secondary text-text hover:bg-accent transition">
          <span>+</span>
        </button>
      </div>
    </div>
  );
};
