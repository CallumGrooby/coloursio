import { PricingCard } from "./reusableComponents/pricingCard/pricingCard";

const pricingPlans = ["Basic", "Premium", "Pro"];

export const PricingSection = ({ colors }) => {
  return (
    <section className="container mx-auto w-full flex flex-col items-center justify-center gap-6 mb-8">
      <div className="flex flex-col gap-3 justify-center items-center max-w-[972px] w-full text-gray-800">
        <header>
          <h1 className="text-2xl font-bold text-center mb-4">
            Why Choose Colours.io?
          </h1>
          <p className="max-w-[480px] text-center mb-4 text-gray-600">
            Join thousands of designers, marketers, and hobbyists who use
            Colours.io to create stunning designs effortlessly.
          </p>
        </header>

        <div className="flex flex-row flex-wrap gap-12 justify-center">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-3xl italic font-semibold text-gray-700">95%</h1>
            <h2 className="text-center text-sm text-gray-600">
              Improved design consistency
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-3xl italic font-semibold text-gray-700">
              50k+
            </h1>
            <h2 className="text-center text-sm text-gray-600">
              Custom palettes created
            </h2>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-3xl italic font-semibold text-gray-700">
              120+
            </h1>
            <h2 className="text-center text-sm text-gray-600">
              Font styles available
            </h2>
          </div>
        </div>

        <section className="flex flex-wrap justify-center gap-4 w-full mt-8">
          {pricingPlans.map((title, index) => (
            <PricingCard key={index} title={title} />
          ))}
        </section>
      </div>
    </section>
  );
};
