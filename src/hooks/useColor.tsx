import { animate, motionValue } from "framer-motion";
import { useCurrentCan, useNextCan } from "../store/CanChangeStore";
import { colors } from "../utils/colors";
import { useEffect } from "react";

const useColor = () => {
  const current = useCurrentCan();
  const next = useNextCan();

  const currentMain = colors[current].main;
  const currentSub = colors[current].sub;

  const nextMain = colors[next].main;
  const nextSub = colors[next].sub;

  const mainColor = motionValue(currentMain);
  const subColor = motionValue(currentSub);

  useEffect(() => {
    animate(mainColor, nextMain, {
      type: "spring",
    });
    animate(subColor, nextSub, {
      type: "spring",
    });
  }, [next]);

  return { mainColor, subColor };
};

export default useColor;
