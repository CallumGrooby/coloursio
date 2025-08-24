import React, { useEffect, useState } from "react";
import { CheckContrast } from "../utils/ContrastApi";
import { CheckIcon, SwapColors } from "../assets/Icons";

const isValidHex = (val) => /^#?[0-9A-Fa-f]{6}$/.test(val);
const normalizeHex = (val) => {
  const v = val.startsWith("#") ? val : `#${val}`;
  return v.toLowerCase();
};

export const ColorContrast = () => {
  const [selectedColors, setColors] = useState({
    text: "#006aff",
    background: "#b23131",
    passLevel: "AAA",
    ratio: "1/1042",
  });

  const handleColorChange = (key, inputtedColor) => {
    // Changes the color based on the key (text or background)
    const colors = { ...selectedColors, [key]: inputtedColor };
    GetWACGLevel(colors.text, colors.background);
  };

  const GetWACGLevel = async (text, background) => {
    //Fetches the pass level and ratio for the text and background color
    const data = await CheckContrast(text, background);

    setColors({
      text: text,
      background: background,
      ...data,
    });
  };

  const swapColors = () => {
    // Changes the text and background colors
    const { text, background } = selectedColors;
    GetWACGLevel(background, text);
  };

  return (
    <>
      <div className="flex flex-col gap-2 items-center mt-16 mb-8">
        <h1 className="text-4xl font-bold">Color Contrast Checker</h1>
        <p className="text-neutral-500">
          Calculate the contrast ratio of between text and colors.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row container mx-auto">
        <div className="flex flex-col gap-4 border-neutral-400 border-[1px] lg:border-r-0 pr-4 rounded-lg lg:rounded-r-none px-4 py-2">
          <div className="flex flex-col gap-2 lg:flex-row lg:h-fit items-center container mx-auto">
            <InputSection
              colorKey="text"
              value={selectedColors.text}
              changeColor={handleColorChange}
              label={"Text Input"}
            />
            <button
              className="text-neutral-800 hover:text-neutral-400 cursor-pointer p-2 mx-auto lg:hidden"
              onClick={swapColors}
            >
              <SwapColors className={"size-12"} />
            </button>
            <InputSection
              colorKey="background"
              value={selectedColors.background}
              changeColor={handleColorChange}
              label={"Background Input"}
            />

            <button
              className="text-neutral-800 hover:text-neutral-400 cursor-pointer p-2 hidden lg:flex"
              onClick={swapColors}
            >
              <SwapColors className={"size-12"} />
            </button>
          </div>

          <div className="bg-[#91FE91] min-h-[154px] flex flex-col items-center lg:items-start justify-between gap-8  px-8 py-4 rounded-sm ">
            <h2 className="text-4xl">12.27</h2>

            <div className="flex flex-row flex-wrap gap-8 max-w-[264px] lg:max-w-none justify-center lg:justify-start ">
              <div>
                <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm">
                  <p>Pass</p>
                  <CheckIcon className={"size-6"} />
                </span>
                <h3>AA Large</h3>
              </div>
              <div>
                <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm">
                  <p>Pass</p>
                  <CheckIcon className={"size-6"} />
                </span>
                <h3>AA Large</h3>
              </div>
              <div>
                <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm">
                  <p>Pass</p>
                  <CheckIcon className={"size-6"} />
                </span>
                <h3>AA Large</h3>
              </div>

              <div>
                <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm">
                  <p>Pass</p>
                  <CheckIcon className={"size-6"} />
                </span>
                <h3>AA Large</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          className="transition-colors duration-500 ease-in-out  px-8 py-4 rounded-lg lg:rounded-l-none"
          style={{
            color: selectedColors.text,
            backgroundColor: selectedColors.background,
          }}
        >
          <h2 className="text-2xl">Lorem Ipsum</h2>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            rhoncus ipsum, eget imperdiet mauris. Morbi vel vestibulum mi, eu
            varius sem. Vestibulum ullamcorper nulla a cursus hendrerit. Duis
            congue rhoncus risus quis viverra. Fusce justo purus, vulputate
            egestas eros vel, pretium imperdiet magna. Curabitur nec elementum
            odio. Nam ac.
          </p>
        </div>
      </div>
    </>
  );
};

const InputSection = ({ colorKey, value, changeColor, label }) => {
  const [localColor, setLocalColor] = useState(value ?? "#ff0000");
  const [isFocused, setIsFocused] = useState(false);

  // keep local UI in sync with parent updates (like swaps)
  useEffect(() => {
    if (typeof value === "string" && value !== localColor) {
      setLocalColor(value);
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputChange = (e) => {
    const normalized = normalizeHex(e.target.value);
    setLocalColor(normalized);

    if (isValidHex(normalized)) {
      // note the order: (key, color)
      changeColor(colorKey, normalized);
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const showError =
    localColor.length === 7 && !isValidHex(localColor) && localColor.length > 0;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-gray-700 mb-1">{label}</label>
      )}
      <div
        className={`
          relative flex items-center h-9 rounded-lg border transition-all duration-200 
          ${
            isFocused
              ? "border-blue-500 ring-0 ring-blue-500 ring-opacity-20 shadow-sm"
              : showError
              ? "border-red-500"
              : "border-neutral-300 hover:border-neutral-400"
          }
        `}
      >
        <input
          type="text"
          value={localColor}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="#AABBCC"
          inputMode="text"
          maxLength={7}
          aria-invalid={showError || undefined}
          className="flex-1 px-3 py-2 text-sm font-mono uppercase tracking-wide bg-transparent border-none outline-none placeholder:text-neutral-400"
        />
        <div
          className={`
            size-6 mr-2 rounded border transition-colors duration-75
          `}
          style={{ backgroundColor: localColor }}
        />
      </div>
      {showError && (
        <p className="mt-1 text-xs text-red-600">
          Enter a 6-digit hex (e.g. #1A2B3C)
        </p>
      )}
    </div>
  );
};
