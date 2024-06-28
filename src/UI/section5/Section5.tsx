import { View } from "@react-three/drei";
import Experience from "./Experience";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import Title from "./Title";
import BackgroundBubble from "../../components/BackgroundBubble";

const Section5 = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={ref}
      className="relative w-full h-auto text-[#bbb] mix-blend-screen overflow-x-clip"
    >
      <Title />
      <View
        style={{
          borderRadius: "20px",
          width: "100%",
          maxWidth: "480px",
          height: "640px",
        }}
      >
        <Experience scrollY={scrollYProgress} />
      </View>

      <BackgroundBubble customClass="absolute top-0 left-0 w-full h-full" />
    </section>
  );
};

export default Section5;
