import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import axios from "axios";

export const ColorInput = ({
  text,
  onChange,
  defaultColor = "#aabbcc",
  textColor = null,
}) => {
  const [showColourPicker, setShowColourPicker] = useState(false);
  const [color, setColor] = useState(defaultColor);
  const [ContrastPass, setContrastPass] = useState();
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
    getTextColor(color);
  }, [color]);

  useEffect(() => {
    CheckContrast(textColor, color);
  }, [textColor, color]);

  const handleShowPicker = () => {
    setShowColourPicker(!showColourPicker);
  };

  const CheckContrast = (textColor, colourToCheck) => {
    if (!textColor) return;

    const normalizedTextColor = textColor.slice(1);
    const normalizedSecondaryColor = colourToCheck.slice(1);

    const url = `https://webaim.org/resources/contrastchecker/?fcolor=${normalizedTextColor}&bcolor=${normalizedSecondaryColor}&api`;

    // Perform the GET request
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        const passLevel = getPassLevel(data);
        const ratio = data.ratio;

        const newObj = {
          passLevel: passLevel,
          ratio: ratio,
        };
        setContrastPass(newObj);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  function getPassLevel(data) {
    if (data.AAA === "pass") return "AAA";
    if (data.AA === "pass") return "AA";
    return "Failed";
  }

  const getTextColor = (bgColor) => {
    if (!bgColor.startsWith("#") || bgColor.length !== 7) return "text-black";

    const r = parseInt(bgColor.slice(1, 3), 16);
    const g = parseInt(bgColor.slice(3, 5), 16);
    const b = parseInt(bgColor.slice(5, 7), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    const textColor = luminance > 0.5 ? true : false;
    setIsBackgroundLight(textColor);
  };

  return (
    <span className="input-field relative">
      <h1 className="text-base">{text} Colour</h1>
      <input
        onClick={handleShowPicker}
        value={color}
        onChange={handleInputChange} // Use handleInputChange to update state and call onChange
        style={{ backgroundColor: color }}
        className={`${isBackgroundLight ? "text-black" : "text-white"}`}
      />
      <span
        className={`${
          showColourPicker ? "inline-flex" : "hidden"
        } absolute z-50`}
      >
        <HexColorPicker color={color} onChange={handleColorChange} />
      </span>
    </span>
  );
};
