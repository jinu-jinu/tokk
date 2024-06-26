import useColor from "../hooks/useColor";
import { motion } from "framer-motion";

const Background = () => {
  const { mainColor } = useColor();

  return (
    <motion.div
      style={{
        backgroundColor: mainColor,
      }}
      className={`fixed top-0 left-0 w-full h-[100dvh] bg-noise`}
    />
  );
};

export default Background;
