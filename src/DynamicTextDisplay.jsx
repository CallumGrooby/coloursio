import React, { useState } from "react";

const DynamicTextDisplay = ({ fontFamily, messageToDisplay, sizes }) => {
  const [unit, setUnit] = useState("px"); // Tracks the current unit: px, rem, or pt
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
    if (unit === "rem") return `${convertToRem(px)}rem`;
    if (unit === "pt") return `${convertToPt(px)}pt`;
    return `${px}px`; // Default to px
  };

  return (
    <div style={{ fontFamily }} className="space-y-2 text-start">
      <div className="space-y-2 text-start">
        {sizes.map((size, index) => {
          const headingTag = `h${index + 1}`;
          const displaySize = getSizeInUnit(size.px);
          return React.createElement(
            headingTag,
            {
              key: index,
              className: `text-${size.className}`,
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
  );
};

export default DynamicTextDisplay;
