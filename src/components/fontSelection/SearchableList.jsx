import { useMemo, useState } from "react";

export const SearchableList = ({
  items,
  searchKey = null,
  onSelect,
  placeholder = "Search...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;

    const lowercaseSearch = searchTerm.toLowerCase();

    return items.filter((item) => {
      // If items are strings
      if (typeof item === "string") {
        return item.toLowerCase().includes(lowercaseSearch);
      }

      // If items are objects and searchKey is provided
      if (searchKey && typeof item === "object") {
        return item[searchKey]?.toLowerCase().includes(lowercaseSearch);
      }

      // If items are objects but no searchKey, search all string values
      if (typeof item === "object") {
        return Object.values(item).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(lowercaseSearch)
        );
      }

      return false;
    });
  }, [items, searchTerm, searchKey]);

  const defaultRenderItem = (item, index) => (
    <button
      key={index}
      onClick={() => onSelect(item)}
      className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
    >
      {typeof item === "string"
        ? item
        : searchKey
        ? item[searchKey]
        : JSON.stringify(item)}
    </button>
  );

  return (
    <div>
      {/* Search Input */}
      <div className="pb-3 border-b border-gray-200">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          autoFocus
        />
      </div>
      Results
      <div className="overflow-y-auto p-2 max-h-60">
        {filteredItems.length === 0 ? (
          <div className="px-3 py-4 text-gray-500 text-center text-sm">
            {searchTerm.trim()
              ? `No results found for "${searchTerm}"`
              : "No items available"}
          </div>
        ) : (
          <div className="space-y-1">
            {filteredItems.map((item, index) => defaultRenderItem(item, index))}
          </div>
        )}

        {/* Results count */}
        {searchTerm.trim() && filteredItems.length > 0 && (
          <div className="px-3 py-2 text-xs text-gray-500 border-t border-gray-100 mt-2">
            {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""}{" "}
            found
          </div>
        )}
      </div>
    </div>
  );
};
