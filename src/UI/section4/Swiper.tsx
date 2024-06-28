import { motion, useTransform } from "framer-motion";
import TextMarquee from "../../components/Marquee";
import { SwiperType } from "../../types";

const Swiper = ({ text, bgColor, clipOffset, scrollOffset, scrollY }: SwiperType) => {
  const clipPath = useTransform(scrollY, scrollOffset, clipOffset);

  return (
    <motion.div
      style={{
        backgroundColor: bgColor,
        clipPath,
      }}
      className="bg-noise absolute top-0 left-0 w-full h-[100dvh] flex flex-col font-LOTTERIACHAB overflow-x-clip"
    >
      <motion.div className="flex-1 bg-[rgba(255,255,255,.2)]">
        <TextMarquee text={text} direction="L" />
      </motion.div>
      <motion.div className="flex-1 border-y-[2px] border-[rgba(255,255,255,.6)]">
        <TextMarquee text={text} direction="R" />
      </motion.div>
      <motion.div className="flex-1 bg-[rgba(255,255,255,.2)]">
        <TextMarquee text={text} direction="L" />
      </motion.div>
      <motion.div className="flex-1 border-y-[2px] border-[rgba(255,255,255,.6)]">
        <TextMarquee text={text} direction="R" />
      </motion.div>
      <motion.div className="flex-1 bg-[rgba(255,255,255,.2)]">
        <TextMarquee text={text} direction="L" />
      </motion.div>
    </motion.div>
  );
};

export default Swiper;
