import { MotionValue } from "framer-motion";
import { colors } from "../../utils/colors";
import Swiper from "./Swiper";

const Swipers = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const swiperData = [
    {
      text: "BERRY PEACH BERRY PEACH BERRY PEACH",
      bgColor: colors[0].main,
      scrollOffset: [0.0, 0.5],
      clipOffset: ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
    },
    {
      text: "LEMON LIME LEMON LIME LEMON LIME",
      bgColor: colors[1].main,
      scrollOffset: [0.0, 0.5, 1],
      clipOffset: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
    },
    {
      text: "GRAPE MINT GRAPE MINT GRAPE MINT",
      bgColor: colors[2].main,
      scrollOffset: [0.5, 1],
      clipOffset: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
    },
  ];

  return swiperData.map((data, i) => (
    <Swiper key={`section4-swiper-${i}`} {...data} scrollY={scrollY} />
  ));
};

export default Swipers;
