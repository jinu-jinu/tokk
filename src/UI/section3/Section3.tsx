import { View } from "@react-three/drei";
import Flowfield from "../../components/FlowField/FlowField";
import CustomCamera from "../section1/CustomCamera";
// import Experience from "./Experience";
// import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Article from "./Article";

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
      style={{
        position: "relative",
        width: "100vw",
        height: "200vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Article />
      {/* <img
        src="/images/test1.jpg"
        width={400}
        className="object-cover mix-blend-soft-light rounded-[24px]"
      /> */}

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
