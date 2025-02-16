import React from "react";

export const PricingCard = ({
  modifiedBodyStyle,
  modifiedHeaderStyle,
  colorStyle,
  content,
}) => {
  return (
    <div
      className="grow aspect-square flex flex-col justify-between px-6 py-4 rounded-2xl box-content max-w-[calc(100%/3)]"
      style={{
        ...modifiedBodyStyle,
        background: colorStyle.primary,
      }}
    >
      <h1 style={modifiedHeaderStyle} className="!font-bold">
        {content}
      </h1>

      <div className="flex flex-row justify-between ">
        <h1>£0.00 / month</h1>
        <h1 className="size-8 text-center text-2xl">+</h1>
      </div>
    </div>
  );
};
