import { useScroll } from "framer-motion";
import { useRef } from "react";
import BackgroundBubble from "./BackgroundBubble";
import Swipers from "./Swipers";
import RollingCanComp from "./RollingCanComp";
import { View } from "@react-three/drei";

const Section4 = () => {
  const ref = useRef(null!);
  const { scrollYProgress } = useScroll({
    offset: ["50vh", "350vh"],
    target: ref,
  });

  return (
    <div ref={ref} className="relative w-full h-[500dvh] text-[#bbb]">
      <div className="sticky top-0 left-0 w-full h-[100dvh]">
        <Swipers scrollY={scrollYProgress} />
        <BackgroundBubble />
        <View className="absolute top-0 left-0 w-full h-full">
          <RollingCanComp scrollY={scrollYProgress} />
        </View>
      </div>
    </div>
  );
};

export default Section4;
