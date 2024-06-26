import { MotionValue, motion, useTransform } from "framer-motion";
import { revealParagraph } from "../../contents/content";
import useColor from "../../hooks/useColor";

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
  const paragraph = revealParagraph;
  const len = paragraph.length;
  const { subColor } = useColor();

  return (
    <motion.div
      style={{
        color: subColor,
      }}
      className="absolute top-[35%] left-[50%] translate-x-[-50%]"
    >
      <p className="text-[14px] lg:text-[32px] font-Noto font-medium">
        {paragraph.map((word, i) => (
          <Letter key={`${word}-${i}`} word={word} idx={i + 1} len={len} scroll={scroll} />
        ))}
      </p>
    </motion.div>
  );
};

export default RevealParagraph;
