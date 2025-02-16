import { useState } from "react";
import { StyleBar } from "./components/styleBar/StyleBar";
import { BodyStyleProvider } from "./contexts/BodyStyleContext";
import { HeaderStyleProvider } from "./utils/HeaderStyleContext";
import { Typography } from "./components/sections/Typography";
import { LandingPage } from "./components/sections/Website/LandingPage";
import { ColorsProvider } from "./contexts/ColorsContext";

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
      <BodyStyleProvider>
        <HeaderStyleProvider>
          <ColorsProvider>
            <StyleBar />

            <Typography
              sectionVisibale={section1Visible}
              toggleVisable={toggleSection1}
            />
            <LandingPage
              sectionVisibale={section2Visible}
              toggleVisable={toggleSection2}
            />
          </ColorsProvider>
        </HeaderStyleProvider>
      </BodyStyleProvider>
    </section>
  );
}
export default App;
