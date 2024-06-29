import { Preload, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Header from "./UI/header/Header";
import Section1 from "./UI/section1/Section1";
import Background from "./components/Background";
import Section2 from "./UI/section2/Section2";
import Section3 from "./UI/section3/Section3";
import SmoothScroll from "./components/SmoothScroll";
import AssetsInit from "./components/AssetsInit";
import Section4 from "./UI/section4/Section4";
import Section5 from "./UI/section5/Section5";
import Section6 from "./UI/section6/Section6";

const App = () => {
  return (
    <SmoothScroll>
      <div className="relative w-full min-h-[100dvh]">
        <Background />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />

        <Canvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            overflow: "hidden",
          }}
          gl={{ antialias: true }}
          eventSource={document.getElementById("root")!}
        >
          <View.Port />
          <AssetsInit />
          <Preload all />
        </Canvas>
      </div>
    </SmoothScroll>
  );
};

export default App;
