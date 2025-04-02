export const getTextColor = (bgColor) => {
  if (!bgColor.startsWith("#") || bgColor.length !== 7) return "text-black";

  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  const textColor = luminance > 0.5 ? true : false;
  return textColor;
};
