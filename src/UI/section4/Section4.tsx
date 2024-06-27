// import { useScroll } from "framer-motion";
import { useRef } from "react";
import Title from "./Title";
import BackgroundBubble from "./BackgroundBubble";
import { View } from "@react-three/drei";
import CustomCamera from "../section1/CustomCamera";

const Section4 = () => {
  const ref = useRef(null!);
  // const { scrollYProgress } = useScroll({
  //   offset: ["start end", "end start"],
  //   target: ref,
  // });

  return (
    <div
      ref={ref}
      className="relative w-full h-auto flex flex-col gap-y-[3rem] md:gap-y-[6rem] text-[#bbb] mix-blend-screen overflow-x-clip"
    >
      <Title />

      <View className="absolute top-0 left-0 w-full h-full">
        <CustomCamera />
      </View>
      <BackgroundBubble />
    </div>
  );
};

export default Section4;
