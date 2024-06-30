// import { useScroll } from "framer-motion";
import { useRef } from "react";
import BackgroundBubble from "../../components/BackgroundBubble";
import Titles from "./Titles";
import { PerspectiveCamera } from "@react-three/drei";
import Footer from "./Footer";
import Wave from "../../components/Wave";

const Section6 = () => {
  const ref = useRef<HTMLDivElement>(null!);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start center", "end center"],
  // });

  return (
    <section
      ref={ref}
      className="relative w-full h-[100dvh] text-[#bbb] bg-[rgba(255,255,255,.2)] mix-blend-screen"
    >
      <Titles />
      <Footer />
      <Wave />

      <BackgroundBubble customClass="w-full h-full">
        <PerspectiveCamera makeDefault fov={10} position={[0, 0, 7]} near={0.1} far={50} />
      </BackgroundBubble>
    </section>
  );
};

export default Section6;
