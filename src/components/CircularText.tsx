import { motion } from "framer-motion";

const CircularText = () => {
  const texts = ["S", "C", "R", "O", "L", "L", "-", "S", "C", "R", "O", "L", "L", "-"];
  const deg = 360 / texts.length;

  return (
    <div className="absolute z-10 bottom-[2rem] lg:bottom-[5rem] left-[50%] lg:left-[10%] translate-x-[-50%] lg:translate-x-[-10%] flex justify-center items-center">
      <motion.p
        style={{
          rotateZ: "0deg",
        }}
        className="relative w-[100px] lg:w-[120px] h-[100px] lg:h-[120px] text-shadow text-white"
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        {texts.map((text, i) => {
          return (
            <span
              style={{
                transform: `rotate(${i * deg}deg)`,
              }}
              key={`circular-${text}-${i}`}
              className="circular-text-item text-[12px] lg:text-[16px] origin-[0px_50px] lg:origin-[0px_60px] font-Prompt"
            >
              {text}
            </span>
          );
        })}
        <motion.div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] rounded-full bg-black font-bold text-[10px] lg:text-[12px] flex justify-center items-center">
          DOWN
        </motion.div>
      </motion.p>
    </div>
  );
};

export default CircularText;
