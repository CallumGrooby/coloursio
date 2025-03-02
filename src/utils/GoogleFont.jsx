// src/components/GoogleFont.jsx
import React, { useState, useEffect } from "react";
import Select from "react-select";

const selectBoxStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "#E7E7E7",
    border: "1px solid #C0C0C0",
    boxShadow: isFocused ? "0 0 3px rgba(0, 0, 0, 0.1)" : "none",
    borderRadius: "6px",
    padding: "2px",
    color: "#969696",
    fontSize: "14px",
    width: "100%",
    maxWidth: "116px", // Limits the whole select box size
    "&:hover": {
      borderColor: "#A0A0A0",
    },
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? "#C0C0C0" : isFocused ? "#D3D3D3" : "#F0F0F0",
    color: "#333",
    cursor: "pointer",
    padding: "8px",
    fontSize: "14px",
    transition: "background-color 0.2s ease",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#969696",
    fontSize: "14px",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "#626262",
    fontSize: "14px",
    width: "100%", // Ensures the text takes up full space
    textOverflow: "ellipsis", // Adds "..." if text is too long
    whiteSpace: "nowrap",
    // overflow: "hidden",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    padding: "4px",
    svg: {
      width: "12px",
      height: "12px",
    },
  }),
  menu: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "116px", // Ensures dropdown matches max width
    maxHeight: "200px",
    // overflow: "hidden",
  }),
  menuList: (styles) => ({
    ...styles,
    maxHeight: "200px",
    // overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "#C0C0C0 #E7E7E7",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#E7E7E7",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#C0C0C0",
      borderRadius: "3px",
      minHeight: "30px",
    },
  }),
};

export const GoogleFont = ({ onValueChange }) => {
  const [options, setFontOptions] = useState([]);

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const apiKey = import.meta.env.VITE_GOOGLE_FONT_API_KEY;
        const response = await fetch(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`
        );
        const data = await response.json();

        const options = data.items.map((font) => ({
          value: font.family,
          label: font.family,
        }));

        setFontOptions(options);
      } catch (error) {
        console.error("Error fetching fonts:", error);
      }
    };

    fetchFonts();
  }, []);

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      const fontName = selectedOption.value;

      // Set the selected font globally
      // setFontFamily(fontName);
      onValueChange(fontName);
    }
  };

  return (
    <label className="flex flex-row gap-3 items-center">
      <span className="inline text-sm text-[#626262] min-w-[80px] max-w- capitalize">
        Font
      </span>
      <Select
        options={options}
        styles={selectBoxStyles}
        onChange={handleChange}
        placeholder="Select a font"
      />
    </label>
  );
};
