// fontUtils.js

import { useCallback, useEffect, useState } from "react";

/**
 * Loads a Google Font dynamically by injecting a link element into the document head
 * @param {string} fontFamily - The font family name (e.g., "Inter", "Open Sans")
 * @param {string[]} weights - Array of font weights to load (default: ['300', '400', '600', '700'])
 * @param {string} display - Font display property (default: 'swap')
 */
export const loadGoogleFont = (
  fontFamily,
  weights = ["300", "400", "600", "700"],
  display = "swap"
) => {
  if (!fontFamily || fontFamily === "inherit") {
    return;
  }

  const formattedFontFamily = fontFamily.replace(/\s+/g, "+");
  const weightsParam = weights.join(";");
  const href = `https://fonts.googleapis.com/css2?family=${formattedFontFamily}:wght@${weightsParam}&display=${display}`;

  // Check if font is already loaded
  if (document.querySelector(`link[href="${href}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.href = href;
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

/**
 * Fetches the list of Google Fonts from the API
 * @param {string} apiKey - Google Fonts API key
 * @param {string} sort - Sort order (default: 'popularity')
 * @returns {Promise<Array>} Array of font objects with value, label, and category
 */
export const fetchGoogleFonts = async (apiKey, sort = "popularity") => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=${sort}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.items.map((font) => ({
      value: font.family,
      label: font.family,
      category: font.category,
    }));
  } catch (error) {
    console.error("Error fetching fonts:", error);

    // Fallback to popular fonts if API fails
    const fallbackFonts = [
      "Inter",
      "Roboto",
      "Open Sans",
      "Lato",
      "Montserrat",
      "Source Sans Pro",
      "Raleway",
      "Nunito",
      "Poppins",
      "Merriweather",
    ];

    return fallbackFonts.map((font) => ({
      value: font,
      label: font,
      category: "sans-serif",
    }));
  }
};

/**
 * Custom hook for managing Google Fonts loading and fetching
 * @param {string} apiKey - Google Fonts API key
 * @returns {object} Object containing fontList, loading state, and loadFont function
 */
export const useGoogleFonts = (apiKey) => {
  const [fontList, setFontList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadedFonts, setLoadedFonts] = useState(new Set());

  // Fetch fonts list
  useEffect(() => {
    const loadFonts = async () => {
      if (fontList.length > 0) return;

      setLoading(true);
      const fonts = await fetchGoogleFonts(apiKey);
      setFontList(fonts);
      setLoading(false);
    };

    if (apiKey) {
      loadFonts();
    }
  }, [apiKey, fontList.length]);

  // Function to load a specific font
  const loadFont = useCallback(
    (fontFamily, weights, display) => {
      if (fontFamily && !loadedFonts.has(fontFamily)) {
        loadGoogleFont(fontFamily, weights, display);
        setLoadedFonts((prev) => new Set(prev).add(fontFamily));
      }
    },
    [loadedFonts]
  );

  return {
    fontList,
    loading,
    loadFont,
  };
};
