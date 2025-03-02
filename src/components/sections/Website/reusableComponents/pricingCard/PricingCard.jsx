import React from "react";

export const PricingCard = (props) => {
  const {
    modifiedBodyStyle,
    modifiedHeaderStyle,
    colorStyle,
    title,
    index,
    currentView,
  } = props;
  const isFirstItem = index === 0;

  return (
    <div
      className={`grow aspect-square flex flex-col justify-between px-6 py-4 rounded-2xl box-content ${
        currentView ? " max-w-[calc(100%/3)]" : "max-w-full"
      }`}
      style={{
        ...modifiedBodyStyle,
        backgroundColor: isFirstItem && colorStyle.primary,
        border: isFirstItem ? "none" : `1px solid ${colorStyle.primary}`,
      }}
    >
      <h1
        style={{
          ...modifiedHeaderStyle,
          color: isFirstItem && colorStyle.background,
        }}
        className="!font-bold"
      >
        {title}
      </h1>

      <div className="flex flex-row justify-between ">
        <h1>£0.00 / month</h1>
        <button
          className="size-8 text-center text-2xl rounded-full flex justify-center items-center "
          style={{
            background: colorStyle.accent,
            color: colorStyle.background,
          }}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
};
