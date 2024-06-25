import { Canvas } from "@react-three/fiber";
// import {} from ''
import Lights from "./Lights";
import Chair from "./Chair";
import CameraAnimation from "./CameraAnimation";
import { Environment } from "@react-three/drei";
import Background from "./Background";

const Experience = () => {
  return (
    <Canvas
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100dvh" }}
      shadows
    >
      <Lights />

      <Chair />
      <CameraAnimation />
      <Environment preset="sunset" background={false} />
      <Background />
    </Canvas>
  );
};

export default Experience;
