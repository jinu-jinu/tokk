import { Preload, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lenis from "lenis";
import Header from "./UI/header/Header";
import Section1 from "./UI/section1/Section1";
import Background from "./components/Background";
import Section2 from "./UI/section2/Section2";
import Section3 from "./UI/section3/Section3";
import { useEffect } from "react";

const SmoothScroll = ({ children }: { children: JSX.Element }) => {
  const lenis = new Lenis({
    smoothWheel: true,
    syncTouch: true,
    lerp: 0.03,
    wheelMultiplier: 0.3,
    syncTouchLerp: 0.03,
    touchMultiplier: 0.3,
  });

  useEffect(() => {
    const raf = (cb: any) => {
      lenis.raf(cb);
      requestAnimationFrame(raf);

      return 0;
    };

    requestAnimationFrame(raf);
  }, []);

  return children;
};

const App = () => {
  return (
    <SmoothScroll>
      <div className="relative w-full min-h-[100dvh]">
        <Background />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />

        <Canvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            overflow: "hidden",
          }}
          eventSource={document.getElementById("root")!}
        >
          <View.Port />
          <Preload all />
        </Canvas>
      </div>
    </SmoothScroll>
  );
};

export default App;
