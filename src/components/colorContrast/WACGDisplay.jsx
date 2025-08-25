import { CheckIcon, CloseIcon } from "../../assets/Icons";

export const WAGCDisplay = ({ colorsData }) => {
  return (
    <div className="bg-[#91FE91] min-h-[154px] flex flex-col items-center lg:items-start justify-between gap-8  px-8 py-4 rounded-sm ">
      <h2 className="text-4xl">{colorsData.ratio}</h2>

      <div className="flex flex-row flex-wrap gap-8 max-w-[264px] lg:max-w-none justify-center lg:justify-start ">
        {/* <div>
          <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm">
            <p className="capitalize">{colorsData.AALarge}</p>
            <CheckIcon className={"size-6"} />
          </span>
          <h3>AA Large</h3>
        </div> */}

        <DisplayPassLevel title={"AA Large"} isPassed={colorsData.AALarge} />
        <DisplayPassLevel title={"AAA Large"} isPassed={colorsData.AAALarge} />
        <DisplayPassLevel title={"AA Normal"} isPassed={colorsData.AA} />
        <DisplayPassLevel title={"AAA Normal"} isPassed={colorsData.AAA} />

        {/* <div>
          <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm">
            <p className="capitalize">{colorsData.AALarge}</p>
            <CheckIcon className={"size-6"} />
          </span>
          <h3>AA Large</h3>
        </div>
        <div>
          <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm">
            <p className="capitalize">{colorsData.AALarge}</p>
            <CheckIcon className={"size-6"} />
          </span>
          <h3>AA Large</h3>
        </div>

        <div>
          <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm">
            <p className="capitalize">{colorsData.AALarge}</p>
            <CheckIcon className={"size-6"} />
          </span>
          <h3>AA Large</h3>
        </div> */}
      </div>
    </div>
  );
};

const DisplayPassLevel = ({ title, isPassed }) => {
  let hasPassed = isPassed === "fail" ? false : true;

  return (
    <div>
      <span className="flex flex-row gap-2 px-2 py-1 bg-black text-white rounded-sm justify-between max-w-[84px]">
        <p className="capitalize">{isPassed}</p>

        {hasPassed ? (
          <CheckIcon className={"size-6"} />
        ) : (
          <CloseIcon className={"size-6"} />
        )}
      </span>
      <h3>{title}</h3>
    </div>
  );
};
