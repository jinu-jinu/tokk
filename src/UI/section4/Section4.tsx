import { useScroll } from "framer-motion";
import { useRef } from "react";
import Swipers from "./Swipers";
import { View } from "@react-three/drei";
import BackgroundBubble from "../../components/BackgroundBubble";
import CustomCamera from "../../components/CustomCamera";
import RollingCan from "../../components/RollingCan/RollingCan";

const Section4 = () => {
  const ref = useRef(null!);
  const { scrollYProgress } = useScroll({
    offset: ["50vh", "380vh"],
    target: ref,
  });

  return (
    <div ref={ref} className="relative w-full h-[500dvh] text-[#bbb]">
      <div className="sticky top-0 left-0 w-full h-[100dvh]">
        <Swipers scrollY={scrollYProgress} />
        <View className="absolute top-0 left-0 w-full h-full">
          <RollingCan scrollY={scrollYProgress} />
        </View>
        <BackgroundBubble customClass="w-full h-full">
          <CustomCamera />
        </BackgroundBubble>
      </div>
    </div>
  );
};

export default Section4;
