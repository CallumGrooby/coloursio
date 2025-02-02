import React, { useState } from "react";
import TextDisplay from "../TextDisplay/TextDisplay";

export const Typography = ({ sectionVisibale, toggleVisable }) => {
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

  return (
    <div
      className={`transition-all duration-300 border-2 border-l-0 border-[#6c6c6c] box-border ${
        sectionVisibale ? "inline" : "hidden"
      } bg-gray-300 flex-1`}
    >
      <button
        onClick={toggleVisable}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Full Screen Section 1
      </button>

      <input
        placeholder="Type something here..."
        value={inputtedText} // ...force the input's value to match the state variable...
        onChange={handleInput} // ... and update the state variable on any edits!
      />

      <TextDisplay messageToDisplay={messageToDisplay} />
    </div>
  );
};
