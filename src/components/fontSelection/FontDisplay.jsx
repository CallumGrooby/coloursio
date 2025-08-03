import React, { useEffect, useState } from "react";
import { FontPopup } from "./FontPopup.jsx";

export const FontDisplay = ({
  headerFont,
  setHeaderFont,
  bodyFont,
  setBodyFont, // Fixed typo from setBodyFront
}) => {
  const [openFontSection, setOpenFontSection] = useState(null);
  const [fontList, setFontList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFontSelect = (selectedFont, fontType) => {
    console.log(`Selected ${selectedFont} for ${fontType}`);

    if (fontType === "header") {
      setHeaderFont(selectedFont);
    } else if (fontType === "body") {
      setBodyFont(selectedFont);
    }
    setOpenFontSection(null); // Close popup after selection
  };

  const handleToggleFontSection = (section) => {
    setOpenFontSection((prev) => (prev === section ? null : section));
  };

  // Get a list of fonts
  useEffect(() => {
    const fetchFonts = async () => {
      if (fontList.length > 0) return; // Don't fetch if already loaded

      console.log("Fetching Fonts");
      setLoading(true);

      try {
        const apiKey = import.meta.env.VITE_GOOGLE_FONT_API_KEY;
        const response = await fetch(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Create font options array
        const options = data.items.map((font) => ({
          value: font.family,
          label: font.family,
          category: font.category,
        }));

        setFontList(options);
      } catch (error) {
        console.error("Error fetching fonts:", error);
        // Fallback to popular fonts if API fails
        const fallbackFonts = [
          "Inter",
          "Roboto",
          "Open Sans",
          "Lato",
          "Montserrat",
          "Source Sans Pro",
          "Raleway",
          "Nunito",
          "Poppins",
          "Merriweather",
        ].map((font) => ({ value: font, label: font, category: "sans-serif" }));
        setFontList(fallbackFonts);
      } finally {
        setLoading(false);
      }
    };

    fetchFonts();
  }, [fontList.length]);

  return (
    <>
      <FontButton
        name="header"
        font={headerFont}
        isOpen={openFontSection === "header"}
        onToggle={handleToggleFontSection}
        onFontSelect={handleFontSelect}
        fontList={fontList}
      />
      <FontButton
        name="body"
        font={bodyFont}
        isOpen={openFontSection === "body"}
        onToggle={handleToggleFontSection}
        onFontSelect={handleFontSelect}
        fontList={fontList}
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
}) => {
  // Load Google Font dynamically when font changes
  useEffect(() => {
    if (font && font !== "inherit") {
      const fontFamily = font.replace(/\s+/g, "+");
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@300;400;600;700&display=swap`;
      link.rel = "stylesheet";

      // Check if already loaded
      if (!document.querySelector(`link[href="${link.href}"]`)) {
        document.head.appendChild(link);
      }
    }
  }, [font]);

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
          {/* Font Label */}
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
