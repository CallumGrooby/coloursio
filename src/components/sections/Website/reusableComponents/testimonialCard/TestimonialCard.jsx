import React from "react";

export const TestimonialCard = ({ modifiedBodyStyle, colorStyle, content }) => {
  return (
    <div
      className="grow min-h-[185px] flex flex-col justify-between gap-2 rounded-2xl px-4 py-3"
      style={{ ...modifiedBodyStyle, background: colorStyle.primary }}
    >
      <p>{content.text}</p>
      <div
        className="flex flex-row justify-between"
        style={{ color: colorStyle.accent }}
      >
        <h1>{content.user}</h1>
        <div className="flex flex-row gap-1">
          {Array.from({ length: content.stars }, (_, index) => (
            <h1 key={index}>★</h1>
          ))}
        </div>
      </div>
    </div>
  );
};
