import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

export const ColourPicker = ({ onChange }) => {
  const [color, setColor] = useState("#aabbcc");

  const handleChange = (newColor) => {
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  };

  return <HexColorPicker color={color} onChange={handleChange} />;
};
