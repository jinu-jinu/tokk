// import { useScroll } from "framer-motion";
import { useRef } from "react";
// import Title from "./Title";
import BackgroundBubble from "./BackgroundBubble";
import { View } from "@react-three/drei";
import CustomCamera from "../section1/CustomCamera";
import Swipers from "./Swipers";

const Section4 = () => {
  const ref = useRef(null!);
  // const { scrollYProgress } = useScroll({
  //   offset: ["start end", "end start"],
  //   target: ref,
  // });

  /*
    제목 100으로 놓고

    그 다음에 스와이퍼가 하나씩 올림
  */

  return (
    <div
      ref={ref}
      className="relative w-full h-auto flex flex-col gap-y-[3rem] md:gap-y-[6rem] text-[#bbb] overflow-x-clip"
    >
      <Swipers />

      <View className="absolute top-0 left-0 w-full h-full">
        <CustomCamera />
      </View>
      <BackgroundBubble />
    </div>
  );
};

export default Section4;
