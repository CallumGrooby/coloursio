export const FooterActionSection = ({ colors }) => {
  return (
    <section className="w-full py-12 px-4 flex flex-col justify-center gap-6 min-h-[460px] mt-8 mb-4 text-center bg-gray-200 text-gray-800">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-4 items-center">
        <h1 className="text-2xl font-bold">
          Export Your Stunning Colours and Fonts
        </h1>
        <p className="text-base text-gray-700">
          Your perfect color palette and font pairing is almost complete.
        </p>
        <button className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Export your settings
        </button>
      </div>
    </section>
  );
};
