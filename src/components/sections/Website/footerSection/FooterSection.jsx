export const FooterSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
}) => {
  return (
    <footer
      style={{ color: colorStyle.text }}
      className="flex flex-col gap-4 max-w-[972px] w-full mx-auto rounded-2xl"
    >
      <div
        className="w-full flex flex-row justify-between items-center gap-16 rounded-2xl px-8 py-4"
        style={{
          ...modifiedBodyStyle,
          color: colorStyle.text,
          backgroundColor: colorStyle.secondary,
        }}
      >
        <h1 style={modifiedHeaderStyle} className="w-full">
          Designed to make creativity effortless.
        </h1>
        <button
          style={{
            ...modifiedBodyStyle,
            color: colorStyle.text,
            backgroundColor: colorStyle.primary,
          }}
          className="py-3 px-4 rounded-xl text-white w-full max-w-48"
        >
          How It Works
        </button>
      </div>
      <div className="w-full flex flex-row gap-4">
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
          <span className="flex flex-col gap-2 justify-end">
            <span className="inline-flex gap-2">
              <button>Services</button>
              <button>Pricing</button>
              <button>Projects</button>
            </span>
            <span className="inline-flex gap-2">
              <button>About</button>
              <button>Contact</button>
            </span>
            <p>© 2025 Colours.io. All rights reserved.</p>
          </span>
          <span className="flex flex-row gap-2 justify-end items-end">
            <button>Privacy</button>
            <button>Terms</button>
          </span>
        </div>
      </div>

      <div
        className="grow h-full min-h-28 flex flex-row justify-between gap-4"
        style={{
          ...modifiedBodyStyle,
          color: colorStyle.text,
        }}
      >
        <button
          style={{ backgroundColor: colorStyle.secondary }}
          className="grow rounded-2xl"
        >
          Twitter
        </button>
        <button
          style={{ backgroundColor: colorStyle.secondary }}
          className="grow rounded-2xl"
        >
          Linked In
        </button>
        <button
          style={{ backgroundColor: colorStyle.secondary }}
          className="grow rounded-2xl"
        >
          Github
        </button>
        <button
          style={{ backgroundColor: colorStyle.secondary }}
          className="grow rounded-2xl"
        >
          Colours.io
        </button>
      </div>
    </footer>
  );
};
