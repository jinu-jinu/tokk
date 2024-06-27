import Nav from "./Nav";

const Header = () => {
  return (
    <header
      style={{
        color: "#999",
        borderColor: "#999",
        mixBlendMode: "screen",
      }}
      className={`fixed top-0 left-0 w-full h-[77px] px-[1rem] lg:px-[2rem] py-[12px] z-50 flex items-center justify-between border-b-[1px] backdrop-blur-sm`}
    >
      {/* logo */}
      <p className="font-LOTTERIACHAB text-[1.5rem] lg:text-[2rem]">TOKK</p>

      <div className="flex gap-x-[8px] font-Prompt items-center">
        <button
          style={{
            backgroundColor: "#999",
            color: "#000",
          }}
          className={`text-[14px] lg:text-[16px] font-bold px-[12px] py-[4px] rounded-[16px]`}
        >
          PORTFOLIO
        </button>
        <Nav />
        <button className=" w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] flex justify-center items-center">
          <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{
                stroke: "#999",
              }}
              d="M5 17H19M5 12H19M5 7H19"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
