import { motion } from "framer-motion";

const Wave = () => {
  const start1 =
    "M 0 250 C 500 -50 1000 250 1000 250 C 1500 500 2000 250 2000 250 L 2000 1000 L 0 1000 Z";
  const end1 =
    "M 0 250 C 500 500 1000 250 1000 250 C 1500 -50 2000 250 2000 250 L 2000 1000 L 0 1000 Z";
  const start2 =
    "M 0 300 C 500 50 1000 300 1000 300 C 1500 550 2000 200 2000 200 L 2000 1000 L 0 1000 Z";
  const end2 =
    "M 0 300 C 500 550 1000 300 1000 300 C 1500 50 2000 200 2000 200 L 2000 1000 L 0 1000 Z";

  return (
    <svg
      className="absolute z-10 bottom-0 left-0 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 600"
    >
      <motion.path
        animate={{
          d: [start1, end1, start1],
        }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 5,
        }}
        d={start1}
        fill="rgba(255, 255, 255, 0.1)"
      />
      <motion.path
        animate={{
          d: [start2, end2, start2],
        }}
        transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 4.5,
        }}
        d={start2}
        fill="rgba(255, 255, 255, 0.1)"
      />
    </svg>
  );
};

export default Wave;
