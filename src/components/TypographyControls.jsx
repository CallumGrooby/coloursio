import React from "react";
import { useBodyStyle } from "../ultils/BodyStyleContext";

export function TypographyControls({ heading, onValueChange }) {
  const { bodyStyle, setBodyStyle } = useBodyStyle();

  // // Function to update styles
  // const updateTextStyle = (key, value) => {
  //   const updatedStyles = { ...bodyStyle, [key]: value };
  //   setBodyStyle(updatedStyles); // Update context state
  //   if (onValueChange) {
  //     onValueChange(updatedStyles); // Call external state update
  //   }
  // };

  const updateTextStyle = (key, value) => {
    // const updatedStyles = { ...bodyStyle, [key]: value };
    if (onValueChange) {
      onValueChange(key, value); // Call external state update
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-2">{heading}</h1>

      <form>
        {Object.entries(bodyStyle).map(([key, value]) => (
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

const Input = ({ label, value, onValueChange }) => {
  return (
    <label className="flex flex-row gap-3 items-center">
      <span className="inline text-sm text-[#626262] min-w-[72px] max-w-24">
        {label}
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="rounded-md border border-[#C0C0C0] shadow-sm w-full px-3 py-1 bg-[#E7E7E7]"
      />
    </label>
  );
};
