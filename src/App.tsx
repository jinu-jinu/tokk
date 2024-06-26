import { Preload, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLenis from "lenis/react";
import Header from "./UI/header/Header";
import Section1 from "./UI/section1/Section1";
import Background from "./components/Background";
import Section2 from "./UI/section2/Section2";
import Section3 from "./UI/section3/Section3";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 0.7,
        syncTouch: true,
        touchMultiplier: 0.5,
        touchInertiaMultiplier: 20,
      }}
    >
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
    </ReactLenis>
  );
};

export default App;
