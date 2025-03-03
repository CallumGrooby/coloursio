import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";
import React, { useEffect, useRef, useState } from "react";
import { useBodyStyle } from "../../../contexts/BodyStyleContext";
import { useHeaderStyle } from "../../../utils/HeaderStyleContext";
import { connect } from "react-redux";
import { useColors } from "../../../contexts/ColorsContext";
import { formatStyle } from "../../../utils/formatStyles";
import { HeroSection } from "./heroSection/heroSection";
import { WhyUsSection } from "./whyUsSection/WhyUsSection";
import { HowItWorksSection } from "./howItWorksSection/HowItWorksSection";
import { PricingSection } from "./pricingSection/PricingSection";
import { FooterSection } from "./footerSection/FooterSection";
import { FullScreenButton } from "./reusableComponents/button/FullScreenButton";

import MobileIcon from "../../../assets/mobile.svg?react";
import DesktopIcon from "../../../assets/desktop.svg?react";
import { BlogSection } from "./blogSection/blogSection";
import { ContrastSection } from "./colourPalette/ContrastSection";

export const LandingPage = ({
  sectionVisiablity,
  toggleVisable: toggleVisablity,
}) => {
  const [currentView, setView] = useState(true);

  const toggleView = () => {
    setView(!currentView);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        sectionVisiablity ? "inline" : "hidden"
      } bg-gray-300 flex-1 overflow-y-scroll`}
    >
      <nav className="flex flex-row justify-end gap-2 px-2 py-2 sticky top-0 bg-gray-400 z-50">
        <button onClick={toggleView}>
          {currentView ? (
            <MobileIcon className="w-8 h-8 text-white group-hover:text-gray-800" />
          ) : (
            <DesktopIcon className="w-8 h-8 text-white group-hover:text-gray-800" />
          )}
        </button>
        <FullScreenButton toggleVisablity={toggleVisablity} />
      </nav>

      <Website currentView={currentView} />
    </div>
  );
};

const Website = (props) => {
  const { headerStyle } = useHeaderStyle();
  const { bodyStyle } = useBodyStyle();
  const { colorStyle } = useColors();

  const [modifiedHeaderStyle, setModifiedHeaderStyle] = useState({});
  const [modifiedBodyStyle, setModifiedBodyStyle] = useState({});

  useEffect(() => {
    const style = formatStyle(headerStyle);
    setModifiedHeaderStyle(style);
  }, [headerStyle]);

  useEffect(() => {
    const style = formatStyle(bodyStyle);
    setModifiedBodyStyle(style);
  }, [bodyStyle]);

  return (
    <main
      className={`flex flex-col items-center w-full ${
        props.currentView ? "max-w-[full]" : "max-w-[360px]"
      } mx-auto`}
      style={{ backgroundColor: colorStyle.background }}
    >
      {/* Hero Section */}
      <HeroSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      />

      {/* Why Us Section */}
      <WhyUsSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      />

      {/* How It Works Section */}
      <HowItWorksSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      />

      <ContrastSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      />

      {/* -------------------------------------------------------------  NEED TO ADD COLOR PALLET SECTION */}

      {/* Pricing Section */}
      <PricingSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      />

      <BlogSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      />

      {/* Testimonials Section */}
      {/* <TestimonialsSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      /> */}
      <FooterActionSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      />
      {/* Footer Section */}
      <FooterSection
        modifiedHeaderStyle={modifiedHeaderStyle}
        modifiedBodyStyle={modifiedBodyStyle}
        colorStyle={colorStyle}
        currentView={props.currentView}
      />
    </main>
  );
};

const FooterActionSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
  currentView,
}) => {
  return (
    <section
      className={`${
        currentView ? "w-full py-4" : "max w-[360px] px-2 py-4"
      } flex flex-col justify-center gap-6 relative min-h-[460px] mt-8 mb-4`}
      style={{
        backgroundColor: colorStyle.primary,
        color: colorStyle.primary,
      }}
    >
      <div
        className="mx-auto max-w-[1440px] text-black flex flex-col gap-4 items-center"
        style={{
          color: colorStyle.text,
        }}
      >
        <h1 style={{ ...modifiedHeaderStyle }}>
          Export Your Stunning Colours and Fonts{" "}
        </h1>
        <p>Your perfect color palette and font pairing is almost complete.</p>
        <button
          className="website-button"
          style={{
            ...modifiedBodyStyle,
            color: colorStyle.background,
            backgroundColor: colorStyle.accent,
          }}
        >
          Export your settings
        </button>
      </div>
    </section>
  );
};
