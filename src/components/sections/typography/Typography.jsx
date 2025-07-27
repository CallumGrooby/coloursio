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

// const SectionControls = (props) => {
//   return (
//     <nav className="flex flex-row justify-between px-2 py-2 sticky top-0 bg-gray-400 w-full">
//       <label className="flex flex-row gap-3 items-center">
//         <span className="inline text-sm text-[#626262] min-w-[80px] w-fit capitalize">
//           Enter new text:
//         </span>
//         <input
//           placeholder="Type something here..."
//           value={props.textInput} // ...force the input's value to match the state variable...
//           onChange={props.handleTextInput} // ... and update the state variable on any edits!
//           className="rounded-md border border-[#C0C0C0] shadow-xs w-auto px-3 py-1 bg-[#E7E7E7] text-[#969696]"
//         />
//       </label>
//     </nav>
//   );
// };
