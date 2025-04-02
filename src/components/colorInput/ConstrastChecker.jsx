import { debounce } from "lodash";
import React, { useState, useMemo, useEffect } from "react";
import Cross from "../../assets/cross.svg?react";
import Tick from "../../assets/tick.svg?react";
import Warning from "../../assets/warning.svg?react";
import { CheckContrast } from "../../utils/ContrastApi";
import { ContrastToolTip } from "./ContrastToolTip";

export const ConstrastChecker = (props) => {
  const [contrastPass, setContrastPass] = useState({
    passLevel: "",
    ratio: "",
  });

  // Delays the api call, so that it is only called after a short period of inactivity
  const debouncedFetchContrast = useMemo(
    () =>
      debounce((text, bg) => {
        CheckContrast(text, bg).then((contrastResult) => {
          setContrastPass(contrastResult);
        });
      }, 50), // 50ms debounce delay
    []
  );

  useEffect(() => {
    const textColor = props.textColor;
    const backgroundColor = props.backgroundColor;

    if (textColor && backgroundColor) {
      debouncedFetchContrast(textColor, backgroundColor);
    }
  }, [props.textColor, props.backgroundColor]);

  // Cleanup function to cancel debounce on unmount
  useEffect(() => {
    return () => {
      debouncedFetchContrast.cancel();
    };
  }, [debouncedFetchContrast]);

  useEffect(() => {
    console.log(contrastPass);
  }, [contrastPass]);

  return <>{getContrastIndicator(contrastPass)}</>;
};
const getContrastIndicator = (contrastPass) => {
  switch (contrastPass.passLevel) {
    case "AAA":
      return (
        <ContrastToolTip
          contrastPass={contrastPass}
          backgroundColor={"bg-green-600"}
        >
          <Tick />
        </ContrastToolTip>
      );
    case "AA":
      return (
        <ContrastToolTip
          contrastPass={contrastPass}
          backgroundColor={"bg-yellow-500"}
        >
          <Warning />
        </ContrastToolTip>
      );
    case "Failed":
      return (
        <ContrastToolTip
          contrastPass={contrastPass}
          backgroundColor={"bg-red-600"}
        >
          <Cross />
        </ContrastToolTip>
      );
    default:
      return null;
  }
};
