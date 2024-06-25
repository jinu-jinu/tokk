import useColor from "../../hooks/useColor";
import Nav from "./Nav";
import { motion } from "framer-motion";

const Header = () => {
  const { mainColor, subColor } = useColor();

  return (
    <motion.header
      style={{
        color: subColor,
        borderColor: subColor,
      }}
      className={`fixed top-0 left-0 w-full px-[1rem] lg:px-[2rem] py-[12px] z-50 flex items-center justify-between border-b-[1px] backdrop-blur-sm`}
    >
      {/* logo */}
      <p className="font-LOTTERIACHAB text-[1.5rem] lg:text-[2rem]">TOKK</p>

      <div className="flex gap-x-[8px] font-Prompt items-center">
        <motion.button
          style={{
            backgroundColor: subColor,
            color: mainColor,
          }}
          className={`text-[14px] lg:text-[16px] font-bold px-[12px] py-[4px] rounded-[16px]`}
        >
          PORTFOLIO
        </motion.button>
        <Nav subColor={subColor} />
        <button className=" w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] flex justify-center items-center">
          <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              style={{
                stroke: subColor,
              }}
              d="M5 17H19M5 12H19M5 7H19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
