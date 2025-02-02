import React, { createContext, useState, useContext, useEffect } from "react";

const BodyContext = createContext();

export const BodyStyleProvider = ({ children }) => {
  const [bodyStyle, setBodyStyle] = useState({
    size: "16",
    weight: "500",
    lineHeight: "",
    letterSpacing: "",
  });

  return (
    <BodyContext.Provider value={{ bodyStyle, setBodyStyle }}>
      {children}
    </BodyContext.Provider>
  );
};

export const useBodyStyle = () => {
  return useContext(BodyContext);
};
