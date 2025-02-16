import React, { createContext, useState, useContext, useEffect } from "react";

const HeaderContext = createContext();

export const HeaderStyleProvider = ({ children }) => {
  const [headerStyle, setHeaderStyle] = useState({
    fontSize: "32",
    fontWeight: "400 ",
    lineHeight: "normal",
    letterSpacing: "0",
    font: "",
  });

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

    loadFont(headerStyle.font); // Load the font when fontFamily changes
  }, [headerStyle.font]);

  return (
    <HeaderContext.Provider value={{ headerStyle, setHeaderStyle }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderStyle = () => {
  return useContext(HeaderContext);
};
