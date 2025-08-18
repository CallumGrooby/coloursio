/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { HeroSection } from "../components/sections/Website/HeroSection";
import { WhyUsSection } from "../components/sections/Website/WhyUsSection";
import { HowItWorksSection } from "../components/sections/Website/HowItWorksSection";
import { ContrastSection } from "../components/sections/Website/ContrastSection";
import { PricingSection } from "../components/sections/Website/PricingSection";
import { BlogSection } from "../components/sections/Website/BlogSection";
import { FooterActionSection } from "../components/sections/Website/FooterActionSection";
import { FooterSection } from "../components/sections/Website/FooterSection";
import { HexColorPicker } from "react-colorful";
import { CheckContrast } from "../utils/ContrastApi";
import ColorPalette from "../components/OptionsBar";
import OptionsBar from "../components/OptionsBar";
import { MobileOptionsBar } from "../components/OptionsBar/MobileOptionsBar";
import { DesktopOptionsBar } from "../components/OptionsBar/DesktopOptionsBar";

const getInitialColors = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    text: `#${params.get("text") || "000000"}`,
    background: `#${params.get("background") || "FFFFFF"}`,
    primary: `#${params.get("primary") || "2F27CE"}`,
    secondary: `#${params.get("secondary") || "DEDCFF"}`,
    accent: `#${params.get("accent") || "433BFF"}`,
  };
};

export const HomePage = () => {
  const [colors, setColors] = useState(getInitialColors); // initialize from URL
  const [headerFont, setHeaderFont] = useState(null);
  const [bodyFont, setBodyFont] = useState(null); // Fixed typo from setBodyFront

  // Apply colors to CSS variables
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  // Apply fonts to CSS variables
  useEffect(() => {
    if (headerFont) {
      document.documentElement.style.setProperty("--font-header", headerFont);
    }
    if (bodyFont) {
      document.documentElement.style.setProperty("--font-body", bodyFont);
    }
  }, [headerFont, bodyFont]);

  // Update URL when colors change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(colors).forEach(([key, value]) => {
      params.set(key, value.replace("#", ""));
    });

    // Optionally add fonts to URL as well
    if (headerFont) params.set("headerFont", headerFont);
    if (bodyFont) params.set("bodyFont", bodyFont);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [colors, headerFont, bodyFont]);

  return (
    <div className="bg-background">
      <HeroSection
        colors={colors}
        headerFont={headerFont}
        bodyFont={bodyFont}
      />
      <WhyUsSection
        colors={colors}
        headerFont={headerFont}
        bodyFont={bodyFont}
      />
      <HowItWorksSection
        colors={colors}
        headerFont={headerFont}
        bodyFont={bodyFont}
      />
      <ContrastSection
        colors={colors}
        headerFont={headerFont}
        bodyFont={bodyFont}
      />
      <PricingSection
        colors={colors}
        headerFont={headerFont}
        bodyFont={bodyFont}
      />
      <BlogSection
        colors={colors}
        headerFont={headerFont}
        bodyFont={bodyFont}
      />
      <FooterActionSection
        colors={colors}
        headerFont={headerFont}
        bodyFont={bodyFont}
      />
      <FooterSection
        colors={colors}
        headerFont={headerFont}
        bodyFont={bodyFont}
      />
      {/* <OptionsBar
        colors={colors}
        setColors={setColors}
        headerFont={headerFont}
        setHeaderFont={setHeaderFont}
        bodyFont={bodyFont}
        setBodyFont={setBodyFont}
      /> */}

      {/* Mobile Options Bar */}
      <MobileOptionsBar
        colors={colors}
        setColors={setColors}
        headerFont={headerFont}
        setHeaderFont={setHeaderFont}
        bodyFont={bodyFont}
        setBodyFont={setBodyFont}
      />

      {/* <DesktopOptionsBar
        colors={colors}
        setColors={setColors}
        headerFont={headerFont}
        setHeaderFont={setHeaderFont}
        bodyFont={bodyFont}
        setBodyFont={setBodyFont}
      /> */}
    </div>
  );
};
