import React from "react";

export const PricingCard = ({ title }) => {
  return (
    <div className="grow max-w-sm aspect-square flex flex-col justify-between px-6 py-4 rounded-2xl bg-gray-200 shadow border border-gray-400">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>

      <div className="flex flex-row justify-between items-center mt-4">
        <h1 className="text-gray-700">£0.00 / month</h1>
        <button className="size-8 text-center text-2xl rounded-full flex justify-center items-center bg-gray-600 text-white hover:bg-gray-700 transition">
          <span>+</span>
        </button>
      </div>
    </div>
  );
};
