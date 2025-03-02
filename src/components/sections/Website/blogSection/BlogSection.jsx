const sections = [
  {
    title: "Choosing the Right Font for Your Brand",
    text: "Typography sets the tone for your brand. Discover how to select a font that communicates your message effectively.",
    gridArea: "1 / 1 / 4 / 7", // row-start / col-start / row-end / col-end
  },
  {
    title: "Creating a Unique Brand Identity with Color & Type",
    text: "Your brand’s personality starts with visuals. Learn how to craft a distinctive identity using color psychology and typography.",
    gridArea: "4 / 1 / 8 / 4",
  },
  {
    title: "5 Common Color Mistakes (And How to Avoid Them)",
    text: "Overuse of bright colors? Poor contrast? Learn the most common color mistakes in design and how to fix them.",
    gridArea: "4 / 4 / 8 / 7",
  },
  {
    title: "Why Typography Matters More Than You Think",
    text: "Beyond just aesthetics, typography plays a crucial role in readability, hierarchy, and user experience.",
    gridArea: "1 / 7 / 4 / 10",
  },
  {
    title: "How to Create a Cohesive Color Palette in Minutes",
    text: "Struggling with color harmony? Learn simple techniques to build stunning, well-balanced palettes effortlessly.",
    gridArea: "4 / 7 / 6 / 10",
  },
  {
    title: "Dark Mode vs. Light Mode: Which Works Best?",
    text: "Explore the pros and cons of dark and light UI themes, and how color contrast impacts readability and accessibility.",
    gridArea: "6 / 7 / 8 / 10",
  },
];

export const BlogSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
  currentView,
}) => {
  return (
    <section
      className={`${
        currentView ? "w-full py-4 max-w-[1440px]" : "max w-[360px] px-2 py-4"
      } flex flex-col justify-center gap-6 relative min-h-[800px]`}
    >
      <div className="grid grid-cols-9 grid-rows-7 gap-4 w-full h-full">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 min-h-48 justify-end bg-gray-400 rounded-2xl box-border px-4 py-2`}
            style={{
              gridArea: section.gridArea,
              backgroundColor:
                index === 0 ? colorStyle.primary : colorStyle.secondary,
            }}
          >
            <ContentSection
              index={index}
              modifiedHeaderStyle={modifiedHeaderStyle}
              modifiedBodyStyle={modifiedBodyStyle}
              colorStyle={colorStyle}
              title={section.title}
              text={section.text}
              currentView={currentView}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const ContentSection = (props) => {
  const {
    modifiedHeaderStyle,
    modifiedBodyStyle,
    colorStyle,
    title,
    text,
    currentView,
  } = props;

  return (
    <>
      <h1
        className="text-xl font-bold mb-2"
        style={{
          ...modifiedHeaderStyle,
          color: colorStyle.text,
        }}
      >
        {title}
      </h1>
      <p
        className="text-sm"
        style={{ ...modifiedBodyStyle, color: colorStyle.text }}
      >
        {text}
      </p>
    </>
  );
};
