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
import ColorPalette from "../components/ColorPallete";

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

  // Apply colors to CSS variables
  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  // Update URL when colors change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(colors).forEach(([key, value]) => {
      params.set(key, value.replace("#", ""));
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
  }, [colors]);

  return (
    <div className="bg-background">
      <HeroSection colors={colors} />
      <WhyUsSection colors={colors} />
      <HowItWorksSection colors={colors} />
      <ContrastSection colors={colors} />
      <PricingSection colors={colors} />
      <BlogSection colors={colors} />
      <FooterActionSection colors={colors} />
      <FooterSection colors={colors} />
      <ColorPalette colors={colors} setColors={setColors} />
    </div>
  );
};

