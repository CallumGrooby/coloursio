import DynamicText from "../../DynamicText";

export const HeroSection = ({ colors, headerFont, bodyFont }) => {
  return (
    <section
      className={`container mx-auto flex flex-col items-center justify-center gap-6 pt-56 pb-40`}
    >
      <h1
        className="text-center text-3xl font-semibold"
        style={{ fontFamily: headerFont || "inherit" }}
      >
        Visualize Stunning{" "}
        <span className="font-bold text-primary">Colours</span>
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
        className="bg-primary text-white p-4 rounded-[58px] rounded-bl-md"
        style={{ fontFamily: bodyFont || "inherit" }}
      >
        <h1 className="font-semibold">
          Makes deciding on colours and typography easy
        </h1>
        <span className="flex flex-row justify-between mt-2">
          <h2>Sarah Jones</h2>
          <span className="text-accent">★★★★★</span>
        </span>
      </div>

      <div
        className="flex flex-row gap-4"
        style={{ fontFamily: headerFont || "inherit" }}
      >
        <button className="website-button text-lg bg-primary text-white px-6 py-3 rounded-md">
          How It Works
        </button>

        <DynamicText backgroundColor={colors.secondary}>
          <button className="website-button bg-secondary text-lg px-6 py-3 rounded-md">
            Get Started
          </button>
        </DynamicText>
      </div>
    </section>
  );
};
