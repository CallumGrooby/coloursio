import React, { useEffect, useState } from "react";
import { ColourPicker } from "../colourPicker/colourPicker";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import { ColorInput } from "../colorInput/colorInput";
import { TypographyControls } from "../typographyControls/TypographyControls";
import { useBodyStyle } from "../../ultils/BodyStyleContext"; // Import the context
import { useHeaderStyle } from "../../ultils/HeaderStyleContext";

export const StyleBar = () => {
  const [textColour, setTextColour] = useState("");
  const [backgroundColour, setBackgroundColour] = useState("");
  const [primaryColour, setPrimaryColour] = useState("");
  const [secondaryColour, setSecondaryColour] = useState("");
  const [accentColour, setAccentColour] = useState("");

  const { headerStyle, setHeaderStyle } = useHeaderStyle();
  const { bodyStyle, setBodyStyle } = useBodyStyle();
  // Updates the font styles
  const updateHeaderTextStyle = (key, value) => {
    const updatedStyles = { ...headerStyle, [key]: value };
    setHeaderStyle(updatedStyles); // Update context state
  };

  const updateBodyTextStyle = (key, value) => {
    const updatedStyles = { ...bodyStyle, [key]: value };
    setBodyStyle(updatedStyles); // Update context state
  };

  return (
    <div>
      <TypographyControls
        heading={"headings"}
        onValueChange={(key, value) => {
          updateHeaderTextStyle(key, value);
        }}
        style={headerStyle}
      />

      <TypographyControls
        heading={"body"}
        onValueChange={(key, value) => {
          updateBodyTextStyle(key, value);
        }}
        style={bodyStyle}
      />

      <section className="flex flex-col gap-2 px-3">
        <h1 className="text-base text-[#969696] bg-[#f2f2f2] shadow-md w-fit max-w-36 px-4 py-1 rounded-md uppercase">
          Colours
        </h1>

        <ColorInput
          text={"Text"}
          defaultColor="#042434"
          onChange={setTextColour}
        />
        <ColorInput
          text={"Background"}
          defaultColor="#EFF3F6"
          onChange={setBackgroundColour}
          textColor={textColour}
        />
        <ColorInput
          text={"Primary"}
          defaultColor="#2A8E9E"
          onChange={setPrimaryColour}
        />
        <ColorInput
          text={"Secondary"}
          defaultColor="#01415B"
          onChange={setSecondaryColour}
        />
        <ColorInput
          text={"Accent"}
          defaultColor="#AAD2DA"
          onChange={setAccentColour}
        />
      </section>
    </div>
  );
};
