import React, { useEffect, useState } from "react";
import { ColourPicker } from "../../colourPicker/colourPicker";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import { ColorInput } from "../../colorInput/colorInput";
import { TypographyControls } from "../../typographyControls/TypographyControls";
import { useBodyStyle } from "../../../contexts/BodyStyleContext"; // Import the context
import { useHeaderStyle } from "../../../utils/HeaderStyleContext";
import { useColors } from "../../../contexts/ColorsContext";

export const StyleBar = () => {
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
    <div className="w-96 h-full bg-background overflow-visible">
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

      <section className="flex flex-col gap-2 px-3 overflow-visible">
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
          textColor={colorStyle.text}
        />
        <ColorInput
          text={"Primary"}
          defaultColor={colorStyle.primary}
          onChange={(value) => {
            updateTextColour("primary", value);
          }}
          textColor={colorStyle.text}
        />
        <ColorInput
          text={"Secondary"}
          defaultColor={colorStyle.secondary}
          onChange={(value) => {
            updateTextColour("secondary", value);
          }}
          textColor={colorStyle.text}
        />
        <ColorInput
          text={"Accent"}
          defaultColor={colorStyle.accent}
          onChange={(value) => {
            updateTextColour("accent", value);
          }}
          textColor={colorStyle.text}
        />
      </section>
    </div>
  );
};
