import { motion } from "framer-motion";
import { revealParagraph } from "../../contents/content";
import { useMemo } from "react";

const Letter = ({ word }: { word: string }) => {
  // const opacity = useTransform(scroll, [(idx - 1) / len, idx / len], [0, 1]);
  return (
    <motion.span style={{ opacity: 1 }} className="inline-block whitespace-pre">
      {word}
    </motion.span>
  );
};

const RevealParagraph = () => {
  const paragraph = useMemo(() => revealParagraph, []);

  return (
    <motion.div className="flex-[0.7] w-full max-w-[60vmax]">
      <p className="s2-rv-fs-clamp font-Noto font-medium tracking-wide">
        {paragraph.map((word, i) => (
          <Letter key={`${word}-${i}`} word={word} />
        ))}
      </p>
    </motion.div>
  );
};

export default RevealParagraph;
