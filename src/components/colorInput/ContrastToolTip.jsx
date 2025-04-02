import React from "react";

export const ContrastToolTip = (props) => {
  return (
    <div className="group absolute z-50 top-1/2 left-full transform -translate-x-full p-2 -translate-y-1/2">
      <div className="flex items-center justify-center size-6 border-2 border-gray-500 rounded-full p-1">
        {props.children}
      </div>
      {/* group-hover:inline-block */}
      <div
        className={`${props.backgroundColor} absolute z-50 top-1/2 left-full transform  -translate-y-1/2 ml-2 rounded-md hidden group-hover:inline-block `}
      >
        <span className="absolute top-1/2 right-full transform rounded-sm  -translate-y-1/2 translate-x-1/2 -z-10 rotate-45 size-3 bg-inherit inline-flex"></span>

        <div className="text-white w-full h-full px-4 py-2 flex flex-col gap-1 justify-center items-center ">
          <h1 className="text-base whitespace-nowrap">
            {props.contrastPass.passLevel} - {props.contrastPass.ratio}
          </h1>
          <button className="text-sm">Learn More</button>
        </div>
      </div>
    </div>
  );
};
