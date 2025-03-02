const whyUsContent = [
  {
    icon: "",
    title: "Find the perfect font to match your vision.",
    text: "Experiment with a wide range of fonts to create a unique and cohesive design. Ensure your typography complements your brand's style and enhances readability.",
  },
  {
    icon: "",
    title: "Generate Tailored Colour Palettes",
    text: "Easily create, customize, and visualize your color palette. Design stunning color combinations that enhance your website’s visual appeal and user experience. Adjust shades, contrasts, and accents effortlessly.",
  },
  {
    icon: "",
    title: "Seamlessly export your custom color palette into CSS formats.",
    text: "Export your palettes in multiple formats, including HSV, HSL, RGB, and HEX, making it easy to integrate them into your project’s code.",
  },
];

export const WhyUsSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
  currentView,
}) => {
  return (
    <section
      className={`${
        currentView ? "w-full px-16 py-4" : "max w-[360px] px-2 py-4"
      } flex flex-col justify-center gap-6 relative min-h-[600px]`}
      style={{
        color: colorStyle.background,
        backgroundColor: colorStyle.secondary,
      }}
    >
      <header
        className={`  ${
          currentView ? "max-w-[1440px] w-full mx-auto" : "flex-col"
        }`}
      >
        <h1
          style={{ ...modifiedHeaderStyle, color: colorStyle.background }}
          className="text-start"
        >
          Effortlessly Create Stunning <br /> Color Palettes & Typography
        </h1>
      </header>

      <div
        className={`flex gap-4 ${
          currentView ? "flex-row max-w-[1440px] mx-auto" : "flex-col"
        }`}
      >
        {whyUsContent.map((content, index) => {
          return (
            <ContentSection
              key={index}
              index={index}
              modifiedHeaderStyle={modifiedHeaderStyle}
              modifiedBodyStyle={modifiedBodyStyle}
              colorStyle={colorStyle}
              content={content}
              currentView={currentView}
            />
          );
        })}
      </div>

      <div className="absolute overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-row gap-24 items-center justify-center">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="block  min-w-[2px] h-full"
            style={{
              backgroundColor: colorStyle.accent,
            }}
          />
        ))}
      </div>
    </section>
  );
};

const ContentSection = (props) => {
  // Destructure to make things cleaner
  const {
    index,
    modifiedHeaderStyle,
    modifiedBodyStyle,
    colorStyle,
    content,
    currentView,
  } = props;

  // Determine if it's the first item (index === 0)
  const isFirstItem = index === 0;

  return (
    <div
      key={index}
      className={`px-3 basis-1/3 rounded-xl z-40 min-h-48 py-4`}
      style={{
        backgroundColor: isFirstItem
          ? colorStyle.primary
          : colorStyle.secondary,
        border: isFirstItem ? "none" : `1px solid ${colorStyle.primary}`,
      }}
    >
      <h2
        style={{
          ...modifiedHeaderStyle,
          color: isFirstItem ? colorStyle.secondary : colorStyle.primary,
        }}
      >
        {content.title}
      </h2>
      <p
        style={{
          ...modifiedBodyStyle,
          color: isFirstItem ? colorStyle.secondary : colorStyle.primary,
        }}
      >
        {content.text}
      </p>
    </div>
  );
};
