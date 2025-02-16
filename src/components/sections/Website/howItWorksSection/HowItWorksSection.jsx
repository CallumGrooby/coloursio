const howItWorksContent = [
  {
    title: "Pick a Font",
    text: "Find a font that matches your project's vibe. Browse a variety of styles and set the perfect tone.",
  },
  {
    title: "Choose Your Colours",
    text: "Experiment with text, background, and accent colours. Mix and match for contrast or harmony.",
  },
  {
    title: "Refine",
    text: "Fine-tune fonts and colours for a polished look. Adjust sizes, saturation, and placement.",
  },
  {
    title: "Visualize",
    text: "See your design come to life in real time. Instantly preview and tweak as needed.",
  },
];

export const HowItWorksSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
}) => {
  return (
    <section
      className="w-full bg-gray-600"
      style={{ background: colorStyle.secondary }}
    >
      <div className="flex flex-col gap-4 justify-center items-center h-full min-h-[738px] max-w-[972px] w-full mx-auto">
        <h1 style={{ ...modifiedHeaderStyle, color: colorStyle.text }}>
          How Does It Work?
        </h1>

        <div className="flex flex-wrap -mx-2 px-4">
          {howItWorksContent.map((content, index) => (
            <div key={index} className="w-1/2 px-2 pb-4">
              <div
                className="border border-gray-300 p-4 min-h-[280px] rounded-2xl"
                style={{
                  color: colorStyle.text,
                  background: colorStyle.background,
                }}
              >
                <h1
                  style={{ ...modifiedHeaderStyle, color: colorStyle.primary }}
                  className="mb-2"
                >
                  {content.title}
                </h1>
                <p style={{ ...modifiedBodyStyle, color: colorStyle.text }}>
                  {content.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
