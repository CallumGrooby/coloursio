import React, { useEffect, useState } from "react";
import { ColourPicker } from "../colourPicker/colourPicker";
import { HexColorPicker } from "react-colorful";
import axios from "axios";
import { ColorInput } from "../colorInput/colorInput";

export const StyleBar = () => {
  const [textColour, setTextColour] = useState("");
  const [backgroundColour, setBackgroundColour] = useState("");
  const [primaryColour, setPrimaryColour] = useState("");
  const [secondaryColour, setSecondaryColour] = useState("");
  const [accentColour, setAccentColour] = useState("");

  return (
    <div>
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
    </div>
  );
};
