import { Environment, Float } from "@react-three/drei";
import { useRef } from "react";
import vertex from "./vertex.glsl?raw";
import fragment from "./fragment.glsl?raw";
import { AssetTextureType } from "../../types";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import * as THREE from "three";
import DefaultCanMaterial from "./DefaultCanMaterial";
import { useFrame } from "@react-three/fiber";

const DefaultCan = ({
  nodes,
  textures,
  scrollYProgress,
}: {
  nodes: any;
  textures: AssetTextureType;
  scrollYProgress: MotionValue<number>;
}) => {
  const opts = {
    metalness: 0.5,
    roughness: 0.2,
    bumpMap: textures.bump,
    bumpScale: 0.4,
  };

  const can1 = useRef<THREE.Group>(null!);
  const can2 = useRef<THREE.Group>(null!);
  const can3 = useRef<THREE.Group>(null!);

  useMotionValueEvent(scrollYProgress, "change", (e) => {
    if (!can1.current || !can2.current || !can3.current) return;

    can1.current.position.setY(15 - e * 40);
    can2.current.position.setY(20 - e * 50);
    can3.current.position.setY(30 - e * 60);
  });

  const viewPortWidth = useRef<number | null>(0);

  useFrame(({ viewport }) => {
    if (!can1.current && !can2.current && !can3.current) return;

    if (viewport.aspect < 0.6) {
      can2.current.visible = false;
      can3.current.visible = false;
    } else {
      can2.current.visible = true;
      can3.current.visible = true;
    }

    if (viewPortWidth.current === viewport.width) return;

    viewPortWidth.current = viewport.width;

    const newCan2X = viewport.width - 1;
    const newCan3X = -viewport.width + 1;
    can2.current.position.setX(newCan2X);
    can3.current.position.setX(newCan3X);
  });

  return (
    <group dispose={null}>
      <Environment preset="city" background={false} environmentIntensity={1.2} />
      <directionalLight position={[-1, 3, 4]} intensity={1.2} />
      <pointLight position={[-1, 0.1, 3]} decay={0.5} intensity={1} />
      <pointLight position={[2, -2, 2]} decay={0.5} intensity={3} />
      <group ref={can1} position={[0, 15, -10]}>
        <Float speed={3} rotationIntensity={5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
          <mesh geometry={nodes.Circle.geometry}>
            <DefaultCanMaterial
              vertexShader={vertex}
              fragmentShader={fragment}
              opts={opts}
              uniforms={{ uTex: { value: textures.color1 } }}
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
        </Float>
      </group>

      <group ref={can2} position={[0, 20, -10]}>
        <Float speed={2} rotationIntensity={3} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
          <mesh geometry={nodes.Circle.geometry}>
            <DefaultCanMaterial
              vertexShader={vertex}
              fragmentShader={fragment}
              opts={opts}
              uniforms={{ uTex: { value: textures.color2 } }}
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
        </Float>
      </group>

      <group ref={can3} position={[0, 30, -10]}>
        <Float speed={2} rotationIntensity={4} floatIntensity={1.5} floatingRange={[-0.2, 0.2]}>
          <mesh geometry={nodes.Circle.geometry}>
            <DefaultCanMaterial
              vertexShader={vertex}
              fragmentShader={fragment}
              opts={opts}
              uniforms={{ uTex: { value: textures.color3 } }}
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
        </Float>
      </group>
    </group>
  );
};

export default DefaultCan;
