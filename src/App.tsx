import { Preload, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import ReactLenis from "lenis/react";
import Header from "./UI/header/Header";
import Section1 from "./UI/section1/Section1";
import Background from "./components/Background";
import Wave from "./components/Wave";
import Flowfield from "./components/FlowField/FlowField";
import CustomCamera from "./UI/section1/CustomCamera";
import Decorations from "./UI/common/Decorations";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.03,
        wheelMultiplier: 1,
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
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
          className="bg-gradient-to-b"
        >
          <Wave />
        </div>

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
          style={{ position: "fixed", top: 0, bottom: 0, left: 0, right: 0, overflow: "hidden" }}
          eventSource={document.getElementById("root")!}
        >
          <View.Port />
          <Preload all />
          {/* <Perf /> */}
        </Canvas>
      </div>
    </ReactLenis>
  );
};

export default App;
