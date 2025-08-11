import React, { useCallback, useEffect, useRef, useState } from "react";
import { Palette, LetterCase } from "./Icons";
import { HexColorPicker } from "react-colorful";
import ColorModal from "./ColorModal";

export const MobileOptionsBar = ({
  colors,
  setColors,
  headerFont,
  setHeaderFont,
  bodyFont,
  setBodyFont,
}) => {
  const [modals, setModals] = useState({
    fonts: false,
    colors: false,
  });

  const closeModal = (type) =>
    setModals((prev) => ({ ...prev, [type]: false }));

  const toggleModal = (type) =>
    setModals((prev) => ({ ...prev, [type]: !prev[type] }));

  return (
    <div>
      <ColorModal
        isOpen={modals.colors}
        onClose={() => closeModal("colors")}
        colors={colors}
        setColors={setColors}
      />
      <FontModal
        isOpen={modals.fonts}
        onClose={() => closeModal("fonts")}
        headerFont={headerFont}
        setHeaderFont={setHeaderFont}
        bodyFont={bodyFont}
        setBodyFont={setBodyFont}
      />

      <div className="fixed bottom-0 flex flex-row justify-between w-screen mb-2 px-2 z-30">
        <Palette
          className="mobile-options-icons"
          onClick={() => toggleModal("colors")}
        />
        <LetterCase
          className="mobile-options-icons"
          onClick={() => toggleModal("fonts")}
        />
      </div>
    </div>
  );
};

/* ---------- Generic animated modal base ---------- */
export const ModalBase = ({ isOpen, onClose, children }) => {
  const DURATION = 200; // ms, keep in sync with Tailwind durations
  const [render, setRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setRender(true);
    } else {
      const t = setTimeout(() => setRender(false), DURATION);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!render) return null;

  return (
    <div
      className={`fixed inset-0 z-40 flex items-end sm:items-center justify-center
        transition-opacity duration-200 p-2 
        ${isOpen ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Panel (bottom sheet on mobile, centered on sm+) */}
      <div
        className={`
            h-full bg-white w-full py-4 px-4 relative rounded-sm 
          transition-transform duration-200 overflow-x-scroll
          ${isOpen ? "translate-y-0 sm:scale-100" : "translate-y-4 sm:scale-95"}
        `}
      >
        {children}

        <button
          onClick={onClose}
          className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 absolute top-0 right-0 mt-2 mr-2"
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
    </div>
  );
};

/* ---------- Specific modals ---------- */
// const ColorModal = ({ isOpen, onClose, colors, setColors }) => {
// const [selectedColor, setSelectedColor] = useState("text"); // must match an existing key

// const debounceTimer = useRef(null);

// // Debounced color change handler
// const handleColorChange = useCallback(
//     (newColor) => {
//     clearTimeout(debounceTimer.current);
//     debounceTimer.current = setTimeout(() => {
//         setColors((prev) => ({
//         ...prev,
//         [selectedColor]: newColor,
//         }));
//     }, 300);
//     },
//     [setColors]
// );

// return (
//     <ModalBase isOpen={isOpen} onClose={onClose}>
//     <div className="text-lg font-medium mb-2">Colors</div>
//     <p className="text-sm text-neutral-600 mb-3">
//         Your color controls go here.
//     </p>

//     <div className="flex flex-col gap-2">
//         {Object.entries(colors).map(([key]) => (
//         <button
//             key={key}
//             className={`text-sm font-bold px-5 py-1 rounded-full cursor-pointer transition-all duration-200 border-2 flex-1 sm:flex-none
//             ${
//                 selectedColor === key
//                 ? "bg-purple-600 text-white border-purple-600 shadow-lg"
//                 : "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 hover:bg-purple-100 hover:shadow-md"
//             }`}
//             onClick={() => setSelectedColor(key)} // <-- keep exact key
//         >
//             {key}
//         </button>
//         ))}
//     </div>

//     <HexColorPicker
//         className="shadow-xl w-full"
//         color={colors[selectedColor] ?? "#000000"} // fallback just in case
//         onChange={handleColorChange} // <-- pass the function, don't wrap
//     />
//     </ModalBase>
// );
// };

const FontModal = ({ isOpen, onClose }) => {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-lg font-medium mb-2">Fonts</div>
      <p className="text-sm text-neutral-600 mb-3">
        Your font controls go here.
      </p>
    </ModalBase>
  );
};
