import React, { useState } from "react";
import { ModalBase } from "./MobileOptionsBar";
import { SearchableList } from "../fontSelection/SearchableList";
import { useGoogleFonts } from "../../utils/fontUtils";
// import { FontDisplay } from "../fontSelection/FontDisplay";

const FontModal = ({
  isOpen,
  onClose,
  headerFont,
  setHeaderFont,
  bodyFont,
  setBodyFont,
}) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-lg font-medium mb-2">Fonts</div>
      <p className="text-sm text-neutral-600 mb-3">
        Your font controls go here.
      </p>

      <FontDisplay
        headerFont={headerFont}
        setHeaderFont={setHeaderFont}
        bodyFont={bodyFont}
        setBodyFont={setBodyFont}
      />
    </ModalBase>
  );
};

const FontDisplay = ({ headerFont, setHeaderFont, bodyFont, setBodyFont }) => {
  const [activeFontType, setActiveFontType] = useState("header");

  const handleFontSelect = (selectedFont, fontType = activeFontType) => {
    console.log(`Selected ${selectedFont} for ${fontType}`);

    if (fontType === "header") {
      setHeaderFont(selectedFont);
    } else if (fontType === "body") {
      setBodyFont(selectedFont);
    }
  };

  const apiKey = import.meta.env.VITE_GOOGLE_FONT_API_KEY;
  // Use the custom hook for font management
  const { fontList, loading, loadFont } = useGoogleFonts(apiKey);

  // Get current font based on active type
  const getCurrentFont = () => {
    return activeFontType === "header" ? headerFont : bodyFont;
  };

  return (
    <div>
      {/* Toggle Buttons */}
      <div className="mb-6">
        <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveFontType("header")}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeFontType === "header"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Header Font
          </button>
          <button
            onClick={() => setActiveFontType("body")}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeFontType === "body"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Body Font
          </button>
        </div>
      </div>

      {/* Current Selection Display */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2 capitalize">
          {activeFontType} Font Selection
        </h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">
            Current {activeFontType} font:
          </p>
          <p
            className="text-xl font-medium"
            style={{ fontFamily: getCurrentFont() || "inherit" }}
          >
            {getCurrentFont() || "No font selected"}
          </p>
        </div>
      </div>

      {/* Font Search */}
      <div className="bg-white rounded-lg w-full border border-gray-200">
        <div className="p-4">
          <SearchableList
            items={fontList}
            searchKey="value"
            onSelect={(font) => handleFontSelect(font.value)}
            placeholder={`Search fonts for ${activeFontType}... (try 'inter' or 'roboto')`}
          />
        </div>
      </div>
    </div>
  );
};

export default FontModal;
