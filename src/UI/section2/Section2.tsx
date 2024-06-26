import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";
import CustomCamera from "../section1/CustomCamera";
import { useRef } from "react";

const Section2 = () => {
  const scrollTarget = useRef<HTMLElement>(null!);

  return (
    <section
      ref={scrollTarget}
      style={{
        position: "relative",
        width: "100%",
        height: "500dvh",
        display: "flex",
        backgroundColor: "rgba(255,255,255,.2)",
        flexDirection: "column",
      }}
    >
      <div className="sticky top-0 left-0 w-full h-[100dvh]">
        <View className="w-full h-full">
          <Flowfield />
          <CustomCamera />
        </View>
      </div>
    </section>
  );
};

export default Section2;
