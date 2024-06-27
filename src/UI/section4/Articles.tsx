import { useMemo } from "react";
import { section3Contents } from "../../contents/content";
import Article from "./Article";

const Articles = () => {
  const contents = useMemo(() => section3Contents, []);

  return (
    <div className="w-full px-[2rem] flex flex-col items-center gap-y-[3rem] md:gap-y-[4rem] pb-[93px] md:pb-[120px]">
      {contents.map((content, i) => (
        <Article key={`section3-article-${i}`} {...content} idx={i} />
      ))}
    </div>
  );
};

export default Articles;
