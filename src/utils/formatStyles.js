export const formatStyle = (orginalStyle) => {
  // Store each property in a variable and add units where needed
  const fontWeight = orginalStyle.fontWeight || "normal";
  const lineHeight = orginalStyle.lineHeight
    ? `${orginalStyle.lineHeight}rem`
    : "normal";
  const letterSpacing = orginalStyle.letterSpacing
    ? `${orginalStyle.letterSpacing}rem`
    : "normal";

  const fontSize = orginalStyle.fontSize
    ? `${orginalStyle.fontSize}px`
    : "32px";

  const fontFamily = `${orginalStyle.font}, sans-serif`;
  // Create the modified style object
  const newStyle = {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    fontFamily,
  };

  return newStyle; // Update the state with the modified style
};
