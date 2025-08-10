import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import { useState } from "react";

export default function ColorPickerWithInput() {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div className="flex flex-col gap-3">
      <HexColorPicker color={color} onChange={setColor} />

      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-32 rounded-lg border border-gray-300 px-2 py-1 text-sm font-mono uppercase"
        maxLength={7} // # + 6 hex digits
      />
    </div>
  );
}
