import { useState, useRef, useCallback, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { ModalBase } from "./MobileOptionsBar";

const isValidHex = (val) => /^#?[0-9A-Fa-f]{6}$/.test(val);
const normalizeHex = (val) => {
  const v = val.startsWith("#") ? val : `#${val}`;
  return v.toLowerCase();
};

const ColorModal = ({ isOpen, onClose, colors, setColors }) => {
  const [selectedColor, setSelectedColor] = useState("text"); // must match a key
  const debounceTimer = useRef(null);

  // local input state (keeps input responsive while we debounce parent updates)
  const [localColor, setLocalColor] = useState(
    colors[selectedColor] ?? "#000000"
  );

  // keep local input in sync when selectedColor or colors change
  useEffect(() => {
    setLocalColor(colors[selectedColor] ?? "#000000");
  }, [selectedColor, colors]);

  // push color to parent (debounced)
  const pushColor = useCallback(
    (newColor) => {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        setColors((prev) => ({
          ...prev,
          [selectedColor]: newColor,
        }));
      }, 300);
    },
    [setColors, selectedColor]
  );

  // picker change: update local immediately, debounce parent
  const handlePickerChange = useCallback(
    (hex) => {
      setLocalColor(hex);
      pushColor(hex);
    },
    [pushColor]
  );

  // input change: update local immediately; if valid hex, normalize and push
  const handleInputChange = (e) => {
    const raw = e.target.value;
    setLocalColor(raw);
    if (isValidHex(raw)) {
      const normalized = normalizeHex(raw);
      pushColor(normalized);
    }
  };

  // normalize on blur (auto-add # / lower-case)
  const handleInputBlur = () => {
    if (isValidHex(localColor)) {
      const normalized = normalizeHex(localColor);
      setLocalColor(normalized);
      pushColor(normalized);
    }
  };

  // clear timer on unmount
  useEffect(() => {
    return () => clearTimeout(debounceTimer.current);
  }, []);

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-lg font-medium mb-2">Colors</div>
      <p className="text-sm text-neutral-600 mb-3">
        Your color controls go here.
      </p>

      <div className="flex flex-col gap-2 mb-3">
        {Object.keys(colors).map((key) => (
          <button
            key={key}
            className={`capitalize text-sm font-bold px-5 py-1 rounded-full cursor-pointer transition-all duration-200 border-2 flex-1 sm:flex-none
              ${
                selectedColor === key
                  ? "bg-gray-200 text-black border-gray-600 shadow-lg"
                  : "bg-gray-100 text-black border-gray-200 hover:border-gray-400 hover:bg-gray-100 hover:shadow-md"
              }`}
            onClick={() => setSelectedColor(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 ">
        <HexColorPicker
          className="shadow-xl w-full"
          color={localColor}
          onChange={handlePickerChange}
        />

        <div className=" w-full">
          <div className="flex items-center gap-2">
            <div
              className="h-9 w-9 rounded-lg border border-neutral-200 shadow-sm"
              style={{
                backgroundColor: isValidHex(localColor)
                  ? normalizeHex(localColor)
                  : "#ffffff",
              }}
              aria-hidden="true"
            />
            <input
              type="text"
              value={localColor}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="#aabbcc"
              maxLength={7}
              className="flex-1 h-9 rounded-lg border border-neutral-300 px-2 text-sm font-mono uppercase tracking-wide
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              aria-label={`Hex value for ${selectedColor}`}
            />
          </div>
          {!isValidHex(localColor) && localColor.length > 0 && (
            <p className="mt-1 text-xs text-red-600">
              Enter a 6-digit hex (e.g. #1a2b3c)
            </p>
          )}
        </div>
      </div>
    </ModalBase>
  );
};

export default ColorModal;
