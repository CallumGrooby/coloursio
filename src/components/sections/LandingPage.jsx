import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";
import React, { useEffect, useRef, useState } from "react";
import { useBodyStyle } from "../../ultils/BodyStyleContext";
import { useHeaderStyle } from "../../ultils/HeaderStyleContext";
import { connect } from "react-redux";
import { useColors } from "../../ultils/ColorsContext";
import { formatStyle } from "../../ultils/formatStyles";

export const LandingPage = ({ sectionVisibale, toggleVisable }) => {
  const [currentView, setView] = useState(true);

  const toggleView = () => {
    setView(!currentView);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        sectionVisibale ? "inline" : "hidden"
      } bg-gray-300 flex-1 overflow-y-scroll`}
    >
      <div>
        <button
          onClick={toggleVisable}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Full Screen Section 2
        </button>
        <button onClick={toggleView}>
          {currentView ? "Mobile" : "Desktop"}
        </button>
      </div>

      <Website currentView={currentView} />
    </div>
  );
};

const Website = ({ currentView }) => {
  // True == Desktop
  // False == Mobile
  useEffect(() => {
    console.log(currentView);
  }, [currentView]);

  const { headerStyle } = useHeaderStyle();
  const { bodyStyle } = useBodyStyle();
  const { colorStyle } = useColors();

  const [modifiedHeaderStyle, setModifiedHeaderStyle] = useState({});
  const [modifiedBodyStyle, setModifiedBodyStyle] = useState({});

  useEffect(() => {
    console.log(colorStyle, modifiedBodyStyle);
  }, [colorStyle, modifiedBodyStyle]);

  const whyUsContent = [
    {
      icon: "",
      title: "Effortless Design",
      text: "Create stunning designs without needing expertise in colour or typography.",
    },
    {
      icon: "",
      title: "Real-Time Customization",
      text: "See changes instantly and refine your design with ease.",
    },
    {
      icon: "",
      title: "Crafted for Every Creative",
      text: "Perfect for designers, marketers, and hobbyists—flexible and intuitive tools for all.",
    },
  ];

  const howItWorksContent = [
    {
      title: "Pick a Font",
      text: "Find a font that matches your project's vibe. Browse a variety of styles and set the perfect tone.",
    },
    {
      title: "Choose Your Colours",
      text: "Experiment with text, background, and accent colours. Mix and match for contrast or harmony.",
    },
    {
      title: "Refine",
      text: "Fine-tune fonts and colours for a polished look. Adjust sizes, saturation, and placement.",
    },
    {
      title: "Visualize",
      text: "See your design come to life in real time. Instantly preview and tweak as needed.",
    },
  ];
  const pricingPlans = ["Basic", "Premium", "Pro"];

  const testimonials = [
    {
      user: "Sarah L",
      text: "Colours.io made designing so much easier! I used to struggle with font and colour choices, but now I can create polished, professional designs in minutes. A game-changer for my projects!",
      stars: 5,
    },
    {
      user: "James R",
      text: "As a marketer, I need branding to be spot on. Colours.io helped me quickly find the perfect colour and font pairings, making my campaigns look sleek and cohesive. Highly recommend!",
      stars: 4,
    },
  ];

  useEffect(() => {
    const style = formatStyle(headerStyle);
    setModifiedHeaderStyle(style);
  }, [headerStyle]);

  useEffect(() => {
    const style = formatStyle(bodyStyle);
    setModifiedBodyStyle(style);
  }, [bodyStyle]);

  return (
    <section
      style={{ background: colorStyle.background }}
      className={`mx-auto flex flex-col gap-24 items-center min-h-screen px-4 
  ${currentView ? "max-w-[1920px] w-full" : "max-w-[376px] w-full"}   `}
    >
      {/*------------------------------------ Hero Section ------------------------------------*/}
      <section
        className={`flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[340px] pt-20 lg:pt-60 box-content max-w-[972px] w-full 
    ${currentView ? "h-[340px] pt-60 lg:gap-28" : "gap-8 lg:gap-28"}`}
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-2 w-full lg:w-[486px] text-center lg:text-left">
          <h1
            style={{ ...modifiedHeaderStyle, color: colorStyle.text }}
            className="text-2xl md:text-3xl xl:text-4xl"
          >
            Visualize Stunning <br />
            <span className="font-bold" style={{ color: colorStyle.primary }}>
              Colours
            </span>{" "}
            and
            <span
              className="font-bold italic"
              style={{ color: colorStyle.accent }}
            >
              {" "}
              Fonts{" "}
            </span>
            <br />
            Perfectly in Moments
          </h1>
          <p
            style={{ ...modifiedBodyStyle, color: colorStyle.text }}
            className="text-sm md:text-base"
          >
            Your perfect color palette and font pairing is just a few clicks
            away.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-2 justify-center lg:justify-start">
            <button
              style={modifiedBodyStyle}
              className="bg-[#2A8E9E] py-3 px-4 rounded-xl text-white"
            >
              How It Works
            </button>
            <button
              style={modifiedBodyStyle}
              className="bg-[#2A8E9E] py-3 px-4 rounded-xl text-white"
            >
              Get Started
            </button>
          </div>
        </div>
        {/* Right Content */}
        <div
          className="relative w-[280px] sm:w-[320px] h-[320px] sm:h-[356px] bg-green-300 rounded-2xl"
          style={{ background: colorStyle.primary }}
        >
          <div className="absolute top-16 left-1/3 transform translate-x-1/2 -translate-y-1/2 w-[176px] h-[228px] flex flex-col gap-0">
            <div
              className="bg-[#2A8E9E] grow rounded-t-2xl "
              style={{ background: colorStyle.secondary }}
            ></div>
            <div
              className="bg-[#01415B] basis-1/6 rounded-b-2xl"
              style={{ background: colorStyle.accent }}
            ></div>
          </div>
        </div>
      </section>
      {/*------------------------------------ Why Us ------------------------------------*/}
      <section
        className="max-w-[972px] w-full bg-gray-400 rounded-2xl px-16 py-16 shadow-2xl"
        style={{ background: colorStyle.secondary }}
      >
        <h2
          className="uppercase"
          style={{ ...modifiedBodyStyle, color: colorStyle.primary }}
        >
          Why Us
        </h2>
        <h1
          style={{ ...modifiedHeaderStyle, color: colorStyle.text }}
          className="max-w-96 w-full"
        >
          Crafting Perfection <br></br> One Click at a Time
        </h1>

        <div className=" w-full flex flex-row gap-8 mt-8">
          {whyUsContent.map((content, index) => {
            return (
              <div
                key={index}
                className="p-2"
                style={{ ...modifiedBodyStyle, color: colorStyle.text }}
              >
                <span className="inline-flex bg-gray-600 size-10"></span>
                <h1
                  className="!font-bold"
                  style={{ color: colorStyle.primary }}
                >
                  {content.title}
                </h1>
                <p>{content.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/*------------------------------------ How It Works ------------------------------------*/}
      <section
        className="w-full bg-gray-600"
        style={{ background: colorStyle.secondary }}
      >
        <div className=" flex flex-col gap-4 justify-center items-center h-full  min-h-[738px] max-w-[972px] w-full  mx-auto">
          <h1 style={{ ...modifiedHeaderStyle, color: colorStyle.text }}>
            How Does It Work?
          </h1>

          <div className="flex flex-wrap -mx-2 px-4">
            {howItWorksContent.map((content, index) => {
              return (
                <div key={index} className="w-1/2 px-2 pb-4">
                  <div
                    className="border border-gray-300 p-4 min-h-[280px] rounded-2xl"
                    style={{
                      color: colorStyle.text,
                      background: colorStyle.background,
                    }}
                  >
                    <h1
                      style={{
                        ...modifiedHeaderStyle,
                        color: colorStyle.primary,
                      }}
                      className="mb-2"
                    >
                      {content.title}
                    </h1>
                    <p style={{ ...modifiedBodyStyle, color: colorStyle.text }}>
                      {content.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*------------------------------------ Pricing ------------------------------------ */}
      <section className="max-w-[972px] w-full mx-auto">
        <div
          className="flex flex-col gap-3 justify-center items-center max-w-[972px] w-full"
          style={{ color: colorStyle.text }}
        >
          <h2 style={modifiedBodyStyle}>Our Mission</h2>
          <h1 style={modifiedHeaderStyle} className="text-center">
            Helping you visualise the perfect
            <br /> colours for your website.
          </h1>
          <p style={modifiedBodyStyle} className="max-w-[480px] text-center">
            Thousands of designers, marketers, and hobbyists have transformed
            their designs with perfect colour and font combinations.
          </p>

          <div className="flex flex-row gap-16">
            <div className="flex flex-col gap-1 items-center">
              <h1 style={modifiedHeaderStyle} className="italic">
                95%
              </h1>
              <h2 style={modifiedBodyStyle} className="text-center">
                Improved design consistency
              </h2>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <h1 style={modifiedHeaderStyle} className="italic">
                50k+
              </h1>
              <h2 style={modifiedBodyStyle} className="text-center">
                Custom palettes created
              </h2>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <h1 style={modifiedHeaderStyle} className="italic">
                120+
              </h1>
              <h2 style={modifiedBodyStyle} className="text-center">
                Font styles available
              </h2>
            </div>
          </div>

          <section className="flex flex-row flex-wrap gap-2 w-full box-content">
            {pricingPlans.map((content, index) => {
              return (
                <div
                  key={index}
                  className="grow aspect-square flex flex-col justify-between px-6 py-4 rounded-2xl box-content max-w-[calc(100%/3)]"
                  style={{
                    ...modifiedBodyStyle,
                    background: colorStyle.primary,
                  }}
                >
                  <h1 style={modifiedHeaderStyle} className="!font-bold">
                    {content}
                  </h1>

                  <div className="flex flex-row justify-between ">
                    <h1>£0.00 / month</h1>
                    <h1 className="size-8 text-center text-2xl">+</h1>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </section>
      {/* ------------------------------------ Testimonials ------------------------------------ */}
      <section style={{ color: colorStyle.text }}>
        <div className="flex flex-row gap-4 max-w-[972px] w-full mx-auto">
          {testimonials.map((content, index) => {
            return (
              <div
                key={index}
                className="grow min-h-[185px] flex flex-col justify-between gap-2 rounded-2xl px-4 py-3"
                style={{ ...modifiedBodyStyle, background: colorStyle.primary }}
              >
                <p>{content.text}</p>

                <div
                  className="flex flex-row justify-between"
                  style={{ color: colorStyle.accent }}
                >
                  <h1>{content.user}</h1>
                  <div className="flex flex-row gap-1">
                    {Array.from({ length: content.stars }, (_, index) => (
                      <h1 key={index}>★</h1>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer
        style={{ color: colorStyle.text }}
        className="flex flex-col gap-4 max-w-[972px] w-full mx-auto rounded-2xl"
      >
        <div
          className="w-full flex flex-row justify-between items-center gap-16 rounded-2xl px-8 py-4"
          style={{
            ...modifiedBodyStyle,
            color: colorStyle.text,
            backgroundColor: colorStyle.secondary,
          }}
        >
          <h1 style={modifiedHeaderStyle} className="w-full">
            Designed to make creativity effortless.
          </h1>
          <button
            style={{
              ...modifiedBodyStyle,
              color: colorStyle.text,
              backgroundColor: colorStyle.primary,
            }}
            className="py-3 px-4 rounded-xl text-white w-full max-w-48"
          >
            How It Works
          </button>
        </div>
        <div className="w-full flex flex-row gap-4">
          <div
            style={{
              ...modifiedBodyStyle,
              color: colorStyle.text,
              backgroundColor: colorStyle.primary,
            }}
            className="basis-4/12 h-full min-h-80 flex justify-center items-center rounded-2xl"
          >
            <h1>COLOURS.IO</h1>
          </div>
          <div
            className="grow h-full min-h-80 flex flex-row justify-between px-8 py-4 rounded-2xl"
            style={{
              ...modifiedBodyStyle,
              color: colorStyle.text,
              backgroundColor: colorStyle.secondary,
            }}
          >
            <span className="flex flex-col gap-2 justify-end">
              <span className="inline-flex gap-2">
                <button>Services</button>
                <button>Pricing</button>
                <button>Projects</button>
              </span>
              <span className="inline-flex gap-2">
                <button>About</button>
                <button>Contact</button>
              </span>
              <p>© 2025 Colours.io. All rights reserved.</p>
            </span>
            <span className="flex flex-row gap-2 justify-end items-end">
              <button>Privacy</button>
              <button>Terms</button>
            </span>
          </div>
        </div>

        <div
          className="grow h-full min-h-28 flex flex-row justify-between gap-4"
          style={{
            ...modifiedBodyStyle,
            color: colorStyle.text,
          }}
        >
          <button
            style={{ backgroundColor: colorStyle.secondary }}
            className="grow rounded-2xl"
          >
            Twitter
          </button>
          <button
            style={{ backgroundColor: colorStyle.secondary }}
            className="grow rounded-2xl"
          >
            Linked In
          </button>
          <button
            style={{ backgroundColor: colorStyle.secondary }}
            className="grow rounded-2xl"
          >
            Github
          </button>
          <button
            style={{ backgroundColor: colorStyle.secondary }}
            className="grow rounded-2xl"
          >
            Colours.io
          </button>
        </div>
      </footer>
    </section>
  );
};

{
  /* <div className="relative w-[280px] sm:w-[320px] h-[320px] sm:h-[356px] bg-green-300 rounded-2xl">
  <div className="absolute top-16 left-1/3 transform translate-x-1/2 -translate-y-1/2 w-[176px] h-[228px] flex flex-col gap-0">
    <div className="bg-[#2A8E9E] grow rounded-t-2xl "></div>
    <div className="bg-[#01415B] basis-1/6 rounded-b-2xl"></div>
  </div>
</div>; */
}
