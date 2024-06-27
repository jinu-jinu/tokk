import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";
import CustomCamera from "../section1/CustomCamera";
// import Experience from "./Experience";
// import { useScroll } from "framer-motion";
// import { useRef } from "react";

/*
  섹션3 이미지와 텍스트를 활용

  텍스트 사이에 이미지가 끼어있는 디자인

  문장(크게 의미 없는 디자인용)이 빈 여백을 채움
*/

const Section3 = () => {
  // const ref = useRef(null!);
  // const { scrollYProgress } = useScroll({
  //   offset: ["center end", "start"],
  //   target: ref,
  // });

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
      <p className="flex justify-center items-center text-[5rem] mix-blend-screen text-[#999] font-black">
        HELLO
      </p>
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <Flowfield />
        <CustomCamera />
      </View>

      {/* <View
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
      </View> */}
    </div>
  );
};

export default Section3;
