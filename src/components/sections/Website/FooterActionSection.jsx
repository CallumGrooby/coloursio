export const FooterActionSection = ({ colors, headerFont, bodyFont }) => {
  return (
    <section className="w-full py-12 px-4 flex flex-col justify-center gap-6 min-h-[460px] mt-8 mb-4 text-center bg-primary text-text">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-4 items-center ">
        <h1
          className="text-2xl font-bold text-background"
          style={{ fontFamily: headerFont || "inherit" }}
        >
          Export Your Stunning Colours and Fonts
        </h1>
        <p
          className="text-base text-background"
          style={{ fontFamily: bodyFont || "inherit" }}
        >
          Your perfect color palette and font pairing is almost complete.
        </p>
        <button
          className="bg-secondary text-text px-6 py-3 rounded-full hover:bg-accent hover:text-background border border-background transition-all duration-500"
          style={{ fontFamily: headerFont || "inherit" }}
        >
          Export your settings
        </button>
      </div>
    </section>
  );
};
