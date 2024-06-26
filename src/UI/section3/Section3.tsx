import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";
import CustomCamera from "../section1/CustomCamera";
import Experience from "./Experience";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const Section3 = () => {
  const ref = useRef(null!);
  const { scrollYProgress } = useScroll({
    offset: ["center end", "start"],
    target: ref,
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "200vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <Flowfield />
        <CustomCamera />
      </View>

      <View
        ref={ref}
        style={{
          borderRadius: "20px",
          position: "absolute",
          zIndex: 30,
          overflow: "hidden",
          top: "20%",
          width: "300px",
          height: "400px",
        }}
      >
        <Experience scrollY={scrollYProgress} />
      </View>
    </div>
  );
};

export default Section3;
