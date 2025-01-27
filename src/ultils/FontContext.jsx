import React, { createContext, useState, useContext, useEffect } from "react";

const FontContext = createContext(); // Create a context for the font

// FontProvider component to provide font globally
export const FontProvider = ({ children }) => {
  const [fontFamily, setFontFamily] = useState("Roboto"); // Default font

  // Effect to load the font dynamically whenever the font changes
  useEffect(() => {
    const loadFont = (font) => {
      const link = document.createElement("link");
      link.href = `https://fonts.googleapis.com/css2?family=${font.replace(
        " ",
        "+"
      )}:wght@400&display=swap`;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    };

    loadFont(fontFamily); // Load the font when fontFamily changes
  }, [fontFamily]);

  return (
    <FontContext.Provider value={{ fontFamily, setFontFamily }}>
      {children}
    </FontContext.Provider>
  );
};

// Custom hook to use the font context in components
export const useFont = () => {
  return useContext(FontContext);
};
