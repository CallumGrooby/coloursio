export const HeroSection = ({ colors }) => {
  return (
    <section
      className={`container mx-auto flex flex-col items-center justify-center gap-6 mt-56 mb-40`}
    >
      <h1 className="text-center text-3xl font-semibold">
        Visualize Stunning{" "}
        <span className="font-bold text-gray-700">Colours</span>
        {" and "}
        <span className="font-bold italic text-gray-600">Fonts</span>
      </h1>

      <h2 className="text-center text-lg text-gray-700">
        Your perfect color palette and font pairing is just a few clicks away.
      </h2>

      <div className="bg-gray-500 text-white p-4 rounded-[58px] rounded-bl-md">
        <h1 className="font-semibold">
          Makes deciding on colours and typography easy
        </h1>
        <span className="flex flex-row justify-between mt-2">
          <h2>Sarah Jones</h2>
          <span className="text-yellow-300">★★★★★</span>
        </span>
      </div>

      <div className="flex flex-row gap-4">
        <button className="website-button bg-gray-600 text-white px-4 py-2 rounded-md">
          How It Works
        </button>
        <button className="website-button bg-gray-700 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </section>
  );
};
