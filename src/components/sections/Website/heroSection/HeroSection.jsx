export const HeroSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
  currentView,
}) => {
  return (
    <section
      className={`${
        currentView ? "w-full" : "max w-[360px]"
      } flex flex-col items-center justify-center gap-6 mt-56 mb-40`}
    >
      <h1
        style={{ ...modifiedHeaderStyle, color: colorStyle.text }}
        className="text-center"
      >
        Visualize Stunning{" "}
        <span style={{ color: colorStyle.primary }} className="font-bold">
          Colours
        </span>
        {" and "}
        <span
          style={{ color: colorStyle.secondary }}
          className="font-bold italic "
        >
          Fonts
        </span>
      </h1>
      <h2
        style={{ ...modifiedBodyStyle, color: colorStyle.text }}
        className="text-center"
      >
        Your perfect color palette and font pairing is just a few clicks away.
      </h2>

      <div
        className="bg-gray-500 p-4 rounded-[58px] rounded-bl-md"
        style={{ ...modifiedBodyStyle, color: colorStyle.text }}
      >
        <h1>Makes deciding on colours and typography easy</h1>
        <span className="flex flex-row justify-between">
          <h2>Sarah Jones</h2>
          <span style={{ color: colorStyle.primary }}>★★★★★</span>
        </span>
      </div>

      <div className="flex flex-row gap-4">
        <button
          className="website-button"
          style={{
            ...modifiedBodyStyle,
            color: colorStyle.background,
            backgroundColor: colorStyle.secondary,
          }}
        >
          How It Works
        </button>
        <button
          className="website-button"
          style={{
            ...modifiedBodyStyle,
            color: colorStyle.text,
            backgroundColor: colorStyle.primary,
          }}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};
