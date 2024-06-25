import { Preload, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLenis from "lenis/react";
import Header from "./UI/header/Header";
import Section1 from "./UI/section1/Section1";
import Background from "./components/Background";
import Flowfield from "./components/FlowField/FlowField";
import CustomCamera from "./UI/section1/CustomCamera";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 0.7,
        syncTouch: true,
        touchMultiplier: 0.5,
        touchInertiaMultiplier: 25,
      }}
    >
      <div className="w-full min-h-[100dvh]">
        <Background />
        <Header />
        <Section1 />

        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "lime",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              width: "100%",
              flex: 1,
            }}
          >
            <Flowfield />
            <mesh>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
            <CustomCamera />
          </View>
        </div>

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
