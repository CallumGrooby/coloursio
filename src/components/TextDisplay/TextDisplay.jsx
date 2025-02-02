import React, { useEffect, useRef, useState } from "react";
import { useFont } from "../../ultils/FontContext";
import DynamicTextDisplay from "./DynamicTextDisplay";
import { useHeaderStyle } from "../../ultils/HeaderStyleContext";
import { useBodyStyle } from "../../ultils/BodyStyleContext";

const TextDisplay = ({ messageToDisplay }) => {
  const { fontFamily } = useFont(); // Get the current font from context

  let rootFontSize = window.getComputedStyle(document.documentElement).fontSize;
  console.log(rootFontSize);

  const sizes = [
    { className: "3xl", px: 48 },
    { className: "2xl", px: 36 },
    { className: "xl", px: 32 },
    { className: "lg", px: 24 },
    { className: "base", px: 16 },
    { className: "sm", px: 12 },
  ];

  const [cssUnit, setUnit] = useState("px");

  const { headerStyle } = useHeaderStyle();
  const { bodyStyle } = useBodyStyle();

  const [activeIndex, setActiveIndex] = useState(null); // State to store the active button index

  const handleClick = (index) => {
    setActiveIndex(index); // Set the active index when a button is clicked
  };

  return (
    <div className="flex flex-col items-start justify-center h-full">
      <div>
        <button
          className={`text-unit-button ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => {
            handleClick(0);
            setUnit("px");
          }}
        >
          PX
        </button>
        <button
          className={`text-unit-button ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => {
            handleClick(1);
            setUnit("rem");
          }}
        >
          REM
        </button>
        <button
          className={`text-unit-button ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => {
            handleClick(2);
            setUnit("pt");
          }}
        >
          PT
        </button>
      </div>

      <section className="flex flex-col gap-4">
        <DynamicTextDisplay
          headerText={"Headers"}
          fontFamily={fontFamily}
          messageToDisplay={messageToDisplay}
          sizes={sizes}
          cssUnit={cssUnit}
          changeableStyle={headerStyle}
        />

        <DynamicTextDisplay
          headerText={"Body"}
          fontFamily={fontFamily}
          messageToDisplay={messageToDisplay}
          sizes={sizes}
          cssUnit={cssUnit}
          changeableStyle={bodyStyle}
        />
      </section>
    </div>
  );
};

export default TextDisplay;
