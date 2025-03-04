import React, { useState } from "react";
import { BodyStyleProvider } from "../../contexts/BodyStyleContext";
import { HeaderStyleProvider } from "../../utils/HeaderStyleContext";
import { ColorsProvider } from "../../contexts/ColorsContext";
import { StyleBar } from "../sections/styleBar/StyleBar";
import { Typography } from "../sections/typography/Typography";
import { LandingPage } from "../sections/Website/LandingPage";
import { Link, Outlet, useLocation } from "react-router-dom";

import MobileIcon from "../../assets/mobile.svg?react";
import DesktopIcon from "../../assets/desktop.svg?react";

export const HomePage = () => {
  const [textInput, setTextInput] = useState("");
  const [currentView, setCurrentView] = useState(false);
  const location = useLocation();

  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const toggleView = () => {
    setCurrentView((prev) => !prev);
  };

  const renderControls = () => {
    if (location.pathname.includes("typography")) {
      return (
        <InputField handleTextInput={handleTextInput} textInput={textInput} />
      );
    }
    if (location.pathname.includes("landingpage")) {
      return (
        <button
          onClick={toggleView}
          className="bg-green-500 text-white px-4 py-2"
        >
          {currentView ? "Mobile View" : "Desktop View"}
        </button>
      );
    }
    return null;
  };

  return (
    <section className="flex flex-row h-screen">
      <BodyStyleProvider>
        <HeaderStyleProvider>
          <ColorsProvider>
            <StyleBar />

            <section className="flex flex-col w-full h-full">
              <nav className="flex flex-row gap-2">
                <Link to="typography" className="hover:underline">
                  Typography
                </Link>
                <Link to="landingpage" className="hover:underline">
                  Landing Page
                </Link>
                {renderControls()}
              </nav>

              <Outlet context={{ textInput, handleTextInput, currentView }} />
            </section>
          </ColorsProvider>
        </HeaderStyleProvider>
      </BodyStyleProvider>
    </section>
  );
};

const InputField = (props) => {
  const { textInput, handleTextInput } = props;

  return (
    <nav className="flex flex-row justify-between px-2 py-2 sticky top-0 bg-gray-400 w-full">
      <label className="flex flex-row gap-3 items-center">
        <span className="inline text-sm text-[#626262] min-w-[80px] w-fit capitalize">
          Enter new text:
        </span>
        <input
          placeholder="Type something here..."
          value={textInput} // ...force the input's value to match the state variable...
          onChange={handleTextInput} // ... and update the state variable on any edits!
          className="rounded-md border border-[#C0C0C0] shadow-sm w-auto px-3 py-1 bg-[#E7E7E7] text-[#969696]"
        />
      </label>
    </nav>
  );
};

const MobileAndDesktopButtons = () => {
  return (
    <>
      {" "}
      <button onClick={toggleView}>
        {currentView ? (
          <MobileIcon className="w-8 h-8 text-white group-hover:text-gray-800" />
        ) : (
          <DesktopIcon className="w-8 h-8 text-white group-hover:text-gray-800" />
        )}
      </button>
    </>
  );
};
