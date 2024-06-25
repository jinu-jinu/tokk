import useColor from "../hooks/useColor";
import { motion } from "framer-motion";

const Background = () => {
  const { mainColor } = useColor();

  return (
    <motion.div
      style={{
        backgroundColor: mainColor,
      }}
      className={`fixed top-0 left-0 w-full h-[100vh] bg-noise bg-fixed `}
    />
  );
};

export default Background;
