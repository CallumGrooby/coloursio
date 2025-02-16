import React, { createContext, useState, useContext, useEffect } from "react";

const BodyContext = createContext();

export const BodyStyleProvider = ({ children }) => {
  const [bodyStyle, setBodyStyle] = useState({
    fontSize: "16",
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

    loadFont(bodyStyle.font); // Load the font when fontFamily changes
  }, [bodyStyle.font]);

  return (
    <BodyContext.Provider value={{ bodyStyle, setBodyStyle }}>
      {children}
    </BodyContext.Provider>
  );
};

export const useBodyStyle = () => {
  return useContext(BodyContext);
};
