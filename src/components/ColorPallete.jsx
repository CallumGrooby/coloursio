import React, { useCallback, useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { CheckContrast } from "../utils/ContrastApi";

// Helper function - returns a color based on the pass level
const getWCAGColor = (passLevel) => {
  switch (passLevel) {
    case "AAA":
      return "bg-green-500";
    case "AA":
      return "bg-amber-500";
    default:
      return "bg-red-700";
  }
};

// Color Picker Component - Allows the user to pick a color
const ColorPickerPopup = ({ isOpen, color, onChange, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 z-50">
        <HexColorPicker
          className="shadow-xl"
          color={color}
          onChange={onChange}
        />
        {/* Arrow pointing down */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-100"></div>
      </div>

      {/* Click outside overlay */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
    </>
  );
};

// Tooltip Component - Displays the WCAG pass level and ratio on hover
const WCAGTooltip = ({ wcagData }) => (
  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-base font-medium whitespace-nowrap">
        WCAG {wcagData?.passLevel || "Loading..."} - Ratio:{" "}
        {wcagData?.ratio || "N/A"}
      </h1>
      {/* Arrow pointing down */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-white drop-shadow-sm"></div>
    </div>
  </div>
);

// WCAG Indicator Component
const WCAGIndicator = ({ passLevel, wcagData }) => (
  <>
    <div
      className={`size-4 rounded-full border-2 border-white shadow-xs absolute top-0 right-0 ${getWCAGColor(
        passLevel
      )}`}
      title={`WCAG ${wcagData?.passLevel || "Loading..."} - Ratio: ${
        wcagData?.ratio || "N/A"
      }`}
    />
    <WCAGTooltip wcagData={wcagData} />
  </>
);

// Individual Color Button Component
const ColorButton = ({
  colorKey,
  color,
  isOpen,
  onClick,
  wcagData,
  showWCAGIndicator = true,
}) => (
  <div className="text-start relative">
    <label className="block mb-2 text-sm font-medium text-gray-700 capitalize">
      {colorKey}
    </label>

    <button
      onClick={onClick}
      className={`
        group relative px-6 py-4 rounded-lg border transition-all duration-200
        flex flex-row items-center gap-2 min-w-[80px]
        ${
          isOpen
            ? "border-blue-500 bg-blue-50 shadow-md"
            : "border-gray-300 hover:border-gray-400 hover:shadow-xs"
        }
      `}
      aria-label={`Select ${colorKey} color`}
    >
      {/* Color Circle */}
      <div
        style={{ backgroundColor: color || "#ffffff" }}
        className="w-8 h-8 rounded-full border-2 border-white shadow-xs group-hover:scale-105 transition-transform"
      />

      {/* Hex Code */}
      <span className="text-base font-mono text-gray-600 group-hover:text-gray-800">
        {color || "#ffffff"}
      </span>

      {/* WCAG Indicator (only for non-text colors) */}
      {showWCAGIndicator && (
        <WCAGIndicator passLevel={wcagData?.passLevel} wcagData={wcagData} />
      )}
    </button>
  </div>
);

// Complete Color Item Component
const ColorItem = ({
  colorKey,
  color,
  isOpen,
  onToggle,
  onColorChange,
  wcagData,
}) => (
  <div className="relative">
    <ColorPickerPopup
      isOpen={isOpen}
      color={color}
      onChange={(newColor) => onColorChange(newColor, colorKey)}
      onClose={() => onToggle(null)}
    />

    <ColorButton
      colorKey={colorKey}
      color={color}
      isOpen={isOpen}
      onClick={() => onToggle(colorKey)}
      wcagData={wcagData}
      showWCAGIndicator={colorKey !== "text"}
    />
  </div>
);

// Main Color Palette Component
const ColorPalette = ({ colors, setColors }) => {
  const prevColorsRef = useRef(colors);
  const [openSection, setOpenSection] = useState(null);
  const [WCAGLevel, setWCAGLevel] = useState({
    background: { passLevel: "", ratio: "" },
    primary: { passLevel: "", ratio: "" },
    secondary: { passLevel: "", ratio: "" },
    accent: { passLevel: "", ratio: "" },
  });
  const debounceTimer = useRef(null);

  // Debounced color change handler
  const handleColorChange = useCallback(
    (newColor, section) => {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        setColors((prev) => ({
          ...prev,
          [section]: newColor,
        }));
      }, 300);
    },
    [setColors]
  );

  // Handle opening/closing color pickers
  const handleToggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // WCAG checking effect
  useEffect(() => {
    const checkColorChanges = async () => {
      const prevColors = prevColorsRef.current;

      for (const [key, newColor] of Object.entries(colors)) {
        if (newColor === prevColors[key]) continue;

        if (key === "text") {
          // Text changed - update all color contrasts
          for (const [colorKey, colorValue] of Object.entries(colors)) {
            if (colorKey !== "text") {
              const passLevel = await CheckContrast(newColor, colorValue);
              setWCAGLevel((prev) => ({ ...prev, [colorKey]: passLevel }));
            }
          }
        } else {
          // Background color changed - update its contrast with text
          const passLevel = await CheckContrast(colors.text, newColor);
          setWCAGLevel((prev) => ({ ...prev, [key]: passLevel }));
        }
      }

      prevColorsRef.current = colors;
    };

    checkColorChanges();
  }, [colors]);

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-white shadow-lg rounded-t-lg border-t border-gray-200 z-50">
      <div className="flex flex-row gap-4 items-center">
        {Object.entries(colors).map(([key, value]) => (
          <ColorItem
            key={key}
            colorKey={key}
            color={value}
            isOpen={openSection === key}
            onToggle={handleToggleSection}
            onColorChange={handleColorChange}
            wcagData={WCAGLevel[key]}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
