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
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={scrollTarget}
      style={{
        position: "relative",
        width: "100vw",
        height: "500vh",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Flowfield />
        <CustomCamera />
      </View>
      <div className="sticky top-0 left-0 w-full h-[100dvh]">
        <Title />
        <RevealParagraph scroll={scrollYProgress} />
      </div>
    </section>
  );
};

export default Section2;
