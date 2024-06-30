import { useIsAssetDownloaded } from "../../store/loadingStore";
import { motion } from "framer-motion";

const parentVar = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2,
    },
  },
};

const childVar = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

const Titles = () => {
  const commonClass = "absolute text-white font-LOTTERIACHAB ";
  const isAssetDownloaded = useIsAssetDownloaded();

  return (
    <>
      <div
        style={{
          color: "#bbb",
          mixBlendMode: "screen",
        }}
        className={`${commonClass} z-10  top-[23%] lg:top-[25%] left-[50%] translate-x-[-50%] flex flex-col gap-y-[12px]`}
      >
        <motion.h1
          variants={parentVar}
          initial="initial"
          animate={isAssetDownloaded ? "animate" : "initial"}
          className="text-[72px] lg:text-[8vw] flex flex-col lg:flex-row lg:tracking-tighter lg:gap-x-[3rem] leading-[1.1]"
        >
          <motion.span variants={childVar}>LET'S</motion.span>
          <motion.span variants={childVar}>TOKK!</motion.span>
        </motion.h1>
        <motion.p
          initial={{ scale: 0 }}
          animate={isAssetDownloaded ? { scale: 1 } : { scale: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
          }}
          className="text-center font-Noto font-bold flex flex-col text-[18px] lg:text-[1.6vw]"
        >
          TOKK하고 터지는 짜릿함
        </motion.p>
      </div>
    </>
  );
};

export default Titles;
