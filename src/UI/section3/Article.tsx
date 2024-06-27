const Article = ({
  deck,
  title,
  body,
  src,
  idx,
}: {
  deck: string;
  title: string;
  body: string;
  src: string;
  idx: number;
}) => {
  return (
    <article
      className={`font-Noto flex justify-center ${
        idx % 2 ? "md:justify-end" : "md:justify-start"
      } w-full max-w-[1440px]`}
    >
      <div className="w-full max-w-[500px] md:max-w-[1050px] border-2 border-[#bbb] rounded-[1rem] flex flex-col md:flex-row">
        <div className="md:flex-1 flex">
          <img
            className="rounded-t-[1rem] w-full md:rounded-tr-none md:rounded-bl-[1rem] object-cover"
            src={`/images/${src}.jpg`}
            alt={`${src} image`}
          />
        </div>
        <div className="flex flex-col border-t-2 md:border-t-0 md:border-l-2 border-[#bbb] leading-tight md:flex-1">
          <div className="md:flex-1 flex flex-col gap-y-[0.5rem] p-[1rem] lg:p-[2rem]">
            <p className="text-[12px] font-bold text-[#777] lg:text-[14px]">{deck}</p>
            <div className="flex flex-col gap-y-[1rem] w-full">
              <h2 className="font-LOTTERIACHAB text-[2rem] lg:text-[2.5rem]">{title}</h2>
              <p className="text-[16px] lg:text-[18px] text-justify leading-normal">{body}</p>
            </div>
          </div>
          <div className="w-full border-t-2 p-[1rem] border-[#bbb]">
            <button className="w-full h-[66px] bg-[#777] rounded-[1rem] text-[#000] font-black text-[18px]  box-shadow">
              MORE INFO
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
