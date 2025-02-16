import React, { useEffect, useState } from "react";
import { ColourPicker } from "../colourPicker/colourPicker";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import { ColorInput } from "../colorInput/colorInput";
import { TypographyControls } from "../typographyControls/TypographyControls";
import { useBodyStyle } from "../../ultils/BodyStyleContext"; // Import the context
import { useHeaderStyle } from "../../ultils/HeaderStyleContext";
import { useColors } from "../../ultils/ColorsContext";

export const StyleBar = () => {
  const [textColour, setTextColour] = useState("");
  const [backgroundColour, setBackgroundColour] = useState("");
  const [primaryColour, setPrimaryColour] = useState("");
  const [secondaryColour, setSecondaryColour] = useState("");
  const [accentColour, setAccentColour] = useState("");

  const { headerStyle, setHeaderStyle } = useHeaderStyle();
  const { bodyStyle, setBodyStyle } = useBodyStyle();
  const { colorStyle, setColorStyle } = useColors();
  // Updates the font styles
  const updateHeaderTextStyle = (key, value) => {
    const updatedStyles = { ...headerStyle, [key]: value };
    setHeaderStyle(updatedStyles); // Update context state
  };

  const updateBodyTextStyle = (key, value) => {
    const updatedStyles = { ...bodyStyle, [key]: value };
    setBodyStyle(updatedStyles); // Update context state
  };

  const updateTextColour = (key, value) => {
    const updatedColors = { ...colorStyle, [key]: value };
    setColorStyle(updatedColors); // Update context state
  };

  return (
    <div className="w-[240px] bg-[#D9D9D9]">
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
          defaultColor={colorStyle.text}
          onChange={(value) => {
            updateTextColour("text", value);
          }}
        />
        <ColorInput
          text={"Background"}
          defaultColor={colorStyle.background}
          onChange={(value) => {
            updateTextColour("background", value);
          }}
          textColor={textColour}
        />
        <ColorInput
          text={"Primary"}
          defaultColor={colorStyle.primary}
          onChange={(value) => {
            updateTextColour("primary", value);
          }}
        />
        <ColorInput
          text={"Secondary"}
          defaultColor={colorStyle.secondary}
          onChange={(value) => {
            updateTextColour("secondary", value);
          }}
        />
        <ColorInput
          text={"Accent"}
          defaultColor={colorStyle.accent}
          onChange={(value) => {
            updateTextColour("accent", value);
          }}
        />
      </section>
    </div>
  );
};
