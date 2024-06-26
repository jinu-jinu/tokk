import { MotionValue, motion, useTransform } from "framer-motion";
import { revealParagraph } from "../../contents/content";
import { useMemo } from "react";

const Letter = ({
  word,
  scroll,
  idx,
  len,
}: {
  word: string;
  idx: number;
  len: number;
  scroll: MotionValue<number>;
}) => {
  const opacity = useTransform(scroll, [(idx - 1) / len, idx / len], [0, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {word}
    </motion.span>
  );
};

const RevealParagraph = ({ scroll }: { scroll: MotionValue<number> }) => {
  const paragraph = useMemo(() => revealParagraph, []);
  const len = paragraph.length;

  return (
    <motion.div
      style={{
        color: "rgba(255, 255, 255, .7)",
      }}
      className="flex-[0.7] w-full max-w-[60vmax]"
    >
      <p className="s2-rv-fs-clamp font-Noto font-medium tracking-wide">
        {paragraph.map((word, i) => (
          <Letter key={`${word}-${i}`} word={word} idx={i + 1} len={len} scroll={scroll} />
        ))}
      </p>
    </motion.div>
  );
};

export default RevealParagraph;
