import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";
import CustomCamera from "../section1/CustomCamera";
import Title from "./Title";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import RevealParagraph from "./RevealParagraph";

const Section2 = () => {
  const scrollTarget = useRef<HTMLElement>(null!);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["50vh", "350vh"],
  });

  return (
    <section
      ref={scrollTarget}
      style={{
        position: "relative",
        width: "100%",
        height: "500vh",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="sticky top-0 left-0 w-full h-[100dvh]">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center py-[77px] px-[2rem] gap-y-[2rem]">
          <Title />
          <RevealParagraph scroll={scrollYProgress} />
        </div>
        <View className="w-full h-full">
          <Flowfield />
          <CustomCamera />
        </View>
      </div>
    </section>
  );
};

export default Section2;
