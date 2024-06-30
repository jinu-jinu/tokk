import { useScroll } from "framer-motion";
import { useRef } from "react";
import BackgroundBubble from "../../components/BackgroundBubble";
import Titles from "./Titles";
import Figures from "./Figures";

const Section5 = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <section
      ref={ref}
      className="relative w-full h-auto text-[#bbb] mix-blend-screen overflow-x-clip flex flex-col items-center gap-y-[3rem] lg:gap-y-[8rem]"
    >
      <Titles />
      <Figures scrollY={scrollYProgress} />

      <BackgroundBubble customClass="absolute top-0 left-0 w-full h-full" />
    </section>
  );
};

export default Section5;
