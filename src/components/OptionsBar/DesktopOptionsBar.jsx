import React, { useState } from "react";
import { LetterCase, Palette } from "../../assets/Icons";

export const DesktopOptionsBar = () => {
  const [modals, setModals] = useState({
    fonts: false,
    colors: false,
  });

  const closeModal = (type) =>
    setModals((prev) => ({ ...prev, [type]: false }));
  const openModal = (type) => setModals((prev) => ({ ...prev, [type]: true }));
  const toggleModal = (type) =>
    setModals((prev) => ({ ...prev, [type]: !prev[type] }));

  return (
    <div>
      <div className="fixed bottom-0 flex flex-row justify-between w-full mb-2 px-2 z-30">
        <div className="relative" onMouseLeave={() => closeModal("colors")}>
          <Palette
            className="mobile-options-icons"
            onClick={() => toggleModal("colors")}
            onMouseEnter={() => openModal("colors")}
            // onMouseLeave={() => closeModal("colors")}
          />
          <div
            className={`absolute left-full ml-2 h-3 bg-black transition-all duration-600 ease-in-out`}
            style={{
              width: modals.colors ? "15rem" : "0px", // expands to the right
            }}
          ></div>
        </div>

        <LetterCase
          className="mobile-options-icons"
          onClick={() => toggleModal("fonts")}
          onMouseEnter={() => openModal("fonts")}
          onMouseLeave={() => closeModal("fonts")}
        />
      </div>
    </div>
  );
};
