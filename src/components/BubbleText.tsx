import { useEffect, useRef } from "react";
import { createBubble } from "../utils/createBubble";
import useColor from "../hooks/useColor";
import { motion, useInView } from "framer-motion";
import { sleep } from "../utils/util";

const parentVar = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const childVar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const BubbleText = ({ title }: { title: string[] }) => {
  const titleRef = useRef<HTMLDivElement>(null!);
  const view = useInView(titleRef, {
    once: true,
  });

  useEffect(() => {
    if (!titleRef.current) return;

    const { left, right, top, bottom } = titleRef.current.getBoundingClientRect();
    const yCenter = (bottom - top) / 2;

    const width = right - left;
    const len = title.length;
    const xGap = Math.round(width / len);

    const bubbleLoop = async () => {
      for (let i = 0; i <= len; i++) {
        await sleep(150);
        for (let j = 0; j < 30; j++) {
          const yRandom = Math.random() * 30 - 15;
          const y = yCenter + yRandom;
          createBubble(i * xGap, y, titleRef.current);
        }
      }
    };

    if (view) {
      void bubbleLoop();
    }
  }, [view]);

  const { subColor } = useColor();

  return (
    <motion.div
      style={{
        color: subColor,
      }}
      ref={titleRef}
      variants={parentVar}
      initial="initial"
      animate={view ? "animate" : "initial"}
      className="relative font-LOTTERIACHAB text-[4.5vmax] text-nowrap"
    >
      {title.map((t, i) => (
        <motion.span variants={childVar} key={`${t}-${i}`}>
          {t}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BubbleText;
