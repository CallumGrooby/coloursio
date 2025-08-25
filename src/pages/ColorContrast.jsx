import React, { useCallback, useEffect, useRef, useState } from "react";
import { CheckContrast } from "../utils/ContrastApi";
import { SwapColors } from "../assets/Icons";
import { WAGCDisplay } from "../components/colorContrast/WACGDisplay";
import { ColorInput } from "../components/colorContrast/ColorInput";

export const ColorContrast = () => {
  const [selectedColors, setColors] = useState({
    text: "#e8e8e8",
    background: "#1500ff",
    AA: "pass",
    AAA: "fail",
    AAALarge: "pass",
    AALarge: "pass",
    ratio: "6.08",
  });

  const mountedRef = useRef(false);
  const debounceMs = 200;

  const getWACGLevel = useCallback(async (text, background) => {
    const data = await CheckContrast(text, background);
    setColors((prev) => ({
      ...prev,
      text,
      background,
      ...data,
    }));
  }, []);

  // Debounce API calls when text/background change
  useEffect(() => {
    const { text, background } = selectedColors;

    // First render: fetch immediately (no debounce)
    if (!mountedRef.current) {
      mountedRef.current = true;
      getWACGLevel(text, background);
      return;
    }

    const id = window.setTimeout(() => {
      getWACGLevel(text, background);
    }, debounceMs);

    return () => window.clearTimeout(id);
    // Only depend on the inputs and the fetcher
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColors.text, selectedColors.background, getWACGLevel]);

  // UI-only updates; API is handled by the debounced effect
  const handleColorChange = useCallback((key, inputtedColor) => {
    setColors((prev) => ({
      ...prev,
      [key]: inputtedColor,
    }));
  }, []);

  const swapColors = useCallback(() => {
    setColors((prev) => ({
      ...prev,
      text: prev.background,
      background: prev.text,
    }));
  }, []);

  return (
    // If your navbar is ~4rem tall, this centers without extra scroll
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-5xl px-4 mb-4">
        <div className="flex flex-col gap-2 items-center py-6">
          <h1 className="text-4xl font-bold">Color Contrast Checker</h1>
          <p className="text-neutral-500">
            Calculate the contrast ratio of between text and colors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-0">
          <div className="flex flex-col gap-4 border-neutral-400 border lg:border-r-0 pr-4 rounded-lg lg:rounded-r-none px-4 py-2">
            <div className="flex flex-col gap-2 lg:flex-row lg:h-fit items-center w-full">
              <ColorInput
                colorKey="text"
                value={selectedColors.text}
                changeColor={handleColorChange}
                label={"Text Input"}
              />

              <button
                className="text-neutral-800 hover:text-neutral-400 cursor-pointer p-2 mx-auto lg:hidden"
                onClick={swapColors}
                aria-label="Swap colors (mobile)"
                title="Swap colors"
              >
                <SwapColors className={"size-12"} />
              </button>

              <ColorInput
                colorKey="background"
                value={selectedColors.background}
                changeColor={handleColorChange}
                label={"Background Input"}
              />

              <button
                className="text-neutral-800 hover:text-neutral-400 cursor-pointer p-2 hidden lg:flex"
                onClick={swapColors}
                aria-label="Swap colors"
                title="Swap colors"
              >
                <SwapColors className={"size-12"} />
              </button>
            </div>

            <WAGCDisplay colorsData={selectedColors} />
          </div>

          <div
            className="transition-colors duration-500 ease-in-out px-8 py-4 rounded-lg lg:rounded-l-none"
            style={{
              color: selectedColors.text,
              backgroundColor: selectedColors.background,
            }}
          >
            <h2 className="text-2xl">Lorem Ipsum</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              non rhoncus ipsum, eget imperdiet mauris. Morbi vel vestibulum mi,
              eu varius sem. Vestibulum ullamcorper nulla a cursus hendrerit.
              Duis congue rhoncus risus quis viverra. Fusce justo purus,
              vulputate egestas eros vel, pretium imperdiet magna. Curabitur nec
              elementum odio. Nam ac.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
