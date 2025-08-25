import { useState, useRef, useCallback, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { ModalBase } from "./MobileOptionsBar";
import { CheckContrast } from "../../utils/ContrastApi";

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

  const prevColorsRef = useRef({});
  const [WCAGLevel, setWCAGLevel] = useState({
    background: { passLevel: "", ratio: "" },
    primary: { passLevel: "", ratio: "" },
    secondary: { passLevel: "", ratio: "" },
    accent: { passLevel: "", ratio: "" },
  });

  useEffect(() => {
    const checkColorChanges = async () => {
      const prevColors = prevColorsRef.current;

      for (const [key, newColor] of Object.entries(colors)) {
        if (newColor === prevColors[key]) continue;

        if (key === "text") {
          // Text changed - update all color contrasts
          for (const [colorKey, colorValue] of Object.entries(colors)) {
            if (colorKey !== "text") {
              const passLevel = await CheckContrast(newColor, colorValue);
              setWCAGLevel((prev) => ({ ...prev, [colorKey]: passLevel }));
            }
          }
        } else {
          // Background color changed - update its contrast with text
          const passLevel = await CheckContrast(colors.text, newColor);
          setWCAGLevel((prev) => ({ ...prev, [key]: passLevel }));
        }
      }

      prevColorsRef.current = colors;
    };

    checkColorChanges();
  }, [colors]);

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <div className="text-lg font-medium mb-2">Colors</div>
      <p className="text-sm text-neutral-600 mb-3">
        Create your dream color pallete
      </p>

      <div className="flex flex-col gap-2 mb-3">
        {Object.keys(colors).map((keyName) => (
          <button
            key={keyName}
            className={`px-3 py-1.5 cursor-pointer flex flex-row border-1 rounded-sm
        ${
          selectedColor === keyName
            ? "bg-gray-200 text-black border-neutral-600 shadow-lg"
            : "bg-gray-100 text-black border-gray-200 hover:border-gray-400 hover:bg-gray-100 hover:shadow-md"
        }`}
            onClick={() => setSelectedColor(keyName)}
          >
            <div className="mr-auto flex flex-row items-center gap-1">
              <div
                style={{ backgroundColor: colors[keyName] }}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm group-hover:scale-105 transition-transform flex-shrink-0"
              />
              <div className="flex flex-col gap-1 text-start">
                <span className="capitalize font-semibold">
                  {keyName} color
                </span>
                <span className="text-sm text-neutral-600 ">
                  {colors[keyName]}
                </span>
              </div>
            </div>

            {keyName != "text" && (
              <WCAGVisuals
                passLevel={WCAGLevel[keyName]?.passLevel}
                wcagData={WCAGLevel}
              />
            )}
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

const getWCAGColor = (passLevel) => {
  switch (passLevel) {
    case "AAA":
      return "bg-green-500";
    case "AA":
      return "bg-amber-500";
    default:
      return "bg-red-700";
  }
};

const WCAGVisuals = ({ passLevel, wcagData }) => {
  return (
    <div className="flex flex-col gap-1 items-end text-sm text-neutral-600 h-full">
      <div
        className={`size-4 rounded-full border-2 border-white shadow-xs ${getWCAGColor(
          passLevel
        )}`}
        title={`WCAG ${wcagData?.passLevel || "Loading..."} - Ratio: ${
          wcagData?.ratio || "N/A"
        }`}
      />
      {passLevel}
    </div>
  );
};

export default ColorModal;
