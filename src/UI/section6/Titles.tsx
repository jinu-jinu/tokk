const Titles = () => {
  const commonTitles = "flex flex-col lg:flex-row lg:items-center lg:gap-x-[1rem]";
  const commonTitle = "flex justify-center items-center";
  const krTitle = "text-[8vmax] h-[8vmax]";
  const enTitle = "text-[10vmax] h-[10vmax] lg:text-[8.5vmax] lg:h-[8.5vmax]";

  return (
    <div className="px-[2rem] absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center font-LOTTERIACHAB">
      <div>
        <div className={`${commonTitles}`}>
          <p className={`${commonTitle} ${krTitle}`}>상큼하게</p>
          <p className={`${commonTitle} ${enTitle}`}>TOKK</p>
        </div>
        <div className={`${commonTitles} lg:flex-row-reverse`}>
          <p className={`${commonTitle} ${krTitle}`}>부담없이</p>
          <p className={`${commonTitle} ${enTitle}`}>TOKK</p>
        </div>
        <div className={`${commonTitles}`}>
          <p className={`${commonTitle} ${krTitle}`}>짜릿하게</p>
          <p className={`${commonTitle} ${enTitle}`}>TOKK</p>
        </div>
      </div>
    </div>
  );
};

export default Titles;
