import React, { useState } from "react";
import { useBodyStyle } from "../../contexts/BodyStyleContext";
import { GoogleFont } from "../../utils/GoogleFont";

export function TypographyControls({
  heading,
  onValueChange = () => {},
  style = {},
}) {
  // const { bodyStyle, setBodyStyle } = useBodyStyle();

  const updateTextStyle = (key, value) => {
    // const updatedStyles = { ...bodyStyle, [key]: value };
    if (onValueChange) {
      onValueChange(key, value); // Call external state update
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-base text-[#969696] bg-[#f2f2f2] shadow-md w-fit max-w-36 px-4 py-1 rounded-md uppercase">
        {heading}
      </h1>
      <form>
        <GoogleFont
          onValueChange={(newValue) => updateTextStyle(`font`, newValue)}
        />
        {Object.entries(style).map(([key, value]) => (
          <Input
            key={key}
            label={key}
            value={value}
            onValueChange={(newValue) => updateTextStyle(key, newValue)}
          />
        ))}
      </form>
    </div>
  );
}

export const Input = ({ label, value, onValueChange }) => {
  const [inputValue, setInputValue] = useState(value); // Maintain local state

  const handleChange = (e) => {
    setInputValue(e.target.value); // Ensure input updates immediately
    onValueChange(e.target.value);
  };
  function addSpaceToCamelCase(str) {
    return str.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  if (label == "font") return null;

  return (
    <label className="flex flex-row gap-3 items-center">
      <span className="inline text-sm text-[#626262] min-w-[80px] capitalize">
        {addSpaceToCamelCase(label)}
      </span>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="w-full min-w-36 p-2 border border-stroke rounded-lg shadow-md bg-white text-text cursor-text focus:outline-none focus:ring-2 focus:ring-[#9da5ae]"
      />
    </label>
  );
};
