import React, { useState } from "react";
import clsx from "clsx";

const DynamicTextDisplay = ({
  fontFamily,
  messageToDisplay,
  sizes,
  cssUnit,
}) => {
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
    <div style={{ fontFamily }} className="space-y-2 text-start">
      <div className="space-y-2 text-start">
        {sizes.map((size, index) => {
          const headingTag = `h${index + 1}`;
          const displaySize = getSizeInUnit(size.px);
          console.log("text-", size.className);
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
