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

export const HowItWorksSection = ({ colors }) => {
  return (
    <section
      className={`container mx-auto  flex flex-col justify-center relative`}
    >
      <header className={`mt-20 mb-12`}>
        <h1 className="text-xl font-bold text-gray-900">
          Master your design with <span className="font-bold">Colours.io</span>
        </h1>
      </header>

      <div
        className={`grid gap-4 grid-flow-row row-start-auto lg:grid-cols-3 `}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg shadow-sm w-full min-h-[180px] bg-gray-300 `}
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
      <h1 className="font-bold mb-2 text-gray-800">{title}</h1>
      <p className="text-sm text-gray-700">{text}</p>
    </>
  );
};
