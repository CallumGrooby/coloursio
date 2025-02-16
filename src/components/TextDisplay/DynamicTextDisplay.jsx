import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { formatStyle } from "../../ultils/formatStyles";

const DynamicTextDisplay = ({
  headerText,
  style,
  messageToDisplay,
  sizes,
  cssUnit,
}) => {
  const [modifiedStyle, setModifiedStyle] = useState({});
  useEffect(() => {
    const newStyle = formatStyle(style);
    setModifiedStyle(newStyle);
  }, [style]); // This will run every time the style prop changes

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
      <div
        style={{ fontFamily: modifiedStyle.fontFamily }}
        className="space-y-2 text-start"
      >
        <div className="space-y-2 text-start">
          {sizes.map((size, index) => {
            const headingTag = `h${index + 1}`;
            const displaySize = getSizeInUnit(size.px);

            return React.createElement(
              headingTag,
              {
                key: index,
                className: `text-${size.className} text-gray-700`,
                style: {
                  fontWeight: modifiedStyle.fontWeight,
                  lineHeight: modifiedStyle.lineHeight,
                  letterSpacing: modifiedStyle.letterSpacing,
                },
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
