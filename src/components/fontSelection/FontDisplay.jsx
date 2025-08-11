import React, { useEffect, useState } from "react";
import { FontPopup } from "./FontPopup.jsx";
import { useGoogleFonts } from "../../utils/fontUtils.js";

export const FontDisplay = ({
  headerFont,
  setHeaderFont,
  bodyFont,
  setBodyFont,
}) => {
  const [openFontSection, setOpenFontSection] = useState(null);
  const apiKey = import.meta.env.VITE_GOOGLE_FONT_API_KEY;

  // Use the custom hook for font management
  const { fontList, loading, loadFont } = useGoogleFonts(apiKey);

  const handleFontSelect = (selectedFont, fontType) => {
    console.log(`Selected ${selectedFont} for ${fontType}`);

    if (fontType === "header") {
      setHeaderFont(selectedFont);
    } else if (fontType === "body") {
      setBodyFont(selectedFont);
    }
    setOpenFontSection(null);
  };

  const handleToggleFontSection = (section) => {
    setOpenFontSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <FontButton
        name="header"
        font={headerFont}
        isOpen={openFontSection === "header"}
        onToggle={handleToggleFontSection}
        onFontSelect={handleFontSelect}
        fontList={fontList}
        loadFont={loadFont}
      />
      <FontButton
        name="body"
        font={bodyFont}
        isOpen={openFontSection === "body"}
        onToggle={handleToggleFontSection}
        onFontSelect={handleFontSelect}
        fontList={fontList}
        loadFont={loadFont}
      />
    </>
  );
};

const FontButton = ({
  name,
  font,
  isOpen,
  onToggle,
  onFontSelect,
  fontList,
  loadFont,
}) => {
  // Load Google Font when font changes using the utility function
  useEffect(() => {
    if (font && font !== "inherit") {
      loadFont(font);
    }
  }, [font, loadFont]);

  return (
    <div>
      <FontPopup
        isOpen={isOpen}
        selectedFont={font}
        fontList={fontList}
        onFontSelect={(selectedFont) => onFontSelect(selectedFont, name)}
        onClose={() => onToggle(null)}
      />
      <div className="text-start relative">
        <label className="block mb-2 text-sm font-medium text-gray-700 capitalize">
          {name}
        </label>

        <button
          onClick={() => onToggle(name)}
          className={`
          group relative px-6 py-4 rounded-lg border transition-all duration-200
          flex flex-row items-center gap-3 min-w-[200px] h-[64px]
          ${
            isOpen
              ? "border-blue-500 bg-blue-50 shadow-md"
              : "border-gray-300 hover:border-gray-400 hover:shadow-sm"
          }
        `}
          aria-label={`Select ${name} font`}
        >
          <span
            className="text-base text-gray-600 group-hover:text-gray-800 flex-grow text-left truncate"
            style={{ fontFamily: font || "inherit" }}
          >
            {font || "Select A Font"}
          </span>
        </button>
      </div>
    </div>
  );
};
