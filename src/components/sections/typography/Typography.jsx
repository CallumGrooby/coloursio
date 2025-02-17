import React, { useEffect, useState } from "react";
import TextDisplay from "../../TextDisplay/TextDisplay";
import { FullScreenButton } from "../Website/reusableComponents/button/FullScreenButton";
export const Typography = ({ sectionVisiablity, toggleVisable }) => {
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
      className={` relative transition-all duration-300 border-r-2 border-l-0 border-r-[#6c6c6c] box-border h-full ${
        sectionVisiablity ? "inline-flex flex-col" : "hidden"
      } bg-gray-300 flex-1`}
    >
      <SectionControls
        toggleVisablity={toggleVisable}
        visiablity={sectionVisiablity}
        textInput={inputtedText}
        handleTextInput={handleInput}
      />

      <TextDisplay messageToDisplay={messageToDisplay} />
    </div>
  );
};

const SectionControls = (props) => {
  useEffect(() => {
    console.log(props.visiablity);
  }, [props.visiablity]);

  return (
    <nav className="flex flex-row justify-between px-2 py-2 sticky top-0 bg-gray-400">
      <label className="flex flex-row gap-3 items-center">
        <span className="inline text-sm text-[#626262] min-w-[80px] w-fit capitalize">
          Enter new text:
        </span>
        <input
          placeholder="Type something here..."
          value={props.textInput} // ...force the input's value to match the state variable...
          onChange={props.handleTextInput} // ... and update the state variable on any edits!
          className="rounded-md border border-[#C0C0C0] shadow-sm w-auto px-3 py-1 bg-[#E7E7E7] text-[#969696]"
        />
      </label>
      <FullScreenButton toggleVisablity={props.toggleVisablity} />
    </nav>
  );
};

// export const FullScreenButton = (props) => {
//   const [buttonClicked, setButtonClicked] = useState(false);

//   const handleClick = () => {
//     setButtonClicked(!buttonClicked);
//     props.toggleVisablity();
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`group px-1 py-1  text-white rounded hover:bg-[#c1c1c1] shadow-2xl transition-all ease-in duration-300
//     ${buttonClicked ? "bg-[#a0a0a0]" : "bg-gray-400"}
//     `}
//     >
//       <FullScreenIcon className="w-8 h-8 text-white group-hover:text-gray-800" />
//     </button>
//   );
// };
