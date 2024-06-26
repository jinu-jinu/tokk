import useColor from "../../hooks/useColor";
import RevealParagraph from "./RevealParagraph";
import Title from "./Title";
import { motion } from "framer-motion";

const Texts = () => {
  const { subColor } = useColor();
  return (
    <motion.div
      style={{ color: subColor }}
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center py-[77px] px-[2rem] gap-y-[2rem]"
    >
      <Title />
      <RevealParagraph />
    </motion.div>
  );
};

export default Texts;
