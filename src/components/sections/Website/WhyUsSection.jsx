import DynamicText from "../../DynamicText";

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

export const WhyUsSection = ({ colors }) => {
  return (
    <section
      className={`w-full px-16 py-4 flex flex-col justify-center gap-6 relative min-h-[600px] bg-secondary text-text`}
    >
      <header className={`max-w-[1440px] w-full mx-auto`}>
        <h1 className="text-start text-primary text-2xl">
          Effortlessly Create Stunning <br /> Color Palettes & Typography
        </h1>
      </header>

      <div
        className={`grid gap-4 grid-flow-row row-start-auto lg:grid-cols-3 max-w-[1440px] mx-auto`}
      >
        {whyUsContent.map((content, index) => (
          <ContentSection
            key={index}
            colors={colors}
            index={index}
            content={content}
          />
        ))}
      </div>

      {/* <div className="absolute overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-row gap-24 items-center justify-center z-0">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="block min-w-[2px] h-full bg-gray-400" />
        ))}
      </div> */}
    </section>
  );
};

const ContentSection = ({ colors, index, content }) => {
  const isFirstItem = index === 0;

  if (isFirstItem) {
    return (
      <DynamicText backgroundColor={colors.primary}>
        <div
          className={`px-3 basis-1/3 rounded-xl z-40 min-h-48 py-4 bg-primary`}
        >
          <h2 className="text-lg font-semibold mb-2">{content.title}</h2>
          <p className="text-sm">{content.text}</p>
        </div>
      </DynamicText>
    );
  }

  return (
    <div
      className={`px-3 basis-1/3 rounded-xl z-40 min-h-48 py-4 ${
        isFirstItem ? "bg-primary" : "bg-inherit border border-accent"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">{content.title}</h2>
      <p className="text-sm">{content.text}</p>
    </div>
  );
};
