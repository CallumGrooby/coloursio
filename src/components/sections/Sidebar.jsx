import React from "react";
import { GoogleFont } from "../../ultils/GoogleFont";
import { StyleBar } from "../styleBar/StyleBar";

export const Sidebar = () => {
  return (
    <div className="w-[240px] bg-[#D9D9D9]">
      <GoogleFont />
      <StyleBar />
    </div>
  );
};
