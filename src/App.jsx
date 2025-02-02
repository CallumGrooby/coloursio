import { useState } from "react";
import { GoogleFont } from "./ultils/GoogleFont";
import { FontProvider } from "./ultils/FontContext";
import TextDisplay from "./TextDisplay";
import { ColourPicker } from "./components/colourPicker/colourPicker";
import { StyleBar } from "./components/styleBar/StyleBar";
import { BodyStyleProvider, useBodyStyle } from "./ultils/BodyStyleContext";
import { HeaderStyleProvider } from "./ultils/HeaderStyleContext";

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
            <div className="w-[240px] bg-[#D9D9D9]">
              <GoogleFont />
              <StyleBar />
            </div>

            <div
              className={`transition-all duration-300 ${
                section1Visible ? "inline" : "hidden"
              } bg-gray-300 flex-1`}
            >
              <button
                onClick={toggleSection1}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Full Screen Section 1
              </button>
              <TextDisplay />
            </div>

            {/* Section 2 */}
            <div
              className={`transition-all duration-300 ${
                section2Visible ? "inline" : "hidden"
              } bg-gray-300 flex-1`}
            >
              <button
                onClick={toggleSection2}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Full Screen Section 2
              </button>{" "}
              <TestFunction />
            </div>
          </HeaderStyleProvider>
        </BodyStyleProvider>
      </FontProvider>
    </section>
  );
}

const TestFunction = () => {
  const { bodyStyle } = useBodyStyle();
  console.log(bodyStyle.size); // "16"

  return (
    <div>
      <h1>This Is a Test</h1>
    </div>
  );
};

export default App;
