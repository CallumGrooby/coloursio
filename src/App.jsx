import { useState } from "react";
import { GoogleFont } from "./ultils/GoogleFont";
import { FontProvider } from "./ultils/FontContext";
import TextDisplay from "./components/TextDisplay/TextDisplay";
import { ColourPicker } from "./components/colourPicker/colourPicker";
import { StyleBar } from "./components/styleBar/StyleBar";
import { BodyStyleProvider, useBodyStyle } from "./ultils/BodyStyleContext";
import {
  HeaderStyleProvider,
  useHeaderStyle,
} from "./ultils/HeaderStyleContext";
import { Typography } from "./components/sections/Typography";
import { Sidebar } from "./components/sections/Sidebar";
import { LandingPage } from "./components/sections/LandingPage";

function App() {
  const [section1Visible, setSection1Visible] = useState(true);
  const [section2Visible, setSection2Visible] = useState(true);

  // Function to toggle Section 1 visibility
  const toggleSection1 = () => {
    setSection1Visible(true);
    setSection2Visible(!section2Visible);
  };

  // Function to toggle Section 2 visibility
  const toggleSection2 = () => {
    setSection2Visible(true);
    setSection1Visible(!section1Visible);
  };

  return (
    <section className="flex flex-row h-screen">
      <FontProvider>
        <BodyStyleProvider>
          <HeaderStyleProvider>
            {/* <div className="w-[240px] bg-[#D9D9D9]">
              <GoogleFont />
              <StyleBar />
            </div> */}
            <Sidebar />
            <Typography
              sectionVisibale={section1Visible}
              toggleVisable={toggleSection1}
            />
            <LandingPage
              sectionVisibale={section2Visible}
              toggleVisable={toggleSection2}
            />
          </HeaderStyleProvider>
        </BodyStyleProvider>
      </FontProvider>
    </section>
  );
}
export default App;
