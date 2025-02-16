const whyUsContent = [
  {
    icon: "",
    title: "Effortless Design",
    text: "Create stunning designs without needing expertise in colour or typography.",
  },
  {
    icon: "",
    title: "Real-Time Customization",
    text: "See changes instantly and refine your design with ease.",
  },
  {
    icon: "",
    title: "Crafted for Every Creative",
    text: "Perfect for designers, marketers, and hobbyists—flexible and intuitive tools for all.",
  },
];

export const WhyUsSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
}) => {
  return (
    <section
      className="max-w-[972px] w-full bg-gray-400 rounded-2xl px-16 py-16 shadow-2xl"
      style={{ background: colorStyle.secondary }}
    >
      <h2
        className="uppercase"
        style={{ ...modifiedBodyStyle, color: colorStyle.primary }}
      >
        Why Us
      </h2>
      <h1
        style={{ ...modifiedHeaderStyle, color: colorStyle.text }}
        className="max-w-96 w-full"
      >
        Crafting Perfection <br></br> One Click at a Time
      </h1>

      <div className="w-full flex flex-row gap-8 mt-8">
        {whyUsContent.map((content, index) => (
          <div
            key={index}
            className="p-2"
            style={{ ...modifiedBodyStyle, color: colorStyle.text }}
          >
            <span className="inline-flex bg-gray-600 size-10"></span>
            <h1 className="!font-bold" style={{ color: colorStyle.primary }}>
              {content.title}
            </h1>
            <p>{content.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
