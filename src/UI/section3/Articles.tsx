import { MotionValue } from "framer-motion";
import { section3Contents } from "../../contents/content";
import Article from "./Article";

const Articles = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  scrollY.on("change", (e) => {
    console.log(e);
  });

  return (
    <div className="w-full px-[2rem] flex flex-col items-center gap-y-[3rem] md:gap-y-[4rem] pb-[93px] md:pb-[120px]">
      {section3Contents.map((content, i) => (
        <Article key={`section3-article-${i}`} {...content} idx={i} scrollY={scrollY} />
      ))}
    </div>
  );
};

export default Articles;
