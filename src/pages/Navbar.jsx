import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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

export const Navbar = () => {


  const [isExportOpen, setIsExportOpen] = useState(false);
 

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <nav className="p-4 shadow bg-white">
        <div>
          <h1 className="text-gray-700 text-2xl font-bold">
            Colors.<span>io</span>
          </h1>
        </div>

        <ul className="flex gap-4 mt-2">
          <li>
            <Link to="/docs">Color Contrast</Link>
          </li>
          <li>
            <Link to="/playground">Play Ground</Link>
          </li>
          <button onClick={()=>{setIsExportOpen(true)}}>Export</button>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </nav>

      {/* Export Modal */
      isExportOpen && (<ExportPage onClose={() => setIsExportOpen(false)} />  )}

      {/* Fills rest of the screen */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};


const ExportPage = ({onClose}) => {

   const handleExport = () => {

    const colors = getInitialColors();

    //Tailwnd css
    const tailwindExport = `theme: {
  extend: {
    colors: {
  text-color: ${colors.text},
  background-color: ${colors.background},
  primary-color: ${colors.primary},
  secondary-color: ${colors.secondary},
  accent-color: ${colors.accent},
    }
  }
}`
    //CSS
    const CSSExport = `
:root {
  --text-color: ${colors.text};
  --background-color: ${colors.background};
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary}; 
  --accent-color: ${colors.accent};
}
`

//SCSS
    const SCSSExport = `
$palette: (
  text-color: ${colors.text},
  background-color: ${colors.background},
  primary-color: ${colors.primary},
  secondary-color: ${colors.secondary},
  accent-color: ${colors.accent},
);
`

//JSON
    const JSONExport = JSON.stringify({
      text: colors.text,
      background: colors.background, 
      primary: colors.primary,
      secondary: colors.secondary,
      accent: colors.accent,
    }, null, 2);   
    //RGBA
    //HEX

    console.log("Exporting Tailwind CSS:", tailwindExport);
    console.log("Exporting CSS:", CSSExport);
    console.log("Exporting SCSS:", SCSSExport);
    console.log("Exporting JSON:", JSONExport);
    // Add more formats as needed

    console.log("Exporting colors:", colors);
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    p-4 bg-white shadow-lg rounded-lg w-full max-w-md">

      <h2 className="text-xl font-bold">Export Options</h2>
      <p>Select the format you want to export your colors in.</p>
      <button onClick={onClose}>Close</button>

      <button onClick={handleExport} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Export Colors
      </button>
      {/* Add export options here */}
    </div>
  );
}