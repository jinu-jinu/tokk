import { useScroll } from "framer-motion";
import { useRef } from "react";
import Title from "./Title";
import Articles from "./Articles";
import BackgroundBubble from "./BackgroundBubble";
import MovingCan from "./MovingCan";
import { View } from "@react-three/drei";
import CustomCamera from "../section1/CustomCamera";

const Section3 = () => {
  const ref = useRef(null!);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: ref,
  });

  return (
    <div
      ref={ref}
      className="relative w-full h-auto flex flex-col gap-y-[3rem] md:gap-y-[6rem] text-[#bbb] mix-blend-screen overflow-x-clip"
    >
      <Title />
      <Articles />

      <View className="absolute top-0 left-0 w-full h-full">
        <MovingCan scrollYProgress={scrollYProgress} />
        <CustomCamera />
      </View>
      <BackgroundBubble />
    </div>
  );
};

export default Section3;
