import React, { createContext, useState, useContext, useEffect } from "react";

const ColorsContext = createContext();

export const ColorsProvider = ({ children }) => {
  const [colorStyle, setColorStyle] = useState({
    text: "#042434",
    background: "#EFF3F6",
    primary: "#2A8E9E",
    secondary: "#AAD2DA",
    accent: "#01415B",
  });

  return (
    <ColorsContext.Provider value={{ colorStyle, setColorStyle }}>
      {children}
    </ColorsContext.Provider>
  );
};

export const useColors = () => {
  return useContext(ColorsContext);
};
