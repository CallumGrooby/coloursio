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
    CheckContrast(textColor, color);
  }, [textColor, color]);

  const handleShowPicker = () => {
    setShowColourPicker(!showColourPicker);
  };

  const [ContrastPass, setContrastPass] = useState();

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
        console.log(newObj);
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

  return (
    <span className="flex flex-col">
      <h1 className="text-base">{text} Colour</h1>
      <input
        onClick={handleShowPicker}
        value={color}
        onChange={handleInputChange} // Use handleInputChange to update state and call onChange
        style={{ backgroundColor: color }}
      />
      {color}
      <span className={`${showColourPicker ? "inline-flex" : "hidden"}`}>
        <HexColorPicker color={color} onChange={handleColorChange} />
      </span>
    </span>
  );
};
