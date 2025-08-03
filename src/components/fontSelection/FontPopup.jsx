import { useEffect, useState } from "react";
import { SearchableList } from "./SearchableList";

export const FontPopup = ({ isOpen, fontList, onFontSelect, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white border border-gray-200 rounded-lg shadow-xl w-80">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Choose a font
            </h3>

            <SearchableList
              items={fontList}
              searchKey="value"
              onSelect={(font) => onFontSelect(font.value)}
              placeholder="Search fonts... (try 'inter' or 'roboto')"
            />
          </div>
        </div>
      </div>

      {/* Click outside overlay */}
      <div className="fixed inset-0 z-40" onClick={onClose} />
    </>
  );
};
