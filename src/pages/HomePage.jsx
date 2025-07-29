/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { HeroSection } from "../components/sections/Website/HeroSection";
import { WhyUsSection } from "../components/sections/Website/WhyUsSection";
import { HowItWorksSection } from "../components/sections/Website/HowItWorksSection";
import { ContrastSection } from "../components/sections/Website/ContrastSection";
import { PricingSection } from "../components/sections/Website/PricingSection";
import { BlogSection } from "../components/sections/Website/BlogSection";
import { FooterActionSection } from "../components/sections/Website/FooterActionSection";
import { FooterSection } from "../components/sections/Website/FooterSection";
import { HexColorPicker } from "react-colorful";
import { CheckContrast } from "../utils/ContrastApi";
import ColorPalette from "../components/ColorPallete";

export const HomePage = () => {
  const [colors, setColors] = useState({
    text: "#000000",
    background: "#FFFFFF",
    primary: "#2F27CE",
    secondary: "#DEDCFF",
    accent: "#433BFF",
  });

  useEffect(() => {
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);

  return (
    <div className="bg-background">
      <HeroSection colors={colors} />
      <WhyUsSection colors={colors} />
      <HowItWorksSection colors={colors} />
      <ContrastSection colors={colors} />
      <PricingSection colors={colors} />
      <BlogSection colors={colors} />
      <FooterActionSection colors={colors} />
      <FooterSection colors={colors} />

      <ColorPalette colors={colors} setColors={setColors} />
    </div>
  );
};

// const ColorPalette = (props) => {
//   const { colors, setColors } = props;
//   const prevColorsRef = useRef(colors);

//   const [openSection, setOpenSection] = useState(null);

//   const [WCAGLevel, setWCAGLevel] = useState({
//     background: { passLevel: "", ratio: "" },
//     primary: { passLevel: "", ratio: "" },
//     secondary: { passLevel: "", ratio: "" },
//     accent: { passLevel: "", ratio: "" },
//   });

//   const debounceTimer = useRef(null);

//   const handleColorChange = useCallback((newColor, section) => {
//     clearTimeout(debounceTimer.current);

//     debounceTimer.current = setTimeout(() => {
//       setColors((prev) => ({
//         ...prev,
//         [section]: newColor,
//       }));
//     }, 300);
//   }, []);

//   const handleOpenSection = (section) => {
//     setOpenSection((prev) => (prev === section ? null : section));
//   };

//   // Helper function to get WCAG indicator color
//   const getWCAGColor = (passLevel) => {
//     switch (passLevel) {
//       case "AAA":
//         return "bg-green-500";
//       case "AA":
//         return "bg-amber-500";
//       case "Fail":
//         return "bg-red-500";
//       default:
//         return "bg-gray-400"; // Default for empty/loading state
//     }
//   };

//   useEffect(() => {
//     const checkColorChanges = async () => {
//       const prevColors = prevColorsRef.current;

//       for (const [key, newColor] of Object.entries(colors)) {
//         // Skip if color hasn't changed
//         if (newColor === prevColors[key]) continue;

//         if (key === "text") {
//           // Text changed - update all color contrasts
//           for (const [colorKey, colorValue] of Object.entries(colors)) {
//             if (colorKey !== "text") {
//               const passLevel = await CheckContrast(newColor, colorValue);
//               setWCAGLevel((prev) => ({ ...prev, [colorKey]: passLevel }));
//             }
//           }
//         } else {
//           // Background color changed - update its contrast with text
//           const passLevel = await CheckContrast(colors.text, newColor);
//           setWCAGLevel((prev) => ({ ...prev, [key]: passLevel }));
//         }
//       }

//       prevColorsRef.current = colors;
//     };

//     checkColorChanges();
//   }, [colors]);

//   useEffect(() => {
//     console.log(WCAGLevel);
//   }, [WCAGLevel]);

//   return (
//     <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 bg-white shadow-lg rounded-t-lg border-t border-gray-200 z-50">
//       <div className="flex flex-row gap-4 items-center">
//         {Object.entries(colors).map(([key, value]) => {
//           const isOpen = openSection === key;

//           return (
//             <>
//               <div key={key} className="relative">
//                 {/* Color Picker - Positioned absolutely above */}
//                 {isOpen && (
//                   <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 z-50">
//                     <HexColorPicker
//                       className="shadow-xl"
//                       color={colors[key]}
//                       onChange={(color) => handleColorChange(color, key)}
//                     />
//                     {/* Arrow pointing down */}
//                     <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-100"></div>
//                   </div>
//                 )}

//                 {/* Color Button */}
//                 <div className="text-start relative">
//                   <label className="block mb-2 text-sm font-medium text-gray-700 capitalize">
//                     {key}
//                   </label>

//                   <button
//                     onClick={() => handleOpenSection(key)}
//                     className={`
//       group relative px-6 py-4 rounded-lg border transition-all duration-200
//       flex flex-row items-center gap-2 min-w-[80px]
//       ${
//         isOpen
//           ? "border-blue-500 bg-blue-50 shadow-md"
//           : "border-gray-300 hover:border-gray-400 hover:shadow-xs"
//       }
//     `}
//                     aria-label={`Select ${key} color`}
//                   >
//                     {/* Color Circle */}
//                     <div
//                       style={{ backgroundColor: colors[key] || "#ffffff" }}
//                       className="w-8 h-8 rounded-full border-2 border-white shadow-xs group-hover:scale-105 transition-transform"
//                     />

//                     {/* Hex Code */}
//                     <span className="text-base font-mono text-gray-600 group-hover:text-gray-800">
//                       {colors[key] || "#ffffff"}
//                     </span>

//                     {key !== "text" && (
//                       <>
//                         {/* WCAG Level Indicator - Updated with dynamic color */}
//                         <div
//                           className={`size-4 rounded-full border-2 border-white shadow-xs absolute top-0 right-0 ${getWCAGColor(
//                             WCAGLevel[key]?.passLevel
//                           )}`}
//                           title={`WCAG ${
//                             WCAGLevel[key]?.passLevel || "Loading..."
//                           } - Ratio: ${WCAGLevel[key]?.ratio || "N/A"}`}
//                         />

//                         {/* Tooltip - Shows on button hover */}
//                         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
//                           <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-xl border border-gray-200">
//                             <h1 className="text-base font-medium whitespace-nowrap">
//                               WCAG {WCAGLevel[key]?.passLevel || "Loading..."} -
//                               Ratio: {WCAGLevel[key]?.ratio || "N/A"}
//                             </h1>
//                             {/* Arrow pointing down */}
//                             <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-4 border-transparent border-t-white drop-shadow-sm"></div>
//                           </div>
//                         </div>
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </>
//           );
//         })}
//       </div>

//       {/* Click outside overlay when picker is open */}
//       {openSection && (
//         <div
//           className="fixed inset-0 z-40"
//           onClick={() => setOpenSection(null)}
//         />
//       )}
//     </div>
//   );
// };
