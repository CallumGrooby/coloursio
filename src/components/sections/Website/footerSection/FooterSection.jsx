export const FooterSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
  currentView,
}) => {
  return (
    <footer
      style={{ color: colorStyle.text }}
      className={`${
        currentView
          ? "w-full py-4 max-w-[1440px]"
          : "max w-[360px] px-2 py-4 flex-row"
      } flex flex-col justify-center gap-6 relative min-h-[800px]`}
    >
      <div
        className={`w-full flex gap-4 ${
          currentView ? "flex-row" : " flex-col"
        }`}
      >
        <div
          style={{
            ...modifiedBodyStyle,
            color: colorStyle.text,
            backgroundColor: colorStyle.primary,
          }}
          className="basis-4/12 h-full min-h-80 flex justify-center items-center rounded-2xl"
        >
          <h1>COLOURS.IO</h1>
        </div>
        <div
          className="grow h-full min-h-80 flex flex-row justify-between px-8 py-4 rounded-2xl"
          style={{
            ...modifiedBodyStyle,
            color: colorStyle.text,
            backgroundColor: colorStyle.secondary,
          }}
        >
          <span className="flex flex-col gap-2 justify-end w-full">
            <span className="inline-flex gap-2 flex-wrap">
              <button>Services</button>
              <button>Pricing</button>
              <button>Projects</button>
              <button>About</button>
              <button>Contact</button>
            </span>

            <span
              className={`flex flex-wrap gap-2 ${
                currentView ? "flex-row-reverse justify-between" : "flex-col"
              }`}
            >
              <span className="inline-flex gap-2">
                <button>Privacy</button>
                <button>Terms</button>
              </span>
              <p>© 2025 Colours.io. All rights reserved.</p>
            </span>
          </span>
        </div>
      </div>

      <div
        className="h-full min-h-28 gap-4 grid grid-cols-2"
        style={{
          ...modifiedBodyStyle,
          color: colorStyle.text,
        }}
      >
        <button
          style={{ backgroundColor: colorStyle.secondary }}
          className="grow rounded-2xl aspect-square"
        >
          Twitter
        </button>
        <button
          style={{ backgroundColor: colorStyle.secondary }}
          className="grow rounded-2xl aspect-square"
        >
          Linked In
        </button>
        <button
          style={{ backgroundColor: colorStyle.secondary }}
          className="grow rounded-2xl aspect-square"
        >
          Github
        </button>
        <button
          style={{ backgroundColor: colorStyle.secondary }}
          className="grow rounded-2xl aspect-square"
        >
          Colours.io
        </button>
      </div>
    </footer>
  );
};
