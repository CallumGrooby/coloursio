import React, { useEffect, useState } from "react";

export const ContrastSection = ({ colors }) => {
  return (
    <section className="w-full py-12 px-4 container mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-2xl mb-2 text-text">
          <span className="text-primary font-bold">Accessible</span> Designs,
          Beautiful Results
        </h1>
        <h2 className="italic text-accent">
          Make sure your color palette looks great and works for everyone
        </h2>
      </header>

      <div className="flex flex-col lg:flex-row gap-6">
        <ColorPaletteDisplay colors={colors} />
        <WCAGSection />
      </div>
    </section>
  );
};

const ColorPaletteDisplay = ({ colors }) => {
  return (
    <div className="basis-1/3 shadow-xs grid grid-cols-1 rounded-2xl overflow-hidden">
      {Object.keys(colors).map((keyName, index) => (
        <ColorSection key={index} color={colors[keyName]} name={keyName} />
      ))}
    </div>
  );
};

const ColorSection = ({ color, name }) => {
  const [fontColor, setFontColor] = useState("#000");

  useEffect(() => {
    const isDark = getTextColor(color);
    setFontColor(isDark ? "#000" : "#fff");
  }, [color]);

  return (
    <li
      className="w-full min-h-[60px] flex items-center justify-between px-4"
      style={{ backgroundColor: color, color: fontColor }}
    >
      <span className="capitalize">{name}</span>
      <span>{color}</span>
    </li>
  );
};

// Dummy version of getTextColor utility for demo purposes
const getTextColor = (bgColor) => {
  // Simple luminance check for contrast (can be replaced with real logic)
  if (!bgColor) return true;
  const r = parseInt(bgColor.substr(1, 2), 16);
  const g = parseInt(bgColor.substr(3, 2), 16);
  const b = parseInt(bgColor.substr(5, 2), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5; // true = dark text
};

const WCAGSection = () => {
  const sections = [
    {
      title: "What is WCAG Compliance?",
      text: "Web Content Accessibility Guidelines (WCAG) help ensure websites are usable by everyone, including people with visual impairments.",
    },
    {
      title: "Why Accessibility Matters",
      text: "Accessible websites improve user experience, boost SEO, and make your site inclusive for all audiences.",
    },
    {
      title: "Understanding A vs AA Ratings",
      text: "WCAG ratings range from A (basic accessibility) to AA (industry standard). Colours.io helps you meet both.",
    },
    {
      title: "Automated Contrast Testing",
      text: "Colours.io automatically checks your color combinations against WCAG standards — so you know your design works before you export.",
    },
  ];

  return (
    <div className="flex flex-col gap-4 flex-1">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border border-secondary rounded-2xl px-4 py-4 shadow-md flex flex-col gap-1 bg-gray-100"
        >
          <h1 className="text-lg font-semibold text-primary">
            {section.title}
          </h1>
          <p className="text-sm text-text">{section.text}</p>
        </div>
      ))}
    </div>
  );
};
