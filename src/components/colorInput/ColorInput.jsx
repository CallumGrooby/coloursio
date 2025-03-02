import React, { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import { getTextColor } from "../../utils/ReturnTextColor";
import Tick from "../../assets/tick.svg?react";
import Warning from "../../assets/warning.svg?react";
import Cross from "../../assets/cross.svg?react";

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

const ConstrastChecker = (props) => {
  const [contrastPass, setContrastPass] = useState({
    passLevel: "",
    ratio: "",
  });

  useEffect(() => {
    CheckContrast(props.textColor, props.backgroundColor);
  }, [props.textColor, props.backgroundColor]);

  useEffect(() => {
    console.log(contrastPass);
  }, [contrastPass]);

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

  return <>{getContrastIndicator(contrastPass)}</>;
};

const getContrastIndicator = (contrastPass) => {
  switch (contrastPass.passLevel) {
    case "AAA":
      return (
        <ContrastToolTip
          contrastPass={contrastPass}
          backgroundColor={"bg-green-600"}
        >
          <Tick />
        </ContrastToolTip>
      );
    case "AA":
      return (
        <ContrastToolTip
          contrastPass={contrastPass}
          backgroundColor={"bg-yellow-500"}
        >
          <Warning />
        </ContrastToolTip>
      );
    case "Failed":
      return (
        <ContrastToolTip
          contrastPass={contrastPass}
          backgroundColor={"bg-red-600"}
        >
          <Cross />
        </ContrastToolTip>
      );
    default:
      return null;
  }
};

const ContrastToolTip = (props) => {
  return (
    <div className="group absolute z-50 top-1/2 left-full transform -translate-x-full p-2 -translate-y-1/2">
      <div className="flex items-center justify-center size-6 border-2 border-gray-500 rounded-full p-1">
        {props.children}
      </div>
      {/* group-hover:inline-block */}
      <div
        className={`${props.backgroundColor} absolute z-50 top-1/2 left-full transform  -translate-y-1/2 ml-2 rounded-md hidden group-hover:inline-block `}
      >
        <span className="absolute top-1/2 right-full transform rounded-sm  -translate-y-1/2 translate-x-1/2 -z-10 rotate-45 size-3 bg-inherit inline-flex"></span>

        <div className="text-white w-full h-full px-4 py-2 flex flex-col gap-1 justify-center items-center ">
          <h1 className="text-base whitespace-nowrap">
            {props.contrastPass.passLevel} - {props.contrastPass.ratio}
          </h1>
          <button className="text-sm">Learn More</button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="text-red-500 absolute top-1/2 left-full transform -translate-x-full p-2 -translate-y-1/2">
          <div className="group text-2xl border-white border rounded-full size-8 flex justify-center items-center relative">
            <h1>✗</h1>
            <div className="hidden group-hover:inline">
              <h1>
                {contrastPass.passLevel} - {contrastPass.ratio}
              </h1>
            </div>
          </div>
        </div> */
}
