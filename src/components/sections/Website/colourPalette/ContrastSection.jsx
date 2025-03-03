// import {
//   IconCircleCheckFilled,
//   IconGlobeFilled,
//   IconSettingsFilled,
//   IconShieldFilled,
// } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { getTextColor } from "../../../../utils/ReturnTextColor";

export const ContrastSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
  currentView,
}) => {
  return (
    <section
      className={`${
        currentView ? "w-full py-4 max-w-[1440px]" : "max w-[360px] px-2 py-4 "
      }`}
    >
      <header
        style={{ color: colorStyle.text }}
        className={` ${currentView ? "mt-10 mb-12" : "mt-8 mb-4"}`}
      >
        <h1 style={{ ...modifiedHeaderStyle }}>
          <span className="font-bold" style={{ color: colorStyle.primary }}>
            Accessible
          </span>{" "}
          Designs, {!currentView && <br />} Beautiful Results
        </h1>
        <h2 style={{ ...modifiedBodyStyle }} className="italic">
          Make sure your color palette looks great and works for everyone
        </h2>
      </header>
      <div
        className={`flex gap-6 relative ${
          currentView ? "flex-row " : " flex-col"
        }`}
      >
        <ColorPallete
          modifiedHeaderStyle={modifiedHeaderStyle}
          modifiedBodyStyle={modifiedBodyStyle}
          colorStyle={colorStyle}
          currentView={currentView}
        />
        <WCAGSection
          modifiedHeaderStyle={modifiedHeaderStyle}
          modifiedBodyStyle={modifiedBodyStyle}
          colorStyle={colorStyle}
          currentView={currentView}
        />
      </div>
    </section>
  );
};

const ColorPallete = (props) => {
  const { modifiedHeaderStyle, modifiedBodyStyle, colorStyle, currentView } =
    props;

  console.log(colorStyle);
  return (
    <div className="basis-1/3 flex flex-col gap-0 first:rounded-t-md border border-gray-400 rounded-md shadow-sm">
      {Object.keys(colorStyle).map((keyName, index) => (
        <ColorSection
          key={index}
          colorStyle={colorStyle}
          keyName={keyName}
          currentView={currentView}
        />
      ))}
    </div>
  );
};

const ColorSection = (props) => {
  const { colorStyle, keyName, currentView } = props;
  const [fontColor, setFontColor] = useState();

  useEffect(() => {
    const isDark = getTextColor(colorStyle[keyName]);

    if (!isDark) {
      setFontColor("#fff");
    } else {
      setFontColor("#000");
    }
  }, [colorStyle, keyName]);

  return (
    <li
      className={`w-full h-full flex items-end first:rounded-t-md last:rounded-b-md ${
        !currentView && "min-h-20"
      }`}
      style={{
        backgroundColor: colorStyle[keyName],
        color: fontColor,
      }}
    >
      <span>{colorStyle[keyName]}</span>
    </li>
  );
};

const WCAGSection = (props) => {
  const { modifiedHeaderStyle, modifiedBodyStyle, colorStyle, currentView } =
    props;
  const sections = [
    {
      title: "What is WCAG Compliance?",
      text: "Web Content Accessibility Guidelines (WCAG) help ensure websites are usable by everyone, including people with visual impairments.",
      //   icon: <IconShieldFilled color={colorStyle.accent} size={"32"} />,
    },
    {
      title: "Why Accessibility Matters",
      text: "Accessible websites improve user experience, boost SEO, and make your site inclusive for all audiences.",
      //   icon: <IconGlobeFilled color={colorStyle.accent} size={"32"} />,
    },
    {
      title: "Understanding A vs AA Ratings",
      text: "WCAG ratings range from A (basic accessibility) to AA (industry standard). Colours.io helps you meet both.",
      //   icon: <IconCircleCheckFilled color={colorStyle.accent} size={"32"} />,
    },
    {
      title: "Automated Contrast Testing",
      text: "Colours.io automatically checks your color combinations against WCAG standards — so you know your design works before you export.",
      //   icon: <IconSettingsFilled color={colorStyle.accent} size={"32"} />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 grow">
      {sections.map((content, index) => {
        return (
          <div
            key={index}
            className="border rounded-2xl px-4 py-4 shadow-md flex flex-col gap-1"
            style={{
              color: colorStyle.text,
              borderColor: colorStyle.primary,
            }}
          >
            {/* <>{content.icon}</> */}
            <h1
              style={{ ...modifiedHeaderStyle }}
              className={`${!currentView && "text-center"}`}
            >
              {content.title}
            </h1>
            <p style={{ ...modifiedBodyStyle }}>{content.text}</p>
          </div>
        );
      })}
    </div>
  );
};
