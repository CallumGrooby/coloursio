import React from "react";

export const LandingPage = ({ sectionVisibale, toggleVisable }) => {
  return (
    <div
      className={`transition-all duration-300 ${
        sectionVisibale ? "inline" : "hidden"
      } bg-gray-300 flex-1`}
    >
      <button
        onClick={toggleVisable}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Full Screen Section 2
      </button>
      <h1>Hello World</h1>
    </div>
  );
};
