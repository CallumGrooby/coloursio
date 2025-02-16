import { PricingCard } from "../reusableComponents/pricingCard/pricingCard";

const pricingPlans = ["Basic", "Premium", "Pro"];

export const PricingSection = ({
  modifiedHeaderStyle,
  modifiedBodyStyle,
  colorStyle,
}) => {
  return (
    <section className="max-w-[972px] w-full mx-auto">
      <div
        className="flex flex-col gap-3 justify-center items-center max-w-[972px] w-full"
        style={{ color: colorStyle.text }}
      >
        <h2 style={modifiedBodyStyle}>Our Mission</h2>
        <h1 style={modifiedHeaderStyle} className="text-center">
          Helping you visualise the perfect
          <br /> colours for your website.
        </h1>
        <p style={modifiedBodyStyle} className="max-w-[480px] text-center">
          Thousands of designers, marketers, and hobbyists have transformed
          their designs with perfect colour and font combinations.
        </p>

        <div className="flex flex-row gap-16">
          <div className="flex flex-col gap-1 items-center">
            <h1 style={modifiedHeaderStyle} className="italic">
              95%
            </h1>
            <h2 style={modifiedBodyStyle} className="text-center">
              Improved design consistency
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1 style={modifiedHeaderStyle} className="italic">
              50k+
            </h1>
            <h2 style={modifiedBodyStyle} className="text-center">
              Custom palettes created
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1 style={modifiedHeaderStyle} className="italic">
              120+
            </h1>
            <h2 style={modifiedBodyStyle} className="text-center">
              Font styles available
            </h2>
          </div>
        </div>

        <section className="flex flex-row flex-wrap gap-2 w-full box-content">
          {pricingPlans.map((content, index) => {
            return (
              <PricingCard
                key={index}
                modifiedHeaderStyle={modifiedHeaderStyle}
                modifiedBodyStyle={modifiedBodyStyle}
                colorStyle={colorStyle}
                content={content}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
