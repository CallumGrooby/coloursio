import React, { useState } from "react";
import DynamicText from "../components/DynamicText";

const getInitialColors = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    text: `#${params.get("text") || "000000"}`,
    background: `#${params.get("background") || "FFFFFF"}`,
    primary: `#${params.get("primary") || "2F27CE"}`,
    secondary: `#${params.get("secondary") || "DEDCFF"}`,
    accent: `#${params.get("accent") || "433BFF"}`,
  };
};

// Fixed hex2rgb function that handles both 3-digit and 6-digit hex codes
const hex2rgb = (hex) => {
  // Remove the # if present
  hex = hex.replace("#", "");

  let r, g, b;

  if (hex.length === 3) {
    // Handle 3-digit hex codes like #FFF
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    // Handle 6-digit hex codes like #FFFFFF
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else {
    // Invalid hex code
    return { r: 0, g: 0, b: 0 };
  }

  return { r, g, b };
};

// Function to format colors based on display option
const formatColor = (hexColor, displayOption) => {
  if (displayOption === "hex") {
    return hexColor;
  } else if (displayOption === "rgb") {
    const { r, g, b } = hex2rgb(hexColor);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return hexColor;
};

// Function to generate export code with proper color format
const generateExportCode = (colors, exportOption, displayOption) => {
  const formattedColors = {
    text: formatColor(colors.text, displayOption),
    background: formatColor(colors.background, displayOption),
    primary: formatColor(colors.primary, displayOption),
    secondary: formatColor(colors.secondary, displayOption),
    accent: formatColor(colors.accent, displayOption),
  };

  switch (exportOption) {
    case "css":
      return {
        option: "css",
        filename: "colors.css",
        code: `:root {
  --text-color: ${formattedColors.text};
  --background-color: ${formattedColors.background};
  --primary-color: ${formattedColors.primary};
  --secondary-color: ${formattedColors.secondary}; 
  --accent-color: ${formattedColors.accent};
}`,
      };
    case "scss":
      return {
        option: "scss",
        filename: "colors.scss",
        code: `$palette: (
  text-color: ${formattedColors.text},
  background-color: ${formattedColors.background},
  primary-color: ${formattedColors.primary},
  secondary-color: ${formattedColors.secondary},
  accent-color: ${formattedColors.accent},
);`,
      };
    case "tailwind":
      return {
        option: "tailwind",
        filename: "tailwind.config.js",
        code: `theme: {
  extend: {
    colors: {
      'text-color': '${formattedColors.text}',
      'background-color': '${formattedColors.background}',
      'primary-color': '${formattedColors.primary}',
      'secondary-color': '${formattedColors.secondary}',
      'accent-color': '${formattedColors.accent}',
    }
  }
}`,
      };
    default:
      return null;
  }
};

const ExportModal = ({ onClose }) => {
  const colors = getInitialColors();

  const exportOptions = ["css", "scss", "tailwind"];
  const displayOptions = ["hex", "rgb"];

  const [selectedExportOption, setExportOption] = useState(exportOptions[0]);
  const [selectedDisplayOption, setSelectedDisplayOption] = useState(
    displayOptions[0]
  );

  // Generate the current export code based on selections
  const currentExportCode = generateExportCode(
    colors,
    selectedExportOption,
    selectedDisplayOption
  );

  return (
    <div className="w-full h-full fixed z-50 bg-black/60 inset-0 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Header - Mobile friendly with close button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between rounded-t-lg">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Export Options
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Select the format you want to export your colors in.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 sm:px-6 py-4 space-y-6">
          {/* Export Format Selection */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Export Format
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {exportOptions.map((option, i) => (
                <button
                  className={`capitalize text-base sm:text-lg font-medium px-4 sm:px-6 py-2 rounded-lg cursor-pointer transition-all duration-200 shadow-sm flex-1 sm:flex-none
                    ${
                      selectedExportOption === option
                        ? "bg-blue-600 text-white shadow-md border-2 border-blue-600"
                        : "bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400 hover:shadow-md hover:bg-blue-50"
                    }`}
                  onClick={() => setExportOption(option)}
                  key={i}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Color Display Format Selection */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
              Color Display Format
            </h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {displayOptions.map((option, i) => (
                <button
                  className={`uppercase text-sm font-bold px-5 py-1 rounded-full cursor-pointer transition-all duration-200 border-2 flex-1 sm:flex-none
                    ${
                      selectedDisplayOption === option
                        ? "bg-purple-600 text-white border-purple-600 shadow-lg"
                        : "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:bg-purple-100 hover:shadow-md"
                    }`}
                  onClick={() => setSelectedDisplayOption(option)}
                  key={i}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Color Preview */}
          <div className="p-3 sm:p-4 border border-gray-300 rounded-lg bg-gray-50">
            <h3 className="text-sm sm:text-base font-semibold mb-3 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Color Preview
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              {Object.entries(colors).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg border-2 border-gray-300 mx-auto mb-2 shadow-sm"
                    style={{ backgroundColor: value }}
                  ></div>
                  <div className="text-xs sm:text-sm font-medium capitalize text-gray-800">
                    {key}
                  </div>
                  <div className="text-xs text-gray-600 mt-1 break-all">
                    {formatColor(value, selectedDisplayOption)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CodeBlock codeObject={currentExportCode} />

          {/* Bottom Actions - Mobile friendly */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center sm:text-left">
              Click "Copy" in the code block to copy the generated code
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto cursor-pointer bg-red-600 hover:bg-red-500 transition-colors duration-300 ease-in-out text-white px-6 py-2.5 rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function CodeBlock({ codeObject }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeObject.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm bg-white overflow-hidden">
      {codeObject && (
        <>
          {/* Header with filename and copy button */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-3 sm:px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 gap-2 sm:gap-0">
            <span className="text-sm font-medium text-gray-700 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="truncate">{codeObject.filename}</span>
            </span>
            <button
              onClick={handleCopy}
              className={`flex items-center justify-center px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 w-full sm:w-auto ${
                copied
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {copied ? (
                <>
                  <svg
                    className="w-3 h-3 mr-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    className="w-3 h-3 mr-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy Code
                </>
              )}
            </button>
          </div>

          {/* Code content */}
          <div className="relative">
            <pre className="p-3 sm:p-4 bg-gray-50 text-black overflow-x-auto overflow-y-auto max-h-60 sm:max-h-80 text-xs sm:text-sm leading-relaxed">
              <code className="font-mono whitespace-pre">
                {codeObject.code}
              </code>
            </pre>
          </div>
        </>
      )}
    </div>
  );
}

export default ExportModal;
