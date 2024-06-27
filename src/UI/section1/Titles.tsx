const Titles = () => {
  const commonClass = "absolute text-white font-LOTTERIACHAB ";

  return (
    <>
      <div
        style={{
          color: "#bbb",
          mixBlendMode: "screen",
        }}
        className={`${commonClass} z-10  top-[23%] lg:top-[25%] left-[50%] translate-x-[-50%] flex flex-col gap-y-[12px]`}
      >
        <h1 className="text-[72px] lg:text-[8vw] flex flex-col lg:flex-row lg:tracking-tighter lg:gap-x-[3rem] leading-[1.1]">
          <span>LET'S</span>
          <span>TOKK!</span>
        </h1>
        <p className="text-center font-Noto font-bold flex flex-col text-[18px] lg:text-[1.6vw]">
          TOKK하고 터지는 짜릿함
        </p>
      </div>
    </>
  );
};

export default Titles;
