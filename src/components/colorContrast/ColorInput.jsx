import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

const isValidHex = (val) => /^#?[0-9A-Fa-f]{6}$/.test(val);
const normalizeHex = (val) => {
  const v = val.startsWith("#") ? val : `#${val}`;
  return v.toLowerCase();
};

export const ColorInput = ({ colorKey, value, changeColor, label }) => {
  const [localColor, setLocalColor] = useState(value ?? "#ff0000");
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Keep local input in sync when parent changes
  useEffect(() => {
    if (typeof value === "string" && value !== localColor) {
      setLocalColor(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Close picker on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const normalized = normalizeHex(e.target.value);
    setLocalColor(normalized);

    if (isValidHex(normalized)) {
      // Notify parent immediately; parent will debounce API
      changeColor(colorKey, normalized);
    }
  };

  const showError =
    localColor.length === 7 && !isValidHex(localColor) && localColor.length > 0;

  return (
    <div className="w-full relative" ref={wrapperRef}>
      {label && (
        <label className="block text-sm text-gray-700 mb-1">{label}</label>
      )}
      <div
        className={`relative flex items-center h-9 rounded-lg border transition-all duration-200 
          ${
            isPickerOpen
              ? "border-blue-500 ring-0 ring-blue-500 ring-opacity-20 shadow-sm"
              : showError
              ? "border-red-500"
              : "border-neutral-300 hover:border-neutral-400"
          }
        `}
      >
        <input
          type="text"
          value={localColor}
          onChange={handleInputChange}
          onFocus={() => setIsPickerOpen(true)}
          placeholder="#AABBCC"
          inputMode="text"
          maxLength={7}
          aria-invalid={showError || undefined}
          className="flex-1 px-3 py-2 text-sm font-mono uppercase tracking-wide bg-transparent border-none outline-none placeholder:text-neutral-400"
        />
        <div
          className="size-6 mr-2 rounded border cursor-pointer"
          style={{ backgroundColor: localColor }}
          onClick={() => setIsPickerOpen((prev) => !prev)}
        />
      </div>

      {isPickerOpen && (
        <div className="absolute z-50 mt-2 min-h-96 w-[260px]">
          <HexColorPicker
            color={localColor}
            onChange={(newColor) => {
              setLocalColor(newColor);
              // Picker gives valid hex; update parent immediately
              changeColor(colorKey, newColor);
            }}
          />
        </div>
      )}

      {showError && (
        <p className="mt-1 text-xs text-red-600">
          Enter a 6-digit hex (e.g. #1A2B3C)
        </p>
      )}
    </div>
  );
};
