import React, { createContext, useState, useContext, useEffect } from "react";

const HeaderContext = createContext();

export const HeaderStyleProvider = ({ children }) => {
  const [headerStyle, setHeaderStyle] = useState({
    fontSize: "16",
    fontWeight: "",
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
