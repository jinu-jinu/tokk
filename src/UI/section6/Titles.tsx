import { motion } from "framer-motion";

const Titles = () => {
  const commonTitles = "flex flex-col lg:flex-row lg:items-center lg:gap-x-[1rem]";
  const commonTitle = "flex justify-center items-center";
  const krTitle = "text-[8vmax] h-[8vmax]";
  const enTitle = "text-[10vmax] h-[10vmax] lg:text-[8.5vmax] lg:h-[8.5vmax]";
  const initial = { scale: 0 };
  const whileInView = { scale: 1 };

  return (
    <div className="px-[2rem] absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center font-LOTTERIACHAB">
      <div>
        <div className={`${commonTitles}`}>
          <motion.p
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
            className={`${commonTitle} ${krTitle}`}
          >
            상큼하게
          </motion.p>
          <motion.p
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
            className={`${commonTitle} ${enTitle}`}
          >
            TOKK
          </motion.p>
        </div>
        <div className={`${commonTitles} lg:flex-row-reverse`}>
          <motion.p
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
            className={`${commonTitle} ${krTitle}`}
          >
            부담없이
          </motion.p>
          <motion.p
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              type: "spring",
            }}
            className={`${commonTitle} ${enTitle}`}
          >
            TOKK
          </motion.p>
        </div>
        <div className={`${commonTitles}`}>
          <motion.p
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              type: "spring",
            }}
            className={`${commonTitle} ${krTitle}`}
          >
            짜릿하게
          </motion.p>
          <motion.p
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true }}
            transition={{
              delay: 0.9,
              type: "spring",
            }}
            className={`${commonTitle} ${enTitle}`}
          >
            TOKK
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Titles;
