const sections = [
  {
    title: "Choosing the Right Font for Your Brand",
    text: "Typography sets the tone for your brand. Discover how to select a font that communicates your message effectively.",
  },
  {
    title: "Creating a Unique Brand Identity with Color & Type",
    text: "Your brand’s personality starts with visuals. Learn how to craft a distinctive identity using color psychology and typography.",
  },
  {
    title: "5 Common Color Mistakes (And How to Avoid Them)",
    text: "Overuse of bright colors? Poor contrast? Learn the most common color mistakes in design and how to fix them.",
  },
  {
    title: "Why Typography Matters More Than You Think",
    text: "Beyond just aesthetics, typography plays a crucial role in readability, hierarchy, and user experience.",
  },
  {
    title: "How to Create a Cohesive Color Palette in Minutes",
    text: "Struggling with color harmony? Learn simple techniques to build stunning, well-balanced palettes effortlessly.",
  },
  {
    title: "Dark Mode vs. Light Mode: Which Works Best?",
    text: "Explore the pros and cons of dark and light UI themes, and how color contrast impacts readability and accessibility.",
  },
];

export const BlogSection = ({ colors, headerFont, bodyFont }) => {
  // Distribute items into 4 columns to mimic a masonry look
  const columnCount = 4;
  const cols = Array.from({ length: columnCount }, () => []);
  sections.forEach((item, i) => {
    cols[i % columnCount].push(item);
  });

  return (
    <section
      className="w-full py-4 px-4 sm:px-0 max-w-[972px]   mx-auto"
      style={{ fontFamily: bodyFont || "inherit" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cols.map((col, colIdx) => (
          <div className="grid gap-4" key={`col-${colIdx}`}>
            {col.map((item, idx) => (
              <ContentCard
                key={`${colIdx}-${idx}-${item.title}`}
                title={item.title}
                text={item.text}
                headerFont={headerFont}
                colors={colors}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

const ContentCard = ({ title, text, headerFont, colors }) => {
  return (
    <article
      className={`w-full rounded-xl shadow bg-inherit border border-primary p-4 hover:shadow-lg transition-shadow duration-300`}
      aria-label={title}
    >
      <h3
        className={`text-lg font-bold mb-2 text-primary`}
        style={{ fontFamily: headerFont || "inherit" }}
      >
        {title}
      </h3>
      <p className={`text-sm leading-relaxed text-text`}>{text}</p>
    </article>
  );
};
