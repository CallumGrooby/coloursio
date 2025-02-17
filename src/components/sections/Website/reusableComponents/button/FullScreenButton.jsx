import { useState } from "react";
import FullScreenIcon from "../../../../../assets/fullscreen.svg?react";
export const FullScreenButton = (props) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
    props.toggleVisablity();
  };

  return (
    <button
      onClick={handleClick}
      className={`group px-1 py-1  text-white rounded hover:bg-[#c1c1c1] shadow-2xl transition-all ease-in duration-300
    ${buttonClicked ? "bg-[#a0a0a0]" : "bg-gray-400"}
    `}
    >
      <FullScreenIcon className="w-8 h-8 text-white group-hover:text-gray-800" />
    </button>
  );
};
