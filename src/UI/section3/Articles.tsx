import { section3Contents } from "../../contents/content";
import Article from "./Article";

const Articles = () => {
  return (
    <div className="w-full px-[2rem] flex flex-col items-center gap-y-[3rem] md:gap-y-[4rem] pb-[93px] md:pb-[120px]">
      {section3Contents.map((content, i) => (
        <Article key={`section3-article-${i}`} {...content} idx={i} />
      ))}
    </div>
  );
};

export default Articles;
