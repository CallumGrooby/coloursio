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

export const HowItWorksSection = ({ colors, headerFont, bodyFont }) => {
  return (
    <section
      className={`container mx-auto  px-2 flex flex-col justify-center relative`}
    >
      <header className={`mt-20 mb-12`}>
        <h1
          className="text-4xl text-text"
          style={{ fontFamily: headerFont || "inherit" }}
        >
          Master your design with{" "}
          <span className="font-bold italic text-primary ">Color Shift</span>
        </h1>
      </header>

      <div
        className={`grid gap-4 grid-flow-row row-start-auto lg:grid-cols-3 `}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg shadow-xs w-full min-h-[180px] bg-secondary `}
            style={{ fontFamily: bodyFont || "inherit" }}
          >
            <ContentSection title={section.title} text={section.text} />
          </div>
        ))}
      </div>
    </section>
  );
};

const ContentSection = ({ title, text }) => {
  return (
    <>
      <h1 className="font-bold text-xl mb-2 text-text">{title}</h1>
      <p className="text-base text-text">{text}</p>
    </>
  );
};
