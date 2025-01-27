// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Select from "react-select";

// const colourStyles = {
//   control: (styles) => ({ ...styles, backgroundColor: "white" }),
//   option: (styles, { data, isDisabled, isFocused, isSelected }) => {
//     return {
//       ...styles,
//       color: "black",
//       cursor: isDisabled ? "not-allowed" : "default",
//     };
//   },
// };

// export const GoogleFont = () => {
//   const [options, setFontOptions] = useState([]);
//   const [fontFamily, setFontFamily] = useState("");

//   useEffect(() => {
//     const fetchFonts = async () => {
//       try {
//         const apiKey = import.meta.env.VITE_GOOGLE_FONT_API_KEY; // Replace with your actual API key
//         const response = await fetch(
//           `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`
//         );
//         const data = await response.json();

//         // Transform the fonts into the { value, label } format
//         const options = data.items.map((font) => ({
//           value: font,
//           label: font.family,
//         }));

//         setFontOptions(options);
//       } catch (error) {
//         console.error("Error fetching fonts:", error);
//       }
//     };

//     fetchFonts();
//   }, []);

//   const handleChange = (data) => {
//     console.log(data);
//     if (data) {
//       const firstFont = data.value; // Get the first font from the response
//       const fontName = firstFont.family;

//       setFontFamily(fontName);

//       // Dynamically load the font
//       const link = document.createElement("link");
//       link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(
//         / /g,
//         "+"
//       )}:wght@400&display=swap`;
//       link.rel = "stylesheet";
//       document.head.appendChild(link);
//     }
//   };

//   return (
//     <div>
//       <Select options={options} styles={colourStyles} onChange={handleChange} />
//     </div>
//   );
// };

// // async function getFonts() {
// //   const apiKey = import.meta.env.VITE_GOOGLE_FONT_API_KEY;

// //   const apiURL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;

// //   try {
// //     const response = await axios.get(apiURL);
// //     return response.data;
// //   } catch (error) {
// //     console.error(error);
// //   }

// //   return null;
// // }

// src/components/GoogleFont.jsx
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useFont } from "./FontContext";

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      color: "black",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

export const GoogleFont = () => {
  const [options, setFontOptions] = useState([]);
  const { setFontFamily } = useFont(); // Get the setFontFamily function from context

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const apiKey = import.meta.env.VITE_GOOGLE_FONT_API_KEY;
        const response = await fetch(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`
        );
        const data = await response.json();

        const options = data.items.map((font) => ({
          value: font.family,
          label: font.family,
        }));

        setFontOptions(options);
      } catch (error) {
        console.error("Error fetching fonts:", error);
      }
    };

    fetchFonts();
  }, []);

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      const fontName = selectedOption.value;

      // Set the selected font globally
      setFontFamily(fontName);
    }
  };

  return (
    <div>
      <Select
        options={options}
        styles={colourStyles}
        onChange={handleChange}
        placeholder="Select a font"
      />
    </div>
  );
};
