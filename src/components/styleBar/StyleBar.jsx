import React, { useEffect, useState } from "react";
import { ColourPicker } from "../colourPicker/colourPicker";
import { HexColorPicker } from "react-colorful";
import axios from "axios";

export const StyleBar = () => {
  const [textColour, setTextColour] = useState("");
  const [backgroundColour, setBackgroundColour] = useState("");
  const [primaryColour, setPrimaryColour] = useState("");
  const [secondaryColour, setSecondaryColour] = useState("");
  const [accentColour, setAccentColour] = useState("");

  //   useEffect(() => {
  //     CheckContrast(textColour, backgroundColour);
  //   }, [textColour, backgroundColour]);

  return (
    <div>
      <ColourButton
        text={"Text"}
        defaultColor="#042434"
        onChange={setTextColour}
      />
      <ColourButton
        text={"Background"}
        defaultColor="#EFF3F6"
        onChange={setBackgroundColour}
        textColor={textColour}
      />
      <ColourButton
        text={"Primary"}
        defaultColor="#2A8E9E"
        onChange={setPrimaryColour}
      />
      <ColourButton
        text={"Secondary"}
        defaultColor="#01415B"
        onChange={setSecondaryColour}
      />
      <ColourButton
        text={"Accent"}
        defaultColor="#AAD2DA"
        onChange={setAccentColour}
      />
    </div>
  );
};

const ColourButton = ({
  text,
  onChange,
  defaultColor = "#aabbcc",
  textColor = null,
}) => {
  const [showColourPicker, setShowColourPicker] = useState(false);
  const [color, setColor] = useState(defaultColor);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
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
        // Log the response data
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
        // Handle and log any errors
        console.error("Error fetching data:", error);
      });
  };

  function getPassLevel(data) {
    // Check if AAA passed, if yes, return "AAA"
    if (data.AAA === "pass") {
      return "AAA";
    }
    // If AAA didn't pass, check if AA passed, if yes, return "AA"
    if (data.AA === "pass") {
      return "AA";
    }
    // If neither passed, return "None"
    return "Failed";
  }

  return (
    <span className="flex flex-col">
      <h1 className="text-base">{text} Colour</h1>
      <input
        onClick={handleShowPicker}
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ backgroundColor: color }}
      ></input>
      {color}
      <span className={`${showColourPicker ? "inline-flex" : "hidden"}`}>
        <HexColorPicker color={color} onChange={handleColorChange} />
      </span>
    </span>
  );
};
