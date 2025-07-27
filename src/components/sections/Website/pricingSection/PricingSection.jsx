import { PricingCard } from "../reusableComponents/pricingCard/pricingCard";

const pricingPlans = ["Basic", "Premium", "Pro"];

export const PricingSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
  currentView,
}) => {
  return (
    <section
      className={`${
        currentView ? "w-full" : "max w-[360px]"
      } flex flex-col items-center justify-center gap-6 mb-8`}
    >
      <div
        className="flex flex-col gap-3 justify-center items-center max-w-[972px] w-full"
        style={{ color: colorStyle.text }}
      >
        <header>
          <h1 style={modifiedHeaderStyle} className="text-center mb-4">
            Why Choose Colours.io?
          </h1>
          <p
            style={modifiedBodyStyle}
            className="max-w-[480px] text-center mb-4"
          >
            Join thousands of designers, marketers, and hobbyists who use
            Colours.io to create stunning designs effortlessly.
          </p>
        </header>

        <div className="flex flex-row gap-16">
          <div className="flex flex-col gap-1 items-center">
            <h1
              style={{ ...modifiedHeaderStyle, color: colorStyle.secondary }}
              className="italic"
            >
              95%
            </h1>
            <h2 style={modifiedBodyStyle} className="text-center">
              Improved design consistency
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1
              style={{ ...modifiedHeaderStyle, color: colorStyle.secondary }}
              className="italic"
            >
              50k+
            </h1>
            <h2 style={modifiedBodyStyle} className="text-center">
              Custom palettes created
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1
              style={{ ...modifiedHeaderStyle, color: colorStyle.secondary }}
              className="italic"
            >
              120+
            </h1>
            <h2 style={modifiedBodyStyle} className="text-center">
              Font styles available
            </h2>
          </div>
        </div>

        <section
          className={`flex flex-row flex-wrap gap-2 w-full ${
            currentView ? "flex-row" : "flex-col px-2"
          }`}
        >
          {pricingPlans.map((title, index) => {
            return (
              <PricingCard
                key={index}
                index={index}
                modifiedHeaderStyle={modifiedHeaderStyle}
                modifiedBodyStyle={modifiedBodyStyle}
                colorStyle={colorStyle}
                title={title}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
