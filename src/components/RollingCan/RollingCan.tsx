import { Environment } from "@react-three/drei";
import { useRef } from "react";
import vertex from "./vertex.glsl?raw";
import fragment from "./fragment.glsl?raw";
import { AssetTextureType } from "../../types";
import * as THREE from "three";
import RollingCanMaterial from "./RollingCanMaterial";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const RollingCan = ({
  nodes,
  textures,
  scrollY,
}: {
  nodes: any;
  textures: AssetTextureType;
  scrollY: MotionValue<number>;
}) => {
  const opts = {
    metalness: 0.5,
    roughness: 0.2,
    bumpMap: textures.bump,
    bumpScale: 0.4,
  };

  const can = useRef<THREE.Group>(null!);

  // rotationX와 positionY를 같이 움직여줘야함
  useMotionValueEvent(scrollY, "change", (e) => {
    console.log(e);
  });

  return (
    <group dispose={null}>
      <Environment preset="city" background={false} environmentIntensity={1.2} />
      <directionalLight position={[-1, 3, 4]} intensity={1.2} />
      <pointLight position={[-1, 0.1, 3]} decay={0.5} intensity={1} />
      <pointLight position={[2, -2, 2]} decay={0.5} intensity={3} />
      <group ref={can} position={[0, -5, 0]} rotation={[0, 0, Math.PI * 0.5]}>
        <mesh geometry={nodes.Circle.geometry}>
          <RollingCanMaterial
            vertexShader={vertex}
            fragmentShader={fragment}
            opts={opts}
            uniforms={{
              uTex1: { value: textures.color1 },
              uTex2: { value: textures.color2 },
              uTex3: { value: textures.color3 },
            }}
          />
        </mesh>
        <mesh geometry={nodes.Circle_1.geometry}>
          <meshStandardMaterial
            color={"#ffffff"}
            metalness={1}
            roughness={0.1}
            bumpMap={textures.bump}
            bumpScale={0.2}
            envMapIntensity={0.1}
          />
        </mesh>
      </group>
    </group>
  );
};

export default RollingCan;
