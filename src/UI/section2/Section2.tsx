import CustomCamera from "../../components/CustomCamera";
import Title from "./Title";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import RevealParagraph from "./RevealParagraph";
import BackgroundBubble from "../../components/BackgroundBubble";

const Section2 = () => {
  const scrollTarget = useRef<HTMLElement>(null!);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["30vh", "380vh"],
  });

  return (
    <section
      ref={scrollTarget}
      style={{
        position: "relative",
        width: "100%",
        height: "500dvh",
        display: "flex",
        backgroundColor: "rgba(255,255,255,.2)",
        flexDirection: "column",
        mixBlendMode: "screen",
        color: "#bbb",
        overflowX: "clip",
      }}
    >
      <div className="sticky top-0 left-0 w-full h-[100dvh]">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center py-[77px] px-[2rem] gap-y-[2rem]">
          <Title />
          <RevealParagraph scroll={scrollYProgress} />
        </div>
        <BackgroundBubble customClass="w-full h-full">
          <CustomCamera />
        </BackgroundBubble>
      </div>
    </section>
  );
};

export default Section2;
