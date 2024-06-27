import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";
import CustomCamera from "../section1/CustomCamera";
// import Experience from "./Experience";
// import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Title from "./Title";
import Articles from "./Articles";

/*
  섹션3 이미지와 텍스트를 활용

  텍스트 사이에 이미지가 끼어있는 디자인

  문장(크게 의미 없는 디자인용)이 빈 여백을 채움

  
*/

const Section3 = () => {
  const ref = useRef(null!);
  // const { scrollYProgress } = useScroll({
  //   offset: ["start start", "end end"],
  //   target: ref,
  // });

  return (
    <div
      ref={ref}
      className="relative w-full h-auto flex flex-col gap-y-[3rem] md:gap-y-[6rem] text-[#bbb] mix-blend-screen overflow-x-clip"
    >
      <Title />
      <Articles />

      {/* <div className="flex justify-center">
        <p className="flex flex-col text-[5rem] mix-blend-screen text-[#999] font-black">
          <span>HELLO WORLD</span>
          <span className="flex justify-start items-start text-[3rem] h-[3rem]">
            IN
            <span className="flex justify-start items-start">
              <motion.span
                style={{ width }}
                className=" w-[0px] h-[200px] bg-blue-300 inline-block"
              />
              <span>WHAT</span>
            </span>
          </span>
        </p>
      </div> */}

      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
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
