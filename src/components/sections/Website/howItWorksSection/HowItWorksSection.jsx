const sections = [
  {
    title: "Choose Your Typography",
    text: "Browse through a variety of fonts and pick one that fits your project’s mood and personality.",
    gridClass: "col-span-3",
  },
  {
    title: "Customize Font Styles",
    text: "Modify typography settings to achieve the perfect balance between readability and aesthetics.",
    gridClass: "col-span-4",
  },
  {
    title: "Select Your Color Palette",
    text: "Experiment with different colors and tones to find the right combination for text, backgrounds, and accents.",
    gridClass: "col-span-2",
  },
  {
    title: "Fine-Tune with Live Previews",
    text: "Instantly visualize your font and color selections within sample layouts, ensuring a seamless design experience.",
    gridClass: "col-span-2",
  },
  {
    title: "Test Accessibility & Contrast",
    text: "Make sure your colors and typography are readable. Use built-in contrast checks to ensure accessibility compliance, making your design usable for everyone.",
    gridClass: "col-span-4",
  },
  {
    title: "Export & Implement",
    text: "Seamlessly export your custom styles in CSS formats. Download your final color palette and typography choices in formats like HEX, RGB, HSL, or direct CSS variables for easy integration.",
    gridClass: "col-span-3",
  },
];

export const HowItWorksSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
  currentView,
}) => {
  return (
    <section
      className={`${
        currentView ? "w-full px-16 py-4" : "max w-[360px] px-2 py-4"
      } flex flex-col justify-center gap-6 relative`}
    >
      <header className={` ${currentView ? "mt-20 mb-4" : "mt-8 mb-4"}`}>
        <h1 style={{ ...modifiedHeaderStyle, color: colorStyle.text }}>
          Master your design with <span className="font-bold">Colours.io</span>
        </h1>
      </header>
      <div
        className={`grid grid-cols-1 gap-4 ${
          currentView ? "!grid-cols-9" : "!grid-cols-1"
        }`}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${
              currentView && section.gridClass
            } p-4 border rounded-lg shadow-sm w-full min-h-[180px]`}
            style={{
              color: colorStyle.text,
              backgroundColor: colorStyle.primary,
            }}
          >
            <ContentSection
              title={section.title}
              text={section.text}
              modifiedBodyStyle={modifiedBodyStyle}
              modifiedHeaderStyle={modifiedHeaderStyle}
              colorStyle={colorStyle}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const ContentSection = (props) => {
  const { modifiedHeaderStyle, modifiedBodyStyle, colorStyle, title, text } =
    props;

  return (
    <>
      <h1
        className="font-bold mb-2"
        style={{
          ...modifiedHeaderStyle,
        }}
      >
        {title}
      </h1>
      <p
        className="mb-1"
        style={{
          ...modifiedBodyStyle,
          color: colorStyle.text,
        }}
      >
        {text}
      </p>
    </>
  );
};
