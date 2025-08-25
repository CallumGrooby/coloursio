import DynamicText from "../../DynamicText";

export const HeroSection = ({ colors, headerFont, bodyFont }) => {
  return (
    <section
      className={`container mx-auto flex flex-col items-center justify-center gap-6 pt-40 lg:pt-56 pb-40 px-2`}
    >
      <h1
        className="text-center text-3xl font-semibold"
        style={{ fontFamily: headerFont || "inherit" }}
      >
        Visualize Stunning{" "}
        <span className="font-bold text-primary">Colors</span>
        {" and "}
        <span className="font-bold italic text-accent">Fonts</span>
      </h1>

      <h2
        className="text-center text-lg text-text"
        style={{ fontFamily: bodyFont || "inherit" }}
      >
        Your perfect color palette and font pairing is just a few clicks away.
      </h2>

      <div
        className="bg-primary text-white px-8 py-2 mx-6 rounded-[58px] rounded-bl-md "
        style={{ fontFamily: bodyFont || "inherit" }}
      >
        <span className="flex flex-row justify-center">
          <span className="text-accent text-2xl">★★★★★</span>
        </span>
        <h1 className="font-normal text-center text-base lg:text-lg">
          Makes deciding on Colors and typography easy
        </h1>
      </div>

      <div
        className="flex flex-row gap-4"
        style={{ fontFamily: headerFont || "inherit" }}
      >
        <button
          className="website-button text-lg bg-primary  text-white px-6 py-3 rounded-md
        hover:bg-secondary hover:text-text transition-colors duration-300 ease-in-out cursor-pointer"
        >
          How It Works
        </button>

        <DynamicText backgroundColor={colors.secondary}>
          <button
            className="website-button bg-secondary text-lg px-6 py-3 rounded-md
           hover:bg-accent hover:text-text transition-colors duration-300 ease-in-out cursor-pointer"
          >
            Get Started
          </button>
        </DynamicText>
      </div>
    </section>
  );
};
