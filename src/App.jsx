import { useState } from "react";
import "./App.css";
import { GoogleFont } from "./ultils/GoogleFont";
import { FontProvider } from "./ultils/FontContext";
import TextDisplay from "./TextDisplay";

function App() {
  return (
    <>
      <FontProvider>
        <TextDisplay />
        <GoogleFont />
      </FontProvider>
    </>
  );
}

export default App;
