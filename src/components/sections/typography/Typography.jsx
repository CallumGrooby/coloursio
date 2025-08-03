import React, { useEffect, useState } from "react";
import TextDisplay from "../../TextDisplay/TextDisplay";
import { FullScreenButton } from "../Website/reusableComponents/button/FullScreenButton";
import { useOutletContext } from "react-router-dom";
export const Typography = () => {
  const defaultMessage = "The quick brown fox jumps over the lazy dog";
  const [messageToDisplay, setText] = useState(defaultMessage);

  // Access shared state from HomePage
  const { textInput } = useOutletContext();

  // Update the displayed message whenever textInput changes
  useEffect(() => {
    if (textInput) {
      setText(textInput);
    } else {
      setText(defaultMessage);
    }
  }, [textInput]);

  return (
    <div
      className={`relative transition-all duration-300 border-r-2 border-l-0 border-r-[#6c6c6c] box-border h-full inline-flex flex-col items-center bg-gray-300 flex-1`}
    >
      {/* Display the message */}
      <TextDisplay messageToDisplay={messageToDisplay} />
    </div>
  );
};
