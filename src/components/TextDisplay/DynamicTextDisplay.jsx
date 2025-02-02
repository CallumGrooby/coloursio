import React, { useEffect, useState } from "react";
import clsx from "clsx";

const DynamicTextDisplay = ({
  headerText,
  fontFamily,
  messageToDisplay,
  sizes,
  cssUnit,
  changeableStyle,
}) => {
  console.log(changeableStyle);

  const [modifiedStyle, setModifiedStyle] = useState({});
  useEffect(() => {
    // Store each property in a variable and add units where needed
    const fontWeight = changeableStyle.fontWeight || "normal";
    const lineHeight = changeableStyle.lineHeight
      ? `${changeableStyle.lineHeight}rem`
      : "1.5rem";
    const letterSpacing = changeableStyle.letterSpacing
      ? `${changeableStyle.letterSpacing}rem`
      : "0.05rem";

    // Create the modified style object
    const newStyle = {
      fontWeight,
      lineHeight,
      letterSpacing,
    };

    setModifiedStyle(newStyle); // Update the state with the modified style
  }, [changeableStyle]); // This will run every time the style prop changes

  const rootFontSize = parseFloat(
    window.getComputedStyle(document.documentElement).fontSize
  );
  // Convert px to rem (assuming 16px base font size)
  const convertToRem = (px) => (px / rootFontSize).toFixed(2);
  const dpi = window.devicePixelRatio * 96; // Get the screen's effective DPI
  // Convert px to pt using the formula: pt = px * (72 / DPI)
  const convertToPt = (px) => (px * (72 / dpi)).toFixed(2);

  // Function to get the size in the selected unit
  const getSizeInUnit = (px) => {
    if (cssUnit === "rem") return `${convertToRem(px)}rem`;
    if (cssUnit === "pt") return `${convertToPt(px)}pt`;
    return `${px}px`; // Default to px
  };

  return (
    <section className="">
      <header>
        <h1 className="text-base text-[#969696] bg-[#f2f2f2] shadow-md w-fit max-w-36 px-4 py-1 rounded-md uppercase mb-4">
          {headerText}
        </h1>
      </header>
      <div style={{ fontFamily }} className="space-y-2 text-start">
        <div className="space-y-2 text-start">
          {sizes.map((size, index) => {
            const headingTag = `h${index + 1}`;
            const displaySize = getSizeInUnit(size.px);
            return React.createElement(
              headingTag,
              {
                key: index,
                className: `text-${size.className} text-gray-700`,
                style: modifiedStyle,
              },
              <>
                {messageToDisplay}
                <span className="text-sm text-gray-500 ml-2">
                  ({displaySize})
                </span>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DynamicTextDisplay;
