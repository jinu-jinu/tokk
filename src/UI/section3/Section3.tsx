import { useScroll } from "framer-motion";
import { useRef } from "react";
import Title from "./Title";
import Articles from "./Articles";
import { View } from "@react-three/drei";
import CustomCamera from "../../components/CustomCamera";
import BackgroundBubble from "../../components/BackgroundBubble";
import MovingCan from "../../components/MovingCan/MovingCan";

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
      <Articles scrollY={scrollYProgress} />

      <View className="absolute top-0 left-0 w-full h-full">
        <MovingCan scrollYProgress={scrollYProgress} />
        <CustomCamera />
      </View>
      <BackgroundBubble customClass="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default Section3;
