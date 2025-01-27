import { useState } from "react";
import "./App.css";
import { GoogleFont } from "./ultils/GoogleFont";
import { FontProvider } from "./ultils/FontContext";
import TextDisplay from "./TextDisplay";
import { ColourPicker } from "./components/colourPicker/colourPicker";
import { StyleBar } from "./components/styleBar/StyleBar";

function App() {
  return (
    <>
      <FontProvider>
        <TextDisplay />
        <GoogleFont />
      </FontProvider>

      <StyleBar />
    </>
  );
}

export default App;
