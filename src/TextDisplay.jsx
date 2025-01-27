import React, { useEffect, useRef, useState } from "react";
import { useFont } from "./ultils/FontContext";
import DynamicTextDisplay from "./DynamicTextDisplay";

const TextDisplay = () => {
  const { fontFamily } = useFont(); // Get the current font from context
  const defaultMessage = "The quick brown fox jumps over the lazy dog";
  const [inputtedText, setInputtedText] = useState("");
  const [messageToDisplay, setText] = useState(defaultMessage);

  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.value) {
      setInputtedText(e.target.value);
      setText(e.target.value);
      return;
    }

    setText(defaultMessage);
    setInputtedText("");
  };

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

  return (
    <div>
      <input
        placeholder="Type something here..."
        value={inputtedText} // ...force the input's value to match the state variable...
        onChange={handleInput} // ... and update the state variable on any edits!
      />

      <div>
        <button
          onClick={() => {
            setUnit("px");
          }}
        >
          PX
        </button>
        <button
          onClick={() => {
            setUnit("rem");
          }}
        >
          REM
        </button>
        <button
          onClick={() => {
            setUnit("pt");
          }}
        >
          PT
        </button>
      </div>

      <DynamicTextDisplay
        fontFamily={fontFamily}
        messageToDisplay={messageToDisplay}
        sizes={sizes}
        cssUnit={cssUnit}
      />
    </div>
  );
};

export default TextDisplay;
