import React, { useCallback, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import { getTextColor } from "../../utils/ReturnTextColor";
import { ConstrastChecker } from "./ConstrastChecker";

export const ColorInput = ({
  text,
  onChange,
  defaultColor = "#aabbcc",
  textColor = null,
}) => {
  const [showColourPicker, setShowColourPicker] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const [isBackgroundLight, setIsBackgroundLight] = useState(true);

  // Handle color change and call onChange prop
  const handleColorChange = (newColor) => {
    setColor(newColor);
    if (onChange) {
      onChange(newColor); // Call onChange with the new color
    }
  };

  // Handle input field change
  const handleInputChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor); // Ensure onChange is triggered
    }
  };

  useEffect(() => {
    const temp = getTextColor(color);
    setIsBackgroundLight(temp);
  }, [color, textColor]);

  const pickerRef = useRef(null);

  const handleInputFocus = () => setShowColourPicker(true);
  const handleInputBlur = (event) => {
    // Delay hiding to allow checking if click is inside picker
    setTimeout(() => {
      if (
        pickerRef.current &&
        pickerRef.current.contains(document.activeElement)
      ) {
        return;
      }
      setShowColourPicker(false);
    }, 100);
  };

  return (
    <div className="relative inline-flex flex-col ">
      <h1 className="text-base">{text} Colour</h1>
      <span className="relative">
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={color}
          onChange={handleInputChange}
          style={{ backgroundColor: color }}
          className={`${isBackgroundLight ? "text-black" : "text-white"}
        rounded-md border border-[#C0C0C0] shadow-sm w-full px-3 py-1 bg-[#E7E7E7] text-[#969696]`}
        />
        <ConstrastChecker backgroundColor={color} textColor={textColor} />
      </span>

      {showColourPicker && (
        <div
          ref={pickerRef}
          className="absolute z-50 top-1/2 left-full transform  -translate-y-1/2 px-2"
          onBlur={handleInputBlur}
        >
          <HexColorPicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};
