import { motion, MotionValue } from "framer-motion";
import { View } from "@react-three/drei";
import Experience from "./Experience";

const Figures = ({ scrollY }: { scrollY: MotionValue<number> }) => {
  const figures = [
    {
      textureKey: "s5One",
      caption: "Tokk과 함께라면 언제나 즐거움이 가득!",
      scrollOffset: [0.05, 0.2],
    },
    { textureKey: "s5Two", caption: "매 순간을 특별하게 만드는 Tokk.", scrollOffset: [0.2, 0.35] },
    {
      textureKey: "s5Three",
      caption: "Tokk과 함께하는 당신의 일상! 예술입니다.",
      scrollOffset: [0.4, 0.55],
    },
    {
      textureKey: "s5Four",
      caption: "개성 넘치는 당신의 하루, Tokk과 함께 더욱 특별해져요!",
      scrollOffset: [0.6, 0.75],
    },
    {
      textureKey: "s5Five",
      caption: "톡톡 튀는 Tokk, 즐거운 일상을 더욱 빛나게!",
      scrollOffset: [0.8, 0.95],
    },
  ];

  return (
    <div className="flex flex-col gap-y-[10rem] lg:gap-y-[15rem] px-[1rem] lg:px-[3rem] font-Noto pb-[93px] md:pb-[120px] w-full max-w-[1440px]">
      {figures.map(({ textureKey, caption, scrollOffset }, i) => (
        <figure
          key={`section5-figure-${i}`}
          className={`flex flex-col items-center ${
            i % 2 ? "lg:items-start" : "lg:items-end"
          } gap-y-[6px]`}
        >
          <View
            style={{
              maxWidth: i % 2 ? "clamp(360px, 50vw, 720px)" : "clamp(320px, 50vw, 480px)",
              maxHeight: i % 2 ? "clamp(240px, 50vh, 480px)" : "clamp(427px, 50vh, 640px)",
            }}
            className="w-[40vmax] h-[40vmax]"
          >
            <Experience scrollY={scrollY} textureKey={textureKey} scrollOffset={scrollOffset} />
          </View>
          <motion.figcaption
            // whileInView={{ scale: 1 }}
            // viewport={{
            //   once: true,
            // }}
            // transition={{
            //   delay: 0.2,
            //   duration: 0.3,
            // }}
            // style={{
            //   scale: 0,
            // }}
            className="font-bold text-[14px] lg:text-[16px]"
          >
            {caption}
          </motion.figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Figures;
