import { PricingCard } from "./reusableComponents/pricingCard/pricingCard";

const pricingPlans = ["Basic", "Premium", "Pro"];

export const PricingSection = ({ colors, headerFont, bodyFont }) => {
  return (
    <section
      className="container mx-auto w-full flex flex-col items-center justify-center gap-6 mb-8  px-2 sm:px-0"
      style={{ fontFamily: bodyFont || "inherit" }}
    >
      <div className="flex flex-col gap-3 justify-center items-center max-w-[972px] w-full">
        <header>
          <h1
            className="text-2xl text-center mb-4 text-text"
            style={{ fontFamily: headerFont || "inherit" }}
          >
            Why Choose{" "}
            <span className="text-primary font-bold">Color Shift</span>
          </h1>
          <p className="max-w-[480px] text-center mb-4 text-text">
            Join thousands of designers, marketers, and hobbyists who use Color
            Shift to create stunning designs effortlessly.
          </p>
        </header>

        <div
          className="flex flex-row flex-wrap gap-12 justify-center"
          style={{ fontFamily: headerFont || "inherit" }}
        >
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-3xl italic font-semibold text-primary">95%</h1>
            <h2 className="text-center text-sm text-accent">
              Improved design consistency
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-3xl italic font-semibold text-primary">50k+</h1>
            <h2 className="text-center text-sm text-accent">
              Custom palettes created
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-3xl italic font-semibold text-primary">120+</h1>
            <h2 className="text-center text-sm text-accent">
              Font styles available
            </h2>
          </div>
        </div>

        <section
          className="flex flex-wrap justify-center gap-4 w-full mt-8"
          style={{ fontFamily: bodyFont || "inherit" }}
        >
          {pricingPlans.map((title, index) => (
            <PricingCard key={index} title={title} isFirst={index === 0} />
          ))}
        </section>
      </div>
    </section>
  );
};
