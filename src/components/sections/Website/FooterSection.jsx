export const FooterSection = ({ colors }) => {
  return (
    <footer className="w-full py-12 px-4 max-w-[1440px] mx-auto flex flex-col gap-6 text-text">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="basis-4/12 min-h-80 flex justify-center items-center rounded-2xl bg-secondary text-primary text-xl font-bold">
          COLOURS.IO
        </div>

        <div className="flex-1 min-h-80 flex flex-col justify-between px-8 py-4 rounded-2xl bg-primary text-background">
          <div className="flex flex-wrap gap-2 mb-4 text-base">
            <button className="cursor-pointer hover:text-secondary  transition-colors ease-in-out duration-500">
              Services
            </button>
            <button className="cursor-pointer hover:text-secondary transition-colors ease-in-out duration-500">
              Pricing
            </button>
            <button className="cursor-pointer hover:text-secondary transition-colors ease-in-out duration-500">
              Projects
            </button>
            <button className="cursor-pointer hover:text-secondary transition-colors ease-in-out duration-500">
              About
            </button>
            <button className="cursor-pointer hover:text-secondary transition-colors ease-in-out duration-500">
              Contact
            </button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2 text-base">
            <div className="flex gap-2">
              <button>Privacy</button>
              <button>Terms</button>
            </div>
            <p>© 2025 Colours.io. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 min-h-28 ">
        <button className="bg-secondary border-primary text-text hover:text-primary border hover:border-primary hover:bg-background transition-all duration-700 text-2xl font-semibold rounded-2xl aspect-square">
          Twitter
        </button>
        <button className="bg-secondary border-primary text-text hover:text-primary border hover:border-primary hover:bg-background transition-all duration-700 text-2xl font-semibold rounded-2xl aspect-square">
          LinkedIn
        </button>
        <button className="bg-secondary border-primary text-text hover:text-primary border hover:border-primary hover:bg-background transition-all duration-700 text-2xl font-semibold rounded-2xl aspect-square">
          GitHub
        </button>
        <button className="bg-secondary border-primary text-text hover:text-primary border hover:border-primary hover:bg-background transition-all duration-700 text-2xl font-semibold rounded-2xl aspect-square">
          Colours.io
        </button>
      </div>
    </footer>
  );
};
