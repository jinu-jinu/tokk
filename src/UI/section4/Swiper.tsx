import { useEffect, useRef } from "react";
import { colors } from "../../utils/colors";
import { motion } from "framer-motion";

const Swiper = () => {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    console.log(rect.height);
  }, []);

  return (
    <div
      style={{
        backgroundColor: colors[2].main,
      }}
      className="bg-noise w-full h-[100dvh] flex flex-col font-LOTTERIACHAB overflow-x-clip"
    >
      <motion.div
        initial={{
          x: "0%",
        }}
        animate={{
          x: "-100%",
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
        ref={ref}
        className="flex-1 flex justify-center items-center text-[100px] mix-blend-screen text-nowrap"
      >
        <p>&nbsp;LEMON LIME LEMON LIME LEMON LIME LEMON LIME LEMON LIME</p>
        <p>&nbsp;LEMON LIME LEMON LIME LEMON LIME LEMON LIME LEMON LIME</p>
      </motion.div>
      <div className="bg-[rgba(255,255,255,.2)] flex-1 flex justify-center items-center text-[100px] mix-blend-screen text-nowrap">
        LIME LEMON LIME LEMON LIME LEMON
      </div>
      <div className="flex-1 flex justify-center items-center text-[100px] mix-blend-screen text-nowrap">
        LEMON LIME LEMON LIME LEMON LIME
      </div>
      <div className="bg-[rgba(255,255,255,.2)] flex-1 flex justify-center items-center text-[100px] mix-blend-screen text-nowrap">
        LIME LEMON LIME LEMON LIME LEMON
      </div>
      <div className="flex-1 flex justify-center items-center text-[100px] mix-blend-screen text-nowrap">
        LEMON LIME LEMON LIME LEMON LIME
      </div>
    </div>
  );
};

export default Swiper;
