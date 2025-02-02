import React, { createContext, useState, useContext, useEffect } from "react";

const HeaderContext = createContext();

export const HeaderStyleProvider = ({ children }) => {
  const [headerStyle, setHeaderStyle] = useState({
    size: "16",
    weight: "500",
    lineHeight: "",
    letterSpacing: "",
  });

  return (
    <HeaderContext.Provider value={{ headerStyle, setHeaderStyle }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderStyle = () => {
  return useContext(HeaderContext);
};
