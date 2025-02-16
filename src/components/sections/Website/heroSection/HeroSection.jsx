export const HeroSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
}) => {
  return (
    <section
      className={`flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[340px] pt-20 lg:pt-60 box-content max-w-[972px] w-full`}
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-2 w-full lg:w-[486px] text-center lg:text-left">
        <h1
          style={{ ...modifiedHeaderStyle, color: colorStyle.text }}
          className="text-2xl md:text-3xl xl:text-4xl"
        >
          Visualize Stunning <br />
          <span className="font-bold" style={{ color: colorStyle.primary }}>
            Colours
          </span>{" "}
          and
          <span
            className="font-bold italic"
            style={{ color: colorStyle.accent }}
          >
            {" "}
            Fonts{" "}
          </span>
          <br />
          Perfectly in Moments
        </h1>
        <p
          style={{ ...modifiedBodyStyle, color: colorStyle.text }}
          className="text-sm md:text-base"
        >
          Your perfect color palette and font pairing is just a few clicks away.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-2 justify-center lg:justify-start">
          <button
            style={modifiedBodyStyle}
            className="bg-[#2A8E9E] py-3 px-4 rounded-xl text-white"
          >
            How It Works
          </button>
          <button
            style={modifiedBodyStyle}
            className="bg-[#2A8E9E] py-3 px-4 rounded-xl text-white"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div
        className="relative w-[280px] sm:w-[320px] h-[320px] sm:h-[356px] bg-green-300 rounded-2xl"
        style={{ background: colorStyle.primary }}
      >
        <div className="absolute top-16 left-1/3 transform translate-x-1/2 -translate-y-1/2 w-[176px] h-[228px] flex flex-col gap-0">
          <div
            className="bg-[#2A8E9E] grow rounded-t-2xl "
            style={{ background: colorStyle.secondary }}
          ></div>
          <div
            className="bg-[#01415B] basis-1/6 rounded-b-2xl"
            style={{ background: colorStyle.accent }}
          ></div>
        </div>
      </div>
    </section>
  );
};
